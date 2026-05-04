import type { ReactiveController, ReactiveControllerHost } from 'lit'
import type { EditorState, ActiveHandle } from '../state/editor-state.js'
import { setHandle, focusHandle } from '../state/reducers.js'

export interface KeyboardControllerHost extends ReactiveControllerHost {
  state: EditorState
  onStateChange(next: EditorState, emit: 'input' | 'change' | null): void
}

/**
 * Manages keyboard editing of bezier handles.
 *
 * Key bindings:
 *   Tab / Shift+Tab  — cycle focus between p1 and p2
 *   Arrow keys       — nudge focused handle by snap grid (or 0.01 fallback)
 *   Shift+Arrow      — coarse nudge ×10
 *   Escape           — blur handle (clear focusedHandle)
 */
export class KeyboardController implements ReactiveController {
  private host: KeyboardControllerHost

  constructor(host: KeyboardControllerHost) {
    this.host = host
    host.addController(this)
  }

  hostConnected(): void {}
  hostDisconnected(): void {}

  /**
   * Attach to the host element. Call from the host's firstUpdated().
   */
  attach(el: HTMLElement): void {
    el.addEventListener('keydown', this.onKeyDown)
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    const { state } = this.host
    if (state.readonly || state.disabled) return

    if (e.key === 'Tab') {
      e.preventDefault()
      const next = focusHandle(state, state.focusedHandle === 'p1' ? 'p2' : 'p1')
      this.host.onStateChange(next, null)
      return
    }

    if (e.key === 'Escape') {
      const next = focusHandle(state, null)
      this.host.onStateChange(next, null)
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

    const next = setHandle(
      state,
      handle,
      current.x + delta.x * step,
      current.y + delta.y * step,
    )
    this.host.onStateChange(next, 'input')
  }
}

/**
 * Resolve nudge step size from state snap config.
 * Falls back to 0.01 if snap is disabled or zero.
 */
function resolveStep(state: EditorState, coarse: boolean): number {
  let grid = 0
  if (typeof state.snap === 'number') {
    grid = state.snap
  } else if (state.snap.enabled) {
    grid = state.snap.gridSize
  }
  const base = grid > 0 ? grid : 0.01
  return coarse ? base * 10 : base
}

/**
 * Map arrow key to an {x, y} delta vector.
 * Right/Left move X; Up/Down move Y.
 */
function arrowDelta(key: string): { x: number; y: number } | null {
  switch (key) {
    case 'ArrowRight': return { x: 1, y: 0 }
    case 'ArrowLeft':  return { x: -1, y: 0 }
    case 'ArrowUp':    return { x: 0, y: 1 }
    case 'ArrowDown':  return { x: 0, y: -1 }
    default:           return null
  }
}
