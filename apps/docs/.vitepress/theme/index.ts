import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeDemo from './HomeDemo.vue'
import DemoPlayground from './DemoPlayground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeDemo', HomeDemo)
    app.component('DemoPlayground', DemoPlayground)
  },
} satisfies Theme
