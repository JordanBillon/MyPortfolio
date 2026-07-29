<script setup lang="ts">
// Données structurées : aide Google à comprendre qui tu es et à afficher
// un panneau enrichi sur une recherche « Jordan Billon développeur ».
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jordan Billon',
        jobTitle: 'Concepteur Développeur Web Full Stack',
        description:
          'Développeur web full stack basé à Toulouse, ancien militaire des commandos de l\'air reconverti dans le développement.',
        url: SITE_URL,
        image: `${SITE_URL}${SITE_OG_IMAGE}`,
        email: 'jordan-billon@hotmail.fr',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toulouse',
          addressRegion: 'Occitanie',
          addressCountry: 'FR',
        },
        sameAs: [
          'https://linkedin.com/in/jordan-billon',
          'https://github.com/JordanBillon',
        ],
        knowsAbout: [
          'HTML', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt', 'Angular',
          'TailwindCSS', 'Node.js', 'PHP', 'Symfony', 'MySQL',
          'Git', 'Docker', 'Cypress',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-black">
    <!--
      Lien d'évitement : invisible jusqu'à ce qu'un utilisateur au clavier
      appuie sur Tab, il permet de sauter la navigation.
    -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]
             focus:bg-pink-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
    >
      Aller au contenu principal
    </a>

    <AppHeader />

    <main id="main-content" class="flex-1 pt-[120px]">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>
