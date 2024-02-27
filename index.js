module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  extends: ['./src/import', './src/base', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', './src/typescript'],
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {}
        }
      }
    }
  ]
}
