// @ts-check
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';

export default tseslint.config(
  js.configs.recommended,
  {
    name: 'blackcomb-defaults JavaScript base',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      'import': importPlugin,
      'import-newlines': importNewlines
    },
    rules: {
      'array-bracket-newline': [
        'error',
        'consistent'
      ],
      'array-bracket-spacing': 'error',
      'array-element-newline': [
        'error',
        'consistent'
      ],
      'arrow-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true
        }
      ],
      'camelcase': 'error',
      'class-methods-use-this': 'error',
      'comma-spacing': 'error',
      'computed-property-spacing': 'error',
      'consistent-return': 'error',
      'curly': [
        'error',
        'all'
      ],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'function-paren-newline': [
        'error',
        'consistent'
      ],
      'function-call-argument-newline': [
        'error',
        'consistent'
      ],
      'generator-star-spacing': ['error', 'after'],
      'grouped-accessor-pairs': 'error',
      'id-match': 'off',
      'import/no-duplicates': 'error',
      'import-newlines/enforce': [
        'error',
        {
          items: 1
        }
      ],
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1
        }
      ],
      'key-spacing': 'error',
      'max-len': [
        'error',
        {
          code: 200,
          comments: 200,
          ignoreComments: false
        }
      ],
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-console': [
        'error',
        {
          allow: [
            'warn',
            'error'
          ]
        }
      ],
      'no-constructor-return': 'error',
      'no-empty': 'warn',
      'no-empty-function': [
        'error',
        {
          allow: [
            'constructors'
          ]
        }
      ],
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-mixed-operators': 'error',
      'no-multi-spaces': 'error',
      'no-negated-condition': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'warn',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-private-class-members': 'error',
      'object-curly-newline': 'error',
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'prefer-arrow-callback': 'error',
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': ['error', 'single'],
      'require-atomic-updates': 'error',
      'semi': [
        'error',
        'always'
      ],
      'semi-style': 'error',
      'space-in-parens': 'error',
      'space-unary-ops': 'error',
      'switch-colon-spacing': 'error',
      'yield-star-spacing': 'error'
    }
  }
);
