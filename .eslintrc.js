'use strict';

module.exports = {
  root: true,
  extends: [
    './lib/configs/javascript.js',
    'plugin:eslint-plugin/recommended'
  ],
  env: {
    node: true
  },
  rules: {
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single']
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    }
  ]
};
