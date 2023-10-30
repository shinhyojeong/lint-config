module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "./rules/import",
    "./rules/base",
  ],
  root: true,
  plugins: ["import"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended", "./rules/typescript"],
      plugins: ["@typescript-eslint"],
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },
    },
  ],
};
