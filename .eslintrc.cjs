module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    eqeqeq: 0,
    'no-use-before-define': 0,
  },
};
