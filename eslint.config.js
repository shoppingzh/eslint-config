import { javascript, stylistic, typescript, vue, } from './dist/index.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      'dist/**'
    ],
  },
  ...javascript(),
  ...stylistic({
    overrides: {
      'comma-dangle': [2, { arrays: 'ignore', functions: 'ignore', objects: 'always', imports: 'always', exports: 'ignore', }],
    },
  }),
  ...typescript({
    overrides: {
      'array-type': [2],
      'ban-types': [2],
    },
  }),
  ...vue({
    typescript: true,
  })
]
