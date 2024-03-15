import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import antfu from '@antfu/eslint-config'
import { configs } from './dist/index.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [{
  ignores: [
    'dist/**',
  ],
}, {
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
      defineOptions: 'readonly',
    },
  },

  rules: {
    // ...js.configs.recommended.rules,
    ...configs.javascript.rules,
  },
}, {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    ...configs.stylistic.rules,
  },
}]

// export default antfu()
