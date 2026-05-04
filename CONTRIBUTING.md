# Contributing

Thanks for contributing to bezier-curve-editor.

## Setup

Requires Node.js 20+ and pnpm 9+.

```bash
git clone https://github.com/nicolasmn/bezier-curve-editor.git
cd bezier-curve-editor
pnpm install
```

Run everything in watch mode:

```bash
pnpm dev
```

## Branch Naming

```
feat/short-description
fix/short-description
docs/short-description
chore/short-description
ci/short-description
```

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
feat(core): add keyboard step modifier
fix(presets): correct back-in-out values
docs(guide): update preset catalog table
chore(deps): bump vitepress to 1.5.0
ci: fix pages deploy artifact path
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `revert`, `wip`.

Scope should be `kebab-case`: `core`, `react`, `vue`, `angular`, `svelte`, `docs`, `presets`, `ci`, `deps`.

## Docs Rule

**Every public-facing change must update docs in the same PR.**

- New property → update `apps/docs/api/component.md`
- New preset → update `apps/docs/guide/presets.md`
- New event → update `apps/docs/api/events.md`
- New CSS variable → update `apps/docs/api/css-custom-properties.md`
- New feature → update or add guide page

## PR Process

1. Branch off `main`
2. Make focused, well-scoped changes
3. Update docs as needed
4. Run `pnpm changeset` if the change is public-facing
5. Open PR with the template filled out
6. CI must pass before merge

## Adding a Preset

1. Add to `packages/core/src/presets/registry.ts`
2. Update `apps/docs/guide/presets.md` with the new entry
3. Run `pnpm changeset` with `patch` bump for `@bezier-curve-editor/core`

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md).
