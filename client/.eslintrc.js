const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off', // ignore this as it's not currently working right with builtins
    'import/no-unresolved': 'off', // Doesn't do webpack resolves very well
  },
};
