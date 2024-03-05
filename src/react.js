export default {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },
  settings: {
    react: {
      version: "detect",
    },x
  },
  extends: ["plugin:react/recommended"],
  rules: {
    /**
     * @description boolean 값 전달 형식
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    "react/jsx-boolean-value": "error",

    /**
     * @description element와 text 사이 공백
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     */
    "react/jsx-child-element-spacing": "error",

    /**
     * @description JSX 요소에 닫는 태그 위치
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     */
    "react/jsx-closing-tag-location": "error",

    /**
     * @description JSX props 중괄호
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],

    /**
     * @description 명확한 조건부 렌더링
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
     */
    "react/jsx-no-leaked-render": "error",

    /**
     * @description 불필요한 fragment
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    "react/jsx-no-useless-fragment": "error",

    /**
     * @description JSX 줄바꿈
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    "react/jsx-one-expression-per-line": ["error", { allow: "literal" }],

    /**
     * @description JSX props 정렬
     * @linkhttps://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        reservedFirst: ["key"],
      },
    ],

    /**
     * @description JSX 괄호로 묶기
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     */
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],

    /**
     * @description 컴포넌트 self closing
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],

    /**
     * @description style prop 객체
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    "react/style-prop-object": "error",

    /**
     * @description react scope
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    "react/react-in-jsx-scope": "off",

    /**
     * @description React 사용 확인
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     */
    "react/jsx-uses-react": "off",

    /**
     * @description 변수 사용 확인
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    "react/no-unused-vars": "off",
  },
};
