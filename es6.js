module.exports = {
  extends: ['./index.js', 'plugin:react/recommended'],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    "react"
  ]
};
