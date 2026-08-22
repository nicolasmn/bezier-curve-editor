---
'@bezier-curve-editor/core': minor
---

Generate custom-elements.json via the Custom Elements Manifest analyzer

The package now ships a complete `custom-elements.json` (referenced via the
`customElements` field), generated during `build` by
`@custom-elements-manifest/analyzer` plus a small post-processing step:

- 13 attributes, 13 public properties, 5 public methods
- All 5 events with typed `detail` payloads (documented via `@fires`)
- All 9 `::part` names (extracted from the templates; the analyzer 0.11 doesn't
  scan them)
- 7 `@cssprop` styling tokens

This unblocks publishing: tooling (IDE completions, docs generators, framework
wrapper generators) can now consume the full component surface.
