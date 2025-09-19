<template>
  <header class="w-full h-[120px] bg-gradient-radial from-[#2f1491] to-[#030005] text-white shadow-lg">
    <div class="mx-auto flex items-center justify-around h-full px-4">

      <img src="~/assets/images/logo.png" alt="Logo JB" class="h-15 w-15" />
      <!-- Logo -->
      <h2 class="flex items-center text-2xl font-bold drop-shadow space-x-32">
        Jordan Billon Developper web Full Stack
      </h2>
      <!-- Navigation -->
      <nav class="flex items-center justify-self space-x-12">
        <NuxtLink to="/" class="hover:underline hover:scale-110 transition-transform duration-200">Accueil</NuxtLink>
        <NuxtLink to="/projets-realises" class="hover:underline hover:scale-110 transition-transform duration-200">Projets Réalisés</NuxtLink>
        <NuxtLink to="/projets" class="hover:underline hover:scale-110 transition-transform duration-200">Projets en cours</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline hover:scale-110 transition-transform duration-200">Contact</NuxtLink>
        <NuxtLink to="/about" class="hover:underline hover:scale-110 transition-transform duration-200">About me</NuxtLink>
      </nav>
    </div>
  </header>
</template>
