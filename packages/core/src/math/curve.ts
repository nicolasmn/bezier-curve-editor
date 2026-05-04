import type { BezierValue, CubicBezierObject, CubicBezierTuple, BoundsConfig } from '../types/public.js'

// ─── Parse ───────────────────────────────────────────────────────────────────

/**
 * Parse any accepted input format into a normalized CubicBezierObject.
 * Throws on invalid input.
 */
export function parseBezierValue(value: BezierValue): CubicBezierObject {
  if (typeof value === 'string') {
    return parseString(value)
  }
  if (Array.isArray(value)) {
    return parseTuple(value as CubicBezierTuple)
  }
  if (isObject(value)) {
    return parseObject(value)
  }
  throw new Error(`[bezier-curve-editor] Invalid value: ${JSON.stringify(value)}`)
}

function parseString(value: string): CubicBezierObject {
  const trimmed = value.trim()
  const match = trimmed.match(
    /^cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)$/,
  )
  if (!match) {
    throw new Error(`[bezier-curve-editor] Cannot parse cubic-bezier string: "${value}"`)
  }
  return parseTuple([
    parseFloat(match[1]!),
    parseFloat(match[2]!),
    parseFloat(match[3]!),
    parseFloat(match[4]!),
  ])
}

function parseTuple([x1, y1, x2, y2]: CubicBezierTuple): CubicBezierObject {
  assertFinite(x1, 'x1')
  assertFinite(y1, 'y1')
  assertFinite(x2, 'x2')
  assertFinite(y2, 'y2')
  return { x1, y1, x2, y2 }
}

function parseObject(value: CubicBezierObject): CubicBezierObject {
  const { x1, y1, x2, y2 } = value
  assertFinite(x1, 'x1')
  assertFinite(y1, 'y1')
  assertFinite(x2, 'x2')
  assertFinite(y2, 'y2')
  return { x1, y1, x2, y2 }
}

function isObject(v: unknown): v is CubicBezierObject {
  return (
    typeof v === 'object' &&
    v !== null &&
    'x1' in v &&
    'y1' in v &&
    'x2' in v &&
    'y2' in v
  )
}

function assertFinite(n: unknown, name: string): asserts n is number {
  if (typeof n !== 'number' || !isFinite(n)) {
    throw new Error(`[bezier-curve-editor] "${name}" must be a finite number, got: ${n}`)
  }
}

// ─── Serialize ───────────────────────────────────────────────────────────────

/**
 * Serialize a CubicBezierObject to a CSS cubic-bezier() string.
 * Precision defaults to 4 decimal places, trailing zeros stripped.
 */
export function serializeToCss(value: CubicBezierObject, precision = 4): string {
  const fmt = (n: number) => parseFloat(n.toFixed(precision)).toString()
  return `cubic-bezier(${fmt(value.x1)}, ${fmt(value.y1)}, ${fmt(value.x2)}, ${fmt(value.y2)})`
}

/**
 * Convert CubicBezierObject to a 4-element tuple.
 */
export function toTuple(value: CubicBezierObject): CubicBezierTuple {
  return [value.x1, value.y1, value.x2, value.y2]
}

// ─── Clamping ────────────────────────────────────────────────────────────────

/**
 * Clamp a handle coordinate pair against the active bounds config.
 * X is always clamped to [0, 1] in 'css' mode per spec.
 */
export function clampPoint(
  x: number,
  y: number,
  bounds: BoundsConfig,
): { x: number; y: number } {
  if (bounds === 'free') {
    return { x, y }
  }
  if (bounds === 'css') {
    return {
      x: clamp(x, 0, 1),
      y: clamp(y, 0, 1),
    }
  }
  return {
    x: clamp(x, bounds.xMin, bounds.xMax),
    y: clamp(y, bounds.yMin, bounds.yMax),
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

// ─── Sampling ────────────────────────────────────────────────────────────────

/**
 * Sample a 1D cubic bezier at parameter t ∈ [0, 1].
 * Used for preview animation curve rendering.
 *
 * Computes B(t) = (1-t)³·p0 + 3(1-t)²t·p1 + 3(1-t)t²·p2 + t³·p3
 */
export function sampleCurve1D(
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number {
  const mt = 1 - t
  return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3
}

/**
 * Build an array of {x, y} SVG points for rendering the bezier curve.
 * Samples the X and Y axes independently using the control points.
 *
 * @param value  - Normalized cubic bezier
 * @param steps  - Number of sample points (default 60)
 */
export function buildCurvePoints(
  value: CubicBezierObject,
  steps = 60,
): Array<{ x: number; y: number }> {
  const points: Array<{ x: number; y: number }> = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = sampleCurve1D(t, 0, value.x1, value.x2, 1)
    const y = sampleCurve1D(t, 0, value.y1, value.y2, 1)
    points.push({ x, y })
  }
  return points
}

// ─── Overshoot ───────────────────────────────────────────────────────────────

/**
 * Returns true if any Y control point falls outside [0, 1].
 * Used to warn or prompt enabling overshoot mode.
 */
export function isOvershoot(value: CubicBezierObject): boolean {
  return value.y1 < 0 || value.y1 > 1 || value.y2 < 0 || value.y2 > 1
}

// ─── Default value ───────────────────────────────────────────────────────────

/** Canonical default value: CSS ease */
export const DEFAULT_VALUE: CubicBezierObject = { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 }
