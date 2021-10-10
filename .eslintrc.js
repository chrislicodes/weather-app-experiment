module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist/*.*"],
  rules: {},
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.tsx", "**/*.ts"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
