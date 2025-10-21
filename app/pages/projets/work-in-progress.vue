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
    <h1 class="text-4xl font-bold mb-10 text-center">Projets en cours 🚧</h1>
    <p class="text-center text-gray-300 mb-10">
      Voici mes projets sur lesquels je travaille actuellement.
    </p>
  </div>
</template>


