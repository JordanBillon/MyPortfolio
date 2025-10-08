<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="w-full h-[120px] bg-gradient-radial from-[#2f1491] to-[#030005] text-white shadow-lg">
    <div class="mx-auto flex items-center justify-around h-full px-4">
      
      <!-- Logo -->
      <img src="~/assets/images/logo.png" alt="Logo JB" class="h-15 w-15" />
      
      <h2 class="flex items-center text-2xl font-bold drop-shadow space-x-32">
        Jordan Billon Concepteur Developpeur web Full Stack
      </h2>

      <!-- Navigation -->
      <nav class="flex items-center space-x-12">
        <NuxtLink 
          to="/"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path === '/' ? 'text-pink-400 font-bold' : ''
          ]"
        >
          Accueil
        </NuxtLink>

        <NuxtLink 
          to="/projets"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path.startsWith('/projets') ? 'text-pink-400 font-bold' : ''
          ]"
        >
          Mes Projets
        </NuxtLink>

        <NuxtLink 
          to="/contact"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path === '/contact' ? 'text-pink-400 font-bold' : ''
          ]"
        >
          Contact
        </NuxtLink>

        <NuxtLink 
          to="/about"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path === '/about' ? 'text-pink-400 font-bold' : ''
          ]"
        >
          About me
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
