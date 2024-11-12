// @ts-check
import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import * as importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';

export default tseslint.config(
  js.configs.recommended,
  stylistic.configs['recommended-flat'],
  {
    name: 'blackcomb-defaults JavaScript base',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    plugins: {
      '@stylistic': stylistic,
      'import': importPlugin,
      'import-newlines': importNewlines
    },
    rules: {
      '@stylistic/array-bracket-newline': [
        'error',
        'consistent'
      ],
      '@stylistic/array-bracket-spacing': 'error',
      '@stylistic/array-element-newline': [
        'error',
        {
          consistent: true,
          multiline: true
        }
      ],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true
        }
      ],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/computed-property-spacing': 'error',
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/function-paren-newline': [
        'error',
        'multiline'
      ],
      '@stylistic/function-call-argument-newline': [
        'error',
        'consistent'
      ],
      '@stylistic/generator-star-spacing': ['error', 'after'],
      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1
        }
      ],
      '@stylistic/key-spacing': 'error',
      '@stylistic/max-len': [
        'error',
        {
          code: 200,
          comments: 200,
          ignoreComments: false
        }
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }
      ],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/object-curly-newline': 'error',
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true
        }
      ],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': [
        'error',
        'always'
      ],
      '@stylistic/semi-style': 'error',
      '@stylistic/space-in-parens': 'error',
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/yield-star-spacing': 'error',
      'camelcase': 'error',
      'class-methods-use-this': 'error',
      'consistent-return': 'error',
      'curly': [
        'error',
        'all'
      ],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'grouped-accessor-pairs': 'error',
      'id-match': 'off',
      'import/no-duplicates': 'error',
      'import-newlines/enforce': [
        'error',
        {
          items: 1
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
      'prefer-arrow-callback': 'error',
      'require-atomic-updates': 'error'
    }
  }
);
