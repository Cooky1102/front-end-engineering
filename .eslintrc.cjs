require('@rushstack/eslint-patch/modern-module-resolution')
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style')

module.exports = {
  root: true,
  extends: [
    'plugin:yushu/recommended',
    'plugin:sonarjs/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    }
  },
  rules: {
    'no-restricted-syntax': [
      // airbnb-base 已包含 ForInStatement、ForOfStatement、LabeledStatement、WithStatement
      ...baseStyleRules['no-restricted-syntax'],
      {
        selector: "BinaryExpression[operator='in']",
        message:
          '禁止使用 in 运算符，in 运算符在 JavaScript 中有一些特殊的行为，可能会引起一些误解和潜在的问题。' +
          '对于对象的属性检查，推荐使用 hasOwnProperty() 方法；对于数组的值检查，推荐使用 Array.prototype.includes() 或 Array.prototype.indexOf() 方法。'
      },
      {
        selector: 'SequenceExpression',
        message:
          '禁止使用逗号操作符（逗号运算符）。逗号操作符可以用于在表达式中多个表达式的序列，但它会返回最后一个表达式的结果，可能导致意外的结果和代码难以理解。' +
          '应该使用独立的语句或多个语句来表达复杂逻辑。'
      },
      {
        selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
        message: 'setTimeout必须总是带两个参数调用。'
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        distinctGroup: true,
        warnOnUnassignedImports: true
      }
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        bundledDependencies: false,
        peerDependencies: false
      }
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'warn'
  },
  overrides: [
    {
      files: ['**/__tests__/*'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'no-restricted-globals': 'off'
      }
    }
  ]
}
