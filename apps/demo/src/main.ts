import '@bezier-curve-editor/core'
import { PRESETS, searchPresets } from '@bezier-curve-editor/core/presets'
import './style.css'

interface EditorElement extends HTMLElement {
  getCssValue(): string
  selectPreset(id: string): void
  bounds: 'css' | 'free'
  overshoot: boolean
  readonly: boolean
  disabled: boolean
  showGrid: boolean
  showPreview: boolean
  gridSubdivisions: number
  snap: number
  theme: string
}

const editor = document.getElementById('editor') as EditorElement
const cssOutput = document.getElementById('css-output')!
const copyBtn = document.getElementById('copy-btn')!
const eventLog = document.getElementById('event-log')!
const presetList = document.getElementById('preset-list')!
const presetSearch = document.getElementById('preset-search') as HTMLInputElement
const presetCount = document.getElementById('preset-count')!

// ─── Event log ──────────────────────────────────────────────────────

function logEvent(name: string, detail: unknown): void {
  const time = new Date().toLocaleTimeString([], { hour12: false })
  const line = `${time}  ${name}  ${JSON.stringify(detail)}`
  eventLog.textContent = `${line}\n${eventLog.textContent}`.slice(0, 4000)
}

for (const ev of ['input', 'change', 'presetchange', 'copy', 'invalid'] as const) {
  editor.addEventListener(ev, (e) => logEvent(ev, (e as CustomEvent).detail))
}

// ─── Value output + copy ────────────────────────────────────────────

function syncOutput(): void {
  const css = editor.getCssValue()
  cssOutput.textContent = css
  document.title = `${css} — bezier-curve-editor`
}
editor.addEventListener('input', () => syncOutput())
editor.addEventListener('presetchange', () => syncOutput())
syncOutput()

copyBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(cssOutput.textContent ?? '')
    .then(() => {
      copyBtn.textContent = 'Copied!'
      setTimeout(() => {
        copyBtn.textContent = 'Copy'
      }, 1200)
    })
    .catch(() => {
      /* clipboard unavailable */
    })
})

// ─── Property controls ──────────────────────────────────────────────

document.getElementById('ctl-bounds')!.addEventListener('change', (e) => {
  editor.bounds = (e.target as HTMLSelectElement).value as 'css' | 'free'
})
document.getElementById('ctl-overshoot')!.addEventListener('change', (e) => {
  editor.overshoot = (e.target as HTMLInputElement).checked
})
document.getElementById('ctl-readonly')!.addEventListener('change', (e) => {
  editor.readonly = (e.target as HTMLInputElement).checked
})
document.getElementById('ctl-disabled')!.addEventListener('change', (e) => {
  editor.disabled = (e.target as HTMLInputElement).checked
})
document.getElementById('ctl-grid')!.addEventListener('change', (e) => {
  editor.showGrid = (e.target as HTMLInputElement).checked
})
document.getElementById('ctl-preview')!.addEventListener('change', (e) => {
  editor.showPreview = (e.target as HTMLInputElement).checked
})
document.getElementById('ctl-subdiv')!.addEventListener('change', (e) => {
  editor.gridSubdivisions = Number((e.target as HTMLSelectElement).value)
})
document.getElementById('ctl-snap')!.addEventListener('change', (e) => {
  editor.snap = Number((e.target as HTMLSelectElement).value)
})

// ─── Theme toggle ───────────────────────────────────────────────────

for (const btn of document.querySelectorAll<HTMLButtonElement>('.theme-toggle button')) {
  btn.addEventListener('click', () => {
    for (const b of document.querySelectorAll('.theme-toggle button')) b.classList.remove('active')
    btn.classList.add('active')
    editor.theme = btn.dataset['theme']!
  })
}

// ─── Preset browser ─────────────────────────────────────────────────

function miniCurve([x1, y1, x2, y2]: readonly [number, number, number, number]): string {
  // 40×28 viewport, y flipped; handles clamped into view with overshoot marker
  const v = 40
  const f = (n: number): number => Math.round(n * v * 10) / 10
  return `M 1 ${v - 1} C ${Math.max(f(x1), 1)} ${v - 1 - Math.min(Math.max(y1, -0.4), 1.4) * (v - 2)}, ${Math.max(f(x2), 1)} ${v - 1 - Math.min(Math.max(y2, -0.4), 1.4) * (v - 2)}, ${v - 1} 1`
}

let selectedId: string | null = null

function renderPresets(): void {
  const query = presetSearch.value
  const items = query ? searchPresets(query) : PRESETS
  presetCount.textContent = `(${items.length})`
  presetList.innerHTML = ''
  for (const p of items) {
    const li = document.createElement('li')
    li.setAttribute('role', 'option')
    li.setAttribute('aria-selected', String(p.id === selectedId))
    li.className = p.id === selectedId ? 'preset active' : 'preset'
    li.innerHTML = `
      <svg viewBox="0 0 40 40" aria-hidden="true"><path d="${miniCurve(p.value)}"/></svg>
      <span class="preset-label">${p.label}</span>
      <code>${p.value.map((n) => +n.toFixed(2)).join(', ')}</code>`
    li.addEventListener('click', () => {
      selectedId = p.id
      editor.selectPreset(p.id)
      renderPresets()
    })
    presetList.appendChild(li)
  }
}

presetSearch.addEventListener('input', () => renderPresets())
editor.addEventListener('input', () => {
  if (selectedId !== null) {
    selectedId = null
    renderPresets()
  }
})

// initial selection: ease
selectedId = 'ease'
editor.selectPreset('ease')
renderPresets()
