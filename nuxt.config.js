require('dotenv').config();
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,400italic|Roboto+Condensed:400,500&amp;subset=latin,cyrillic'}
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#fff'},
	/*
	** Global CSS
	*/
	css: [
		'~/assets/fonts/fonts.scss',
		'~/assets/styles/general/general.scss'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'~/plugins/global-components.js',
		'~/plugins/eventBus.js'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [],
	/*
	** Nuxt.js modules
	*/
	modules: [
		['cookie-universal-nuxt', {alias: 'cookies'}],
        '@nuxtjs/dotenv',
		'@nuxtjs/axios',
        '@nuxtjs/auth'
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
 	axios: {},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	},
	server: {
	    port: process.env.PORT, // default: 3000
	    host: process.env.HOST // default: localhost
	},
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/social/profile',
      callback: '/login'
    },
  }
}
