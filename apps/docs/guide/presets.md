# Preset Catalog

The editor ships with 39 built-in presets organized by category.

## Using Presets

```html
<bezier-curve-editor selected-preset="ease-out"></bezier-curve-editor>
```

```js
import {
  PRESETS,
  getPreset,
  getPresetsByCategory,
  searchPresets,
} from '@bezier-curve-editor/core/presets'

// Get single preset
const preset = getPreset('back-out')
// { id: 'back-out', label: 'Back Out', value: [0.34, 1.56, 0.64, 1], ... }

// Get by category
const expo = getPresetsByCategory('expo')

// Search
const results = searchPresets('overshoot')
```

## Built-in Presets

### Standard

| ID            | Label       | Value                |
| ------------- | ----------- | -------------------- |
| `linear`      | Linear      | `0, 0, 1, 1`         |
| `ease`        | Ease        | `0.25, 0.1, 0.25, 1` |
| `ease-in`     | Ease In     | `0.42, 0, 1, 1`      |
| `ease-out`    | Ease Out    | `0, 0, 0.58, 1`      |
| `ease-in-out` | Ease In Out | `0.42, 0, 0.58, 1`   |

### Sine

| ID            | Label       | Value              |
| ------------- | ----------- | ------------------ |
| `sine-in`     | Sine In     | `0.12, 0, 0.39, 0` |
| `sine-out`    | Sine Out    | `0.61, 1, 0.88, 1` |
| `sine-in-out` | Sine In Out | `0.37, 0, 0.63, 1` |

### Power Curves (Quad, Cubic, Quart, Quint)

All power-curve families follow the same `in` / `out` / `in-out` pattern with
progressively more aggressive acceleration.

| ID          | Value              |
| ----------- | ------------------ |
| `quad-in`   | `0.11, 0, 0.5, 0`  |
| `quad-out`  | `0.5, 1, 0.89, 1`  |
| `cubic-in`  | `0.32, 0, 0.67, 0` |
| `cubic-out` | `0.33, 1, 0.68, 1` |
| `quart-in`  | `0.5, 0, 0.75, 0`  |
| `quart-out` | `0.25, 1, 0.5, 1`  |
| `quint-in`  | `0.64, 0, 0.78, 0` |
| `quint-out` | `0.22, 1, 0.36, 1` |

### Expo

| ID            | Value              |
| ------------- | ------------------ |
| `expo-in`     | `0.7, 0, 0.84, 0`  |
| `expo-out`    | `0.16, 1, 0.3, 1`  |
| `expo-in-out` | `0.87, 0, 0.13, 1` |

### Circ

| ID            | Value              |
| ------------- | ------------------ |
| `circ-in`     | `0.55, 0, 1, 0.45` |
| `circ-out`    | `0, 0.55, 0.45, 1` |
| `circ-in-out` | `0.85, 0, 0.15, 1` |

### Back / Overshoot

::: tip Overshoot mode These presets use Y values outside `[0, 1]`. Enable
`overshoot` attribute or set `bounds="free"` to use them fully. :::

| ID            | Value                   |
| ------------- | ----------------------- |
| `back-in`     | `0.36, 0, 0.66, -0.56`  |
| `back-out`    | `0.34, 1.56, 0.64, 1`   |
| `back-in-out` | `0.68, -0.6, 0.32, 1.6` |

### Emphasis

| ID             | Label        | Notes                          |
| -------------- | ------------ | ------------------------------ |
| `anticipate`   | Anticipate   | Strong pull-back before launch |
| `snap`         | Snap         | Quick overshoot, fast settle   |
| `swift-out`    | Swift Out    | Material Design standard       |
| `soft-bounce`  | Soft Bounce  | Subtle bounce at end           |
| `dramatic-out` | Dramatic Out | Explosive start, clean landing |

### Utility

| ID           | Label      | Notes                              |
| ------------ | ---------- | ---------------------------------- |
| `flat-start` | Flat Start | Delayed start, smooth arrival      |
| `flat-end`   | Flat End   | Quick launch, slow end             |
| `symmetric`  | Symmetric  | Perfectly mirrored                 |
| `snappy-ui`  | Snappy UI  | Recommended for micro-interactions |
| `gentle-ui`  | Gentle UI  | Smooth, natural UI transitions     |

## Custom Presets

Pass a `presets` property to extend or replace the built-in catalog:

```js
const editor = document.querySelector('bezier-curve-editor')

editor.presets = [
  ...PRESETS, // keep built-ins
  {
    id: 'my-curve',
    label: 'My Curve',
    category: 'utility',
    value: [0.1, 0.9, 0.2, 1],
    description: 'Custom brand curve.',
    tags: ['brand'],
  },
]
```
