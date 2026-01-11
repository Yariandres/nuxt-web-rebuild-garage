// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],


  // Default to dark color mode
  colorMode: {
    preference: 'dark'
  },

  // App meta
  app: {
    head: {
      title: 'Web Rebuild Garage',
      meta: [
        { name: 'description', content: 'We fix broken websites like rebuild channels fix wrecked supercars. Teardown → Fix → Test Drive.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})