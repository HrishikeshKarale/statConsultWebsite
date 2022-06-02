export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'statConsultWebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  //
  fontawesome: {
    icons: {
      solid: ['faChevronDown', 'faPhone'],
      regular: [],
      brands: ['faTwitter', 'faInstagram']
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',

    // https://stackoverflow.com/questions/67866467/how-to-add-font-awesome-to-vue-and-nuxt-js-project
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // https://firebase.nuxtjs.org/guide/getting-started
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_API_KEY | "",
          authDomain: process.env.FIREBASE_AUTH_DOMAIN | "",
          projectId: process.env.FIREBASE_PROJECT_ID | "",
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET | "",
          messagingSenderId: process.env.FIREBASE_MESSAGINS_SENDER_ID | "",
          appId: process.env.FIREBASE_APP_ID | "",
          measurementId: process.env.FIREBASE_MEASUREMENT_ID | "",
        },
        services: {
          hosting: true,
          // analytics: true,
          // auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://tailwindcss.com/docs/guides/nuxtjs
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  server: {
    port: 8000, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    host: 'localhost',
    timing: false
  },

  publicRuntimeConfig: {
    // Gamil
    senderID: process.env.SENDER_EMAIL_ID | false,
    senderPassword: process.env.SENDER_EMAIL_PASSWORD | false,
    // firebase
    apiKey: process.env.FIREBASE_API_KEY | "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN | "",
    projectId: process.env.FIREBASE_PROJECT_ID | "",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET | "",
    messagingSenderId: process.env.FIREBASE_MESSAGINS_SENDER_ID | "",
    appId: process.env.FIREBASE_APP_ID | "",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID | "",
  },

  // https://firebase.nuxtjs.org/guide/options
  // required only when firebase services are turned on
  // env: {
  //   FIRE_ENV: process.env.FIRE_ENV
  // }
}
