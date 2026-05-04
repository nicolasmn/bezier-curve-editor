import type { BezierValue, CubicBezierObject, CubicBezierTuple, BoundsConfig } from '../types/public.js'

// ─── Parse ───────────────────────────────────────────────────────────────

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
  // match[1..4] are always strings when the regex matched — cast via Number()
  return parseTuple([
    Number(match[1]),
    Number(match[2]),
    Number(match[3]),
    Number(match[4]),
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
    throw new Error(`[bezier-curve-editor] "${name}" must be a finite number, got: ${String(n)}`)
  }
}

// ─── Serialize ───────────────────────────────────────────────────────────────

export function serializeToCss(value: CubicBezierObject, precision = 4): string {
  const fmt = (n: number) => parseFloat(n.toFixed(precision)).toString()
  return `cubic-bezier(${fmt(value.x1)}, ${fmt(value.y1)}, ${fmt(value.x2)}, ${fmt(value.y2)})`
}

export function toTuple(value: CubicBezierObject): CubicBezierTuple {
  return [value.x1, value.y1, value.x2, value.y2]
}

// ─── Clamping ────────────────────────────────────────────────────────────────────

export function clampPoint(
  x: number,
  y: number,
  bounds: BoundsConfig,
): { x: number; y: number } {
  if (bounds === 'free') {
    return { x, y }
  }
  if (bounds === 'css') {
    return { x: clamp(x, 0, 1), y: clamp(y, 0, 1) }
  }
  return {
    x: clamp(x, bounds.xMin, bounds.xMax),
    y: clamp(y, bounds.yMin, bounds.yMax),
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

// ─── Sampling ────────────────────────────────────────────────────────────────────

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

// ─── Overshoot ───────────────────────────────────────────────────────────────────

export function isOvershoot(value: CubicBezierObject): boolean {
  return value.y1 < 0 || value.y1 > 1 || value.y2 < 0 || value.y2 > 1
}

// ─── Default value ─────────────────────────────────────────────────────────────

/** Canonical default: CSS `ease` = cubic-bezier(0.25, 0.1, 0.25, 1) */
export const DEFAULT_VALUE: CubicBezierObject = { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 }
