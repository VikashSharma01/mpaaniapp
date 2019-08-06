module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 6,
    SourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style" : "off"
  },
};
