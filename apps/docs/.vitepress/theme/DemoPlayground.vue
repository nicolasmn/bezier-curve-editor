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
      <output class="bce-output" aria-live="polite">{{ cssValue }}</output>
      <button class="bce-copy" type="button" @click="copy">{{ copyLabel }}</button>
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
const copyLabel = ref('Copy')
const eventLog = ref('')

const cssValue = ref('cubic-bezier(0.25, 0.1, 0.25, 1)')

const filteredPresets = computed(() => (query.value ? searchPresets(query.value) : PRESETS))

function syncOutput() {
  const el = editorEl.value
  if (el) cssValue.value = el.getCssValue()
}

function logEvent(e) {
  const time = new Date().toLocaleTimeString([], { hour12: false })
  const line = `${time}  ${e.type}  ${JSON.stringify(e.detail)}`
  eventLog.value = `${line}\n${eventLog.value}`.slice(0, 4000)
  if (e.type === 'input' || e.type === 'presetchange') syncOutput()
}

function onManualInput() {
  if (selectedId.value !== null) selectedId.value = null
  syncOutput()
}

async function copy() {
  try {
    await navigator.clipboard.writeText(cssValue.value)
    copyLabel.value = 'Copied!'
    setTimeout(() => { copyLabel.value = 'Copy' }, 1200)
  } catch { /* clipboard unavailable */ }
}

function applyPreset(p) {
  selectedId.value = p.id
  editorEl.value?.selectPreset(p.id)
  syncOutput()
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
  syncOutput()
})
</script>
