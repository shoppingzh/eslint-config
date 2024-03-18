import { Linter, } from 'eslint'
import plugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import { OverridesOptions, } from '@/utils/types'

interface Options extends OverridesOptions {
  files?: string[]
}

const DEFAULT_FILES = [
  '**/*.?([cm])[jt]s?(x)'
]

export function typescript(options: Options = {}): Linter.FlatConfig[] {
  return [{
    files: options.files || DEFAULT_FILES,
    plugins: {
      '@typescript-eslint': plugin as any,
    },
    languageOptions: {
      parser: parser as any,
      sourceType: 'module',
    },
  }, {
    files: options.files || DEFAULT_FILES,
    rules: {
      ...plugin.configs.recommended.rules,
      ...(options.overrides || {}),
    },
  }]
}
