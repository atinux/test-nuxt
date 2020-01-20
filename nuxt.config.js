export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'NuxtJS Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Technical Test for NuxtJS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Server middleware: Add API routes
  */
  serverMiddleware: [
    { path: '/api', handler: '@/api/index.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
