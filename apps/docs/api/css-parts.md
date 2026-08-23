# CSS Parts

Target internal parts of the component using `::part()`.

```css
bezier-curve-editor::part(handle) {
  /* style both handles */
}
```

## Part Reference

| Part            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `container`     | Outer component shell                                         |
| `toolbar`       | Bottom toolbar row with value output, preset picker, and copy |
| `grid`          | SVG grid lines                                                |
| `curve`         | SVG bezier path                                               |
| `handle`        | Both draggable control-point handles (shared)                 |
| `handle-p1`     | First control point handle (P1)                               |
| `handle-p2`     | Second control point handle (P2)                              |
| `value-output`  | CSS value text display                                        |
| `button`        | Copy button                                                   |
| `preset-picker` | Preset dropdown (opt-in via the `preset-picker` attribute)    |
