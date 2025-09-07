// @ts-check
import typescript from './typescript.js';
import angular from 'angular-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...typescript,
  {
    name: 'blackcomb-defaults Angular TypeScript',
    files: [
      '**/*.ts'
    ],
    // @ts-expect-error -- Types of angular-eslint are not fully compatible yet.
    extends: angular.configs.tsRecommended,
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-output-native': 'error',
      'new-cap': ['error', { capIsNew: false }] // because of Angular decorators such as @Injectable
    }
  },
  {
    name: 'blackcomb-defaults Angular HTML',
    files: [
      '**/*.html'
    ],
    extends: [
      ...angular.configs.templateRecommended
    ],
    rules: {
      '@angular-eslint/template/no-negated-async': 'error'
    }
  }
);
