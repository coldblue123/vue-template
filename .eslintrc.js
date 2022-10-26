module.exports = {
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'welint'],
  rules: {
    'vue/max-attributes-per-line': [2, {
      singleline: 10,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off'
  }
}
