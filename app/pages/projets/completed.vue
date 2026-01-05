<script setup>
useHead({
  title: 'Mes Projets terminés | Portfolio Développeur Web Full Stack',
  meta: [
    {
      name: 'description',
      content:
        "Explorez mes projets terminés : sites webs, blog,  optimisation SEO."
    }
  ]
})

const projects = [
  {
    title: "Ô Douceur de Julie",
    description:
      "Site vitrine pour des ateliers bien-être bébé. Optimisé SEO pour capter une audience locale qualifiée.",
    imgSrc: "/images/odouceurdejulie.png",
    imgAlt: "Ô Douceur de Julie",
    href: "https://odouceurdejulie.fr",
    tags: [{ label: "SEO" }, { label: "Local" }, { label: "Vitrine" }],
    offline: true,
  },
  {
    title: "Juju Peint'Urt",
    description:
      "Mise en avant web pour une entreprise de peinture intérieure & extérieure. Site vitrine optimisé SEO.",
    imgSrc: "/images/jujupeinturt.png",
    imgAlt: "Juju Peint'Urt",
    href: "https://jujupeinturt.fr",
    tags: [{ label: "SEO" }, { label: "Local" }, { label: "Vitrine" }],
    offline: false,
  },
  {
    title: "Câlins d’Anges",
    description:
      "Entreprise de bien-être périnatal à Toulouse. Site optimisé SEO avec quiz & blog. (Actuellement hors ligne)",
    imgSrc: "/images/calinsdanges.png",
    imgAlt: "Câlins d’Anges",
    href: undefined,
    tags: [{ label: "SEO" }, { label: "Blog" }, { label: "Quiz" }],
    offline: true,
  },
]
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-b from-[#2f1491] to-[#030005] text-white py-20 px-6">
    <NuxtImg
      src="/images/projet-image.png"
      alt="Fond tech"
      class="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      fetchpriority="high"
      loading="eager"
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

      <p class="text-center text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] m-12 max-w-2xl mx-auto">Malheuresement, les Entreprises <strong>Calins d'anges et oDouceurDeJulie</strong>, qui étaient dans le meme secteur ( le bien être des nouveaux nées), ont du cessé leurs activités pour des raisons qui les regardent.
        J'ai des projets qui vont bientot démarrer afin d'etoffer à nouveau mon PortFolio !</p>
    </div>
  </div>
</template>
