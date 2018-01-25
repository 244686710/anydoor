module.exports = {
  "extends": ["eslint:recommoneded"],
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVarsion": 6,
    "sourceType": "script"
  },
  // "globals": {
  //   "window": true
  // },
  "env": {
    "node": true,
    "es6": true,
    "nocha": true
  }
}
