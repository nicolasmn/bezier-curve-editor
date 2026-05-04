import type { ReactiveController, ReactiveControllerHost } from 'lit'
import type { EditorState, ActiveHandle } from '../state/editor-state.js'
import { startDrag, endDrag, setHandle } from '../state/reducers.js'

export interface PointerControllerHost extends ReactiveControllerHost {
  state: EditorState
  onStateChange(next: EditorState, emit: 'input' | 'change' | null): void
  getSvgElement(): SVGSVGElement | null
}

/**
 * Manages pointer (mouse/touch/pen) drag interactions on the SVG canvas.
 *
 * Coordinate transform:
 *   SVG clientX/Y  →  bezier [0,1] space
 *   x maps left→right = 0→1
 *   y maps bottom→top = 0→1  (SVG Y axis is inverted)
 */
export class PointerController implements ReactiveController {
  private host: PointerControllerHost
  private activeHandle: ActiveHandle = null

  constructor(host: PointerControllerHost) {
    this.host = host
    host.addController(this)
  }

  hostConnected(): void {}
  hostDisconnected(): void {
    this.removeListeners()
  }

  /**
   * Attach to an SVG element. Call from the host's firstUpdated().
   */
  attach(svg: SVGSVGElement): void {
    svg.addEventListener('pointerdown', this.onPointerDown)
  }

  private onPointerDown = (e: PointerEvent): void => {
    const handle = resolveHandle(e.target as Element)
    if (!handle) return
    e.preventDefault()
    ;(e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId)
    this.activeHandle = handle
    const next = startDrag(this.host.state, handle)
    this.host.onStateChange(next, null)
    window.addEventListener('pointermove', this.onPointerMove)
    window.addEventListener('pointerup', this.onPointerUp)
  }

  private onPointerMove = (e: PointerEvent): void => {
    if (!this.activeHandle) return
    const pt = this.svgPoint(e)
    if (!pt) return
    const next = setHandle(this.host.state, this.activeHandle, pt.x, pt.y)
    this.host.onStateChange(next, 'input')
  }

  private onPointerUp = (e: PointerEvent): void => {
    if (!this.activeHandle) return
    const pt = this.svgPoint(e)
    if (pt) {
      const withHandle = setHandle(this.host.state, this.activeHandle, pt.x, pt.y)
      const next = endDrag(withHandle)
      this.host.onStateChange(next, 'change')
    } else {
      this.host.onStateChange(endDrag(this.host.state), 'change')
    }
    this.activeHandle = null
    this.removeListeners()
  }

  /**
   * Transform a PointerEvent clientX/Y into bezier [0,1] coordinates.
   * SVG Y is inverted: SVG top = bezier y=1, SVG bottom = bezier y=0.
   */
  private svgPoint(e: PointerEvent): { x: number; y: number } | null {
    const svg = this.host.getSvgElement()
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = 1 - (e.clientY - rect.top) / rect.height
    return { x, y }
  }

  private removeListeners(): void {
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('pointerup', this.onPointerUp)
  }
}

/**
 * Walk up the DOM from the event target to find a handle element.
 * Handles must have data-handle="p1" or data-handle="p2".
 */
function resolveHandle(el: Element | null): ActiveHandle {
  while (el) {
    const h = el.getAttribute?.('data-handle')
    if (h === 'p1' || h === 'p2') return h
    el = el.parentElement
  }
  return null
}
