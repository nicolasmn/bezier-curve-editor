---
'@bezier-curve-editor/core': minor
---

Built-in preset picker dropdown

New `showPresetPicker` property (attribute: `preset-picker`) renders a preset
dropdown in the toolbar, grouped by category via `optgroup` and with a mini
curve preview in every option.

Styling follows the progressive-enhancement pattern from the native
`appearance: base-select` API (Chrome/Edge 134+): the fully styled dropdown with
curve thumbnails renders where supported, and browsers without support get the
plain native select — fully functional in both paths, no JS fallback logic.

State behavior: selecting a preset applies it and fires `presetchange`; any
subsequent edit (drag, keyboard, programmatic value) clears the exact-preset
match and the picker shows "Custom".

Also adds `getPresetGroups()` to the presets export (ordered category groups for
custom pickers) and a `preset-picker` part for styling the select.
