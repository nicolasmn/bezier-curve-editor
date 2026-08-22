---
'@bezier-curve-editor/core': patch
---

Fix handles collapsing to r=0 in WebKit (Safari) when focused/hovered

The focus/hover styles set the CSS `r` property with `calc(var(--bce-handle-size, 10) * 0.7)` and a bare `r: 7`. A unitless number is an invalid `<length>`; WebKit resolves the invalid value to the initial value (r = 0), which made the dragged handle instantly invisible and un-hittable. Chromium kept the `r="5"` presentation attribute instead, masking the bug.

Both values now carry units (`7px`, fallback `10px`). The `--bce-handle-size` token is documented as a CSS length (`10px`), matching tokens.css.
