<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full bg-gradient-radial from-brand-purple to-brand-dark text-gray-200 py-6 mt-1">
    <div class="max-w-6xl mx-auto text-center px-6">
      <p class="mb-2">© {{ currentYear }} Jordan Billon. Tous droits réservés.</p>
      <p class="text-sm">Fait avec ❤️ et Nuxt 4</p>
    </div>
  </footer>
</template>
