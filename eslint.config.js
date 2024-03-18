import { javascript, stylistic, typescript, } from './dist/index.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      'dist/**'
    ],
  },
  ...javascript(),
  ...stylistic(),
  ...typescript({
    overrides: {
      'ts/array-type': [2],
      // 'ts/ban-types': [2],
    },
  })
]
