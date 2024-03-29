module.exports = {
  plugins: [
    'jest',
    'babel',
  ],
  env: {
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  rules: {
    'no-console': 0,
  },
};
