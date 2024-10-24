// https://v3.nuxtjs.org/api/configuration/nuxt.config
import VueI18nPlugin from '@intlify/unplugin-vue-i18n'

export default defineNuxtConfig({
  compatibilityDate: '2024-07-16',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  vite: {
    build: {
      sourcemap: 'hidden',
    },
    plugins: [
      VueI18nPlugin.vite({
        include: ['./locales/**'],
      }),
    ],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
  },

  typescript: {
    strict: true,
  },
  ssr: false,
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
