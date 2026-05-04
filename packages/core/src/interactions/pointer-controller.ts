import type { ReactiveController, ReactiveControllerHost } from 'lit'
import type { EditorState, ActiveHandle } from '../state/editor-state.js'
import { startDrag, endDrag, setHandle } from '../state/reducers.js'

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
  hostDisconnected(): void { this.removeListeners() }

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

  private svgPoint(e: PointerEvent): { x: number; y: number } | null {
    const svg = this.activeSvg ?? this.host.getSvgElement()
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: 1 - (e.clientY - rect.top) / rect.height,
    }
  }

  private removeListeners(): void {
    globalThis.removeEventListener('pointermove', this.onPointerMove)
    globalThis.removeEventListener('pointerup', this.onPointerUp)
  }
}

function resolveHandle(el: Element | null): ActiveHandle {
  while (el) {
    const h = el.getAttribute?.('data-handle')
    if (h === 'p1' || h === 'p2') return h
    el = el.parentElement
  }
  return null
}
