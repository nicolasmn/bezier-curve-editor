<template>
  <div class="bce-playground">
    <div class="bce-stage">
      <bezier-curve-editor
        ref="editorEl"
        :theme="theme"
        :bounds="bounds"
        :overshoot="overshoot"
        :readonly="readonly"
        :disabled="disabled"
        :show-grid="showGrid"
        :show-preview="showPreview"
        :grid-subdivisions="gridSubdivisions"
        :snap="snap"
        @input="onManualInput"
        @change="logEvent"
        @presetchange="logEvent"
        @copy="logEvent"
        @invalid="logEvent"
      ></bezier-curve-editor>
    </div>

    <aside class="bce-panel">
      <details open>
        <summary>Properties</summary>
        <div class="bce-controls">
          <label>Borders
            <select v-model="bounds">
              <option value="css">CSS [0,1]²</option>
              <option value="free">Free</option>
            </select>
          </label>
          <label>Snapping
            <select v-model.number="snap">
              <option :value="0">Off</option>
              <option :value="0.05">0.05</option>
              <option :value="0.1">0.10</option>
              <option :value="0.25">0.25</option>
            </select>
          </label>
          <label>Grid subdivisions
            <select v-model.number="gridSubdivisions">
              <option :value="2">2</option>
              <option :value="4">4</option>
              <option :value="6">6</option>
              <option :value="8">8</option>
            </select>
          </label>
          <label><input v-model="overshoot" type="checkbox" /> Overshoot</label>
          <label><input v-model="readonly" type="checkbox" /> Read-only</label>
          <label><input v-model="disabled" type="checkbox" /> Disabled</label>
          <label><input v-model="showGrid" type="checkbox" /> Grid</label>
          <label><input v-model="showPreview" type="checkbox" /> Preview dot</label>
        </div>
      </details>

      <details open>
        <summary>Presets <span>({{ filteredPresets.length }})</span></summary>
        <input
          v-model="query"
          class="bce-search"
          type="search"
          placeholder="Filter presets…"
        />
        <ul class="bce-presets" role="listbox" aria-label="Presets">
          <li
            v-for="p in filteredPresets"
            :key="p.id"
            :class="['bce-preset', { active: p.id === selectedId }]"
            role="option"
            :aria-selected="p.id === selectedId"
            @click="applyPreset(p)"
          >
            <svg viewBox="0 0 40 40" aria-hidden="true"><path :d="miniCurve(p.value)" /></svg>
            <span class="bce-preset-label">{{ p.label }}</span>
            <code>{{ p.value.map((n) => +n.toFixed(2)).join(', ') }}</code>
          </li>
        </ul>
      </details>

      <details>
        <summary>Events</summary>
        <pre class="bce-log" aria-live="polite">{{ eventLog }}</pre>
      </details>
    </aside>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { PRESETS, searchPresets } from '@bezier-curve-editor/core'

const { isDark } = useData()
const theme = computed(() => (isDark.value ? 'dark' : 'light'))

const editorEl = ref(null)
const bounds = ref('css')
const overshoot = ref(false)
const readonly = ref(false)
const disabled = ref(false)
const showGrid = ref(true)
const showPreview = ref(true)
const gridSubdivisions = ref(4)
const snap = ref(0)
const query = ref('')
const selectedId = ref(null)
const eventLog = ref('')

const filteredPresets = computed(() => (query.value ? searchPresets(query.value) : PRESETS))

function logEvent(e) {
  const time = new Date().toLocaleTimeString([], { hour12: false })
  const line = `${time}  ${e.type}  ${JSON.stringify(e.detail)}`
  eventLog.value = `${line}\n${eventLog.value}`.slice(0, 4000)
}

function onManualInput() {
  if (selectedId.value !== null) selectedId.value = null
}

function applyPreset(p) {
  selectedId.value = p.id
  editorEl.value?.selectPreset(p.id)
}

function miniCurve([x1, y1, x2, y2]) {
  const v = 40
  const f = (n) => Math.round(n * v * 10) / 10
  const cl = (n) => Math.min(Math.max(n, -0.4), 1.4)
  return `M 1 ${v - 1} C ${Math.max(f(x1), 1)} ${v - 1 - cl(y1) * (v - 2)}, ${Math.max(f(x2), 1)} ${v - 1 - cl(y2) * (v - 2)}, ${v - 1} 1`
}

onMounted(async () => {
  await import('@bezier-curve-editor/core')
  await customElements.whenDefined('bezier-curve-editor')

  // Start from the CSS default (ease); no random pick here — that's the home page's job
})
</script>

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
  --bce-canvas-size: min(300px, calc(100vw - 96px));
}
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
.bce-preset-label { font-weight: 500; white-space: nowrap; }
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

/* Mobile: compact layout */
@media (max-width: 760px) {
  .bce-playground { flex-direction: column; gap: 20px; }
  .bce-stage { width: 100%; }
  .bce-panel { min-width: 0; width: 100%; }

  /* Controls in two columns, selects full-width of their cell */
  .bce-controls { grid-template-columns: 1fr 1fr; gap: 10px 12px; }

  /* Preset rows: drop the numeric code column on narrow screens */
  .bce-preset { grid-template-columns: 36px 1fr; }
  .bce-preset code { display: none; }
  .bce-preset svg { width: 32px; height: 32px; }

  /* Tighter panels */
  .bce-log { height: 140px; }
}
</style>