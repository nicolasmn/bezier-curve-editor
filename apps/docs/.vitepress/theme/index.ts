import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeDemo from './HomeDemo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeDemo', HomeDemo)
  },
} satisfies Theme
