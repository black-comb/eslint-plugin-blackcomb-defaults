// @ts-check
import tseslint from 'typescript-eslint';
import typescript from './typescript.js';

export default tseslint.config(
  ...typescript,
  {
    name: 'blackcomb-defaults Angular TypeScript',
    files: [
      '*.ts'
    ],
    plugins: {
      //'@angular-eslint'
      // !MaMa! "@angular-eslint/eslint-plugin": "^18"
    },
    // extends: [
    //   'plugin:@angular-eslint/recommended',
    //   'plugin:@angular-eslint/recommended--extra',
    //   'plugin:@angular-eslint/template/process-inline-templates'
    // ],
    rules: {
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-output-native': 'error'
    }
  },
  {
    name: 'blackcomb-defaults Angular HTML',
    files: [
      '*.html'
    ],
    extends: [
      //'plugin:@angular-eslint/template/recommended'
      // !MaMa! "@angular-eslint/eslint-plugin": "^18"
    ],
    languageOptions: {
      // parser: '@angular-eslint/template-parser',
    },
    plugins: {
      // '@angular-eslint/template'
    },
    rules: {
      '@angular-eslint/template/no-negated-async': 'error'
    }
  }
);
