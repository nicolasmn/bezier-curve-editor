# Architecture

## Overview

`bezier-curve-editor` is a monorepo with a Lit web component at its core and thin framework adapters as separate packages.

## Package Map

```
bezier-curve-editor/
├─ packages/core/           The component. All real logic lives here.
│  ├─ src/math/              Pure bezier math — no DOM dependency
│  ├─ src/state/             Pure state model and reducers
│  ├─ src/interactions/      Pointer and keyboard reactive controllers
│  ├─ src/styles/            CSS design tokens and component stylesheet
│  ├─ src/presets/           Built-in preset registry + helpers
│  └─ src/types/             Public TypeScript surface
├─ packages/{react,vue,angular,svelte}/
│     Zero business logic. Wrapper + prop/event mapping only.
└─ apps/docs/               VitePress documentation site
```

## Module Boundary Rules

1. `math/` and `state/` — pure functions, zero DOM, zero Lit imports. Testable in Node.
2. `interactions/` — may use DOM APIs and Lit reactive controllers. No state mutations directly.
3. `bezier-curve-editor.ts` — thin Lit element. Orchestrates state, interactions, and rendering. No math inline.
4. Adapter packages — no imports from `math/`, `state/`, or `interactions/`. Import from `index.ts` only.

## Lit Component Model

Follows Lit’s reactive property model:

- Public API as `@property()` reactive properties
- Internal state as `@state()` reactive properties
- Render method returns SVG + HTML template
- Side effects (animations, focus) in `updated()` lifecycle
- Complex interaction state delegated to reactive controllers

## Event Model

All events:
- Dispatched with `new CustomEvent(name, { detail, bubbles: true, composed: true })`
- `composed: true` ensures they cross the shadow DOM boundary
- Types defined in `packages/core/src/types/public.ts`

| Event | When |
|---|---|
| `input` | Live, during pointer drag |
| `change` | Committed, on pointer release |
| `presetchange` | When active preset changes |
| `copy` | When copy action is triggered |
| `invalid` | When rejected input is attempted |

## Styling Contract

1. Shadow DOM for encapsulation — external styles cannot bleed in
2. `--bce-*` CSS custom properties for design tokens — these DO inherit through shadow DOM
3. `::part(name)` for stable element-level targeting
4. Zero hardcoded colors inside component — always `var(--bce-*)` references
5. Light/dark theme via `[theme=dark]` host attribute or `prefers-color-scheme`

## Adapter Strategy

Each framework adapter package:
1. Imports `@bezier-curve-editor/core` (triggers element registration)
2. Wraps `<bezier-curve-editor>` in a framework-idiomatic component
3. Maps framework props to element JS properties (not attributes for complex types)
4. Maps DOM events to framework callbacks/emitters
5. Re-exports public types from `@bezier-curve-editor/core`
6. Contains zero business logic

## Build Outputs

`packages/core` builds:
- `dist/index.js` (ESM)
- `dist/index.cjs` (CJS)
- `dist/presets.js` / `dist/presets.cjs`
- `dist/types/**/*.d.ts` (TypeScript declarations)

## Testing Strategy

| Phase | Scope | Status |
|---|---|---|
| M1–M5 | Build smoke, element registers, types compile | Active |
| M6 | Unit: math, state, presets (Node, vitest) | Planned |
| M6 | Component: render, events, a11y (vitest + @open-wc/testing) | Planned |
| M6 | E2E + visual regression (Playwright) | Planned |

## Key Design Decisions

**Why Lit?**
Small, close to platform, reactive property model maps cleanly to custom element API. No framework lock-in for consumers.

**Why SVG for the canvas?**
Accessible, DOM-inspectable, testable, and styleable via CSS. Canvas would require more custom accessibility work.

**Why autonomous custom element?**
`customized built-ins` have an unresolved Safari support gap. Autonomous elements work everywhere.

**Why property-first API?**
Attributes are strings. Complex values (presets array, bounds object) stay as JS properties. Simple booleans and strings are reflected as attributes.
