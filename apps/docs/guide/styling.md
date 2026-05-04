# Styling

The component exposes CSS custom properties and `::part` selectors for full theming control.

## CSS Custom Properties

```css
bezier-curve-editor {
  --bce-accent: #01696f;
  --bce-bg: #ffffff;
  --bce-fg: #28251d;
  --bce-grid-color: rgba(0, 0, 0, 0.08);
  --bce-curve-color: #01696f;
  --bce-handle-size: 10px;
  --bce-radius: 8px;
  --bce-font-family: inherit;
}
```

See the full list in the [CSS Custom Properties API reference](/api/css-custom-properties).

## CSS Parts

Target internal parts with `::part()`:

```css
bezier-curve-editor::part(handle) {
  fill: hotpink;
}

bezier-curve-editor::part(curve) {
  stroke-width: 3px;
}
```

See the full list in the [CSS Parts API reference](/api/css-parts).

## Themes

Set `theme` attribute or property:

```html
<bezier-curve-editor theme="dark"></bezier-curve-editor>
```

The component respects `prefers-color-scheme` by default when `theme="auto"` (default).
