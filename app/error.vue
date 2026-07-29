<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error?.statusCode === 404)

useHead({
  title: isNotFound.value ? 'Page introuvable' : 'Une erreur est survenue',
  meta: [{ name: 'robots', content: 'noindex' }],
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative min-h-screen bg-gradient-radial from-brand-purple to-brand-dark text-white flex items-center justify-center px-6">
    <PageBackground src="/images/projet-image.png" priority />

    <div class="relative z-10 text-center max-w-xl">
      <p class="text-8xl font-bold text-pink-400 mb-6">{{ error?.statusCode }}</p>
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        {{ isNotFound ? 'Page introuvable' : 'Une erreur est survenue' }}
      </h1>
      <p class="text-gray-300 mb-10">
        {{ isNotFound
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
