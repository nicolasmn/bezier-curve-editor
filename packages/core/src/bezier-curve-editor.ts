import { LitElement, html, svg, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import type {
  BezierValue,
  BoundsConfig,
  CubicBezierObject,
  PresetDefinition,
} from './types/public.js'
import { parseBezierValue, serializeToCss } from './math/curve.js'
import { createInitialState } from './state/editor-state.js'
import type { EditorState } from './state/editor-state.js'
import { setValue, reset, setOvershoot, setBounds } from './state/reducers.js'
import { PointerController } from './interactions/pointer-controller.js'
import { KeyboardController } from './interactions/keyboard-controller.js'
import { emitChange, emitCopy } from './utils/events.js'
import { handleAriaLabel } from './utils/a11y.js'
import { PRESETS } from './presets/registry.js'

const VB = 100
const HR = 5
const GRID = 4

@customElement('bezier-curve-editor')
export class BezierCurveEditor extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      font-family: var(--bce-font-family, ui-monospace, 'Cascadia Code', monospace);
      font-size: var(--bce-font-size, 0.75rem);
      color: var(--bce-fg, #1a1a1a);
      background: var(--bce-bg, #ffffff);
      border: 1px solid var(--bce-border, #e0e0e0);
      border-radius: var(--bce-radius, 8px);
      overflow: hidden;
      user-select: none;
      -webkit-user-select: none;
      outline: none;
    }
    :host(:focus-visible) {
      outline: 2px solid var(--bce-accent, #4f6ef7);
      outline-offset: 2px;
    }
    :host([disabled]) { opacity: 0.45; pointer-events: none; }
    :host([readonly]) {
      --bce-handle-color: var(--bce-fg-muted, #767676);
      --bce-curve-color: var(--bce-fg-muted, #767676);
    }
    @media (prefers-color-scheme: dark) {
      :host {
        --bce-bg: #1a1a1a;
        --bce-bg-subtle: #242424;
        --bce-border: #333333;
        --bce-fg: #f0f0f0;
        --bce-fg-muted: #888888;
        --bce-grid-color: #2e2e2e;
        --bce-handle-border: #1a1a1a;
      }
    }
    :host([theme='light']) {
      --bce-bg:#ffffff; --bce-bg-subtle:#f5f5f5; --bce-border:#e0e0e0;
      --bce-fg:#1a1a1a; --bce-fg-muted:#767676; --bce-grid-color:#e8e8e8;
      --bce-handle-border:#ffffff;
    }
    :host([theme='dark']) {
      --bce-bg:#1a1a1a; --bce-bg-subtle:#242424; --bce-border:#333333;
      --bce-fg:#f0f0f0; --bce-fg-muted:#888888; --bce-grid-color:#2e2e2e;
      --bce-handle-border:#1a1a1a;
    }
    .container { display: flex; flex-direction: column; }
    .canvas-wrap {
      position: relative;
      width: var(--bce-canvas-size, 240px);
      height: var(--bce-canvas-size, 240px);
      flex-shrink: 0;
    }
    .canvas-wrap svg { display: block; width: 100%; height: 100%; cursor: crosshair; }
    .grid-line { stroke: var(--bce-grid-color, #e8e8e8); stroke-width: 1; vector-effect: non-scaling-stroke; }
    .grid-diagonal { stroke: var(--bce-grid-color, #e8e8e8); stroke-width: 1; stroke-dasharray: 4 4; vector-effect: non-scaling-stroke; }
    .curve-path {
      fill: none;
      stroke: var(--bce-curve-color, var(--bce-accent, #4f6ef7));
      stroke-width: 2;
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }
    .handle-line { stroke: var(--bce-handle-line-color, rgba(79,110,247,0.4)); stroke-width: 1; vector-effect: non-scaling-stroke; }
    .handle { cursor: grab; touch-action: none; }
    .handle:active { cursor: grabbing; }
    .handle circle {
      fill: var(--bce-handle-color, var(--bce-accent, #4f6ef7));
      stroke: var(--bce-handle-border, #ffffff);
      stroke-width: 2;
      vector-effect: non-scaling-stroke;
      transition: r 120ms ease;
    }
    .handle--focused circle, .handle:hover circle { r: 7; }
    .toolbar {
      display: flex; align-items: center; justify-content: space-between;
      gap: 4px; padding: 6px 8px;
      background: var(--bce-bg-subtle, #f5f5f5);
      border-top: 1px solid var(--bce-border, #e0e0e0);
    }
    .value-output {
      flex: 1;
      font-family: var(--bce-font-family, ui-monospace, monospace);
      font-size: var(--bce-font-size, 0.75rem);
      color: var(--bce-fg, #1a1a1a);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .copy-btn {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 2px 6px;
      border: 1px solid var(--bce-border, #e0e0e0);
      border-radius: calc(var(--bce-radius, 8px) - 2px);
      background: var(--bce-bg, #ffffff);
      color: var(--bce-fg-muted, #767676);
      font-size: var(--bce-font-size, 0.75rem);
      cursor: pointer;
      transition: color 120ms ease, border-color 120ms ease;
      white-space: nowrap;
    }
    .copy-btn:hover { color: var(--bce-accent, #4f6ef7); border-color: var(--bce-accent, #4f6ef7); }
    .copy-btn:active { opacity: 0.7; }
  `

  // ─── Public properties ────────────────────────────────────────────────────

  @property({ type: String })
  get theme(): 'auto' | 'light' | 'dark' { return this._theme }
  set theme(v: 'auto' | 'light' | 'dark') {
    const old = this._theme
    this._theme = v
    if (v === 'auto') {
      this.removeAttribute('theme')
    } else {
      this.setAttribute('theme', v)
    }
    this.requestUpdate('theme', old)
  }
  private _theme: 'auto' | 'light' | 'dark' = 'auto'

  @property({ type: Boolean, reflect: true }) overshoot = false
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean }) showGrid = true
  @property({ type: Boolean }) showPreview = true
  @property({ type: Number }) precision = 4
  @property({ type: Array }) presets: PresetDefinition[] = PRESETS
  @property({ type: String }) selectedPreset: string | null = null

  @property({ attribute: 'value' })
  set value(raw: BezierValue) {
    try {
      const parsed = parseBezierValue(raw)
      this._state = setValue(this._state, parsed)
      this._state = { ...this._state, initialValue: parsed }
    } catch {
      this.dispatchEvent(new CustomEvent('invalid', { bubbles: true, composed: true }))
    }
  }
  get value(): CubicBezierObject {
    return this._state.value
  }

  @property({})
  set bounds(b: BoundsConfig) {
    this._state = setBounds(this._state, b)
  }
  get bounds(): BoundsConfig {
    return this._state.bounds
  }

  // ─── Internal state ───────────────────────────────────────────────────────

  @state() private _state: EditorState = createInitialState()

  private _pointer = new PointerController(this)
  private _keyboard = new KeyboardController(this)

  // ─── Controller host interface ────────────────────────────────────────────

  get state(): EditorState {
    return this._state
  }

  onStateChange(next: EditorState, emit: 'input' | 'change' | null): void {
    this._state = next
    if (emit) emitChange(this, next.value, next.selectedPreset, emit)
    this.requestUpdate()
  }

  getSvgElement(): SVGSVGElement | null {
    return this.renderRoot.querySelector('svg')
  }

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  override firstUpdated(): void {
    const svgEl = this.getSvgElement()
    if (svgEl) this._pointer.attach(svgEl)
    this._keyboard.attach(this)
    this.setAttribute('tabindex', '0')
    this.setAttribute('role', 'group')
    this.setAttribute('aria-label', 'Bezier curve editor')
  }

  override updated(changed: Map<string, unknown>): void {
    let dirty = false
    if (changed.has('overshoot')) { this._state = setOvershoot(this._state, this.overshoot); dirty = true }
    if (changed.has('readonly'))  { this._state = { ...this._state, readonly: this.readonly };   dirty = true }
    if (changed.has('disabled'))  { this._state = { ...this._state, disabled: this.disabled };   dirty = true }
    if (dirty) this.requestUpdate()
  }

  // ─── Public API ───────────────────────────────────────────────────────────

  getValue(): CubicBezierObject { return this._state.value }

  getCssValue(): string { return serializeToCss(this._state.value, this.precision) }

  setValue(raw: BezierValue): void {
    const parsed = parseBezierValue(raw)
    this._state = { ...this._state, value: parsed, initialValue: parsed, selectedPreset: null }
    this.requestUpdate()
  }

  reset(): void {
    this._state = reset(this._state)
    this.requestUpdate()
  }

  override focus(): void { super.focus() }

  // ─── Copy ────────────────────────────────────────────────────────────────

  // Arrow property — avoids @typescript-eslint/unbound-method when passed as event handler
  private readonly _copy = async (): Promise<void> => {
    const css = this.getCssValue()
    try {
      // globalThis.navigator is always defined in browsers; guard satisfies no-undef
      await globalThis.navigator.clipboard.writeText(css)
    } catch {
      // clipboard unavailable (non-HTTPS, test env, etc.)
    }
    emitCopy(this, css)
  }

  // ─── Render helpers ───────────────────────────────────────────────────────

  private _renderGrid() {
    if (!this.showGrid) return null
    const lines = []
    for (let i = 1; i < GRID; i++) {
      const pos = (i / GRID) * VB
      lines.push(svg`
        <line class="grid-line" x1=${pos} y1="0" x2=${pos} y2=${VB} />
        <line class="grid-line" x1="0" y1=${pos} x2=${VB} y2=${pos} />
      `)
    }
    return svg`
      ${lines}
      <line class="grid-diagonal" x1="0" y1=${VB} x2=${VB} y2="0" />
    `
  }

  private _renderCurve(v: CubicBezierObject) {
    const x1 = v.x1 * VB
    const y1 = (1 - v.y1) * VB
    const x2 = v.x2 * VB
    const y2 = (1 - v.y2) * VB
    return svg`
      <path part="curve" class="curve-path" d="M 0 ${VB} C ${x1} ${y1}, ${x2} ${y2}, ${VB} 0" />
    `
  }

  private _renderHandles(v: CubicBezierObject) {
    const p1x = v.x1 * VB
    const p1y = (1 - v.y1) * VB
    const p2x = v.x2 * VB
    const p2y = (1 - v.y2) * VB
    const { focusedHandle } = this._state
    return svg`
      <line class="handle-line" x1="0" y1=${VB} x2=${p1x} y2=${p1y} />
      <line class="handle-line" x1=${VB} y1="0" x2=${p2x} y2=${p2y} />
      <g part="handle handle-p1"
        class="handle ${focusedHandle === 'p1' ? 'handle--focused' : ''}"
        data-handle="p1" aria-label=${handleAriaLabel('p1', v.x1, v.y1)} role="slider">
        <circle cx=${p1x} cy=${p1y} r=${HR} />
      </g>
      <g part="handle handle-p2"
        class="handle ${focusedHandle === 'p2' ? 'handle--focused' : ''}"
        data-handle="p2" aria-label=${handleAriaLabel('p2', v.x2, v.y2)} role="slider">
        <circle cx=${p2x} cy=${p2y} r=${HR} />
      </g>
    `
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  override render() {
    const v = this._state.value
    const cssVal = serializeToCss(v, this.precision)
    return html`
      <div part="container" class="container">
        <div class="canvas-wrap">
          <svg part="grid" viewBox="0 0 ${VB} ${VB}" aria-hidden="true" focusable="false">
            ${this._renderGrid()}
            ${this._renderCurve(v)}
            ${this._renderHandles(v)}
          </svg>
        </div>
        <div part="toolbar" class="toolbar">
          <span part="value-output" class="value-output" title=${cssVal}>${cssVal}</span>
          <button part="button" class="copy-btn" type="button"
            aria-label="Copy CSS value" @click=${this._copy}>Copy</button>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap { 'bezier-curve-editor': BezierCurveEditor }
}
