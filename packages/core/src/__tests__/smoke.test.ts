import { describe, it, expect } from 'vitest'
import {
  parseBezierValue,
  serializeToCss,
  isOvershoot,
  DEFAULT_VALUE,
} from '../math/curve.js'
import { createInitialState } from '../state/editor-state.js'
import { setHandle, reset, selectPreset } from '../state/reducers.js'
import { PRESETS } from '../presets/registry.js'

// ─── Parser ───────────────────────────────────────────────────────────────

describe('parseBezierValue', () => {
  it('parses a 4-tuple', () => {
    const result = parseBezierValue([0.42, 0, 0.58, 1])
    expect(result).toEqual({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })
  })

  it('parses a CSS string', () => {
    const result = parseBezierValue('cubic-bezier(0.42, 0, 0.58, 1)')
    expect(result).toEqual({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })
  })

  it('parses an object', () => {
    const result = parseBezierValue({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })
    expect(result).toEqual({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })
  })

  it('round-trips: tuple → object → css string → object', () => {
    const original = parseBezierValue([0.42, 0, 0.58, 1])
    const css = serializeToCss(original)
    const reparsed = parseBezierValue(css)
    expect(reparsed).toEqual(original)
  })

  it('throws on invalid input', () => {
    expect(() => parseBezierValue('not-a-bezier' as never)).toThrow()
    expect(() => parseBezierValue([0.42, 0] as never)).toThrow()
  })
})

// ─── Serializer ────────────────────────────────────────────────────────────

describe('serializeToCss', () => {
  it('produces correct cubic-bezier string', () => {
    expect(serializeToCss({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })).toBe(
      'cubic-bezier(0.42, 0, 0.58, 1)',
    )
  })

  it('strips trailing zeros', () => {
    expect(serializeToCss({ x1: 0.5, y1: 0, x2: 0.5, y2: 1 })).toBe(
      'cubic-bezier(0.5, 0, 0.5, 1)',
    )
  })

  it('respects precision override', () => {
    const result = serializeToCss({ x1: 0.123456, y1: 0, x2: 0.654321, y2: 1 }, 2)
    expect(result).toBe('cubic-bezier(0.12, 0, 0.65, 1)')
  })
})

// ─── Overshoot detection ──────────────────────────────────────────────────

describe('isOvershoot', () => {
  it('returns false for in-bounds value', () => {
    expect(isOvershoot({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })).toBe(false)
  })

  it('returns true when y1 < 0', () => {
    expect(isOvershoot({ x1: 0.36, y1: -0.56, x2: 0.64, y2: 1 })).toBe(true)
  })

  it('returns true when y2 > 1', () => {
    expect(isOvershoot({ x1: 0.34, y1: 0, x2: 0.64, y2: 1.56 })).toBe(true)
  })
})

// ─── State reducers ─────────────────────────────────────────────────────────

describe('reducers', () => {
  it('setHandle moves p1 and clears selectedPreset', () => {
    const state = createInitialState({ selectedPreset: 'ease' })
    const next = setHandle(state, 'p1', 0.3, 0.5)
    expect(next.value.x1).toBe(0.3)
    expect(next.value.y1).toBe(0.5)
    expect(next.selectedPreset).toBeNull()
  })

  it('setHandle clamps to [0,1] in css bounds mode', () => {
    const state = createInitialState()
    const next = setHandle(state, 'p2', 1.5, -0.5)
    expect(next.value.x2).toBe(1)
    expect(next.value.y2).toBe(0)
  })

  it('setHandle is no-op when readonly', () => {
    const state = createInitialState({ readonly: true })
    const next = setHandle(state, 'p1', 0.9, 0.9)
    expect(next).toBe(state)
  })

  it('reset restores initialValue', () => {
    const initial = parseBezierValue([0.42, 0, 0.58, 1])
    const state = createInitialState({ value: initial, initialValue: initial })
    const moved = setHandle(state, 'p1', 0.9, 0.9)
    const restored = reset(moved)
    expect(restored.value).toEqual(initial)
  })

  it('selectPreset applies preset value', () => {
    const preset = PRESETS.find((p) => p.id === 'ease-in-out')!
    const state = createInitialState()
    const next = selectPreset(state, preset)
    expect(next.selectedPreset).toBe('ease-in-out')
    expect(next.value).toEqual({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })
  })

  it('DEFAULT_VALUE matches ease preset', () => {
    expect(DEFAULT_VALUE).toEqual({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })
  })
})
