import { OverridesOptions, } from '@/utils/types'
import { Linter, } from 'eslint'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import plugin from 'eslint-plugin-vue'
import parser from 'vue-eslint-parser'
import { createNSRules, } from '@/utils/rule'
import tsParser from '@typescript-eslint/parser'

interface Options extends OverridesOptions {
  files?: string[]
  version?: 2 | 3
  typescript?: boolean
}

const DEFAULT_FILES = ['**/*.vue']

export function vue(options: Options = {}): Linter.FlatConfig[] {
  const version = options.version || 3
  const rules = plugin.configs[version === 2 ? 'recommended' : 'vue3-recommended'].rules
  return [{
    files: options.files || DEFAULT_FILES,
    plugins: {
      vue: plugin,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        parser: options.typescript ? tsParser : null,
        extraFileExtensions: ['.vue'],
      },
      sourceType: 'module',
    },
    processor: plugin.processors['.vue'],
    rules: {
      ...rules,
      ...createNSRules(options.overrides, 'vue'),
    },
  }]
}
