module.exports = {
  plugins: ["import"],
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    ecmaVersion: 2018,
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
};
