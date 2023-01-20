module.exports = {
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

    // Format
    'array-bracket-newline': [2, 'consistent'], // 数组括号换行
    'array-bracket-spacing': [0], // 数组括号空格
    'array-element-newline': [2, 'consistent'], // 数组元素换行
    'arrow-parens': [0], // 箭头函数参数空格
    'arrow-spacing': [2], // 箭头函数箭头前后空格
    'block-spacing': [2], // 单行区块{}的空格
    'brace-style': [2], // 缩进风格
    'comma-dangle': [0], // 拖尾逗号
    'comma-spacing': [2, { before: false, after: true }], // 逗号空格
    'comma-style': [2, 'last'], // 逗号风格：在前或在后
    'computed-property-spacing': [2, 'never'], // 对象的计算属性的空格，如a[ b ]
    'dot-location': [2, 'property'], // .的位置，在对象后还是在属性前
    'eol-last': [2], // 文件的最后是否有空行
    'func-call-spacing': [2, 'never'], // 函数调用括号前的空格
    'function-call-argument-newline': [2, 'consistent'], // 函数调用参数是否换行
    'function-paren-newline': [2, 'consistent'], // 函数声明的括号是否换行
    'generator-star-spacing': [0], // 生成器函数*的空格的位置
    'implicit-arrow-linebreak': [2, 'beside'], // 隐式返回的箭头函数是否换行
    'indent': [2, 2], // 缩进空格数
    'jsx-quotes': [2, 'prefer-double'], // JSX属性的引号是单引还是双引
    'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict', }], // 对象键冒号前后的空格
    'keyword-spacing': [2, { before: true, after: true, }], // 关键字前后的空格
    'line-comment-position': [0], // 注释位置
    'linebreak-style': [2, 'unix'], // 换行风格是unix还是windows
    'lines-around-comment': [0], // 注释的周围是否要有空行
    'lines-between-class-members': [2, 'always'], // 类成员上下是否要有空行
    'max-len': [0], // 文件最大的行字符数
    'max-statements-per-line': [0], // 每行最大的语句数
    'multiline-ternary': [0], // 三元表达式是否多行
    'new-parens': [2, 'always'], // new关键字后的构造函数是否需要括号
    'newline-per-chained-call': [0], // 链式调用是否多行
    'no-extra-parens': [0], // 不允许出现多余的括号
    'no-mixed-spaces-and-tabs': [2], // 不允许混用tab和空格
    'no-multi-spaces': [2], // 不允许多余的空格
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }], // 空行的最大数量
    'no-tabs': [2], // 不允许使用tab
    'no-trailing-spaces': [2, { skipBlankLines: false, ignoreComments: true, }], // 不允许拖尾的空格
    'no-whitespace-before-property': [2], // 不允许属性前出现空格
    'nonblock-statement-body-position': [2, 'beside', { overrides: {} }], // 非块状语句体（单行语句）的位置
    'object-curly-newline': [2, { consistent: true }], // 对象大括号是否换行
    'object-curly-spacing': [2, 'always'], // 对象大括号前后的空格
    'object-property-newline': [0], // TODO 
    'operator-linebreak': [2, 'before'], // 换行时操作符的位置
    'padded-blocks': [2, { classes: 'always' }], // 区块间是否有空行
    'quotes': [2, 'single'], // 字符串是单引号还是双引号
    'rest-spread-spacing': [2, 'never'], // 剩余参数...后面是否需要空格
    'semi': [2, 'always'], // 语句末是否需要分号
    'semi-spacing': [2, { before: false, after: false }], // 分号前后的空格
    'semi-style': [2, 'last'], // 分号风格，是在句末还是新行的行首
    'space-before-blocks': [2, 'always'], // 区块的{前是否需要空格
    'space-before-function-paren': [2, 'never'], // 函数声明括号前是否需要空格
    'space-in-parens': [1, 'never'], // 括号()前后是否需要空格，如func( 1, 2 )
    'space-infix-ops': [2], // 运算符前后的空格
    'space-unary-ops': [2, { words: true, nonwords: false, overrides: {} }], // 操作符前后的空格
    'switch-colon-spacing': [2, { before: false, after: true }], // case语句:前后的空格
    'template-curly-spacing': [0], // 字符串模板${}中{}前后的空格
    'template-tag-spacing': [1, 'never'], // 字符串模板标签后是否需要空格
    'unicode-bom': [0], // 是否需要utf-8 bom
    'wrap-iife': [2, 'inside'], // iife的包裹风格
    'wrap-regex': [0], // 正则表达式字面量的包裹风格，是否需要空格包裹
    'yield-star-spacing': [2, { before: true, after: false }], // yield中的*前后的空格

    // Suggestions
    'accessor-pairs': [0], // getter/setter是否需要成对出现
    'arrow-body-style': [0], // 箭头函数函数体是否需要大括号包裹
    'block-scoped-var': [0], // 是否允许在区块外使用变量
    'camelcase': [0], // 驼峰风格还是下划线风格
    'capitalized-comments': [0], // 注释是否首字母大写
    'class-methods-use-this': [0],
  },
};
