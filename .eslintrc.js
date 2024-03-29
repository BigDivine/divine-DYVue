// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    vue: true,
    wx: true,
    validate: true,
    toolCodeArr: true
    // onMenuShareAppMessage: true,
    // onMenuShareTimeline: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    //0|'off'，不启用这个规则   1|'warn'，出现问题会有警告   2|'error'，出现问题会报错
    semi: 'off', // 行尾使用分号
    quotes: ['error', 'single'], //引号类型 `` "" ''
    'comma-dangle': 'error', //是否允许对象中出现结尾逗号
    'use-isnan': 'error', //要求检查NaN的时候使用isNaN()
    'no-console': 'off',
    'no-useless-escape': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }], //空行最多不能超过两行
    'no-redeclare': 'error', //不允许变量重复声明
    'no-label-var': 'error', //不允许标签和变量同名
    'no-var': 'warn', //禁用var，用let和const代替
    'no-dupe-keys': 'error', //对象中不允许出现重复的键
    'no-unused-vars': ['error', { args: 'none' }], //消除未使用的变量  不检查函数的参数
    'no-spaced-func': 'off', //函数调用时 函数名与()之间不能有空格
    'fun-call-spacing': 'off', //函数调用时，函数名与()之间有空格
    'space-before-function-paren': 'off', //函数定义时括号前面要不要有空格
    'spaced-comment': 'off' //Expected space or tab after '//' in comment

    // "indent": ["error", 2, { "SwitchCase": 1 }],
    // "no-cond-assign": 2, //条件语句的条件中不允许出现赋值运算符
    // "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
    // "no-extra-semi": 2, //不允许出现不必要的分号
    // "no-regex-spaces": 2, //正则表达式中不允许出现多个连续空格
    // "no-unreachable": 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
    // "no-alert": 1, //不允许使用alert，confirm，prompt语句
    // "no-caller": 2, //不允许使用arguments.callee和arguments.caller属性
    // "no-multi-spaces": 2, //不允许出现多余的空格
    // "no-sequences": 2, //不允许使用逗号表达式
    // "no-trailing-spaces": 2, //一行最后不允许有空格
    // "no-extra-parens": 0, //不允许出现多余的括号
    // "space-before-blocks": [2, "always"], //块前的空格
    // "eqeqeq": 0,  // == 验证
    // "padded-blocks": [2, "never"],
    // "arrow-spacing": [2, { "before": true, "after": true }],  //箭头函数空格限制
    //  "no-undef": 2,  //任何对未声明的变量的引用都会导致警告
    // "prefer-promise-reject-errors": 0,
    // "no-dupe-args": 2,//函数参数不能重复
    // "no-irregular-whitespace": 2,//不能有不规则的空格
  }
};
