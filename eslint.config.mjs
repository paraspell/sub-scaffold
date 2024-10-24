import withNuxt from './.nuxt/eslint.config.mjs'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default withNuxt(...vueI18n.configs['flat/recommended'], {
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^9.0.0',
    },
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-empty': 'error',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    '@intlify/vue-i18n/no-raw-text': 'off',
  },
})
