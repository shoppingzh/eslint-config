import { ESLint, Linter, } from 'eslint'
import plugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
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
      '@typescript-eslint': plugin as unknown as ESLint.Plugin,
    },
    languageOptions: {
      parser: parser as any,
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
