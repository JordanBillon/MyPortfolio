// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],

  image: {
    quality: 80,
    // Attention : l'option s'appelle bien `format` (au singulier).
    format: ['webp'],
    densities: [1, 2],
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },

    // Presets = un seul endroit pour régler le poids des images.
    // IPX redimensionne au build, donc même un PNG source énorme
    // ressort léger dans le site généré.
    presets: {
      // Logo de l'en-tête et du menu (affiché ~126px)
      logo: { modifiers: { format: 'webp', width: 260 } },
      // Icônes techno et réseaux sociaux (affichées 48 à 80px)
      icon: { modifiers: { format: 'webp', width: 160 } },
      // Vignettes rondes des projets (affichées 128 à 160px)
      avatar: { modifiers: { format: 'webp', width: 400, height: 400, fit: 'cover' } },
      // Illustrations de section (affichées 180 à 300px)
      illustration: { modifiers: { format: 'webp', width: 600 } }
      // Les images de fond plein écran sont gérées par <PageBackground>,
      // qui génère un srcset responsive plutôt qu'une taille fixe.
    }
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
      // Le suffixe « | Jordan Billon » est ajouté par usePageSeo(),
      // ce titre ne sert que de repli si une page oublie de l'appeler.
      title: 'Jordan Billon — Développeur Web Full Stack à Toulouse',
      link: [
        // favicon
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      meta: [
        { name: 'author', content: 'Jordan Billon' },
        { name: 'theme-color', content: '#2f1491' }
      ],
      htmlAttrs: {
        lang: 'fr'
      }
    }
  }
})
