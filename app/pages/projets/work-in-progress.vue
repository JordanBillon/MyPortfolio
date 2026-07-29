<script setup lang="ts">
usePageSeo({
  title: 'Projets en cours',
  description:
    'Les projets web sur lesquels je travaille actuellement, dont Oméga CBD, un site e-commerce optimisé pour le référencement naturel.',
  path: '/projets/work-in-progress',
})

const projects = [
  {
    title: 'Oméga CBD',
    description: 'Site e-commerce de vente de fleur de CBD.',
    imgSrc: '/images/omegacbd.webp',
    imgAlt: 'Logo de Oméga CBD',
    href: 'https://omegacbd.fr',
    tags: [{ label: 'SEO' }, { label: 'e-commerce' }],
    offline: false,
  },
]
</script>

<template>
  <div class="relative min-h-screen bg-gradient-radial from-brand-purple to-brand-dark text-white py-20 px-6">
    <PageBackground src="/images/projet-image.webp" priority />

    <div class="relative z-10">
      <h1 class="text-center font-bold mb-6 text-[2rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.6rem]">
        Projets en cours 🚧
      </h1>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Voici mes projets sur lesquels je travaille actuellement.
      </p>

      <div class="flex flex-wrap justify-center gap-y-20 gap-10 max-w-6xl mx-auto">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          v-bind="p"
        />
      </div>
    </div>
  </div>
</template>
