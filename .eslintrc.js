module.exports = {
  "extends": "airbnb",
  rules: {
    semi: ["error", "never", { "beforeStatementContinuationChars": "always"}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": 0,
  },
  "parser": "babel-eslint"
};
