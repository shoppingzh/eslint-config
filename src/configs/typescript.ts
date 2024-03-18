import { Linter, } from 'eslint'
import plugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

interface Options {
  files?: string[]
  overrives?: Linter.RulesRecord
}

const DEFAULT_FILES = [
  '**/*.?([cm])[jt]s?(x)'
]

export function typescript(options: Options = {}): Linter.FlatConfig[] {
  return [{
    files: options.files || DEFAULT_FILES,
    plugins: {
      ts: plugin as any,
    },
    languageOptions: {
      parser: parser as any,
      sourceType: 'module',
    },
  }, {
    files: options.files || DEFAULT_FILES,
    rules: {
      ...(options.overrives || {}),
    },
  }]
}
