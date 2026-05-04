import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        presets: resolve(__dirname, 'src/presets/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', '@lit/reactive-element'],
    },
    sourcemap: true,
    target: 'es2022',
  },
})
