# CSS Parts

Target internal parts of the component using `::part()`.

```css
bezier-curve-editor::part(handle) {
  /* style both handles */
}
```

## Part Reference

| Part | Description |
|---|---|
| `container` | Outer component shell |
| `toolbar` | Top toolbar row with value output and copy |
| `grid` | SVG grid lines |
| `curve` | SVG bezier path |
| `handle` | Both draggable control-point handles (shared) |
| `handle-p1` | First control point handle (P1) |
| `handle-p2` | Second control point handle (P2) |
| `guideline` | Dashed lines from anchor to handle |
| `preview` | Animation preview area |
| `preset-list` | Preset selector container |
| `value-output` | CSS value text display |
| `button` | All buttons (copy, reset, etc.) |
