module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "bamboo",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  env: {
    es6: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "static-field",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-field",
          "protected-field",
          "private-field",
          "instance-field",
          "field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-method",
          "protected-method",
          "private-method",
          "instance-method",
          "method",
        ],
      },
    ],
  },
};
