/**
 * Component-level tests — run in real browsers via vitest Browser Mode.
 *
 *   BROWSER_TESTS=1 BROWSER=chromium vitest run -c vitest.config.ts
 *   BROWSER_TESTS=1 BROWSER=webkit   vitest run -c vitest.config.ts
 *
 * These cover behavior that only exists in a browser: shadow DOM rendering,
 * pointer/keyboard interaction, focus, ARIA state, and CSS-driven geometry.
 * The WebKit run exists because Chromium masks invalid CSS geometry values
 * (see the "handle stays visible when focused" test).
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { userEvent } from '@vitest/browser/context'
import '../bezier-curve-editor.js'
import type { BezierCurveEditor } from '../bezier-curve-editor.js'

/** Remove all mounted editors between tests. */
function cleanup() {
  document.querySelectorAll('bezier-curve-editor').forEach((n) => n.remove())
}

afterEach(cleanup)

async function mount(attrs = ''): Promise<BezierCurveEditor> {
  await import('../bezier-curve-editor.js')
  const el = document.createElement('bezier-curve-editor')
  for (const attr of attrs.split(/\s+/).filter(Boolean)) el.setAttribute(attr, '')
  el.style.setProperty('--bce-canvas-size', '300px')
  document.body.appendChild(el)
  await customElements.whenDefined('bezier-curve-editor')
  await new Promise((r) => requestAnimationFrame(r))
  return el
}

const svgOf = (el: BezierCurveEditor) => el.shadowRoot!.querySelector('svg')!
const handleOf = (el: BezierCurveEditor, h: 'p1' | 'p2') =>
  el.shadowRoot!.querySelector<SVGGraphicsElement>(`[data-handle="${h}"]`)!
const circleOf = (el: BezierCurveEditor, h: 'p1' | 'p2') => handleOf(el, h).querySelector('circle')!

/** Fire a pointer sequence at viewport coords. */
async function drag(
  page: { dispatchEvent: (e: Event) => boolean },
  path: Array<{ x: number; y: number }>,
  { pressOn, releaseAt }: { pressOn: Element; releaseAt?: { x: number; y: number } },
) {
  const opts = (p?: { x: number; y: number }) =>
    ({
      bubbles: true,
      composed: true,
      pointerId: 7,
      isPrimary: true,
      buttons: 1,
      ...(p ? { clientX: p.x, clientY: p.y } : {}),
    }) as PointerEventInit

  pressOn.dispatchEvent(new PointerEvent('pointerdown', opts(path[0])))
  await nextFrame()
  for (const p of path.slice(1)) {
    window.dispatchEvent(new PointerEvent('pointermove', opts(p)))
    await nextFrame()
  }
  window.dispatchEvent(new PointerEvent('pointerup', opts(releaseAt ?? path[path.length - 1])))
  await nextFrame()
}

const nextFrame = () => new Promise((r) => requestAnimationFrame(r))

describe('<bezier-curve-editor> rendering', () => {
  let el: BezierCurveEditor
  beforeEach(async () => {
    el = await mount()
  })

  it('renders grid, curve and both handles in shadow DOM', () => {
    expect(svgOf(el)).toBeTruthy()
    expect(el.shadowRoot!.querySelector('.curve-path')).toBeTruthy()
    expect(handleOf(el, 'p1')).toBeTruthy()
    expect(handleOf(el, 'p2')).toBeTruthy()
  })

  it('has a fixed viewBox regardless of value (no rescale)', () => {
    const before = svgOf(el).getAttribute('viewBox')
    el.overshoot = true
    el.setValue([0.25, 0.1, 0.25, 1])
    expect(svgOf(el).getAttribute('viewBox')).toBe(before)
  })

  it('keeps a constant viewBox while handles are dragged out of bounds', async () => {
    el.overshoot = true
    await nextFrame()
    const vb = svgOf(el).getAttribute('viewBox')
    expect(vb).toBe('-12 -12 124 124')

    const circle = circleOf(el, 'p1')
    const r = circle.getBoundingClientRect()
    await drag(
      el,
      [
        { x: r.left + r.width / 2, y: r.top + r.height / 2 },
        { x: r.left - 80, y: r.top },
        { x: r.left - 120, y: r.top + 20 },
      ],
      { pressOn: circle },
    )
    expect(svgOf(el).getAttribute('viewBox')).toBe(vb)
    expect(el.value.x1).toBeLessThan(0)
  })
})

describe('handles', () => {
  let el: BezierCurveEditor
  beforeEach(async () => {
    el = await mount()
  })

  it('exposes slider semantics', () => {
    for (const h of ['p1', 'p2'] as const) {
      const g = handleOf(el, h)
      expect(g.getAttribute('role')).toBe('slider')
      expect(g.getAttribute('tabindex')).toBe('0')
      expect(g.getAttribute('aria-valuemin')).toBe('0')
      expect(g.getAttribute('aria-valuemax')).toBe('1')
      expect(Number(g.getAttribute('aria-valuenow'))).not.toBeNaN()
    }
  })

  it('updates aria-valuenow while dragging', async () => {
    const circle = circleOf(el, 'p1')
    const r = circle.getBoundingClientRect()
    await drag(
      el,
      [
        { x: r.left + r.width / 2, y: r.top + r.height / 2 },
        { x: r.left + 60, y: r.top - 40 },
      ],
      { pressOn: circle },
    )
    expect(Number(handleOf(el, 'p1').getAttribute('aria-valuenow'))).toBeCloseTo(el.value.x1, 3)
  })

  it('stays visible when focused/hovered (WebKit r=0 regression)', async () => {
    el.setAttribute('overshoot', '')
    handleOf(el, 'p1').focus()
    await nextFrame()

    const focused = circleOf(el, 'p1').getBoundingClientRect()
    expect(focused.width).toBeGreaterThan(5)

    // Simulate hover by checking the computed CSS r resolves to a length,
    // not to 0. This is where unitless values collapsed WebKit handles.
    const cssR = getComputedStyle(circleOf(el, 'p1')).r
    if (cssR && cssR !== 'auto') {
      expect(parseFloat(cssR)).toBeGreaterThan(0)
    }
  })

  it('remains grabbable after being released outside the canvas', async () => {
    el.overshoot = true
    await nextFrame()
    const circle = circleOf(el, 'p1')
    const start = circle.getBoundingClientRect()
    const mid = { x: start.left + start.width / 2, y: start.top + start.height / 2 }

    // Drag far left, release outside
    await drag(el, [mid, { x: mid.x - 100, y: mid.y }, { x: mid.x - 150, y: mid.y }], {
      pressOn: circle,
    })
    const x1AfterFirst = el.value.x1
    expect(x1AfterFirst).toBeLessThan(0)

    // Re-grab at its rendered position and move further
    const again = circleOf(el, 'p1').getBoundingClientRect()
    const p = { x: again.left + again.width / 2, y: again.top + again.height / 2 }
    await drag(el, [p, { x: p.x + 30, y: p.y }], { pressOn: circleOf(el, 'p1') })
    expect(el.value.x1).toBeGreaterThan(x1AfterFirst)
  })
})

describe('events', () => {
  let el: BezierCurveEditor
  beforeEach(async () => {
    el = await mount()
  })

  it('emits input during drag and change on release', async () => {
    const events: string[] = []
    el.addEventListener('input', () => events.push('input'))
    el.addEventListener('change', () => events.push('change'))

    const circle = circleOf(el, 'p1')
    const r = circle.getBoundingClientRect()
    await drag(
      el,
      [
        { x: r.left + r.width / 2, y: r.top + r.height / 2 },
        { x: r.left + 40, y: r.top },
        { x: r.left + 80, y: r.top },
      ],
      { pressOn: circle },
    )

    expect(events.filter((e) => e === 'input').length).toBeGreaterThanOrEqual(1)
    expect(events.at(-1)).toBe('change')
  })

  it('emits presetchange on selectPreset', () => {
    let detail: unknown
    el.addEventListener('presetchange', (e) => {
      detail = (e as CustomEvent).detail
    })
    el.selectPreset('ease-in-out')
    expect(detail).toBeTruthy()
    expect(el.selectedPreset).toBe('ease-in-out')
  })

  it('emits copy with serialized css', async () => {
    let detail: { cssValue?: string } | undefined
    el.addEventListener('copy', (e) => {
      detail = (e as unknown as CustomEvent).detail as { cssValue?: string }
    })
    el.shadowRoot!.querySelector<HTMLButtonElement>('.copy-btn')!.click()
    // emitCopy fires after the async clipboard attempt settles
    await new Promise((r) => setTimeout(r, 50))
    expect(detail?.cssValue).toBe(el.getCssValue())
  })

  it('emits invalid for rejected value input', () => {
    let fired = false
    el.addEventListener('invalid', () => {
      fired = true
    })
    el.value = 'cubic-bezier(nonsense)'
    expect(fired).toBe(true)
  })
})

describe('readonly / disabled', () => {
  it('ignores drags when readonly', async () => {
    const el = await mount('readonly')
    const before = JSON.stringify(el.value)
    const circle = circleOf(el, 'p1')
    const r = circle.getBoundingClientRect()
    await drag(
      el,
      [
        { x: r.left, y: r.top },
        { x: r.left + 50, y: r.top },
      ],
      { pressOn: circle },
    )
    expect(JSON.stringify(el.value)).toBe(before)
  })

  it('setValue() respects readonly', async () => {
    const el = await mount('readonly')
    el.setValue([0.1, 0.9, 0.9, 0.1])
    expect(el.value.x1).not.toBe(0.1)
  })

  it('reset() does not jump to a value that was blocked by readonly', async () => {
    const el = await mount('readonly')
    el.value = [0.42, 0, 0.58, 1] // blocked — must NOT repoint initialValue
    el.readonly = false
    await nextFrame() // property → state sync happens in updated()
    el.setValue([0.1, 0.1, 0.9, 0.9])
    el.reset()
    expect(el.value).toEqual({ x1: 0.1, y1: 0.1, x2: 0.9, y2: 0.9 })
  })
})

describe('keyboard interaction', () => {
  it('moves handle with arrow keys and emits input', async () => {
    const el = await mount()
    let sawInput = false
    el.addEventListener('input', () => {
      sawInput = true
    })

    const before = el.value.x1
    const g = handleOf(el, 'p1')
    g.focus()
    await nextFrame()

    // Focus must be mirrored into state before arrows do anything
    expect(el.shadowRoot!.querySelector('.handle--focused')).toBeTruthy()

    // Real key events through the provider (synthetic KeyboardEvent dispatch
    // is not reliably delivered to host-level listeners in headless pages).
    await userEvent.keyboard('{ArrowRight}')
    await nextFrame()

    expect(sawInput).toBe(true)
    expect(el.value.x1).toBeGreaterThan(before)
  })
})
