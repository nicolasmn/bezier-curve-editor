# Getting Started

## Installation

```bash
npm install @bezier-curve-editor/core
# or
pnpm add @bezier-curve-editor/core
```

## Basic Usage

Import and use directly in HTML:

```html
<script type="module">
  import '@bezier-curve-editor/core'
</script>

<bezier-curve-editor
  value="cubic-bezier(0.42, 0, 0.58, 1)"
></bezier-curve-editor>
```

Listen for changes:

```js
const editor = document.querySelector('bezier-curve-editor')

editor.addEventListener('change', (event) => {
  console.log(event.detail.cssValue) // e.g. 'cubic-bezier(0.42, 0, 0.58, 1)'
  console.log(event.detail.value) // { x1, y1, x2, y2 }
})
```

## Next Steps

- [Preset catalog](/guide/presets)
- [Styling with CSS custom properties](/guide/styling)
- [Installation details](/guide/installation)
- [Full API reference](/api/component)
