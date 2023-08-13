module.exports = {
  extends: ['plugin:blackcomb-defaults/typescript'],
  overrides: [
    {
      files: [
        '*.ts'
      ],
      plugins: [
        '@angular-eslint'
      ],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/recommended--extra',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      rules: {
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-output-native': 'error'
      }
    },
    {
      files: [
        '*.html'
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended'
      ],
      parser: '@angular-eslint/template-parser',
      plugins: [
        '@angular-eslint/template'
      ],
      rules: {
        '@angular-eslint/template/no-negated-async': 'error'
      }
    }
  ]
};
