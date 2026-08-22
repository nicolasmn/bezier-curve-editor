import type { ReactiveController, ReactiveControllerHost } from 'lit'
import type { EditorState, ActiveHandle } from '../state/editor-state.js'
import { startDrag, endDrag, setHandle } from '../state/reducers.js'
import { resolveHandle } from '../utils/dom.js'

/** Curve-space size of the svg viewBox ([0,1]² scaled by 100, see element). */
const VB_UNITS = 100

export interface PointerControllerHost extends ReactiveControllerHost {
  state: EditorState
  onStateChange(next: EditorState, emit: 'input' | 'change' | null): void
  getSvgElement(): SVGSVGElement | null
}

export class PointerController implements ReactiveController {
  private host: PointerControllerHost
  private activeHandle: ActiveHandle = null
  private activeSvg: SVGSVGElement | null = null

  constructor(host: PointerControllerHost) {
    this.host = host
    host.addController(this)
  }

  hostConnected(): void {}
  hostDisconnected(): void {
    this.removeListeners()
  }

  attach(svg: SVGSVGElement): void {
    this.activeSvg = svg
    svg.addEventListener('pointerdown', this.onPointerDown)
  }

  private onPointerDown = (e: PointerEvent): void => {
    const handle = resolveHandle(e.target as Element)
    if (!handle) return
    e.preventDefault()
    this.activeSvg?.setPointerCapture(e.pointerId)
    this.activeHandle = handle
    this.host.onStateChange(startDrag(this.host.state, handle), null)
    globalThis.addEventListener('pointermove', this.onPointerMove)
    globalThis.addEventListener('pointerup', this.onPointerUp)
    globalThis.addEventListener('pointercancel', this.onPointerCancel)
  }

  private onPointerMove = (e: PointerEvent): void => {
    if (!this.activeHandle) return
    const pt = this.svgPoint(e)
    if (!pt) return
    this.host.onStateChange(setHandle(this.host.state, this.activeHandle, pt.x, pt.y), 'input')
  }

  private onPointerUp = (e: PointerEvent): void => {
    if (!this.activeHandle) return
    const pt = this.svgPoint(e)
    const next = pt
      ? endDrag(setHandle(this.host.state, this.activeHandle, pt.x, pt.y))
      : endDrag(this.host.state)
    this.host.onStateChange(next, 'change')
    this.activeHandle = null
    this.removeListeners()
  }

  private onPointerCancel = (): void => {
    if (!this.activeHandle) return
    // Interrupted drag (touch scroll takeover, etc.) — release without commit
    this.host.onStateChange(endDrag(this.host.state), null)
    this.activeHandle = null
    this.removeListeners()
  }

  /**
   * Screen → curve coordinates. Must go through the svg CTM so the viewBox
   * (including its gutter) is respected — a naive linear map of the element
   * box onto [0,1]² skews the handle by up to the gutter width and breaks
   * down entirely for handles outside the canvas box.
   */
  private svgPoint(e: PointerEvent): { x: number; y: number } | null {
    const svg = this.activeSvg ?? this.host.getSvgElement()
    if (!svg) return null
    const ctm = svg.getScreenCTM()
    if (!ctm) return null
    const loc = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse())
    return { x: loc.x / VB_UNITS, y: 1 - loc.y / VB_UNITS }
  }

  private removeListeners(): void {
    globalThis.removeEventListener('pointermove', this.onPointerMove)
    globalThis.removeEventListener('pointerup', this.onPointerUp)
    globalThis.removeEventListener('pointercancel', this.onPointerCancel)
  }
}
