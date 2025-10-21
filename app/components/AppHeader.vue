<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

function openMenu() {
  isMenuOpen.value = true
}
function closeMenu() {
  isMenuOpen.value = false
}
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Ferme le menu si clic en dehors (overlay + zone hors aside)
function handleClickOutside(e) {
  const menu = document.getElementById('side-menu')
  const btn = document.getElementById('menu-button')
  if (!isMenuOpen.value || !menu) return
  const clickedOutside = !menu.contains(e.target) && (!btn || !btn.contains(e.target))
  if (clickedOutside) closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <header class="w-full h-[120px] bg-gradient-radial from-[#2f1491] to-[#030005] text-white shadow-lg">
    <div class="mx-auto flex items-center justify-around h-full px-4">
      <!-- Logo -->
      <NuxtImg src="/images/logo.png" alt="Logo JB" class="h-[90px] w-[100px] md:h-[113px] md:w-[126px]" />

      <h2 class="hidden xl:flex items-center text-xl 2xl:text-2xl font-bold drop-shadow">
        Jordan Billon Concepteur Développeur Web Full Stack
      </h2>

      <!-- NAV DESKTOP (>= lg) : on garde ton logic d'active via route -->
      <nav class="hidden md:flex items-center space-x-12">
        <NuxtLink 
          to="/"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path === '/' ? 'text-pink-400 font-bold' : ''
          ]"
        >Accueil</NuxtLink>

        <NuxtLink 
          to="/projets"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path.startsWith('/projets') ? 'text-pink-400 font-bold' : ''
          ]"
        >Mes Projets</NuxtLink>

        <NuxtLink 
          to="/contact"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path === '/contact' ? 'text-pink-400 font-bold' : ''
          ]"
        >Contact</NuxtLink>

        <NuxtLink 
          to="/about"
          :class="[
            'hover:underline hover:scale-110 transition-transform duration-200',
            route.path === '/about' ? 'text-pink-400 font-bold' : ''
          ]"
        >About me</NuxtLink>
      </nav>

      <!-- BOUTON HAMBURGER (mobile/tablette) -->
      <button
        id="menu-button"
        class="md:hidden inline-flex items-center justify-center w-10 h-10 focus:outline-none"
        @click.stop="toggleMenu"
        aria-label="Ouvrir le menu"
        :aria-expanded="isMenuOpen"
        aria-controls="side-menu"
      >
        <NuxtImg src="/images/menu.png" alt="Menu" class="w-12 h-12 object-contain" />
      </button>
    </div>

    <!-- OVERLAY -->
    <div
      v-show="isMenuOpen"
      class="fixed inset-0 bg-black/50 z-40 transition-opacity"
      aria-hidden="true"
    ></div>

    <!-- MENU LATERAL -->
    <aside
      id="side-menu"
      class="fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-gradient-radial text-center from-[#2f1491] to-[#030005] text-white z-50 transform transition-transform duration-300 shadow-xl"
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
      role="complementary"
      aria-label="Menu latéral de navigation"
    >
      <!-- Header du drawer -->
      <div class="relative flex items-center justify-center px-5 pt-5 pb-6 border-b border-white/10">
        <!-- LOGO CENTRÉ -->
        <NuxtImg
          src="/images/logo.png"
          alt="Logo"
          class="h-24 w-auto mx-auto"
        />
        <!-- BOUTON FERMER (position absolue coin droit) -->
        <button
          class="absolute top-4 right-4 text-3xl leading-none hover:text-pink-400"
          @click="closeMenu"
          aria-label="Fermer le menu"
        >
          &times;
        </button>
      </div>

      <!-- Liens -->
      <nav class="flex flex-col text-lg">
        <NuxtLink
          to="/"
          class="px-4 py-4 hover:bg-white/10"
          :class="route.path === '/' ? 'bg-white/10 text-pink-300' : ''"
          @click="closeMenu"
        >Accueil</NuxtLink>

        <NuxtLink
          to="/projets"
          class="px-4 py-4 hover:bg-white/10"
          :class="route.path.startsWith('/projets') ? 'bg-white/10 text-pink-300' : ''"
          @click="closeMenu"
        >Mes Projets</NuxtLink>

        <NuxtLink
          to="/contact"
          class="px-4 py-4 hover:bg-white/10"
          :class="route.path === '/contact' ? 'bg-white/10 text-pink-300' : ''"
          @click="closeMenu"
        >Contact</NuxtLink>

        <NuxtLink
          to="/about"
          class="px-4 py-4 hover:bg-white/10"
          :class="route.path === '/about' ? 'bg-white/10 text-pink-300' : ''"
          @click="closeMenu"
        >About me</NuxtLink>
      </nav>
    </aside>
  </header>
</template>
