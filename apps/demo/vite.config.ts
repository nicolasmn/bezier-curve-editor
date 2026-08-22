import { defineConfig } from 'vite'

// Demo is deployed under /bezier-curve-editor/demo/ on GitHub Pages.
const base = (process.env['VITE_BASE'] ?? '/bezier-curve-editor/') as `/${string}/`

export default defineConfig({
  base: `${base}demo/`,
  build: {
    outDir: 'dist',
    target: 'es2022',
  },
})
