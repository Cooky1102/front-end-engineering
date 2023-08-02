require('@rushstack/eslint-patch/modern-module-resolution')
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style')
const {
  settings: baseImportsSettings,
  rules: baseImportsRules
} = require('eslint-config-airbnb-base/rules/imports')

module.exports = {
  root: true,
  plugins: ['sonarjs', 'yushu'],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:yushu/recommended',
    'plugin:sonarjs/recommended', // View configuration: https://github.com/SonarSource/eslint-plugin-sonarjs
    'airbnb-base', // View configuration: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting' // 关闭所有不必要的或可能与 Prettier 冲突的规则 (https://www.npmjs.com/package/eslint-config-prettier)
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    // airbnb-base 已包含 ['.mjs', '.js', '.json']
    'import/resolver': {
      node: {
        extensions: [
          ...baseImportsSettings['import/resolver'].node.extensions,
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  rules: {
    // 'no-restricted-globals'
    // (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js)
    // (https://www.npmjs.com/package/confusing-browser-globals)

    semi: 'off', // 覆盖Airbnb-base, 与 prettier 一致
    'no-shadow': 'warn',
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

    /*
    eslint-config-import (https://github.com/import-js/eslint-plugin-import)
    此处没有显式配置, airbnb-base > plugins 配置了 'import'
    */
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        distinctGroup: true,
        warnOnUnassignedImports: true
      }
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      /* eslint-disable */
      baseImportsRules['import/extensions'][0],
      baseImportsRules['import/extensions'][1],
      {
        ...baseImportsRules['import/extensions'][2],
        ts: 'never',
        tsx: 'never'
      }
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    // forbid default exports - we want to standardize on named exports so that imported names are consistent
    'import/no-default-export': 'error',

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

    /*
    eslint-config-prettier (https://github.com/prettier/eslint-plugin-prettier)
    */
    'prettier/prettier': 'warn'
  },
  // overrides: [
  //   {
  //     files: ['**/__tests__/*'],
  //     rules: {
  //       'no-restricted-syntax': 'off'
  //     }
  //   }
  // ],
  overrides: [
    {
      files: ['**/__tests__/*'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'no-restricted-globals': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
        // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
        // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'valid-typeof': 'off',
        // The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
        // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
        // Disable `import/no-unresolved`
        // It requires additional configuration, which may be different for monorepo's, webpack usage, etc
        // The rule offers little value in a TypeScript world, as the TypeScript compiler will catch these errors
        'import/no-unresolved': 'off'
      }
    }
  ]
}
