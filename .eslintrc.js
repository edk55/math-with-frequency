module.exports = {
  parser: '@typescript-eslint/parser',
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/explicit-member-accessibility': ['error'], // public method
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-extra-non-null-assertion': 1,
    '@typescript-eslint/no-extra-semi': 1,
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-parameter-properties': 1,
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
