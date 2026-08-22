<template>
  <bezier-curve-editor id="home-editor" class="home-editor"></bezier-curve-editor>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const presets = ['back-out', 'back-in-out', 'expo-out', 'ease-in-out', 'snap']
let timer

onMounted(async () => {
  const mod = await import('@bezier-curve-editor/core')
  await mod !== false && customElements.whenDefined('bezier-curve-editor').then(() => {
    const ed = document.getElementById('home-editor')
    if (!ed) return
    let i = 0
    timer = setInterval(() => {
      i = (i + 1) % presets.length
      try { ed.selectPreset(presets[i]) } catch {}
    }, 2600)
  })
})

onUnmounted(() => clearInterval(timer))
</script>
