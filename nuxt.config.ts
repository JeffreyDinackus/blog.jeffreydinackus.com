export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})