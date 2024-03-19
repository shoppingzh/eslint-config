import { OverridesOptions, } from '@/utils/types'
import { Linter, } from 'eslint'
import stylisticPlugin from '@stylistic/eslint-plugin'
import { createNSRules, } from '@/utils/rule'


interface Options extends OverridesOptions {
  files?: string[]
}

const rules: Linter.RulesRecord = {
  '@stylistic/array-bracket-newline': [2, 'consistent'], // 数组括号换行
  '@stylistic/array-bracket-spacing': [0], // 数组括号空格
  '@stylistic/array-element-newline': [2, 'consistent'], // 数组元素换行
  '@stylistic/arrow-parens': [0], // 箭头函数参数空格
  '@stylistic/arrow-spacing': [2], // 箭头函数箭头前后空格
  '@stylistic/block-spacing': [2], // 单行区块{}的空格
  '@stylistic/brace-style': [2], // 缩进风格
  '@stylistic/comma-dangle': [0], // 拖尾逗号
  '@stylistic/comma-spacing': [2, { before: false, after: true, }], // 逗号空格
  '@stylistic/comma-style': [2, 'last'], // 逗号风格：在前或在后
  '@stylistic/computed-property-spacing': [2, 'never'], // 对象的计算属性的空格，如a[ b ]
  '@stylistic/dot-location': [2, 'property'], // .的位置，在对象后还是在属性前
  '@stylistic/eol-last': [2], // 文件的最后是否有空行
  '@stylistic/func-call-spacing': [2, 'never'], // 函数调用括号前的空格
  '@stylistic/function-call-argument-newline': [2, 'consistent'], // 函数调用参数是否换行
  '@stylistic/function-call-spacing': [0], // 
  '@stylistic/function-paren-newline': [2, 'consistent'], // 函数声明的括号是否换行
  '@stylistic/generator-star-spacing': [0], // 生成器函数*的空格的位置
  '@stylistic/implicit-arrow-linebreak': [2, 'beside'], // 隐式返回的箭头函数是否换行
  '@stylistic/indent': [2, 2], // 缩进空格数
  '@stylistic/indent-binary-ops': [0], // 
  '@stylistic/jsx-child-element-spacing': [0], // 
  '@stylistic/jsx-closing-bracket-location': [0], // 
  '@stylistic/jsx-closing-tag-location': [0], // 
  '@stylistic/jsx-curly-brace-presence': [0], // 
  '@stylistic/jsx-curly-newline': [0], // 
  '@stylistic/jsx-curly-spacing': [0], // 
  '@stylistic/jsx-equals-spacing': [0], // 
  '@stylistic/jsx-first-prop-new-line': [0], // 
  '@stylistic/jsx-indent': [0], // 
  '@stylistic/jsx-indent-props': [0], // 
  '@stylistic/jsx-max-props-per-line': [0], // 
  '@stylistic/jsx-newline': [0], // 
  '@stylistic/jsx-one-expression-per-line': [0], // 
  '@stylistic/jsx-pascal-case': [0], // 
  '@stylistic/jsx-props-no-multi-spaces': [0], // 
  '@stylistic/jsx-quotes': [2, 'prefer-double'], // JSX属性的引号是单引还是双引
  '@stylistic/jsx-self-closing-comp': [0], // 
  '@stylistic/jsx-sort-props': [0], // 
  '@stylistic/jsx-tag-spacing': [0], // 
  '@stylistic/jsx-wrap-multilines': [0], // 
  '@stylistic/key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict', }], // 对象键冒号前后的空格
  '@stylistic/keyword-spacing': [2, { before: true, after: true, }], // 关键字前后的空格
  '@stylistic/linebreak-style': [0], // 换行风格是unix还是windows
  '@stylistic/lines-around-comment': [0], // 注释的周围是否要有空行
  '@stylistic/lines-between-class-members': [2, 'always'], // 类成员上下是否要有空行
  '@stylistic/max-len': [0], // 文件最大的行字符数
  '@stylistic/max-statements-per-line': [0], // 每行最大的语句数
  '@stylistic/member-delimiter-style': [0], // 
  '@stylistic/multiline-ternary': [0], // 三元表达式是否多行
  '@stylistic/new-parens': [2, 'always'], // new关键字后的构造函数是否需要括号
  '@stylistic/newline-per-chained-call': [0], // 链式调用是否多行 
  '@stylistic/no-confusing-arrow': [0], // 
  '@stylistic/no-extra-parens': [0], // 不允许出现多余的括号
  '@stylistic/no-extra-semi': [0], // 
  '@stylistic/no-floating-decimal': [0], // 
  '@stylistic/no-mixed-operators': [0], // 
  '@stylistic/no-mixed-spaces-and-tabs': [2], // 不允许混用tab和空格
  '@stylistic/no-multi-spaces': [2], // 不允许多余的空格
  '@stylistic/no-multiple-empty-lines': [2, { max: 2, maxEOF: 0, }], // 空行的最大数量
  '@stylistic/no-tabs': [2], // 不允许使用tab
  '@stylistic/no-trailing-spaces': [2, { skipBlankLines: false, ignoreComments: true, }], // 不允许拖尾的空格
  '@stylistic/no-whitespace-before-property': [2], // 不允许属性前出现空格
  '@stylistic/nonblock-statement-body-position': [2, 'beside', { overrides: {}, }], // 非块状语句体（单行语句）的位置
  '@stylistic/object-curly-newline': [2, { consistent: true, }], // 对象大括号是否换行
  '@stylistic/object-curly-spacing': [2, 'always'], // 对象大括号前后的空格
  '@stylistic/object-property-newline': [0], // TODO 
  '@stylistic/one-var-declaration-per-line': [0], // 
  '@stylistic/operator-linebreak': [2, 'before'], // 换行时操作符的位置
  '@stylistic/padded-blocks': [2, { classes: 'always', }], // 区块间是否有空行
  '@stylistic/padding-line-between-statements': [0], // 
  '@stylistic/quote-props': [0], // 
  '@stylistic/quotes': [2, 'single'], // 字符串是单引号还是双引号
  '@stylistic/rest-spread-spacing': [2, 'never'], // 剩余参数...后面是否需要空格
  '@stylistic/semi': [2, 'never'], // 语句末是否需要分号
  '@stylistic/semi-spacing': [2, { before: false, after: false, }], // 分号前后的空格
  '@stylistic/semi-style': [2, 'last'], // 分号风格，是在句末还是新行的行首
  '@stylistic/space-before-blocks': [2, 'always'], // 区块的{前是否需要空格
  '@stylistic/space-before-function-paren': [2, 'never'], // 函数声明括号前是否需要空格
  '@stylistic/space-in-parens': [1, 'never'], // 括号()前后是否需要空格，如func( 1, 2 )
  '@stylistic/space-infix-ops': [2], // 运算符前后的空格 
  '@stylistic/space-unary-ops': [2, { words: true, nonwords: false, overrides: {}, }], // 操作符前后的空格
  '@stylistic/spaced-comment': [0], // 
  '@stylistic/switch-colon-spacing': [2, { before: false, after: true, }], // case语句:前后的空格
  '@stylistic/template-curly-spacing': [0], // 字符串模板${}中{}前后的空格
  '@stylistic/template-tag-spacing': [1, 'never'], // 字符串模板标签后是否需要空格
  '@stylistic/type-annotation-spacing': [0], // 
  '@stylistic/type-generic-spacing': [0], // 
  '@stylistic/type-named-tuple-spacing': [0], // 
  '@stylistic/wrap-iife': [2, 'inside'], // iife的包裹风格
  '@stylistic/wrap-regex': [0], // 正则表达式字面量的包裹风格，是否需要空格包裹
  '@stylistic/yield-star-spacing': [2, { before: true, after: false, }], // yield中的*前后的空格
}

export function stylistic(options: Options = {}): Linter.FlatConfig[] {
  return [{
    // files: options.files || ['**/*'],
    plugins: {
      '@stylistic': stylisticPlugin as any,
    },
    rules: {
      ...rules,
      ...createNSRules(options.overrides, '@stylistic'),
    },
  }]
}
