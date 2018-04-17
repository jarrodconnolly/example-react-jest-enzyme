module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    'react',
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      files: [
        '**/*.test.jsx',
      ],
      globals: {
        React: true,
        mount: true,
        shallow: true,
        render: true,
      },
    },
  ],
};
