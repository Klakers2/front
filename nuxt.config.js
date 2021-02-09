export default {
	server: {
		port: 8000,
		host: 'HOST',
		timing: false
	},
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'nuxtjs',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		'@nuxtjs/laravel-echo',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		// '@nuxtjs/auth',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		baseUrl: 'API_HOST',
		credentials: true
	},

	// Auth Next
	auth: {
		strategies: {
			'laravelSanctum': {
				provider: 'laravel/sanctum',
				url: 'API_HOST'
			},
		}
	},

	// Laravel Echo
	echo: {
		broadcaster: 'pusher',
		key: '64DE97B90D524ABB8852C27EA4218FDB',
		authEndpoint: 'https://API_HOST/broadcasting/auth',
		wsHost: 'API_HOST',
		wssPort: 6001,
		disableStats: true,
		encrypted: true,
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	}
}
