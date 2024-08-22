/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Linter, } from 'eslint'
import plugin from '@typescript-eslint/eslint-plugin'
// @ts-ignore
import * as parser from '@typescript-eslint/parser'
import { OverridesOptions, } from '@/utils/types'
import { createNSRules, } from '@/utils/rule'

interface Options extends OverridesOptions {
  files?: string[]
}

const DEFAULT_FILES = [
  '**/*.?([cm])[jt]s?(x)'
]

export default function typescript(options: Options = {}): Linter.FlatConfig[] {
  return [{
    files: options.files || DEFAULT_FILES,
    plugins: {
      '@typescript-eslint': plugin,
    },
    languageOptions: {
      parser: parser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
      },
    },
  }, {
    files: options.files || DEFAULT_FILES,
    rules: {
      ...plugin.configs.recommended.rules,
      ...createNSRules(options.overrides, '@typescript-eslint'),
    },
  }]
}
