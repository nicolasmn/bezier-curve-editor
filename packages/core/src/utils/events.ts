import type {
  BezierChangeDetail,
  BezierPresetChangeDetail,
  CubicBezierObject,
  PresetDefinition,
} from '../types/public.js'
import { serializeToCss } from '../math/curve.js'

export function emitChange(
  host: EventTarget,
  value: CubicBezierObject,
  preset: string | null,
  eventName: 'input' | 'change',
  precision = 4,
): void {
  const detail: BezierChangeDetail = {
    value,
    cssValue: serializeToCss(value, precision),
    ...(preset ? { preset } : {}),
  }
  host.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true, composed: true }))
}

export function emitPresetChange(
  host: EventTarget,
  preset: PresetDefinition,
  value: CubicBezierObject,
): void {
  const detail: BezierPresetChangeDetail = { preset, value }
  host.dispatchEvent(new CustomEvent('presetchange', { detail, bubbles: true, composed: true }))
}

export function emitCopy(host: EventTarget, cssValue: string): void {
  // Named `bce-copy` to avoid colliding with the native clipboard
  // ClipboardEvent('copy') — both would be bubbles+composed and
  // indistinguishable for document-level listeners.
  host.dispatchEvent(
    new CustomEvent('bce-copy', { detail: { cssValue }, bubbles: true, composed: true }),
  )
}
