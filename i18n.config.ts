import messages from '@intlify/unplugin-vue-i18n/messages'

function englishPluralizationRule(count: number, choicesLength: number) {
  // zero, one, many
  if (choicesLength === 3) {
    if (count === 0) {
      return 0
    }
    if (count === 1) {
      return 1
    }
    return 2
  }
  // one, many
  if (choicesLength === 2) {
    return count === 1 ? 0 : 1
  }
  return 0
}

type NumberFormats = Record<string, Record<string, Intl.NumberFormatOptions>>

const numberFormats: NumberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard',
    },
  },
}

export default defineI18nConfig(() => ({
  legacy: false,
  availableLocales: ['sk-SK'],
  locale: 'sk-SK',
  pluralRules: {
    'en-US': englishPluralizationRule,
  },
  numberFormats,
  messages,
}))
