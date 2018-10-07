module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cutie-switches',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules configurations
  */
  modules: [
    'nuxt-basic-auth-module',
  ],
  /*
  ** Settings for basic auth module
  */
  basic: {
    name: process.env.BASIC_AUTH_USER,
    pass: process.env.BASIC_AUTH_PASS,
    enabled: process.env.USE_BASIC_AUTH === 'true',
  },
  /*
  ** Plugins configurations
  */
  plugins: [],
  /*
  ** environment variables
  */
  env: {
    cdnPathBase: process.env.CDN_PATH_BASE,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

