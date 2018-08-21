module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css',
    { src: 'vuetify/dist/vuetify.min.css', lang: 'css' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios',
      'socket.io-client',
      'vuetify',
      'firebase/app',
      'firebase/auth',
      'firebase/database'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    WS_URL: process.env.WS_URL || 'http://localhost:3000'
  },

  plugins: [
    '~/plugins/vuetify',
    '~/plugins/socket-io.js'
  ],

  serverMiddleware: [
    // API middleware
    '~/server',
    '~/server/io'
  ],

  router: {
    middleware: 'register'
  }
}
