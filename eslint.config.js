import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.vitepress/dist/**',
      '**/.vitepress/cache/**',
      '**/*.cjs',
      'eslint.config.js',
    ],
  },
]
