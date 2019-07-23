export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { href: 'https://fonts.googleapis.com/css?family=PT+Mono', rel: 'stylesheet' }
    ]
  },

  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/main.scss'
  ],

  /*
  ** Nuxt.js Modules
  */
  modules: [
    'prismic-nuxt'
  ],

  prismic: {
    endpoint: 'https://prismic-vuejs-showcase.prismic.io/api/v2',
    linkResolver: require('./app/prismic/link-resolver')
  },

  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ]
}