export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})