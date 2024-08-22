/* eslint-disable @typescript-eslint/ban-ts-comment */
import { OverridesOptions, } from '@/utils/types'
import { Linter, } from 'eslint'
// @ts-ignore
import plugin from 'eslint-plugin-vue'
import parser from 'vue-eslint-parser'
import { createNSRules, } from '@/utils/rule'
// @ts-ignore
import * as tsParser from '@typescript-eslint/parser'

interface Options extends OverridesOptions {
  files?: string[]
  version?: 2 | 3
  typescript?: boolean
}

const DEFAULT_FILES = ['**/*.vue']

export default function vue(options: Options = {}): Linter.FlatConfig[] {
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
      parser: parser,
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
