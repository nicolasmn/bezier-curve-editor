import type { CubicBezierObject, BoundsConfig, SnapConfig, PresetDefinition } from '../types/public.js'
import { DEFAULT_VALUE } from '../math/curve.js'
import { PRESETS } from '../presets/registry.js'

/**
 * Which handle is currently being dragged or has keyboard focus.
 */
export type ActiveHandle = 'p1' | 'p2' | null

/**
 * Full internal state of the editor.
 * All fields are plain data — no Lit, no DOM references.
 */
export interface EditorState {
  /** Normalized current bezier value */
  value: CubicBezierObject
  /** The value at mount / last explicit setValue call — used for reset() */
  initialValue: CubicBezierObject
  /** Handle currently being dragged */
  dragging: ActiveHandle
  /** Handle that holds keyboard focus */
  focusedHandle: ActiveHandle
  /** ID of the currently selected preset, if any */
  selectedPreset: string | null
  /** Available preset catalog */
  presets: PresetDefinition[]
  /** Bounds clamping mode */
  bounds: BoundsConfig
  /** Whether overshoot Y values are permitted */
  overshoot: boolean
  /** Snap grid config */
  snap: number | SnapConfig
  /** Component is read-only */
  readonly: boolean
  /** Component is disabled */
  disabled: boolean
}

/**
 * Produce the default initial EditorState.
 * Callers may override individual fields via spread.
 */
export function createInitialState(
  overrides: Partial<EditorState> = {},
): EditorState {
  return {
    value: DEFAULT_VALUE,
    initialValue: DEFAULT_VALUE,
    dragging: null,
    focusedHandle: null,
    selectedPreset: null,
    presets: PRESETS,
    bounds: 'css',
    overshoot: false,
    snap: 0,
    readonly: false,
    disabled: false,
    ...overrides,
  }
}
