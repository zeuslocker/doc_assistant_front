module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, "eslint:recommended", "plugin:react/recommended"],
  ignorePatterns: [ "*.css"],
  rules: {
    "indent": ["error", 2]
  }
}
