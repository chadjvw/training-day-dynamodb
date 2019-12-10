module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'formidable/configurations/es6-react'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': 'error',
    indent: [2, 2, { SwitchCase: 1 }],
    'max-len': 0,
    'no-magic-numbers': 0,
    'react/prefer-es6-class': 0,
    'react/no-multi-comp': 0,
    quotes: [2, 'single'],
    semi: 0
  },
  globals: {
    afterEach: true,
    describe: true,
    expect: true,
    it: true,
    jest: true,
    test: true
  }
}
