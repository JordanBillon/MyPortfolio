<script setup lang="ts">
usePageSeo({
  title: 'Projets terminés',
  description:
    'Mes réalisations livrées : sites vitrines optimisés SEO pour des entreprises locales à Toulouse, avec blog et quiz sur mesure.',
  path: '/projets/completed',
})

const projects = [
  {
    title: "Juju Peint'Urt",
    description:
      'Mise en avant web pour une entreprise de peinture intérieure & extérieure. Site vitrine optimisé SEO.',
    imgSrc: '/images/jujupeinturt.png',
    imgAlt: "Logo de Juju Peint'Urt",
    href: 'https://jujupeinturt.fr',
    repo: 'https://github.com/JordanBillon/Juju-Peint-Urt',
    tags: [{ label: 'SEO' }, { label: 'Local' }, { label: 'Vitrine' }],
    offline: false,
  },
  {
    title: 'Câlins d’Anges',
    description:
      'Entreprise de bien-être périnatal à Toulouse. Site optimisé SEO avec quiz & blog. (Actuellement hors ligne)',
    imgSrc: '/images/calinsdanges.png',
    imgAlt: 'Logo de Câlins d’Anges',
    href: undefined,
    tags: [{ label: 'SEO' }, { label: 'Blog' }, { label: 'Quiz' }],
    offline: true,
  },
]
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-b from-brand-purple to-brand-dark text-white py-20 px-6">
    <PageBackground src="/images/projet-image.webp" priority />

    <div class="relative z-10">
      <h1 class="text-center font-bold mb-6 text-[2rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.6rem]">
        Mes Réalisations ✅
      </h1>
      <p class="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Découvrez une sélection de projets finalisés, créés pour renforcer la présence en ligne et l’identité digitale de différentes entreprises.
      </p>

      <div class="flex flex-wrap justify-center gap-y-20 gap-10 max-w-6xl mx-auto">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          v-bind="p"
        />
      </div>

      <!--
        Note de contexte : volontairement discrète et alignée à gauche, pour
        qu'elle se lise comme une précision et non comme un bloc concurrent
        des cartes projets.
      -->
      <aside
        class="max-w-2xl mx-auto mt-16 mb-4 flex items-start gap-4 text-left
               bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-pink-500
               rounded-xl px-5 py-5 sm:px-6 sm:py-6"
      >
        <svg
          class="w-5 h-5 shrink-0 mt-0.5 text-pink-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>

        <div class="space-y-2 text-sm sm:text-base leading-relaxed">
          <p class="text-gray-300">
            <strong class="text-white font-semibold">Câlins d'Anges</strong> évoluait dans le bien-être
            périnatal à Toulouse. L'entreprise a depuis cessé son activité, le site n'est donc plus
            accessible en ligne.
          </p>
          <p class="text-gray-400">
            D'autres projets sont en cours de développement et viendront enrichir cette page.
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>
