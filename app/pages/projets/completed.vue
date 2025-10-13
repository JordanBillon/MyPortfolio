<script setup lang="ts">
import odouceurdejulie from '~/assets/images/odouceurdejulie.png'
import jujupeinturt from '~/assets/images/jujupeinturt.png'
import calinsdanges from '~/assets/images/calinsdanges.png'

const projects = [
  {
    title: "Ô Douceur de Julie",
    description:
      "Site vitrine pour des ateliers bien-être bébé. Optimisé SEO pour capter une audience locale qualifiée.",
    imgSrc: odouceurdejulie,
    imgAlt: "Ô Douceur de Julie",
    href: "https://odouceurdejulie.fr",
    tags: [{ label: "SEO" }, { label: "Local" }, { label: "Vitrine" }],
    offline: false,
  },
  {
    title: "Juju Peint'Urt",
    description:
      "Mise en avant web pour une entreprise de peinture intérieure & extérieure. Site vitrine optimisé SEO.",
    imgSrc: jujupeinturt,
    imgAlt: "Juju Peint'Urt",
    href: "https://jujupeinture.com",
    tags: [{ label: "SEO" }, { label: "Local" }, { label: "Vitrine" }],
    offline: false,
  },
  {
    title: "Câlins d’Anges",
    description:
      "Entreprise de bien-être périnatal à Toulouse. Site optimisé SEO avec quiz & blog. (Actuellement hors ligne)",
    imgSrc: calinsdanges,
    imgAlt: "Câlins d’Anges",
    href: undefined,
    tags: [{ label: "SEO" }, { label: "Blog" }, { label: "Quiz" }],
    offline: true,
  },
]
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-b from-[#2f1491] to-[#030005] text-white py-20 px-6">
    <img
      src="~/assets/images/projet-image.png"
      alt="Fond tech"
      class="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
    />

    <div class="relative z-10">
      <h1 class="text-center font-bold mb-6 text-[2rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.6rem]">
        Mes Réalisations ✅
      </h1>
      <p class="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Découvrez une sélection de projets finalisés, créés pour renforcer la présence en ligne et l’identité digitale de différentes entreprises.
      </p>

      <div class="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-10 max-w-6xl mx-auto">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          v-bind="p"
        />
      </div>
    </div>
  </div>
</template>
