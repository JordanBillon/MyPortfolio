<template>
  <header class="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <h1 class="text-2xl font-bold drop-shadow">🚀 Mon Portfolio</h1>

      <!-- Navigation -->
      <nav class="space-x-6">
        <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
        <NuxtLink to="/projets" class="hover:underline">Projets</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>
