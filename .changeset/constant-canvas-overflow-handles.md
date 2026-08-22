---
'@bezier-curve-editor/core': patch
---

Constant canvas size with overflow handles

The editor no longer rescales when handles are dragged outside the [0,1]² curve area (overshoot / free bounds). The viewBox is now fixed, and handles pulled beyond the canvas render outside the editor box instead of triggering a zoom-out that made them disappear.

Also fixes pointer coordinate mapping: screen coordinates are now converted through the svg CTM instead of a naive linear map of the element box, so the dragged handle tracks the cursor exactly (previously it could be offset by up to the viewBox gutter width near the edges).
