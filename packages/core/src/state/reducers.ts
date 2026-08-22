import type { CubicBezierObject, BoundsConfig, SnapConfig, PresetDefinition } from '../types/public.js'
import type { EditorState, ActiveHandle } from './editor-state.js'
import { clampPoint, parseBezierValue, isOvershoot } from '../math/curve.js'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function applySnap(value: number, snap: number | SnapConfig): number {
  const grid =
    typeof snap === 'number' ? snap : snap.enabled ? snap.gridSize : 0
  if (grid <= 0) return value
  return Math.round(value / grid) * grid
}

function clampHandle(
  x: number,
  y: number,
  state: EditorState,
): { x: number; y: number } {
  const snapped = { x: applySnap(x, state.snap), y: applySnap(y, state.snap) }
  const bounds: BoundsConfig = state.overshoot ? 'free' : state.bounds
  return clampPoint(snapped.x, snapped.y, bounds)
}

// ─── Reducers ─────────────────────────────────────────────────────────────────

/**
 * Move a handle to new coordinates.
 * Applies snap and bounds clamping.
 * Clears selectedPreset — value no longer matches any preset exactly.
 */
export function setHandle(
  state: EditorState,
  handle: 'p1' | 'p2',
  x: number,
  y: number,
): EditorState {
  if (state.readonly || state.disabled) return state
  const pt = clampHandle(x, y, state)
  const value: CubicBezierObject =
    handle === 'p1'
      ? { ...state.value, x1: pt.x, y1: pt.y }
      : { ...state.value, x2: pt.x, y2: pt.y }
  return { ...state, value, selectedPreset: null }
}

/**
 * Begin a drag. Records which handle is active.
 */
export function startDrag(
  state: EditorState,
  handle: 'p1' | 'p2',
): EditorState {
  if (state.readonly || state.disabled) return state
  return { ...state, dragging: handle, focusedHandle: handle }
}

/**
 * End a drag. Clears dragging flag.
 */
export function endDrag(state: EditorState): EditorState {
  return { ...state, dragging: null }
}

/**
 * Set keyboard focus on a handle.
 */
export function focusHandle(
  state: EditorState,
  handle: ActiveHandle,
): EditorState {
  return { ...state, focusedHandle: handle }
}

/**
 * Select a preset. Updates value and records selectedPreset id.
 */
export function selectPreset(
  state: EditorState,
  preset: PresetDefinition,
): EditorState {
  if (state.readonly || state.disabled) return state
  const [x1, y1, x2, y2] = preset.value
  return {
    ...state,
    value: { x1, y1, x2, y2 },
    selectedPreset: preset.id,
    overshoot: state.overshoot || (preset.overshootRecommended ?? false),
  }
}

/**
 * Set value from any accepted external input.
 * Parses, normalizes, clears selectedPreset.
 */
export function setValue(
  state: EditorState,
  raw: Parameters<typeof parseBezierValue>[0],
): EditorState {
  if (state.readonly || state.disabled) return state
  const value = parseBezierValue(raw)
  return { ...state, value, selectedPreset: null }
}

/**
 * Reset to the stored initialValue.
 */
export function reset(state: EditorState): EditorState {
  if (state.readonly || state.disabled) return state
  return { ...state, value: state.initialValue, selectedPreset: null, dragging: null }
}

/**
 * Update bounds mode. Re-clamps current value if switching to 'css'.
 */
export function setBounds(
  state: EditorState,
  bounds: BoundsConfig,
): EditorState {
  if (bounds === 'css' && !state.overshoot) {
    const p1 = clampPoint(state.value.x1, state.value.y1, 'css')
    const p2 = clampPoint(state.value.x2, state.value.y2, 'css')
    const value: CubicBezierObject = { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y }
    return { ...state, bounds, value }
  }
  return { ...state, bounds }
}

/**
 * Toggle overshoot mode. When disabling, clamps y values back into [0,1].
 */
export function setOvershoot(
  state: EditorState,
  overshoot: boolean,
): EditorState {
  if (!overshoot && isOvershoot(state.value)) {
    const p1 = clampPoint(state.value.x1, state.value.y1, 'css')
    const p2 = clampPoint(state.value.x2, state.value.y2, 'css')
    const value: CubicBezierObject = { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y }
    return { ...state, overshoot, value }
  }
  return { ...state, overshoot }
}
