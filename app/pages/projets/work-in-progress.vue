<script setup>
useHead({
  title: 'Mes Projets en cours | Portfolio Développeur Web Full Stack',
  meta: [
    {
      name: 'description',
      content:
        "Explorez mes projets en cours ainsi que leur progression ."
    }
  ]
})

const projects = [
  {
    title: "Oméga CBD",
    description:
      "Site e-commerce de vente de fleur de CBD.",
    imgSrc: "/images/omegacbd.webp",
    imgAlt: "Oméga CBD",
    href: "https://omegacbd.fr",
    tags: [{ label: "SEO" }, { label: "e-commerce" }],
    offline: false,
  },
]
</script>


<template>
  <div class="relative min-h-screen bg-gradient-radial from-[#2f1491] to-[#030005] text-white py-20 px-6">
    <!-- Image de fond -->
    <NuxtImg 
      src="/images/projet-image.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      fetchpriority="high"
      loading="eager"
    />

    <div class="relative z-10">
      <h1 class="text-4xl font-bold mb-10 text-center">Projets en cours 🚧</h1>
    <p class="text-center text-gray-300 mb-10">
      Voici mes projets sur lesquels je travaille actuellement.
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


