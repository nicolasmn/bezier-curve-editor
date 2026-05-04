import type { ReactiveController, ReactiveControllerHost } from 'lit'
import type { EditorState } from '../state/editor-state.js'
import { setHandle, focusHandle } from '../state/reducers.js'

export interface KeyboardControllerHost extends ReactiveControllerHost {
  state: EditorState
  onStateChange(next: EditorState, emit: 'input' | 'change' | null): void
}

export class KeyboardController implements ReactiveController {
  private host: KeyboardControllerHost

  constructor(host: KeyboardControllerHost) {
    this.host = host
    host.addController(this)
  }

  hostConnected(): void {}
  hostDisconnected(): void {}

  attach(el: HTMLElement): void {
    el.addEventListener('keydown', this.onKeyDown)
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    const { state } = this.host
    if (state.readonly || state.disabled) return

    if (e.key === 'Tab') {
      e.preventDefault()
      this.host.onStateChange(
        focusHandle(state, state.focusedHandle === 'p1' ? 'p2' : 'p1'),
        null,
      )
      return
    }

    if (e.key === 'Escape') {
      this.host.onStateChange(focusHandle(state, null), null)
      return
    }

    const handle = state.focusedHandle
    if (!handle) return

    const step = resolveStep(state, e.shiftKey)
    const delta = arrowDelta(e.key)
    if (!delta) return

    e.preventDefault()
    const current = handle === 'p1'
      ? { x: state.value.x1, y: state.value.y1 }
      : { x: state.value.x2, y: state.value.y2 }

    this.host.onStateChange(
      setHandle(state, handle, current.x + delta.x * step, current.y + delta.y * step),
      'input',
    )
  }
}

function resolveStep(state: EditorState, coarse: boolean): number {
  const grid = typeof state.snap === 'number' ? state.snap
    : state.snap.enabled ? state.snap.gridSize : 0
  const base = grid > 0 ? grid : 0.01
  return coarse ? base * 10 : base
}

function arrowDelta(key: string): { x: number; y: number } | null {
  switch (key) {
    case 'ArrowRight': return { x: 1, y: 0 }
    case 'ArrowLeft':  return { x: -1, y: 0 }
    case 'ArrowUp':    return { x: 0, y: 1 }
    case 'ArrowDown':  return { x: 0, y: -1 }
    default:           return null
  }
}
