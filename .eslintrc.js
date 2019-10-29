// In a file called .eslintrc.js
module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-unused-vars': ['error', { vars: 'local' }],
    'react/jsx-filename-extension': 0,
  },
  plugins: ['security', 'jsx-a11y', 'react'],
};
