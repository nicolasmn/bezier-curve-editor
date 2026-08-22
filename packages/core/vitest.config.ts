import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/__tests__/element.test.ts'],
    browser: {
      enabled: !!process.env.BROWSER_TESTS,
      provider: 'playwright',
      headless: true,
      instances: [{ browser: 'chromium' }, { browser: 'webkit' }],
      // Which browsers to run: BROWSER=chromium|webkit|all (default all)
      ...(process.env.BROWSER && process.env.BROWSER !== 'all'
        ? { instances: [{ browser: process.env.BROWSER }] }
        : {}),
    },
  },
})
