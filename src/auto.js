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
  extends: ['plugin:@shinhyojeong/import', 'plugin:@shinhyojeong/base'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@shinhyojeong/typescript'
      ],
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {}
        }
      }
    }
  ]
}
