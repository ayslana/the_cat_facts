import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
