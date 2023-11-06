module.exports = {
  extends: ["plugin:import/recommended"],
  rules: {
    /**
     * @description 빈 import block
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
     */
    "import/no-empty-named-blocks": "error",

    /**
     * @description package 상대경로로 import
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md9o
     */
    "import/no-relative-packages": "error",

    /**
     * @description 불필요한 경로 제거
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     */
    "import/no-useless-path-segments": "error",

    /**
     * @description 일관된 type import
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
     */
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

    /**
     * @description import 위치
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    "import/first": "error",

    /**
     * @description import 후의 여백
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    "import/newline-after-import": "error",

    /**
     * @description 중복된 import
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     */
    "import/no-duplicates": "error",

    /**
     * @description import 순서
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        groups: [
          ["builtin", "external", "internal"],
          ["parent", "sibling", "index"],
          "type",
        ],
      },
    ],
  },
};
