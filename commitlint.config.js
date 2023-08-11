module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 80],
    'body-empty': [2, 'always'],
    'footer-empty': [2, 'always']
  }
}
