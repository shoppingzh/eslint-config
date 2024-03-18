import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import { configs, typescript, } from './dist/index.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [{
  ignores: [
    'dist/**'
  ],
}, {
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },

  rules: {
    ...configs.javascript.rules,
  },
}, {
  files: [
    '**/*.{js,jsx,ts,tsx}'
  ],
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    ...configs.stylistic.rules,
    '@stylistic/comma-dangle': [2, { arrays: 'ignore', imports: 'always', exports: 'ignore', functions: 'ignore', objects: 'always', }],
  },
}, ...typescript({
  overrives: {
    'ts/array-type': [2],
    'ts/ban-types': [2],
  },
})]
