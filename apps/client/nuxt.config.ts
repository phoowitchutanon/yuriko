import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'Yuriko | Alternative frontend for VNDB website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'imagemode', content: 'force' },
      { name: 'theme-color', content: '#FFFFFF' },
      { name: 'layoutmode', content: 'fitscreen/standard' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'apple-mobile-web-app-title', content: 'Yuriko' },

      { name: 'msapplication-starturl', content: '/' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'msapplication-tooltip', content: 'Yuriko' },
      { name: 'application-name', content: 'Yuriko' },

      { name: 'full-screen', content: 'yes' },
      { name: 'browsermode', content: 'application' },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1920' },
      { hid: 'og:image:height', name: 'og:image:height', content: '1080' },
      { hid: 'og:url', name: 'og:url', content: 'https://yuriko.gusbell.tech' },
      { hid: 'og:title', name: 'og:title', content: 'Yuriko' },
      { hid: 'description', name: 'description', content: 'Alternative frontend for VNDB website' },
      { hid: 'og:description ', name: 'og:description', content: 'Alternative frontend for VNDB website' },
      { hid: 'og:image', name: 'og:image', content: '/og_img.png' },
      { hid: 'keywords', name: 'keywords', content: ['yuriko', 'vndb', 'visual novels'] },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
    ],
  },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  css: ['~/assets/css/global.css'],

  plugins: [],

  modules: [
    'nuxt-graphql-client',
    '@vueuse/nuxt',
  ],

  buildModules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
  ],

  typescript: { shim: false },

  windicss: { analyze: true },

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.BASE_URL || 'https://api.gusbell.tech:10727/graphql', // overwritten by process.env.GQL_HOST
    },
  },
})
