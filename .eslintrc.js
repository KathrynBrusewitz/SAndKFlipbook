module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react", "@typescript-eslint", "jest"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: false,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
  },
};
