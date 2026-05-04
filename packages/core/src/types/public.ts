/**
 * Cubic bezier value as a 4-element tuple [x1, y1, x2, y2]
 */
export type CubicBezierTuple = [number, number, number, number]

/**
 * Cubic bezier value as a named object
 */
export interface CubicBezierObject {
  x1: number
  y1: number
  x2: number
  y2: number
}

/**
 * Any acceptable input format for the component value
 */
export type BezierValue = CubicBezierTuple | CubicBezierObject | string

/**
 * Preset category groupings
 */
export type PresetCategory =
  | 'standard'
  | 'sine'
  | 'quad'
  | 'cubic'
  | 'quart'
  | 'quint'
  | 'expo'
  | 'circ'
  | 'back'
  | 'emphasis'
  | 'utility'

/**
 * A single preset definition
 */
export interface PresetDefinition {
  id: string
  label: string
  category: PresetCategory
  value: CubicBezierTuple
  description?: string
  tags?: string[]
  /** Indicates this preset intentionally exceeds CSS [0,1] Y range */
  overshootRecommended?: boolean
}

/**
 * Custom bounds configuration for clamped or free editing modes
 */
export interface CustomBounds {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}

/**
 * Bounds mode:
 * - 'css'  — x in [0,1], y in [0,1] strict
 * - 'free' — no clamping
 * - CustomBounds — user-defined numeric bounds
 */
export type BoundsConfig = 'css' | 'free' | CustomBounds

/**
 * Snap configuration
 * - number — snap grid size (e.g. 0.1)
 * - SnapConfig — advanced snap settings
 */
export interface SnapConfig {
  gridSize: number
  enabled: boolean
}

/**
 * Event detail for input/change events
 */
export interface BezierChangeDetail {
  value: CubicBezierObject
  cssValue: string
  preset?: string
}

/**
 * Typed custom event emitted on change/input
 */
export type BezierChangeEvent = CustomEvent<BezierChangeDetail>

/**
 * Event detail for presetchange
 */
export interface BezierPresetChangeDetail {
  preset: PresetDefinition
  value: CubicBezierObject
}

export type BezierPresetChangeEvent = CustomEvent<BezierPresetChangeDetail>
