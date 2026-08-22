---
title: Live Demo
layout: page
---

# Live Demo

<DemoPlayground />

## Use it anywhere

```html
<script type="module">
  import '@bezier-curve-editor/core'
</script>

<bezier-curve-editor
  value="cubic-bezier(0.34, 1.56, 0.64, 1)"
></bezier-curve-editor>
```

<style>
.bce-playground {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.bce-stage {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
}
.bce-stage bezier-curve-editor {
  --bce-canvas-size: 300px;
}
.bce-output {
  font-family: var(--vp-font-family-mono, ui-monospace, monospace);
  font-size: 0.85rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  padding: 8px 12px;
  word-break: break-all;
}
.bce-copy {
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
  font: inherit;
}
.bce-copy:active { opacity: 0.8; }
.bce-panel {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.bce-panel details {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0 14px;
  background: var(--vp-c-bg-soft);
}
.bce-panel summary {
  cursor: pointer;
  font-weight: 600;
  padding: 12px 0;
  user-select: none;
}
.bce-panel summary span { color: var(--vp-c-text-2); font-weight: 400; }
.bce-controls {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px 18px;
  padding-bottom: 14px;
  font-size: 0.85rem;
}
.bce-controls label { display: flex; align-items: center; gap: 8px; }
.bce-controls label:has(select) { flex-direction: column; align-items: stretch; }
.bce-controls select,
.bce-search {
  font: inherit;
  font-size: 0.85rem;
  padding: 4px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.bce-search {
  width: 100%;
  padding: 6px 10px;
  margin-bottom: 10px;
}
.bce-presets {
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
  max-height: 320px;
  overflow-y: auto;
  display: grid;
  gap: 2px;
}
.bce-preset {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.82rem;
}
.bce-preset:hover { background: color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent); }
.bce-preset.active { background: color-mix(in srgb, var(--vp-c-brand-1) 15%, transparent); }
.bce-preset svg { width: 36px; height: 36px; }
.bce-preset svg path {
  fill: none;
  stroke: var(--vp-c-brand-1);
  stroke-width: 2;
}
.bce-preset-label { font-weight: 500; }
.bce-preset code { color: var(--vp-c-text-2); font-size: 0.68rem; }
.bce-log {
  font-family: var(--vp-font-family-mono, ui-monospace, monospace);
  font-size: 0.72rem;
  line-height: 1.5;
  height: 180px;
  overflow-y: auto;
  margin: 0 0 12px;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--vp-c-text-2);
}
@media (max-width: 760px) {
  .bce-playground { flex-direction: column; }
  .bce-stage { width: 100%; }
}
</style>
