---
layout: home

hero:
  name: 'bezier-curve-editor'
  text: 'Easing curves, editable.'
  tagline:
    A production-grade bezier curve editor as a native web component.
    Framework-agnostic, built with Lit. Zero glue code.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Live Demo →
      link: /demo/
    - theme: alt
      text: GitHub
      link: https://github.com/nicolasmn/bezier-curve-editor

features:
  - title: Standards-based
    details:
      Native Custom Elements + Shadow DOM. Works in plain HTML, React, Vue,
      Angular and Svelte without wrappers.
  - title: 39 Presets
    details:
      Standard CSS timing, Penner power curves, back/overshoot, emphasis and
      utility — one selectPreset() call away.
  - title: Themable
    details:
      CSS custom properties for every color and size, stable ::part hooks for
      design systems, auto dark mode.
  - title: Accessible
    details:
      Full keyboard interaction with focusable handles, ARIA slider semantics,
      screen-reader friendly announcements.
---

<div class="home-demo">
  <div class="home-demo-stage">
    <HomeDemo />
  </div>
  <div class="home-demo-side">
    <p class="home-hint">Live component — drag the handles or use arrow keys.</p>
    <a class="home-more" href="/demo/">All features in the Live Demo →</a>
  </div>
</div>

Try it in plain HTML — no framework, no build step:

```html

```
