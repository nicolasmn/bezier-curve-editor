// Presets barrel — re-exports built-in preset registry
export {
  PRESETS,
  getPreset,
  getPresetsByCategory,
  getPresetGroups,
  searchPresets,
} from './registry.js'
export type { PresetGroup } from './registry.js'
export type {} from '../types/public.js'
