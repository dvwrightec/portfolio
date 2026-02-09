// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/icon'],
  // Nuxt 4 does not resolve aliases like ~ or @ in this css array,
  // so we use a relative path from the project root instead.
  // css: ['./assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    },
  },
  i18n: {
    locales: [
      {'code': 'en', language: 'en-US', },
      {'code': 'es', language: 'fr-FR',},
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
})