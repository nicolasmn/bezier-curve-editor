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
<script type="module">
  import '@bezier-curve-editor/core'
</script>

<bezier-curve-editor
  value="cubic-bezier(0.34, 1.56, 0.64, 1)"
></bezier-curve-editor>
```

<style>
/* Hero: text left, live editor right */
.VPHomeHero .container {
  display: flex;
}
.VPHomeHero .main {
  max-width: 560px;
  margin-left: 0;
  text-align: left;
}
.VPHomeHero .image {
  order: 2;
  margin-left: auto;
  padding-right: 24px;
}
@media (min-width: 960px) {
  .VPHomeHero .actions {
    justify-content: flex-start;
  }
}

.home-demo {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}
.home-demo-side { min-width: 0; }
.home-hint {
  font-size: 0.85rem;
  opacity: 0.65;
  margin-top: 0;
}
.home-more { font-weight: 600; font-size: 0.9rem; }
</style>
<style>
.home-hero-editor {
  display: flex;
  justify-content: center;
}
</style>
