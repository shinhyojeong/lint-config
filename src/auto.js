export default {
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
  extends: ['@shinhyojeong/import', '@shinhyojeong/base'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', '@shinhyojeong/typescript'],
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {}
        }
      }
    }
  ]
}
