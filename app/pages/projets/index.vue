<script setup lang="ts">
usePageSeo({
  title: 'Mes Projets',
  description:
    'Explorez les projets web de Jordan Billon : sites vitrines, e-commerce et applications, terminés ou en cours de développement.',
  path: '/projets',
})
</script>

<template>
  <div class="relative min-h-[calc(100vh-220px)] md:min-h-[calc(100vh-180px)] flex flex-col items-center justify-start py-16 bg-gradient-radial from-brand-purple to-brand-dark">
    <PageBackground src="/images/projet-image.webp" priority />

    <!-- Contenu -->
    <h1
      class="font-bold text-white mt-12 md:mt-20 lg:mt-24 mb-16 md:mb-24 lg:mb-32 text-center relative z-10
             text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem]"
    >
      Mes Projets
    </h1>

    <nav
      class="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-[200px] relative z-10"
      aria-label="Catégories de projets"
    >
      <NuxtLink to="/projets/completed">
        <NuxtImg
          src="/images/completed.png"
          alt="Projets terminés"
          preset="illustration"
          width="300"
          height="300"
          class="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]
                object-cover transition-transform duration-300 hover:scale-110 rounded-lg cursor-pointer"
        />
      </NuxtLink>

      <NuxtLink to="/projets/work-in-progress">
        <!-- Source en 600x900 : pas de width/height, on laisse object-cover
             recadrer côté CSS comme avant, sans recadrage supplémentaire d'IPX. -->
        <NuxtImg
          src="/images/wip2.png"
          alt="Projets en cours"
          preset="illustration"
          class="w-[180px] h-[210px] md:w-[200px] md:h-[230px] lg:w-[220px] lg:h-[250px] xl:w-[220px] xl:h-[260px]
                object-cover transition-transform duration-300 hover:scale-110 rounded-lg cursor-pointer"
        />
      </NuxtLink>
    </nav>
  </div>
</template>
