// In a file called .eslintrc.js
module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['graphql', 'security', 'jest', 'jsx-a11y', 'react']
};