import type { PresetDefinition, PresetCategory } from '../types/public.js'

export const PRESETS: PresetDefinition[] = [
  // ─── Standard CSS ───────────────────────────────────────────
  {
    id: 'linear',
    label: 'Linear',
    category: 'standard',
    value: [0, 0, 1, 1],
    description: 'Constant speed, no easing.',
    tags: ['css', 'basic'],
  },
  {
    id: 'ease',
    label: 'Ease',
    category: 'standard',
    value: [0.25, 0.1, 0.25, 1],
    description: 'Browser default ease. Starts fast, ends slow.',
    tags: ['css', 'basic'],
  },
  {
    id: 'ease-in',
    label: 'Ease In',
    category: 'standard',
    value: [0.42, 0, 1, 1],
    description: 'Starts slow, ends fast.',
    tags: ['css', 'basic'],
  },
  {
    id: 'ease-out',
    label: 'Ease Out',
    category: 'standard',
    value: [0, 0, 0.58, 1],
    description: 'Starts fast, ends slow.',
    tags: ['css', 'basic'],
  },
  {
    id: 'ease-in-out',
    label: 'Ease In Out',
    category: 'standard',
    value: [0.42, 0, 0.58, 1],
    description: 'Slow at both ends.',
    tags: ['css', 'basic'],
  },

  // ─── Sine ───────────────────────────────────────────────────
  {
    id: 'sine-in',
    label: 'Sine In',
    category: 'sine',
    value: [0.12, 0, 0.39, 0],
    description: 'Gentle acceleration using sine curve.',
    tags: ['smooth'],
  },
  {
    id: 'sine-out',
    label: 'Sine Out',
    category: 'sine',
    value: [0.61, 1, 0.88, 1],
    description: 'Gentle deceleration using sine curve.',
    tags: ['smooth'],
  },
  {
    id: 'sine-in-out',
    label: 'Sine In Out',
    category: 'sine',
    value: [0.37, 0, 0.63, 1],
    description: 'Smooth acceleration and deceleration.',
    tags: ['smooth'],
  },

  // ─── Quad ───────────────────────────────────────────────────
  {
    id: 'quad-in',
    label: 'Quad In',
    category: 'quad',
    value: [0.11, 0, 0.5, 0],
    description: 'Quadratic acceleration.',
    tags: ['power'],
  },
  {
    id: 'quad-out',
    label: 'Quad Out',
    category: 'quad',
    value: [0.5, 1, 0.89, 1],
    description: 'Quadratic deceleration.',
    tags: ['power'],
  },
  {
    id: 'quad-in-out',
    label: 'Quad In Out',
    category: 'quad',
    value: [0.45, 0, 0.55, 1],
    description: 'Symmetric quadratic easing.',
    tags: ['power'],
  },

  // ─── Cubic ──────────────────────────────────────────────────
  {
    id: 'cubic-in',
    label: 'Cubic In',
    category: 'cubic',
    value: [0.32, 0, 0.67, 0],
    description: 'Cubic acceleration.',
    tags: ['power'],
  },
  {
    id: 'cubic-out',
    label: 'Cubic Out',
    category: 'cubic',
    value: [0.33, 1, 0.68, 1],
    description: 'Cubic deceleration.',
    tags: ['power'],
  },
  {
    id: 'cubic-in-out',
    label: 'Cubic In Out',
    category: 'cubic',
    value: [0.65, 0, 0.35, 1],
    description: 'Symmetric cubic easing.',
    tags: ['power'],
  },

  // ─── Quart ──────────────────────────────────────────────────
  {
    id: 'quart-in',
    label: 'Quart In',
    category: 'quart',
    value: [0.5, 0, 0.75, 0],
    description: 'Quartic acceleration.',
    tags: ['power'],
  },
  {
    id: 'quart-out',
    label: 'Quart Out',
    category: 'quart',
    value: [0.25, 1, 0.5, 1],
    description: 'Quartic deceleration.',
    tags: ['power'],
  },
  {
    id: 'quart-in-out',
    label: 'Quart In Out',
    category: 'quart',
    value: [0.76, 0, 0.24, 1],
    description: 'Symmetric quartic easing.',
    tags: ['power'],
  },

  // ─── Quint ──────────────────────────────────────────────────
  {
    id: 'quint-in',
    label: 'Quint In',
    category: 'quint',
    value: [0.64, 0, 0.78, 0],
    description: 'Quintic acceleration.',
    tags: ['power'],
  },
  {
    id: 'quint-out',
    label: 'Quint Out',
    category: 'quint',
    value: [0.22, 1, 0.36, 1],
    description: 'Quintic deceleration.',
    tags: ['power'],
  },
  {
    id: 'quint-in-out',
    label: 'Quint In Out',
    category: 'quint',
    value: [0.83, 0, 0.17, 1],
    description: 'Symmetric quintic easing.',
    tags: ['power'],
  },

  // ─── Expo ───────────────────────────────────────────────────
  {
    id: 'expo-in',
    label: 'Expo In',
    category: 'expo',
    value: [0.7, 0, 0.84, 0],
    description: 'Exponential acceleration. Very slow start.',
    tags: ['dramatic'],
  },
  {
    id: 'expo-out',
    label: 'Expo Out',
    category: 'expo',
    value: [0.16, 1, 0.3, 1],
    description: 'Exponential deceleration. Very slow end.',
    tags: ['dramatic'],
  },
  {
    id: 'expo-in-out',
    label: 'Expo In Out',
    category: 'expo',
    value: [0.87, 0, 0.13, 1],
    description: 'Exponential symmetric easing.',
    tags: ['dramatic'],
  },

  // ─── Circ ───────────────────────────────────────────────────
  {
    id: 'circ-in',
    label: 'Circ In',
    category: 'circ',
    value: [0.55, 0, 1, 0.45],
    description: 'Circular acceleration.',
    tags: ['smooth'],
  },
  {
    id: 'circ-out',
    label: 'Circ Out',
    category: 'circ',
    value: [0, 0.55, 0.45, 1],
    description: 'Circular deceleration.',
    tags: ['smooth'],
  },
  {
    id: 'circ-in-out',
    label: 'Circ In Out',
    category: 'circ',
    value: [0.85, 0, 0.15, 1],
    description: 'Symmetric circular easing.',
    tags: ['smooth'],
  },

  // ─── Back / Overshoot ────────────────────────────────────────
  {
    id: 'back-in',
    label: 'Back In',
    category: 'back',
    value: [0.36, 0, 0.66, -0.56],
    description: 'Pulls back before accelerating forward.',
    tags: ['overshoot', 'character'],
    overshootRecommended: true,
  },
  {
    id: 'back-out',
    label: 'Back Out',
    category: 'back',
    value: [0.34, 1.56, 0.64, 1],
    description: 'Overshoots the target then settles.',
    tags: ['overshoot', 'character'],
    overshootRecommended: true,
  },
  {
    id: 'back-in-out',
    label: 'Back In Out',
    category: 'back',
    value: [0.68, -0.6, 0.32, 1.6],
    description: 'Pulls back, overshoots, settles.',
    tags: ['overshoot', 'character'],
    overshootRecommended: true,
  },

  // ─── Emphasis ───────────────────────────────────────────────
  {
    id: 'anticipate',
    label: 'Anticipate',
    category: 'emphasis',
    value: [0.38, -0.4, 0.88, 0.65],
    description: 'Pulls back strongly before launching forward.',
    tags: ['character', 'overshoot'],
    overshootRecommended: true,
  },
  {
    id: 'snap',
    label: 'Snap',
    category: 'emphasis',
    value: [0.2, 1.6, 0.6, 1],
    description: 'Snappy overshoot, quick settle.',
    tags: ['character', 'overshoot'],
    overshootRecommended: true,
  },
  {
    id: 'swift-out',
    label: 'Swift Out',
    category: 'emphasis',
    value: [0.55, 0, 0.1, 1],
    description: 'Material Design swift-out. Fast exit, gentle settle.',
    tags: ['material', 'ui'],
  },
  {
    id: 'soft-bounce',
    label: 'Soft Bounce',
    category: 'emphasis',
    value: [0.34, 1.3, 0.64, 1],
    description: 'Light bounce at the end. Playful but subtle.',
    tags: ['character', 'overshoot'],
    overshootRecommended: true,
  },
  {
    id: 'dramatic-out',
    label: 'Dramatic Out',
    category: 'emphasis',
    value: [0, 0.9, 0.1, 1],
    description: 'Explosive start, clean landing.',
    tags: ['dramatic', 'ui'],
  },

  // ─── Utility ────────────────────────────────────────────────
  {
    id: 'flat-start',
    label: 'Flat Start',
    category: 'utility',
    value: [0, 0.5, 0.5, 1],
    description: 'Delayed start, smooth arrival.',
    tags: ['ui'],
  },
  {
    id: 'flat-end',
    label: 'Flat End',
    category: 'utility',
    value: [0.5, 0, 1, 0.5],
    description: 'Quick launch, gradual slowdown to flat.',
    tags: ['ui'],
  },
  {
    id: 'symmetric',
    label: 'Symmetric',
    category: 'utility',
    value: [0.5, 0, 0.5, 1],
    description: 'Perfectly mirrored ease in and out.',
    tags: ['balanced'],
  },
  {
    id: 'snappy-ui',
    label: 'Snappy UI',
    category: 'utility',
    value: [0.2, 0, 0, 1],
    description: 'Recommended for micro-interactions and UI transitions.',
    tags: ['ui', 'recommended'],
  },
  {
    id: 'gentle-ui',
    label: 'Gentle UI',
    category: 'utility',
    value: [0.4, 0, 0.2, 1],
    description: 'Smooth and natural feel for UI elements.',
    tags: ['ui', 'recommended'],
  },
]

/** Get a preset by id */
export function getPreset(id: string): PresetDefinition | undefined {
  return PRESETS.find((p) => p.id === id)
}

/** Get all presets belonging to a category */
export function getPresetsByCategory(category: PresetCategory): PresetDefinition[] {
  return PRESETS.filter((p) => p.category === category)
}

/** Simple text search across id, label, tags, and description */
export function searchPresets(query: string): PresetDefinition[] {
  const q = query.toLowerCase().trim()
  if (!q) return PRESETS
  return PRESETS.filter(
    (p) =>
      p.id.includes(q) ||
      p.label.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.includes(q)),
  )
}
