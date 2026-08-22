---
'@bezier-curve-editor/core': minor
---

Rename `copy` event to `bce-copy`

The copy event collided with the native clipboard `ClipboardEvent('copy')` —
both bubble and are composed, making them indistinguishable for document-level
listeners and event-delegating frameworks. The component's event is now
`bce-copy`.

No consumers exist yet (package unpublished), so this is the right moment to fix
the naming. Update any `addEventListener('copy', ...)` to `'bce-copy'`.
