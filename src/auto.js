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
  extends: ['./import', './base'].map((require.resolve)),
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', ...['./typescript'].map(require.resolve)],
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {}
        }
      }
    }
  ]
}
