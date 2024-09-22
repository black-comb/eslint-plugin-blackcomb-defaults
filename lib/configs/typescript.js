// @ts-check
import tseslint from 'typescript-eslint';
import javascript from './javascript.js';
import deprecation from 'eslint-plugin-deprecation';
import { fixupPluginRules } from '@eslint/compat';

export default tseslint.config(
  ...javascript,
  ...tseslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  {
    name: 'blackcomb-defaults TypeScript base',
    files: [
      '**/*.ts'
    ],
    plugins: {
      // @ts-ignore
      deprecation: fixupPluginRules(deprecation)
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': [
        'error',
        'interface'
      ],
      '@typescript-eslint/consistent-type-exports': 'error',
      //'@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      // !MaMa! @stylistic/eslint-plugin-js '@typescript-eslint/key-spacing': 'error',
      // !MaMa! @stylistic/eslint-plugin-js '@typescript-eslint/keyword-spacing': 'error',
      // !MaMa! @stylistic/eslint-plugin-js '@typescript-eslint/member-delimiter-style': [
      //   'error',
      //   {
      //     singleline: {
      //       delimiter: 'comma',
      //       requireLast: false
      //     }
      //   }
      // ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'static-field',
            'instance-field',
            'constructor',
            'method'
          ]
        }
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: [
            'strictCamelCase'
          ],
          filter: {
            regex: '^(_|\\d+)$',
            match: false
          }
        },
        {
          selector: 'typeLike',
          format: [
            'StrictPascalCase'
          ]
        },
        {
          selector: 'objectLiteralProperty',
          format: [
            'strictCamelCase',
            'StrictPascalCase'
          ],
          filter: {
            regex: '^\\d+$',
            match: false
          }
        },
        {
          selector: 'typeParameter',
          format: [
            'PascalCase'
          ]
        }
      ],
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      // !MaMa! @stylistic/eslint-plugin-js '@typescript-eslint/space-infix-ops': 'error',
      // !MaMa! Continue with typescript-eslint rules.
      'deprecation/deprecation': 'error',
      'dot-notation': 'off'
    }
  },
  {
    name: 'blackcomb-defaults TypeScript specs',
    files: [
      '**/*.spec.ts'
    ],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'off'
    }
  },
  {
    name: 'blackcomb-defaults TypeScript typespecs',
    files: [
      '**/*.typespec.ts',
      'samples/**/*.ts'
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
);
