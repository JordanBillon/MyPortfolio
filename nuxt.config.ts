// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/fonts', 
    '@nuxt/image' 
  ],
  
  image: {
    formats: ['webp', 'avif'], 
    quality: 80,
  },
  
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 700] },
      { name: 'Roboto', provider: 'google', weights: [400, 700] },
      { name: 'Abril Fatface', provider: 'google', weights: [400] }
    ],
    
    // Optimisations pour les fonts
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: {
        'sans-serif': ['Arial', 'sans-serif']
      }
    }
  },
  
  app: {
    head: {
      title: 'Mon Portfolio',
      link: [
        // favicon
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      htmlAttrs: {
        lang: 'fr'
      }
    }
  }
})