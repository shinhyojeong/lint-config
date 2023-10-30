module.exports = {
  rules: {
    /**
     * @description 일관된 type표명
     * @link https://typescript-eslint.io/rules/consistent-type-assertions
     */
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
    ],

    /**
     * @description 일관된 import
     * @link https://typescript-eslint.io/rules/consistent-type-imports
     */
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "separate-type-imports",
      },
    ],

    /**
     * @description 일관된 method
     * @link https://typescript-eslint.io/rules/method-signature-style
     */
    "@typescript-eslint/method-signature-style": "error",

    /**
     * @description 이름 컨벤션
     * @link https://typescript-eslint.io/rules/naming-convention
     */
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],

    /**
     * @description 빈 interface
     * @link https://typescript-eslint.io/rules/no-empty-interface
     */
    "@typescript-eslint/no-empty-interface": "error",

    /**
     * @description any 사용
     * @link https://typescript-eslint.io/rules/no-explicit-any
     */
    "@typescript-eslint/no-explicit-any": "warn",

    /**
     * @description string, number, boolean으로 초기화된 타입 명시
     * @link https://typescript-eslint.io/rules/no-inferrable-types
     */
    "@typescript-eslint/no-inferrable-types": "error",

    /**
     * @description 빈 export
     * @link https://typescript-eslint.io/rules/no-useless-empty-export
     */
    "@typescript-eslint/no-useless-empty-export": "error",

    /**
     * @description function type
     * @link https://typescript-eslint.io/rules/prefer-function-type
     */
    "@typescript-eslint/prefer-function-type": "error",
  },
};
