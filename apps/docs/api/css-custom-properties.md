# CSS Custom Properties

All custom properties are scoped to the `bezier-curve-editor` element.

```css
bezier-curve-editor {
  --bce-accent: #01696f;
}
```

## Property Reference

| Property                  | Default (light)              | Description                                                             |
| ------------------------- | ---------------------------- | ----------------------------------------------------------------------- |
| `--bce-accent`            | `#01696f`                    | Primary accent color (curve, active handles, focus)                     |
| `--bce-bg`                | `#f7f6f2`                    | Component background                                                    |
| `--bce-fg`                | `#28251d`                    | Foreground / text color                                                 |
| `--bce-grid-color`        | `rgba(0,0,0,0.08)`           | Grid line color                                                         |
| `--bce-curve-color`       | `var(--bce-accent)`          | Bezier curve path color                                                 |
| `--bce-curve-width`       | `2`                          | Bezier curve stroke width                                               |
| `--bce-handle-size`       | `10`                         | Handle diameter (viewBox units; hover radius derives from it)           |
| `--bce-handle-color`      | `var(--bce-accent)`          | Handle fill color                                                       |
| `--bce-handle-border`     | `#fff`                       | Handle border/outline color                                             |
| `--bce-grid-subdivisions` | `4`                          | Grid subdivisions per axis (see also the `grid-subdivisions` attribute) |
| `--bce-guideline-color`   | `rgba(0,0,0,0.2)`            | Dashed guideline color                                                  |
| `--bce-radius`            | `8px`                        | Component border radius                                                 |
| `--bce-font-family`       | `inherit`                    | Font family for labels and output                                       |
| `--bce-font-size`         | `12px`                       | Font size for labels and output                                         |
| `--bce-preview-bg`        | `var(--bce-bg)`              | Preview area background                                                 |
| `--bce-preview-dot`       | `var(--bce-accent)`          | Preview animation dot color                                             |
| `--bce-shadow`            | `0 2px 8px rgba(0,0,0,0.08)` | Component drop shadow                                                   |
