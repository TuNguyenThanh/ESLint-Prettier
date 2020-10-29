module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    radix: 0,
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        comments: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import\\W.*'
      }
    ],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'never'],
    'react/self-closing-comp': ['error'],
    'no-mixed-spaces-and-tabs': 0,
    'no-shadow': 0,
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-sparse-arrays': 'error',
    'no-multi-spaces': 'error',
    'no-useless-escape': 'error',
    'no-extra-boolean-cast': 'error',
    'block-scoped-var': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'template-curly-spacing': 'error',
    'default-case': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-style': ['off', 'expression', { allowArrowFunctions: true }],
    'key-spacing': ['error', { beforeColon: false }],
    'keyword-spacing': ['error', { before: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'error'
  }
}
