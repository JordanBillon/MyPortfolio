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

      <p class="text-center text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] m-12 max-w-2xl mx-auto">
        L'entreprise <strong>Câlins d'Anges</strong>, qui évoluait dans le secteur du bien-être des nouveau-nés, a depuis mis fin à son activité : le site n'est donc plus accessible en ligne. Plusieurs nouveaux projets sont actuellement en développement et viendront enrichir mon portfolio prochainement.
      </p>
    </div>
  </div>
</template>
