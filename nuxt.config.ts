// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss' ,'@nuxt/fonts' 
  ],
  css: ['~/assets/css/main.css'
  ],
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 700] }, 
      { name: 'Roboto', provider: 'google', weights: [400, 700] },
      { name: 'Abril Fatface', provider: 'google', weights: [400, 700] } 
    ]
  },
  app: {
    head: {
      title: 'Mon Portfolio',
      link: [
        // favicon principal (format PNG moderne)
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
