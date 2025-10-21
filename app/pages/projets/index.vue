<script setup>
useHead({
  title: 'Mes Projets | Portfolio Développeur Web Full Stack',
  meta: [
    {
      name: 'description',
      content:
        "Explorez mes projets en cours ou terminés : sites vitrines, applications et jeux navigateurs."
    }
  ]
})
</script>


<template>
  <div class="relative min-h-[calc(100vh-220px)] md:min-h-[calc(100vh-180px)] flex flex-col items-center justify-start py-16 bg-gradient-radial from-[#2f1491] to-[#030005]">
    
    <!-- Image de fond -->
    <NuxtImg 
      src="/images/projet-image.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-15 z-10"
      fetchpriority="high"
      loading="eager"
    />

    <!-- Contenu -->
    <h1 class="font-bold text-white mt-12 md:mt-20 lg:mt-24 mb-16 md:mb-24 lg:mb-32 text-center relative z-10
              text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem]">
      Mes Projets
    </h1>

    <div
      class="flex flex-col md:flex-row items-center justify-center 
            gap-16 md:gap-[200px] relative z-10"
    >
      <NuxtLink to="/projets/completed">
        <NuxtImg 
          src="/images/completed.png" 
          alt="Projets terminés" 
          class="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]
                object-cover transition-transform duration-300 hover:scale-110 rounded-lg cursor-pointer" 
        />
      </NuxtLink>

      <NuxtLink to="/projets/work-in-progress">
        <NuxtImg 
          src="/images/wip2.png" 
          alt="Projets en cours" 
          class="w-[180px] h-[210px] md:w-[200px] md:h-[230px] lg:w-[220px] lg:h-[250px] xl:w-[220px] xl:h-[260px]
                object-cover transition-transform duration-300 hover:scale-110 rounded-lg cursor-pointer" 
        />
      </NuxtLink>
    </div>
  </div>
</template>
