# Getting Started

## Installation

```bash
npm install @bezier-curve-editor/core
# or
pnpm add @bezier-curve-editor/core
```

`lit` is a peer dependency — install it alongside:

```bash
npm install lit
```

## Basic Usage

Import once to register the custom element, then use anywhere in HTML:

```html
<script type="module">
  import '@bezier-curve-editor/core'
</script>

<bezier-curve-editor
  value="cubic-bezier(0.42, 0, 0.58, 1)"
></bezier-curve-editor>
```

## Listening for Changes

```js
const editor = document.querySelector('bezier-curve-editor')

// Fires on every drag move
editor.addEventListener('input', (e) => {
  console.log(e.detail.cssValue) // 'cubic-bezier(...)'
  console.log(e.detail.value)    // { x1, y1, x2, y2 }
})

// Fires when drag ends or value is committed
editor.addEventListener('change', (e) => {
  console.log(e.detail.cssValue)
})
```

## Reading and Setting Values

```js
// Read
const css = editor.getCssValue()   // 'cubic-bezier(0.42, 0, 0.58, 1)'
const obj = editor.getValue()      // { x1: 0.42, y1: 0, x2: 0.58, y2: 1 }

// Set programmatically — accepts tuple, object, or CSS string
editor.setValue([0.25, 0.1, 0.25, 1])
editor.setValue('cubic-bezier(0.25, 0.1, 0.25, 1)')
editor.setValue({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })

// Reset to initial value
editor.reset()
```

## Keyboard Editing

Focus the element (`Tab` or click), then:

| Key | Action |
|---|---|
| `Tab` / `Shift+Tab` | Cycle focus between control point 1 and 2 |
| `Arrow keys` | Nudge focused handle (step = snap grid or 0.01) |
| `Shift+Arrow` | Coarse nudge ×10 |
| `Escape` | Deselect handle |

## Next Steps

- [Preset catalog](/guide/presets)
- [Overshoot and bounds](/guide/overshoot-and-bounds)
- [Styling with CSS custom properties](/guide/styling)
- [Accessibility](/guide/accessibility)
- [Full API reference](/api/component)
