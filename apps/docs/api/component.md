# Component API

Element: `<bezier-curve-editor>`

```bash
npm install @bezier-curve-editor/core lit
```

```js
import '@bezier-curve-editor/core'
```

## Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `BezierValue` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Current bezier value. Accepts tuple, object, or CSS string |
| `presets` | — | `PresetDefinition[]` | built-ins (45 presets) | Preset catalog passed as property |
| `selectedPreset` | — | `string \| null` | `null` | Active preset ID |
| `overshoot` | `overshoot` | `boolean` | `false` | Allow Y control points outside [0, 1] |
| `bounds` | — | `BoundsConfig` | `'css'` | Clamping mode: `'css'`, `'free'`, or `CustomBounds` |
| `snap` | — | `number \| SnapConfig` | `0` | Snap grid size. `0` = disabled |
| `readonly` | `readonly` | `boolean` | `false` | Prevent editing, handles still visible |
| `disabled` | `disabled` | `boolean` | `false` | Fully disable — pointer-events off, opacity reduced |
| `theme` | `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Color theme. `auto` follows `prefers-color-scheme` |
| `showGrid` | — | `boolean` | `true` | Render grid lines and diagonal reference |
| `showPreview` | — | `boolean` | `true` | Render animation preview strip |
| `precision` | — | `number` | `4` | Decimal places in CSS output |

## Methods

| Method | Signature | Description |
|---|---|---|
| `getValue` | `() => CubicBezierObject` | Returns current value as `{ x1, y1, x2, y2 }` |
| `getCssValue` | `() => string` | Returns `cubic-bezier(...)` string at configured `precision` |
| `setValue` | `(value: BezierValue) => void` | Set value programmatically. Accepts tuple, object, or CSS string |
| `selectPreset` | `(id: string) => void` | Select a preset by id. No-ops if id not found. Emits `presetchange` |
| `reset` | `() => void` | Reset to `initialValue` (value at last `setValue` call or mount) |
| `focus` | `() => void` | Focus the editor element |

## Events

| Event | Detail type | When |
|---|---|---|
| `input` | `BezierChangeDetail` | Every pointer move during drag |
| `change` | `BezierChangeDetail` | Drag end or committed value change |
| `presetchange` | `BezierPresetChangeDetail` | Preset selected from UI or `selectPreset()` |
| `copy` | `{ cssValue: string }` | Copy button clicked |
| `invalid` | — | Unparseable value attribute set |

`BezierChangeDetail`:
```ts
{
  value: CubicBezierObject     // { x1, y1, x2, y2 }
  cssValue: string             // 'cubic-bezier(...)'
  preset?: string              // preset id, if active
}
```

## CSS Parts

| Part | Element | Description |
|---|---|---|
| `container` | `<div>` | Outer wrapper |
| `grid` | `<svg>` | SVG canvas including grid, curve, handles |
| `curve` | `<path>` | Bezier curve path |
| `handle` | `<g>` | Both handle groups |
| `handle-p1` | `<g>` | Control point 1 handle |
| `handle-p2` | `<g>` | Control point 2 handle |
| `toolbar` | `<div>` | Bottom toolbar bar |
| `value-output` | `<span>` | CSS string display |
| `button` | `<button>` | Copy button |

See [CSS Parts reference](/api/css-parts) for styling examples.

## CSS Custom Properties

See [CSS Custom Properties reference](/api/css-custom-properties).
