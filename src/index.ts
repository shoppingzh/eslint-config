import type { Linter } from 'eslint'

interface ConfigItem {
  rules: Linter.RulesRecord
}

interface Configs {
  javascript: ConfigItem
  stylistic: ConfigItem
}


export const configs: Configs = {
  javascript: {
    rules: {
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
      'no-use-before-define': [2, { functions: false, classes: false, variables: true, allowNamedExports: true }], // 禁止在声明前使用变量
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
  },
  stylistic: {
    rules: {
      '@stylistic/array-bracket-newline': [2, 'consistent'], // 数组括号换行
      '@stylistic/array-bracket-spacing': [0], // 数组括号空格
      '@stylistic/array-element-newline': [2, 'consistent'], // 数组元素换行
      '@stylistic/arrow-parens': [0], // 箭头函数参数空格
      '@stylistic/arrow-spacing': [2], // 箭头函数箭头前后空格
      '@stylistic/block-spacing': [2], // 单行区块{}的空格
      '@stylistic/brace-style': [2], // 缩进风格
      '@stylistic/comma-dangle': [0], // 拖尾逗号
      '@stylistic/comma-spacing': [2, { before: false, after: true }], // 逗号空格
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
      '@stylistic/no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }], // 空行的最大数量
      '@stylistic/no-tabs': [2], // 不允许使用tab
      '@stylistic/no-trailing-spaces': [2, { skipBlankLines: false, ignoreComments: true, }], // 不允许拖尾的空格
      '@stylistic/no-whitespace-before-property': [2], // 不允许属性前出现空格
      '@stylistic/nonblock-statement-body-position': [2, 'beside', { overrides: {} }], // 非块状语句体（单行语句）的位置
      '@stylistic/object-curly-newline': [2, { consistent: true }], // 对象大括号是否换行
      '@stylistic/object-curly-spacing': [2, 'always'], // 对象大括号前后的空格
      '@stylistic/object-property-newline': [0], // TODO 
      '@stylistic/one-var-declaration-per-line': [0], // 
      '@stylistic/operator-linebreak': [2, 'before'], // 换行时操作符的位置
      '@stylistic/padded-blocks': [2, { classes: 'always' }], // 区块间是否有空行
      '@stylistic/padding-line-between-statements': [0], // 
      '@stylistic/quote-props': [0], // 
      '@stylistic/quotes': [2, 'single'], // 字符串是单引号还是双引号
      '@stylistic/rest-spread-spacing': [2, 'never'], // 剩余参数...后面是否需要空格
      '@stylistic/semi': [2, 'never'], // 语句末是否需要分号
      '@stylistic/semi-spacing': [2, { before: false, after: false }], // 分号前后的空格
      '@stylistic/semi-style': [2, 'last'], // 分号风格，是在句末还是新行的行首
      '@stylistic/space-before-blocks': [2, 'always'], // 区块的{前是否需要空格
      '@stylistic/space-before-function-paren': [2, 'never'], // 函数声明括号前是否需要空格
      '@stylistic/space-in-parens': [1, 'never'], // 括号()前后是否需要空格，如func( 1, 2 )
      '@stylistic/space-infix-ops': [2], // 运算符前后的空格 
      '@stylistic/space-unary-ops': [2, { words: true, nonwords: false, overrides: {} }], // 操作符前后的空格
      '@stylistic/spaced-comment': [0], // 
      '@stylistic/switch-colon-spacing': [2, { before: false, after: true }], // case语句:前后的空格
      '@stylistic/template-curly-spacing': [0], // 字符串模板${}中{}前后的空格
      '@stylistic/template-tag-spacing': [1, 'never'], // 字符串模板标签后是否需要空格
      '@stylistic/type-annotation-spacing': [0], // 
      '@stylistic/type-generic-spacing': [0], // 
      '@stylistic/type-named-tuple-spacing': [0], // 
      '@stylistic/wrap-iife': [2, 'inside'], // iife的包裹风格
      '@stylistic/wrap-regex': [0], // 正则表达式字面量的包裹风格，是否需要空格包裹
      '@stylistic/yield-star-spacing': [2, { before: true, after: false }], // yield中的*前后的空格
    }
  },
}
