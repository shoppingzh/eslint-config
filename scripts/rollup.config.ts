import path from 'path'
import { defineConfig, } from 'rollup'
import alias from '@rollup/plugin-alias'
import { babel, } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import sizes from '@atomico/rollup-plugin-sizes'
import ts from '@rollup/plugin-typescript'
import beep from '@rollup/plugin-beep'
import terser from '@rollup/plugin-terser'
import pkg from '../package.json'
import clear from 'rollup-plugin-clear'
import strip from '@rollup/plugin-strip'
import replace from '@rollup/plugin-replace'
import { dts, } from 'rollup-plugin-dts'
import config from './config'
import { globSync, } from 'glob'

const input = globSync(['src/configs/*.ts', 'src/index.ts'], {
  cwd: path.resolve(__dirname, '..'),
  withFileTypes: true,
}).reduce((input, o) => {
  input[o.name.replace(/\.[jt]s$/g, '')] = path.resolve(__dirname, o.path, o.name)
  return input
}, {} as Record<string, string>)

const external = Object.keys(pkg.peerDependencies || {}).map(pkg => new RegExp(`^${pkg}`))
const commonPlugins = [
  alias({
    entries: {
      '@': path.resolve(__dirname, '../src'),
    },
  }),
  // 警告声
  beep(),
  // 生成包大小监控
  config.isProdMode && sizes(100),
]

export default [
  defineConfig({
    input,
    output: [{
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
    }, {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
    }],
    external,
    plugins: [
      ...commonPlugins,
      config.isProdMode && clear({
        targets: ['dist'],
      }),
      commonjs(),
      ts(),
      config.isProdMode && config.useBabel && babel({
        exclude: ['node_modules'],
        babelHelpers: 'runtime',
        extensions: ['.ts'],
      }),
      // 去除console.log
      config.isProdMode && strip({
        include: 'src/**/*.{ts,js}',
      }),
      // 替换环境变量
      replace({
        preventAssignment: true,
        values: {
          ...(Object.entries(config.env).reduce((all, [key, value]) => {
            all[`process.env.${key}`] = JSON.stringify(value)
            return all
          }, {})),
        },
      }),

      // 代码混淆
      config.isProdMode && terser(),
    ],
  }),
  defineConfig({
    input,
    output: {
      dir: 'dist',
    },
    external,
    plugins: [
      ...commonPlugins,
      dts({
        compilerOptions: {
          preserveSymlinks: false,
        },
      })
    ],
  })
]
