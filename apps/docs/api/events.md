# Events

## `input`

Fired continuously during pointer drag. Use for live preview.

```ts
type BezierChangeDetail = {
  value: CubicBezierObject // { x1, y1, x2, y2 }
  cssValue: string // 'cubic-bezier(...)'
  preset?: string // preset id if active
}
```

```js
editor.addEventListener('input', (e) => {
  console.log(e.detail.cssValue)
})
```

## `change`

Fired once when pointer is released (committed value). Same detail shape as
`input`.

## `presetchange`

Fired when the active preset changes.

```ts
type BezierPresetChangeDetail = {
  preset: PresetDefinition
  value: CubicBezierObject
}
```

## `bce-copy`

Fired when user activates the copy action. `detail.cssValue` contains the copied
string.

> Named `bce-copy` (not `copy`) to avoid colliding with the native clipboard
> `ClipboardEvent` of the same name.

## `invalid`

Fired when a value is rejected due to bounds validation. `detail.value` is the
rejected input.
