module.exports = {
  extends:["plugin:prettier/recommended"],
  plugins:['prettier'],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        arrowParens: "avoid",
        bracketSpacing: true,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        jsxSingleQuote: false,
        jsxBracketSameLine: true,
        printWidth: 80,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "none",
        vueIndentScriptAndStyle: false,
      },
    ],
  },
}
