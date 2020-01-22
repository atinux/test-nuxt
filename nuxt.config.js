export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Small',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "It's like Medium, but smaller."
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: false,
  css: ['normalize.css/normalize.css', './assets/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/content'],

  /*
  ** Server middleware: Add API routes
  */
  serverMiddleware: [
    { path: '/_content-api', handler: '@/server-middleware/content-api.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/_variables.scss']
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
