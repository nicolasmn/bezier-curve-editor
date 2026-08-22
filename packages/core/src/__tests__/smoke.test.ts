import { describe, it, expect } from 'vitest'
import { parseBezierValue, serializeToCss, isOvershoot, DEFAULT_VALUE } from '../math/curve.js'
import { createInitialState } from '../state/editor-state.js'
import { setHandle, reset, selectPreset } from '../state/reducers.js'
import { PRESETS } from '../presets/registry.js'

describe('parseBezierValue', () => {
  it('parses a 4-tuple', () => {
    expect(parseBezierValue([0.42, 0, 0.58, 1])).toEqual({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })
  })

  it('parses a CSS string', () => {
    expect(parseBezierValue('cubic-bezier(0.42, 0, 0.58, 1)')).toEqual({
      x1: 0.42,
      y1: 0,
      x2: 0.58,
      y2: 1,
    })
  })

  it('parses an object', () => {
    expect(parseBezierValue({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })).toEqual({
      x1: 0.25,
      y1: 0.1,
      x2: 0.25,
      y2: 1,
    })
  })

  it('round-trips: tuple → css string → object', () => {
    const original = parseBezierValue([0.42, 0, 0.58, 1])
    expect(parseBezierValue(serializeToCss(original))).toEqual(original)
  })

  it('throws on invalid string', () => {
    expect(() => parseBezierValue('not-a-bezier')).toThrow()
  })

  it('throws on short tuple', () => {
    const short: unknown = [0.42, 0]
    expect(() => parseBezierValue(short as Parameters<typeof parseBezierValue>[0])).toThrow()
  })
})

describe('serializeToCss', () => {
  it('produces correct string', () => {
    expect(serializeToCss({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })).toBe(
      'cubic-bezier(0.42, 0, 0.58, 1)',
    )
  })

  it('strips trailing zeros', () => {
    expect(serializeToCss({ x1: 0.5, y1: 0, x2: 0.5, y2: 1 })).toBe('cubic-bezier(0.5, 0, 0.5, 1)')
  })

  it('respects precision override', () => {
    expect(serializeToCss({ x1: 0.123456, y1: 0, x2: 0.654321, y2: 1 }, 2)).toBe(
      'cubic-bezier(0.12, 0, 0.65, 1)',
    )
  })
})

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

describe('reducers', () => {
  it('setHandle moves p1 and clears selectedPreset', () => {
    const state = createInitialState({ selectedPreset: 'ease' })
    const next = setHandle(state, 'p1', 0.3, 0.5)
    expect(next.value.x1).toBe(0.3)
    expect(next.value.y1).toBe(0.5)
    expect(next.selectedPreset).toBeNull()
  })

  it('setHandle clamps to [0,1] in css bounds mode', () => {
    const next = setHandle(createInitialState(), 'p2', 1.5, -0.5)
    expect(next.value.x2).toBe(1)
    expect(next.value.y2).toBe(0)
  })

  it('setHandle is no-op when readonly', () => {
    const state = createInitialState({ readonly: true })
    expect(setHandle(state, 'p1', 0.9, 0.9)).toBe(state)
  })

  it('reset restores initialValue', () => {
    const initial = parseBezierValue([0.42, 0, 0.58, 1])
    const state = createInitialState({ value: initial, initialValue: initial })
    expect(reset(setHandle(state, 'p1', 0.9, 0.9)).value).toEqual(initial)
  })

  it('selectPreset applies preset value', () => {
    const preset = PRESETS.find((p) => p.id === 'ease-in-out')!
    const next = selectPreset(createInitialState(), preset)
    expect(next.selectedPreset).toBe('ease-in-out')
    expect(next.value).toEqual({ x1: 0.42, y1: 0, x2: 0.58, y2: 1 })
  })

  it('DEFAULT_VALUE is CSS ease', () => {
    expect(DEFAULT_VALUE).toEqual({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })
  })
})
