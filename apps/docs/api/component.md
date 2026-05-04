# Component API

Element: `<bezier-curve-editor>`

```bash
npm install @bezier-curve-editor/core
```

```js
import '@bezier-curve-editor/core'
```

## Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `BezierValue` | `[0.42, 0, 0.58, 1]` | Current bezier value |
| `presets` | — | `PresetDefinition[]` | built-ins | Preset catalog |
| `selectedPreset` | `selected-preset` | `string \| undefined` | — | Active preset ID |
| `overshoot` | `overshoot` | `boolean` | `false` | Allow Y values outside [0,1] |
| `bounds` | `bounds` | `BoundsConfig` | `'css'` | Bounds mode |
| `snap` | `snap` | `number \| SnapConfig` | `0` | Snap grid size |
| `readonly` | `readonly` | `boolean` | `false` | Disable editing |
| `disabled` | `disabled` | `boolean` | `false` | Fully disable component |
| `theme` | `theme` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Color theme |
| `showGrid` | `show-grid` | `boolean` | `true` | Show grid lines |
| `showLabels` | `show-labels` | `boolean` | `true` | Show axis labels |
| `showPreview` | `show-preview` | `boolean` | `true` | Show animation preview |
| `showPresets` | `show-presets` | `boolean` | `true` | Show preset selector |
| `precision` | `precision` | `number` | `3` | Decimal precision for output |

## Methods

| Method | Signature | Description |
|---|---|---|
| `getValue` | `() => CubicBezierObject` | Returns current value as `{ x1, y1, x2, y2 }` |
| `getCssValue` | `() => string` | Returns `cubic-bezier(...)` CSS string |
| `setValue` | `(value: BezierValue) => void` | Set value programmatically |
| `reset` | `() => void` | Reset to initial/default value |
| `focus` | `() => void` | Move focus to the editor canvas |

## Events

See [Events reference](/api/events).

## CSS Parts

See [CSS Parts reference](/api/css-parts).

## CSS Custom Properties

See [CSS Custom Properties reference](/api/css-custom-properties).
