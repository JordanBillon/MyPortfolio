<script setup>
const props = defineProps({
  error: Object
})

useHead({
  title: 'Erreur | Jordan Billon'
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative min-h-screen bg-gradient-radial from-[#2f1491] to-[#030005] text-white flex items-center justify-center px-6">
    <NuxtImg
      src="/images/projet-image.png"
      alt="Fond tech"
      class="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      fetchpriority="high"
      loading="eager"
    />

    <div class="relative z-10 text-center max-w-xl">
      <p class="text-8xl font-bold text-pink-400 mb-6">{{ error?.statusCode }}</p>
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        {{ error?.statusCode === 404 ? 'Page introuvable' : 'Une erreur est survenue' }}
      </h1>
      <p class="text-gray-300 mb-10">
        {{ error?.statusCode === 404
          ? "La page que vous cherchez n'existe pas ou a été déplacée."
          : "Quelque chose s'est mal passé. Revenez à l'accueil." }}
      </p>
      <button
        class="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-200"
        @click="handleError"
      >
        Retour à l'accueil
      </button>
    </div>
  </div>
</template>
