// @ts-check
import tseslint from 'typescript-eslint';
import typescript from './typescript.js';
import angular from 'angular-eslint';

export default tseslint.config(
  ...typescript,
  {
    name: 'blackcomb-defaults Angular TypeScript',
    files: [
      '**/*.ts'
    ],
    extends: [
      ...angular.configs.tsRecommended
    ],
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
