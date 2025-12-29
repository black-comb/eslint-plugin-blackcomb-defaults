// @ts-check
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import globals from 'globals';

import javascript from './lib/configs/javascript.js';
import typescript from './lib/configs/typescript.js';
import { defineConfig } from 'eslint/config';

export default defineConfig(
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
