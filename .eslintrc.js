const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
      webpack: {
        config: path.resolve(__dirname, './scripts//webpack.base.conf.js'),
      },
    },
  },
  rules: {
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    'import/prefer-default-export': 0,

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'no-mixed-operators': 'off',
    'max-len': [1, 200],
    'default-case': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-lonely-if': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'prefer-promise-reject-errors': 'off',
    'guard-for-in': 'off',
    'no-restricted-globals': ['error', 'event'],
    'no-restricted-syntax': 'off',
    'no-use-before-define': [0],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
  },
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
};
