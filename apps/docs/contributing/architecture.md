# Architecture

## Module Boundaries

```
bezier-curve-editor/
├─ packages/core/src/
│  ├─ math/         Pure bezier math, no DOM dependency
│  ├─ state/        Pure state model and reducers
│  ├─ interactions/ Pointer and keyboard controllers
│  ├─ styles/       CSS tokens and component styles
│  ├─ presets/      Built-in preset registry
│  └─ types/        Public TypeScript types
├─ packages/react/    Thin React wrapper only
├─ packages/vue/      Thin Vue wrapper only
├─ packages/angular/  Thin Angular wrapper only
└─ packages/svelte/   Thin Svelte wrapper only
```

**Rule:** No business logic in adapter packages. No framework imports in core.

## Event Model

The component dispatches typed `CustomEvent` instances:

- `input` — fired live during pointer drag
- `change` — fired once on pointer release (committed value)
- `presetchange` — fired when preset selection changes
- `copy` — fired when copy action is triggered
- `invalid` — fired when rejected input is attempted

All events bubble and are composed (cross shadow DOM boundary).

## Styling Contract

1. Shadow DOM for full style encapsulation
2. CSS custom properties for design tokens
3. `::part` for stable internal element targeting
4. No hard-coded colors in component — only `var(--bce-*)` references

## Adapter Strategy

Each adapter package:
1. Imports and registers the core custom element
2. Wraps it in a framework-idiomatic component
3. Maps framework props to element properties
4. Maps element events to framework event callbacks
5. Re-exports public types from core

## Testing Phases

| Phase | Scope | When |
|---|---|---|
| M1–M5 | Smoke: build, register, parse | Now |
| M6 | Unit tests: math, state, presets | After M5 |
| M6 | Component tests: render, events, a11y | After M5 |
| M6 | E2E + visual regression | After M5 |
