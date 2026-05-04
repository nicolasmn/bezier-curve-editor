# bezier-curve-editor

A production-grade bezier curve editor as a native web component, built with [Lit](https://lit.dev). Ships framework adapters for React, Vue, Angular, and Svelte. 40+ built-in presets, CSS custom properties, `::part` hooks, keyboard accessible.

[![CI](https://github.com/nicolasmn/bezier-curve-editor/actions/workflows/ci.yml/badge.svg)](https://github.com/nicolasmn/bezier-curve-editor/actions/workflows/ci.yml)

## Packages

| Package | Description |
|---|---|
| [`@bezier-curve-editor/core`](./packages/core) | Lit web component — the real thing |
| [`@bezier-curve-editor/react`](./packages/react) | React adapter |
| [`@bezier-curve-editor/vue`](./packages/vue) | Vue adapter |
| [`@bezier-curve-editor/angular`](./packages/angular) | Angular adapter |
| [`@bezier-curve-editor/svelte`](./packages/svelte) | Svelte adapter |

## Quick Start

```bash
npm install @bezier-curve-editor/core
```

```html
<script type="module">
  import '@bezier-curve-editor/core'
</script>

<bezier-curve-editor value="cubic-bezier(0.42, 0, 0.58, 1)"></bezier-curve-editor>
```

## Local Development

```bash
# Install dependencies
pnpm install

# Start all packages in watch mode + docs dev server
pnpm dev

# Or run docs only
pnpm docs:dev

# Build everything
pnpm build

# Lint
pnpm lint

# Type check
pnpm typecheck
```

## Repo Structure

```
bezier-curve-editor/
├─ apps/docs/         VitePress documentation site
├─ packages/
│  ├─ core/           Lit web component
│  ├─ react/          React adapter
│  ├─ vue/            Vue adapter
│  ├─ angular/        Angular adapter
│  ├─ svelte/         Svelte adapter
│  ├─ tsconfig/       Shared TypeScript configs
│  └─ shared-dev-config/ Shared lint/format configs
├─ examples/          Framework usage examples
└─ .github/workflows/ CI, Pages deploy, release
```

## Creating a Changeset

When changing a public API, run:

```bash
pnpm changeset
```

Commit the generated `.changeset/*.md` with your PR. The release workflow handles versioning and publishing automatically.

## Documentation

Docs live at `apps/docs/` and deploy to GitHub Pages automatically on push to `main`.

To run locally:

```bash
pnpm docs:dev
```

## License

MIT © [Nicolas Müller Noulezas](https://github.com/nicolasmn)
