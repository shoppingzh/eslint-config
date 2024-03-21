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
  const rules = {
    ...plugin.configs['base'].rules,
    ...plugin.configs[version === 2 ? 'essential' : 'vue3-essential'].rules,
    ...plugin.configs[version === 2 ? 'recommended' : 'vue3-recommended'].rules,
  }
  return [{
    plugins: { vue: plugin, },
  }, {
    files: options.files || DEFAULT_FILES,
    languageOptions: {
      parser: parser as any,
      parserOptions: {
        parser: options.typescript ? tsParser : null,
        extraFileExtensions: ['.vue'],
      },
      sourceType: 'module',
    },
    processor: plugin.processors['.vue'], // 需要显式指定processor
    rules: {
      ...rules,
      ...createNSRules(options.overrides, 'vue'),
    },
  }]
}
