module.exports = {
  "extends": "airbnb",
  rules: {
    semi: ["error", "never", { "beforeStatementContinuationChars": "always"}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "parser": "babel-eslint"
};
