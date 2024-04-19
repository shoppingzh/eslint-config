import { javascript, stylistic, typescript, vue } from './dist/index.js'

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
      'indent': [0],
      'jsx-indent': [2, 2],
      'comma-dangle': [2, { arrays: 'ignore', functions: 'ignore', objects: 'always', imports: 'always', exports: 'ignore', }],
    },
  }),
  ...typescript({
    files: [
      '**/*.?([cm])[jt]s?(x)',
      '**/*.vue'
    ],
    overrides: {
      'array-type': [2],
      'ban-types': [2],
    },
  }),
  ...vue({
    typescript: true,
  })
]
