import type { ReactiveController, ReactiveControllerHost } from 'lit'
import type { EditorState } from '../state/editor-state.js'
import { setHandle, focusHandle } from '../state/reducers.js'
import { resolveHandle } from '../utils/dom.js'

export interface KeyboardControllerHost extends ReactiveControllerHost {
  state: EditorState
  onStateChange(next: EditorState, emit: 'input' | 'change' | null): void
}

/**
 * Keyboard interactions for the focused handle.
 *
 * Focus is owned by the DOM: each handle is focusable (tabindex="0") and
 * `focusedHandle` state mirrors DOM focus via focusin/focusout. Tab therefore
 * moves natively between the handles and out of the component — no focus trap.
 *
 * Arrow keys nudge the focused handle ('input' per keydown). A 'change' is
 * committed on keyup when at least one nudge happened, mirroring how
 * <input type="range"> commits on release.
 */
export class KeyboardController implements ReactiveController {
  private host: KeyboardControllerHost
  private el: HTMLElement | null = null
  private nudged = false

  constructor(host: KeyboardControllerHost) {
    this.host = host
    host.addController(this)
  }

  hostConnected(): void {}
  hostDisconnected(): void {
    this.detach()
  }

  attach(el: HTMLElement): void {
    this.detach()
    this.el = el
    el.addEventListener('keydown', this.onKeyDown)
    el.addEventListener('keyup', this.onKeyUp)
    // Focus events: listen on the shadow root, not the host. Chrome does not
    // propagate focusin for shadow-internal focus moves (e.g. Tab p1 → p2) to
    // host-level listeners; the shadow root always receives them.
    const root = shadowRootOf(el)
    root?.addEventListener('focusin', this.onFocusIn)
    root?.addEventListener('focusout', this.onFocusOut)
  }

  detach(): void {
    if (!this.el) return
    const root = shadowRootOf(this.el)
    this.el.removeEventListener('keydown', this.onKeyDown)
    this.el.removeEventListener('keyup', this.onKeyUp)
    root?.removeEventListener('focusin', this.onFocusIn)
    root?.removeEventListener('focusout', this.onFocusOut)
    this.el = null
  }

  private onFocusIn = (e: Event): void => {
    // Events from inside the shadow root are retargeted when observed from the
    // host — e.target is the host itself. composedPath()[0] is the real target.
    const inner = e.composedPath()[0] as Element | undefined
    const handle = resolveHandle(inner ?? null)
    if (handle) this.host.onStateChange(focusHandle(this.host.state, handle), null)
  }

  private onFocusOut = (e: FocusEvent): void => {
    // focusout bubbles — only clear when focus leaves the component entirely
    if (!this.el || (e.relatedTarget && this.el.contains(e.relatedTarget as Node))) return
    this.host.onStateChange(focusHandle(this.host.state, null), null)
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    const { state } = this.host
    if (state.readonly || state.disabled) return

    if (e.key === 'Escape') {
      // Deselect: return focus to the host group
      ;(e.target as HTMLElement).blur?.()
      return
    }

    const handle = state.focusedHandle
    if (!handle) return

    const delta = arrowDelta(e.key)
    if (!delta) return

    e.preventDefault()
    const step = resolveStep(state, e.shiftKey)
    const current =
      handle === 'p1'
        ? { x: state.value.x1, y: state.value.y1 }
        : { x: state.value.x2, y: state.value.y2 }

    this.host.onStateChange(
      setHandle(state, handle, current.x + delta.x * step, current.y + delta.y * step),
      'input',
    )
    this.nudged = true
  }
  private onKeyUp = (e: KeyboardEvent): void => {
    if (!this.nudged || !arrowDelta(e.key)) return
    this.nudged = false
    this.host.onStateChange(this.host.state, 'change')
  }
}

function resolveStep(state: EditorState, coarse: boolean): number {
  const grid =
    typeof state.snap === 'number' ? state.snap : state.snap.enabled ? state.snap.gridSize : 0
  const base = grid > 0 ? grid : 0.01
  return coarse ? base * 10 : base
}

function arrowDelta(key: string): { x: number; y: number } | null {
  switch (key) {
    case 'ArrowRight':
      return { x: 1, y: 0 }
    case 'ArrowLeft':
      return { x: -1, y: 0 }
    case 'ArrowUp':
      return { x: 0, y: 1 }
    case 'ArrowDown':
      return { x: 0, y: -1 }
    default:
      return null
  }
}

/** Minimal structural type covering the listener signatures we need. */
interface FocusEventTarget {
  addEventListener(type: 'focusin', listener: (e: FocusEvent) => void): void
  addEventListener(type: 'focusout', listener: (e: FocusEvent) => void): void
  removeEventListener(type: 'focusin', listener: (e: FocusEvent) => void): void
  removeEventListener(type: 'focusout', listener: (e: FocusEvent) => void): void
}

function shadowRootOf(el: HTMLElement): FocusEventTarget | null {
  // Works for the Lit element host; returns null before first render.
  // Lit's renderRoot is the shadow root; fall back to the DOM property.
  const host = el as { renderRoot?: FocusEventTarget; shadowRoot?: FocusEventTarget | null }
  return host.renderRoot ?? host.shadowRoot ?? null
}
