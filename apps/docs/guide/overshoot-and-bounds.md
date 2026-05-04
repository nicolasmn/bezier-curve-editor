# Overshoot & Bounds

CSS `cubic-bezier()` only accepts X values in `[0,1]` and Y values in `[0,1]` for timing functions, but the spec does allow Y values outside this range to create overshoot effects. The component supports several bounds modes.

## Bounds Modes

### `css` (default)

X values clamped to `[0, 1]`. Y values clamped to `[0, 1]`. Safe for all CSS uses.

```html
<bezier-curve-editor bounds="css"></bezier-curve-editor>
```

### `free`

No clamping. Handles can move anywhere. Useful for custom animation engines that accept unrestricted bezier values.

```html
<bezier-curve-editor bounds="free"></bezier-curve-editor>
```

### `overshoot` shorthand

X clamped to `[0, 1]`, Y free. The most common overshoot mode for CSS animations:

```html
<bezier-curve-editor overshoot></bezier-curve-editor>
```

### Custom bounds

Set via the `bounds` property (JS only, not serializable as attribute):

```js
editor.bounds = { xMin: 0, xMax: 1, yMin: -2, yMax: 2 }
```

## Back/Anticipate Presets

Presets tagged `overshootRecommended: true` (like `back-out`, `anticipate`, `snap`) require the `overshoot` or `free` mode to render correctly.
The component automatically enables the appropriate mode when loading such a preset.
