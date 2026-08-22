<template>
  <bezier-curve-editor id="home-editor" class="home-editor"></bezier-curve-editor>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { PRESETS } from '@bezier-curve-editor/core'

let timer

onMounted(async () => {
  // Static named import: guarantees the core module (with its side-effectful
  // element registration) is part of the bundle and evaluated.
  const mod = await import('@bezier-curve-editor/core')
  void mod
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

  // Show a random curve on load — no cycling
  const pick = PRESETS[Math.floor(Math.random() * PRESETS.length)]
  try { ed.selectPreset(pick.id) } catch {}
})

onUnmounted(() => clearInterval(timer))
</script>

<style>
.home-hero-editor {
  display: flex;
  justify-content: center;
}
</style>
