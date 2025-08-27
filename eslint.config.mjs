// @ts-check
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import javascript from './lib/configs/javascript.js';
import typescript from './lib/configs/typescript.js';

export default tseslint.config(
  ...javascript,
  ...typescript,
  eslintPlugin.configs.recommended,
  {
    name: 'blackcomb-defaults project base',
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': ['error', 'single']
    }
  },
  {
    name: 'blackcomb-defaults project tests',
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }
);
