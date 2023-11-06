module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    /**
     * @description 값에 영향을 주는 표현식
     * @link https://eslint.org/docs/latest/rules/no-constant-binary-expression
     */
    "no-constant-binary-expression": "error",

    /**
     * @description 배열 매서드의 return
     * @link https://eslint.org/docs/latest/rules/array-callback-return
     */
    "array-callback-return": ["error", { checkForEach: true }],

    /**
     * @description 화살표 함수 본문 중괄호
     * @link https://eslint.org/docs/latest/rules/arrow-body-style
     */
    "arrow-body-style": ["error", "as-needed"],

    /**
     * @description '_' 허용
     * @link https://eslint.org/docs/latest/rules/camelcase
     */
    camelcase: "error",

    /**
     * @description 일관된 반환
     * @link https://eslint.org/docs/latest/rules/consistent-return
     */
    "consistent-return": "error",

    /**
     * @description 제어문에 일관된 중괄호
     * @link https://eslint.org/docs/latest/rules/curly
     */
    curly: "error",

    /**
     * @description 스위치 문에서 default문 위치
     * @link https://eslint.org/docs/latest/rules/default-case-last
     */
    "default-case-last": "error",

    /**
     * @description 점 표기법
     * @link https://eslint.org/docs/latest/rules/dot-notation
     */
    "dot-notation": "error",

    /**
     * @description ===, !== 연산자
     * @link https://eslint.org/docs/latest/rules/eqeqeq
     */
    eqeqeq: "error",

    /**
     * @description console
     * @link https://eslint.org/docs/latest/rules/eqeqeq
     */
    "no-console": ["error", { allow: ["warn", "error"] }],

    /**
     * @description if문 반환 후의 else문
     * @link https://eslint.org/docs/latest/rules/no-else-return
     */
    "no-else-return": "error",

    /**
     * @description 빈 block문
     * @link https://eslint.org/docs/latest/rules/no-else-return
     */
    "no-empty": "error",

    /**
     * @description 빈 함수
     * @link https://eslint.org/docs/latest/rules/no-empty-function
     */
    "no-empty-function": "error",

    /**
     * @description  템플릿 리터럴
     * @link https://eslint.org/docs/latest/rules/prefer-template
     */
    "prefer-template": "error",

    /**
     * @description await 표현식
     * @link https://eslint.org/docs/latest/rules/require-await
     */
    "require-await": "error",

    /**
     * @description yoda 조건
     * @link https://eslint.org/docs/latest/rules/yoda
     */
    yoda: "error",
  },
};
