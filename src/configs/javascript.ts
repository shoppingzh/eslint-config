import { OverridesOptions, } from '@/utils/types'
import { Linter, ESLint, } from 'eslint'
import globals from 'globals'
import { createNSRules, } from '@/utils/rule'

interface Options extends OverridesOptions {
  globals?: ESLint.Globals
}

const rules: Linter.RulesRecord = {
  // Problems
  'array-callback-return': [2], // 数组回调返回值是否必需
  'constructor-super': [2], // 子类必须调用父类super()
  'for-direction': [2], // 无法到达的循环
  'getter-return': [2], // getter必须有返回语句
  'no-await-in-loop': [1], // 不要在循环中使用await语法（性能问题）
  'no-class-assign': [2], // 不要将类名赋值给另一个变量
  'no-compare-neg-zero': [2], // 不要与-0做比较
  'no-cond-assign': [2], // 不要在if中使用赋值语句
  'no-const-assign': [2], // 不要对const声明的变量重新赋值
  'no-constant-binary-expression': [2], // ？
  'no-constant-condition': [2], // 不要在if中使用常量表达式，如if(true)
  'no-constructor-return': [2], // 不要在构造函数中使用返回语句
  'no-control-regex': [2], // 不要在正则表达式中出现控制字符
  'no-debugger': [2], // 不要使用debugger
  'no-dupe-args': [2], // 函数中不要出现同名参数
  'no-dupe-class-members': [2], // 类中不要出现同名成员
  'no-dupe-else-if': [2], // if/else中不要出现重复的条件
  'no-dupe-keys': [2], // 对象字面量不要出现相同的键名
  'no-duplicate-case': [2], // switch中不要出现相同的case
  'no-duplicate-imports': [2], // 不要使用重复的import
  'no-empty-character-class': [1], // 正则中不要出现空的[]
  'no-empty-pattern': [1], // 不要使用空的结构{}
  'no-ex-assign': [2], // 不要对catch中的错误对象重新赋值
  'no-fallthrough': [2], // switch中的case不要穿透
  'no-func-assign': [2], // 不要对函数名重新赋值
  'no-import-assign': [2], // 不要对import重新赋值
  'no-inner-declarations': [2, 'both'], // 不要在非函数作用域中使用var声明变量
  'no-invalid-regexp': [2], // 不要在正则表达式中出现无效的字符串
  'no-irregular-whitespace': [2], // 不要使用非常规的空格如零宽字符
  'no-loss-of-precision': [2], // 不要出现过大的数值字面量
  'no-misleading-character-class': [2], // 正则表达式禁止多码点匹配
  'no-new-native-nonconstructor': [2], // 禁止类似new Symbol()类调用
  'no-new-symbol': [2], // 禁止 new Symbol()
  'no-obj-calls': [2], // 禁止 new Math()等调用方式
  'no-promise-executor-return': [2], // 禁止在Promise执行函数中直接return，而是使用resolve或reject
  'no-prototype-builtins': [0], // 禁止调用对象在Object.prototype中的方法，必须使用Object.prototype.toString.call(o)的方式调用
  'no-self-assign': [0], // 禁止进行自身赋值
  'no-self-compare': [0], // 禁止自身比较
  'no-setter-return': [2], // 禁止在setter函数中return
  'no-sparse-arrays': [2], // 禁止使用稀疏数组
  'no-template-curly-in-string': [1], // 禁止在普通字符串中出现 ${} 语法
  'no-this-before-super': [2], // 不允许在super()前使用this关键字
  'no-undef': [1], // 禁止使用未声明的变量或函数
  'no-unexpected-multiline': [1], // 禁止出现意外的多行（强制要求加分号）
  'no-unmodified-loop-condition': [0], // 禁止在循环中修改被循环的变量
  'no-unreachable': [2], // 禁止不可达的语句
  'no-unreachable-loop': [2], // 禁止在循环中出现不可达语句
  'no-unsafe-finally': [2], // 禁止在finally块中出现return/throw/break/continue语句
  'no-unsafe-negation': [2], // 禁止出现 if (!key in obj) 这类语句
  'no-unsafe-optional-chaining': [0], // 禁止出现不安全的可选链操作
  'no-unused-private-class-members': [1],
  'no-unused-vars': [1], // 禁止出现未使用的变量
  'no-use-before-define': [2, { functions: false, classes: false, variables: true, allowNamedExports: true, }], // 禁止在声明前使用变量
  'no-useless-backreference': [2], // 禁止正则表达式中出现无用的反引
  'require-atomic-updates': [0], // 防止出现非原子化的更新
  'use-isnan': [2], // 必须使用isNaN来判断变量是否为NaN
  'valid-typeof': [2], // 确保typeof的结果与undefined/string/number/boolean/bigint/symbol/object/function比较

  // Suggestions
  'accessor-pairs': [0], // getter/setter是否需要成对出现
  'arrow-body-style': [0], // 箭头函数函数体是否需要大括号包裹
  'block-scoped-var': [0], // 是否允许在区块外使用变量
  'camelcase': [0], // 驼峰风格还是下划线风格
  'capitalized-comments': [0], // 注释是否首字母大写
  'class-methods-use-this': [0],
}

export default function javascript(options: Options = {}): Linter.FlatConfig[] {
  return [{
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.node,
        ...globals.nodeBuiltin,
        ...(options.globals || {}),
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...rules,
      ...createNSRules(options.overrides, null),
    },
  }]
}
