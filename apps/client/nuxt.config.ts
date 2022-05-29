import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'OMTHT2022 | osu!mania Thailand Tournament 2022',
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
      // { hid: 'og:image:width', name: 'og:image:width', content: '1440' },
      // { hid: 'og:image:height', name: 'og:image:height', content: '779' },
      { hid: 'og:url', name: 'og:url', content: 'https://yuriko.gusbell.tech' },
      { hid: 'og:title', name: 'og:title', content: 'Yuriko' },
      { hid: 'description', name: 'description', content: 'Alternative frontend for VNDB website' },
      { hid: 'og:description ', name: 'og:description', content: 'Alternative frontend for VNDB website' },
      // { hid: 'og:image', name: 'og:image', content: 'https://cdn.discordapp.com/attachments/888349851870429184/925264302166933525/og_img.png' },
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
    '@nuxtjs/partytown',
    '@dansmaculotte/nuxt-security',
  ],

  buildModules: [
    '@nuxt3-graphql/urql',
    'nuxt-windicss',
    '@vueuse/nuxt',
  ],

  typescript: { shim: false },

  windicss: { analyze: true },

  security: {
    hsts: {
      maxAge: 15552000,
      preload: true,
    },
    referrer: 'same-origin',
    securityFile: {
      contacts: [
        'https://www.gusbell.tech',
      ],
      preferredLanguages: ['th', 'en'],
    },
  },

  urql: {
    url: 'http://localhost:3333/graphql',
  },
})
