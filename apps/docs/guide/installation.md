# Installation

## Requirements

- Modern evergreen browser (Chrome, Firefox, Safari, Edge)
- Node.js 20+ for framework integrations

## Core Package

```bash
npm install @bezier-curve-editor/core
```

## Framework Adapters

```bash
# React
npm install @bezier-curve-editor/react

# Vue
npm install @bezier-curve-editor/vue

# Angular
npm install @bezier-curve-editor/angular

# Svelte
npm install @bezier-curve-editor/svelte
```

## CDN / UNPKG

For quick prototyping without a build step:

```html
<script type="module" src="https://unpkg.com/@bezier-curve-editor/core">
</script>

<bezier-curve-editor></bezier-curve-editor>
```

::: warning
CDN usage is not recommended for production. Use a bundler for optimal tree-shaking.
:::
