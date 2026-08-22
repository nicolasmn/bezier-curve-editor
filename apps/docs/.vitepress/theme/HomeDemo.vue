<template>
  <bezier-curve-editor id="home-editor" class="home-editor"></bezier-curve-editor>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const presets = ['back-out', 'back-in-out', 'expo-out', 'ease-in-out', 'snap']
let timer

onMounted(async () => {
  await import('@bezier-curve-editor/core')
  await customElements.whenDefined('bezier-curve-editor')

  const ed = document.getElementById('home-editor')
  if (!ed) return

  // Move the editor into the hero's right half (empty .image slot)
  const host = document.querySelector('.VPHomeHero .container')
  if (host && !host.querySelector('#home-editor')) {
    let imageSlot = host.querySelector('.image')
    if (!imageSlot) {
      imageSlot = document.createElement('div')
      imageSlot.className = 'image'
      host.appendChild(imageSlot)
    }
    const wrap = document.createElement('div')
    wrap.className = 'home-hero-editor'
    wrap.appendChild(ed)
    imageSlot.appendChild(wrap)
  }

  let i = 0
  timer = setInterval(() => {
    i = (i + 1) % presets.length
    try { ed.selectPreset(presets[i]) } catch {}
  }, 2600)
})

onUnmounted(() => clearInterval(timer))
</script>

<style>
.home-hero-editor {
  display: flex;
  justify-content: center;
}
</style>
