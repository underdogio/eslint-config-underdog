eslint-config-underdog
======================
[![Build Status](https://travis-ci.org/underdogio/eslint-config-underdog.svg?branch=master)](https://travis-ci.org/underdogio/eslint-config-underdog)
[![npm version](https://badge.fury.io/js/eslint-config-underdog.svg)](http://badge.fury.io/js/eslint-config-underdog)

Base [ESLint](http://eslint.org/) config for Underdog.io's JavaScript code.

## Usage
Install this package as a dev dependency:

```bash
npm install --save-dev eslint-config-underdog
```

Use this config as the base for your `eslintrc` config:

```
{
  "extends: "underdog",
  "rules": {
  }
}
```

### ES6

If you would like to use ES6 or JSX, extend from the `ES6` config:

```
{
  "extends: "underdog/es6",
  "rules": {
  }
}
```
