/**
 * Post-processes custom-elements.json:
 * 1. Extracts part="..." names from the element template source and maps
 *    them into the manifest's `parts` array (the analyzer 0.11 drops
 *    @csspart tags and doesn't scan templates).
 * 2. De-duplicates cssProperties.
 *
 * Run after `cem analyze`.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const manifestPath = new URL('../custom-elements.json', import.meta.url)
const sourcePath = new URL('../src/bezier-curve-editor.ts', import.meta.url)

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const source = readFileSync(sourcePath, 'utf8')

// All part="a b" tokens used in the element's lit templates
const partNames = new Set()
for (const match of source.matchAll(/part="([^"]+)"/g)) {
  for (const name of match[1].split(/\s+/).filter(Boolean)) partNames.add(name)
}

for (const module of manifest.modules ?? []) {
  for (const declaration of module.declarations ?? []) {
    if (!declaration.customElement) continue

    if (partNames.size) {
      declaration.parts = [...partNames].sort().map((name) => ({
        name,
        // handle-p1 / handle-p2 are variants of the generic handle part
        description: name.startsWith('handle')
          ? 'Handle group.'
          : undefined,
      }))
    }

    const cssProps = declaration.cssProperties ?? []
    if (cssProps.length) {
      declaration.cssProperties = cssProps.filter(
        (p, i) => cssProps.findIndex((q) => q.name === p.name) === i,
      )
    }
  }
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
console.log(`[cem-postprocess] parts mapped: ${[...partNames].join(', ') || 'none'}`)
