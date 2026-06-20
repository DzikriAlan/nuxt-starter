export default defineNuxtConfig({
  compatibilityDate: '2026-03-24',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/scss/main.scss'],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "~/assets/scss/_functions.scss" as functions; @use "~/assets/scss/_variables.scss" as vars; @use "~/assets/scss/_mixins.scss" as mix;`
        }
      }
    }
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    jwtSecret: process.env.JWT_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    
    // MySQL specific configs
    mysqlHost: process.env.MYSQL_HOST,
    mysqlPort: process.env.MYSQL_PORT,
    mysqlDatabase: process.env.MYSQL_DATABASE,
    mysqlUser: process.env.MYSQL_USER,
    mysqlPassword: process.env.MYSQL_PASSWORD,
    
    // Public keys (exposed to client-side)
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:3000',
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'My Nuxt 3'
    }
  },

  nitro: {
    experimental: {
      wasm: true
    },
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  // Color mode configuration
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },

  // App configuration
  app: {
    head: {
      title: 'My Nuxt 3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Auto-import configuration
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
      'types/**'
    ]
  },

  // Components auto-import
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      path: '~/src/shared/components',
      pathPrefix: false
    }
  ]
})