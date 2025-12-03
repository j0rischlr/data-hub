export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Données Publiques France',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portail centralisé des données publiques françaises' }
      ],
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },

  runtimeConfig: {
    public: {
      apiTimeout: 10000
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})
