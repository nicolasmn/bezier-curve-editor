import { LitElement, html, svg, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import type {
  BezierValue,
  BoundsConfig,
  CubicBezierObject,
  PresetDefinition,
} from './types/public.js'
import { parseBezierValue, sampleCurve1D, serializeToCss } from './math/curve.js'
import { createInitialState } from './state/editor-state.js'
import type { EditorState } from './state/editor-state.js'
import {
  setValue,
  reset,
  setOvershoot,
  setBounds,
  selectPreset as selectPresetReducer,
} from './state/reducers.js'
import { PointerController } from './interactions/pointer-controller.js'
import { KeyboardController } from './interactions/keyboard-controller.js'
import { emitChange, emitCopy, emitPresetChange } from './utils/events.js'
import { handleAriaLabel } from './utils/a11y.js'

const VB = 100
/** Extra viewBox margin (in curve units) added around the [0,1]² area. */
const BASE_PAD = 12
/** Default grid subdivisions — mirrors the --bce-grid-subdivisions token. */
const GRID_DEFAULT = 4

/**
 * `<bezier-curve-editor>` — interactive cubic-bezier() easing curve editor.
 *
 * @fires {CustomEvent<BezierChangeDetail>} input - Live value updates during a pointer drag or keyboard nudge.
 * @fires {CustomEvent<BezierChangeDetail>} change - Committed value on pointer release or keyboard key-up.
 * @fires {CustomEvent<BezierPresetChangeDetail>} presetchange - The active preset changed.
 * @fires {CustomEvent<{cssValue: string}>} bce-copy - The copy button wrote the CSS value to the clipboard.
 * @fires {CustomEvent} invalid - A value assignment failed to parse.
 *
 * @cssprop [--bce-canvas-size=240px] - Canvas width/height.
 * @cssprop [--bce-font-family=...] - Toolbar font family.
 * @cssprop [--bce-font-size=0.75rem] - Toolbar font size.
 * @cssprop [--bce-accent=#4f6ef7] - Accent color (curve, handles, focus ring).
 * @cssprop [--bce-curve-width=2] - Curve stroke width.
 * @cssprop [--bce-handle-size=10px] - Handle diameter (hover/focus radius derives from it).
 * @cssprop [--bce-radius=8px] - Host corner radius.
 *
 * @csspart container - Outer flex container.
 * @csspart grid - The svg canvas.
 * @csspart curve - The bezier path.
 * @csspart handle - A handle group (also `handle-p1` / `handle-p2`).
 * @csspart toolbar - Value output + copy button bar.
 * @csspart value-output - The serialized CSS value.
 * @csspart button - The copy button.
 */
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
      /* NOT overflow:hidden — handles dragged outside the canvas must stay
         visible (they paint beyond the host box). The toolbar clips its own
         background to the host radius instead. */
      overflow: visible;
      user-select: none;
      -webkit-user-select: none;
      outline: none;
    }
    :host(:focus-within) {
      outline: 2px solid var(--bce-accent, #4f6ef7);
      outline-offset: 2px;
    }
    :host([disabled]) {
      opacity: 0.45;
      pointer-events: none;
    }
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
      --bce-bg: #ffffff;
      --bce-bg-subtle: #f5f5f5;
      --bce-border: #e0e0e0;
      --bce-fg: #1a1a1a;
      --bce-fg-muted: #767676;
      --bce-grid-color: #e8e8e8;
      --bce-handle-border: #ffffff;
    }
    :host([theme='dark']) {
      --bce-bg: #1a1a1a;
      --bce-bg-subtle: #242424;
      --bce-border: #333333;
      --bce-fg: #f0f0f0;
      --bce-fg-muted: #888888;
      --bce-grid-color: #2e2e2e;
      --bce-handle-border: #1a1a1a;
    }
    .container {
      display: flex;
      flex-direction: column;
    }
    .canvas-wrap {
      position: relative;
      width: var(--bce-canvas-size, 240px);
      height: var(--bce-canvas-size, 240px);
      flex-shrink: 0;
    }
    .canvas-wrap svg {
      display: block;
      width: 100%;
      height: 100%;
      cursor: crosshair;
      /* Handles outside the [0,1]² area paint beyond the svg box instead of
         being clipped or forcing a viewBox rescale. */
      overflow: visible;
    }
    .grid-line {
      stroke: var(--bce-grid-color, #e8e8e8);
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }
    .grid-diagonal {
      stroke: var(--bce-grid-color, #e8e8e8);
      stroke-width: 1;
      stroke-dasharray: 4 4;
      vector-effect: non-scaling-stroke;
    }
    .curve-path {
      fill: none;
      stroke: var(--bce-curve-color, var(--bce-accent, #4f6ef7));
      stroke-width: var(--bce-curve-width, 2);
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }
    .handle-line {
      stroke: var(--bce-handle-line-color, rgba(79, 110, 247, 0.4));
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }
    .handle {
      cursor: grab;
      touch-action: none;
    }
    .handle:active {
      cursor: grabbing;
    }
    .handle:focus-visible {
      outline: none;
    }
    .handle:focus-visible circle {
      stroke: var(--bce-accent, #4f6ef7);
      stroke-width: 3;
      r: 7px;
    }
    .handle circle {
      fill: var(--bce-handle-color, var(--bce-accent, #4f6ef7));
      stroke: var(--bce-handle-border, #ffffff);
      stroke-width: 2;
      vector-effect: non-scaling-stroke;
      transition:
        r 120ms ease,
        fill 120ms ease;
    }
    .handle--focused circle,
    .handle:hover circle {
      /* Fallback MUST carry a unit: a bare number is an invalid <length> for
         the CSS r property. WebKit resolves the invalid value to the initial
         value (r = 0), which makes the handle invisible and un-hittable —
         Chromium instead keeps the r="5" presentation attribute. */
      r: calc(var(--bce-handle-size, 10px) * 0.7);
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      padding: 6px 8px;
      background: var(--bce-bg-subtle, #f5f5f5);
      border-top: 1px solid var(--bce-border, #e0e0e0);
      /* Host no longer clips overflow (handles may paint outside), so the
         toolbar clips its own background to the host's bottom radius. */
      border-radius: 0 0 var(--bce-radius, 8px) var(--bce-radius, 8px);
    }
    .value-output {
      flex: 1;
      font-family: var(--bce-font-family, ui-monospace, monospace);
      font-size: var(--bce-font-size, 0.75rem);
      color: var(--bce-fg, #1a1a1a);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .copy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2px 6px;
      border: 1px solid var(--bce-border, #e0e0e0);
      border-radius: calc(var(--bce-radius, 8px) - 2px);
      background: var(--bce-bg, #ffffff);
      color: var(--bce-fg-muted, #767676);
      font-size: var(--bce-font-size, 0.75rem);
      cursor: pointer;
      transition:
        color 120ms ease,
        border-color 120ms ease;
      white-space: nowrap;
    }
    .copy-btn:hover {
      color: var(--bce-accent, #4f6ef7);
      border-color: var(--bce-accent, #4f6ef7);
    }
    .copy-btn:active {
      opacity: 0.7;
    }
  `

  // ─── Public properties ────────────────────────────────────────────────────

  @property({ type: String })
  get theme(): 'auto' | 'light' | 'dark' {
    return this._theme
  }
  set theme(v: 'auto' | 'light' | 'dark') {
    const old = this._theme
    this._theme = v
    if (v === 'auto') this.removeAttribute('theme')
    else this.setAttribute('theme', v)
    this.requestUpdate('theme', old)
  }
  private _theme: 'auto' | 'light' | 'dark' = 'auto'

  @property({ type: Boolean, reflect: true }) overshoot = false
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean }) showGrid = true
  @property({ type: Boolean }) showPreview = true
  @property({ type: Number }) precision = 4
  /** Number of grid subdivisions per axis. */
  @property({ type: Number, attribute: 'grid-subdivisions' }) gridSubdivisions = GRID_DEFAULT
  /** Snap grid size for pointer and keyboard input. 0 disables snapping. */
  @property({ type: Number })
  get snap(): number {
    const s = this._state.snap
    return typeof s === 'number' ? s : s.enabled ? s.gridSize : 0
  }
  set snap(v: number) {
    this._state = { ...this._state, snap: Math.max(0, v) }
    this.requestUpdate('snap', undefined)
  }

  @property({ type: Array })
  get presets(): PresetDefinition[] {
    return this._state.presets
  }
  set presets(v: PresetDefinition[]) {
    this._state = { ...this._state, presets: v }
    this.requestUpdate('presets', undefined)
  }

  @property({ type: String })
  get selectedPreset(): string | null {
    return this._state.selectedPreset
  }
  set selectedPreset(id: string | null) {
    if (id === null) {
      this._state = { ...this._state, selectedPreset: null }
      this.requestUpdate('selectedPreset', undefined)
      return
    }
    this.selectPreset(id)
  }

  @property({ attribute: 'value' })
  set value(raw: BezierValue) {
    try {
      const parsed = parseBezierValue(raw)
      const next = setValue(this._state, parsed)
      // Guarded (readonly/disabled): the reducer returned the same state —
      // don't touch anything, especially not initialValue.
      if (next === this._state) return
      this._state = { ...next, initialValue: parsed }
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
    if (emit) emitChange(this, next.value, next.selectedPreset, emit, this.precision)
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
    // Handles are the focusable elements (tabindex in template); the host is
    // just a labelled group — no extra tab stop, no focus trap.
    this.setAttribute('role', 'group')
    this.setAttribute('aria-label', 'Bezier curve editor')
  }

  override updated(changed: Map<string, unknown>): void {
    let dirty = false
    if (changed.has('overshoot')) {
      this._state = setOvershoot(this._state, this.overshoot)
      dirty = true
    }
    if (changed.has('readonly')) {
      this._state = { ...this._state, readonly: this.readonly }
      dirty = true
    }
    if (changed.has('disabled')) {
      this._state = { ...this._state, disabled: this.disabled }
      dirty = true
    }
    if (dirty) this.requestUpdate()
  }

  // ─── Public API ───────────────────────────────────────────────────────────

  getValue(): CubicBezierObject {
    return this._state.value
  }

  getCssValue(): string {
    return serializeToCss(this._state.value, this.precision)
  }

  setValue(raw: BezierValue): void {
    if (this._state.readonly || this._state.disabled) return
    const parsed = parseBezierValue(raw)
    this._state = { ...this._state, value: parsed, initialValue: parsed, selectedPreset: null }
    this.requestUpdate()
  }

  /**
   * Select a preset by id. No-ops if id not found in current preset catalog.
   * Emits `presetchange` on success.
   */
  selectPreset(id: string): void {
    const preset = this._state.presets.find((p) => p.id === id)
    if (!preset) return
    this._state = selectPresetReducer(this._state, preset)
    // Keep the public property in sync — the reducer may auto-enable overshoot
    // for presets marked overshootRecommended. Reflects the attribute too.
    if (this.overshoot !== this._state.overshoot) this.overshoot = this._state.overshoot
    emitPresetChange(this, preset, this._state.value)
    this.requestUpdate()
  }

  reset(): void {
    this._state = reset(this._state)
    this.requestUpdate()
  }

  override focus(): void {
    super.focus()
  }

  // ─── Copy ─────────────────────────────────────────────────────────────────

  private readonly _copy = async (): Promise<void> => {
    const css = this.getCssValue()
    try {
      await globalThis.navigator.clipboard.writeText(css)
    } catch {
      // clipboard unavailable (non-HTTPS, test env, etc.)
    }
    emitCopy(this, css)
  }

  // ─── Render helpers ───────────────────────────────────────────────────────

  /**
   * Fixed viewBox: the [0,1]² curve area plus a constant gutter (BASE_PAD).
   * The editor NEVER rescales — its size and zoom level stay constant at all
   * times. Handles pulled outside the curve area simply render outside the
   * canvas (svg overflow: visible) instead of forcing a zoom-out.
   */
  private _viewBox(): { min: number; size: number } {
    return { min: -BASE_PAD, size: VB + BASE_PAD * 2 }
  }

  private _renderGrid() {
    if (!this.showGrid) return null
    const lines = []
    const n = this.gridSubdivisions
    for (let i = 1; i < n; i++) {
      const pos = (i / n) * VB
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

  /**
   * A dot travelling along the straight reference diagonal, its progress
   * following the easing defined by the curve. Pure SVG/SMIL: the motion
   * path is the linear diagonal, and keyPoints/keyTimes map eased progress
   * (sampled from the curve) onto that path. Overshoot values are clamped
   * into [0,1] — SMIL keyPoints must stay within the path length.
   */
  private _renderPreview(v: CubicBezierObject): unknown {
    if (!this.showPreview) return null
    const STEPS = 32
    const keyTimes: string[] = []
    const keyPoints: string[] = []
    for (let i = 0; i <= STEPS; i++) {
      const x = i / STEPS
      // Invert the monotonic x(t) via bisection, then evaluate y at that
      // parameter: y(x) is exactly the eased progress at time fraction x.
      let lo = 0
      let hi = 1
      for (let k = 0; k < 24; k++) {
        const mid = (lo + hi) / 2
        if (sampleCurve1D(mid, 0, v.x1, v.x2, 1) < x) lo = mid
        else hi = mid
      }
      const tStar = (lo + hi) / 2
      const eased = sampleCurve1D(tStar, 0, v.y1, v.y2, 1)
      keyTimes.push(x.toFixed(5))
      keyPoints.push(Math.min(1, Math.max(0, eased)).toFixed(5))
    }
    return svg`
      <circle class="preview-dot" r="3">
        <animateMotion
          dur="1.6s"
          repeatCount="indefinite"
          calcMode="linear"
          path="M 0 ${VB} L ${VB} 0"
          keyTimes=${keyTimes.join(';')}
          keyPoints=${keyPoints.join(';')}
        />
      </circle>
    `
  }

  private _renderHandles(v: CubicBezierObject) {
    const p1x = v.x1 * VB
    const p1y = (1 - v.y1) * VB
    const p2x = v.x2 * VB
    const p2y = (1 - v.y2) * VB
    const { focusedHandle } = this._state
    // aria-valuenow carries the x position (the slider's primary axis);
    // aria-valuetext communicates both coordinates to screen readers.
    return svg`
      <line class="handle-line" x1="0" y1=${VB} x2=${p1x} y2=${p1y} />
      <line class="handle-line" x1=${VB} y1="0" x2=${p2x} y2=${p2y} />
      <g part="handle handle-p1"
        class="handle ${focusedHandle === 'p1' ? 'handle--focused' : ''}"
        data-handle="p1" tabindex="0" role="slider"
        aria-label=${handleAriaLabel('p1', v.x1, v.y1)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${v.x1.toFixed(4)}"
        aria-valuetext="x ${v.x1.toFixed(4)}, y ${v.y1.toFixed(4)}">
        <circle cx=${p1x} cy=${p1y} r="5" />
      </g>
      <g part="handle handle-p2"
        class="handle ${focusedHandle === 'p2' ? 'handle--focused' : ''}"
        data-handle="p2" tabindex="0" role="slider"
        aria-label=${handleAriaLabel('p2', v.x2, v.y2)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${v.x2.toFixed(4)}"
        aria-valuetext="x ${v.x2.toFixed(4)}, y ${v.y2.toFixed(4)}">
        <circle cx=${p2x} cy=${p2y} r="5" />
      </g>
    `
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  override render() {
    const v = this._state.value
    const cssVal = serializeToCss(v, this.precision)
    const vb = this._viewBox()
    return html`
      <div part="container" class="container">
        <div class="canvas-wrap">
          <svg
            part="grid"
            viewBox="${vb.min} ${vb.min} ${vb.size} ${vb.size}"
            aria-hidden="true"
            focusable="false"
          >
            ${this._renderGrid()} ${this._renderCurve(v)} ${this._renderPreview(v)}
            ${this._renderHandles(v)}
          </svg>
        </div>
        <div part="toolbar" class="toolbar">
          <span part="value-output" class="value-output" title=${cssVal}>${cssVal}</span>
          <button
            part="button"
            class="copy-btn"
            type="button"
            aria-label="Copy CSS value"
            @click=${this._copy}
          >
            Copy
          </button>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bezier-curve-editor': BezierCurveEditor
  }
}
