import { defineConfig } from 'vitepress'

const base = (process.env['VITE_BASE'] ?? '/') as `/${string}/` | '/'

export default defineConfig({
  base,
  vue: {
    template: {
      compilerOptions: {
        // Treat all dashed tags in markdown as native custom elements
        // (e.g. <bezier-curve-editor>) instead of unresolved Vue components.
        isCustomElement: (tag) => tag.includes('-'),
      },
    },
  },
  title: 'Bezier Curve Editor',
  description: 'Bezier curve editor web component with Lit, framework adapters, and VitePress docs',

  head: [['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }]],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'bezier-curve-editor',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/component' },
      { text: 'Presets', link: '/guide/presets' },
      // External link — VitePress' SPA router would 404 on the non-app /demo/ page.
      {
        text: 'Live Demo',
        link: '/demo/',
        target: '_self',
        rel: 'external',
      },
      {
        text: 'Changelog',
        link: 'https://github.com/nicolasmn/bezier-curve-editor/releases',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Presets', link: '/guide/presets' },
            { text: 'Styling', link: '/guide/styling' },
            { text: 'Accessibility', link: '/guide/accessibility' },
            { text: 'Overshoot & Bounds', link: '/guide/overshoot-and-bounds' },
          ],
        },
        // {
        //   text: 'Framework Adapters',
        //   items: [
        //     { text: 'React', link: '/guide/frameworks/react' },
        //     { text: 'Vue', link: '/guide/frameworks/vue' },
        //     { text: 'Angular', link: '/guide/frameworks/angular' },
        //     { text: 'Svelte', link: '/guide/frameworks/svelte' },
        //   ],
        // },
        {
          text: 'Contributing',
          items: [
            { text: 'Architecture', link: '/contributing/architecture' },
            { text: 'Releasing', link: '/contributing/releasing' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Component', link: '/api/component' },
            { text: 'Events', link: '/api/events' },
            { text: 'CSS Parts', link: '/api/css-parts' },
            { text: 'CSS Custom Properties', link: '/api/css-custom-properties' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/nicolasmn/bezier-curve-editor' }],

    editLink: {
      pattern: 'https://github.com/nicolasmn/bezier-curve-editor/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
    },

    search: {
      provider: 'local',
    },
  },
})
