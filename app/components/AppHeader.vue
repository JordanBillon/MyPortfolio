<script setup lang="ts">
const isMenuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const sideMenu = ref<HTMLElement | null>(null)
const route = useRoute()

const ACTIVE = 'text-pink-400 font-bold'
const ACTIVE_DRAWER = 'bg-white/10 text-pink-300'

// Une seule source de vérité pour les deux navigations (bureau + tiroir mobile).
// `exact` est nécessaire pour « / », qui sinon serait actif sur toutes les pages.
// « /projets » doit rester actif sur ses sous-pages, donc exact: false.
const links = [
  { to: '/', label: 'Accueil', exact: true },
  { to: '/projets', label: 'Mes Projets', exact: false },
  { to: '/contact', label: 'Contact', exact: true },
  { to: '/about', label: 'About me', exact: true },
]

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function handleClickOutside(e: MouseEvent) {
  if (!isMenuOpen.value || !sideMenu.value) return
  const target = e.target as Node
  const insideMenu = sideMenu.value.contains(target)
  const onButton = menuButton.value?.contains(target) ?? false
  if (!insideMenu && !onButton) closeMenu()
}

function handleKeydown(e: KeyboardEvent) {
  if (!isMenuOpen.value) return

  if (e.key === 'Escape') {
    closeMenu()
    return
  }

  // Piège à focus : tant que le tiroir est ouvert, Tab reste à l'intérieur.
  if (e.key !== 'Tab' || !sideMenu.value) return

  const focusables = sideMenu.value.querySelectorAll<HTMLElement>('a[href], button')
  if (!focusables.length) return

  const first = focusables[0]!
  const last = focusables[focusables.length - 1]!
  const active = document.activeElement

  if (e.shiftKey && active === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && active === last) {
    e.preventDefault()
    first.focus()
  }
}

// Ouverture/fermeture : bloque le défilement de la page et déplace le focus.
watch(isMenuOpen, async (open) => {
  document.body.style.overflow = open ? 'hidden' : ''

  if (open) {
    await nextTick()
    sideMenu.value?.querySelector<HTMLElement>('a[href], button')?.focus()
  } else {
    menuButton.value?.focus()
  }
})

// Referme le tiroir sur un changement de page (y compris via le bouton Retour).
watch(() => route.fullPath, closeMenu)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 left-0 z-30 w-full h-[120px] bg-gradient-radial from-brand-purple to-brand-dark text-white shadow-lg"
  >
    <div class="mx-auto flex items-center justify-around h-full px-4">
      <NuxtLink to="/" aria-label="Jordan Billon — retour à l'accueil">
        <NuxtImg
          src="/images/logo.png"
          alt="Logo de Jordan Billon"
          preset="logo"
          width="126"
          height="113"
          class="h-[90px] w-[100px] md:h-[113px] md:w-[126px]"
        />
      </NuxtLink>

      <p class="hidden xl:flex items-center text-xl 2xl:text-2xl font-bold drop-shadow">
        Jordan Billon Concepteur Développeur Web Full Stack
      </p>

      <nav class="hidden md:flex items-center space-x-12" aria-label="Navigation principale">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="hover:underline hover:scale-110 transition-transform duration-200"
          :active-class="link.exact ? '' : ACTIVE"
          :exact-active-class="link.exact ? ACTIVE : ''"
        >{{ link.label }}</NuxtLink>
      </nav>

      <!-- BOUTON HAMBURGER (mobile/tablette) -->
      <button
        ref="menuButton"
        class="md:hidden inline-flex items-center justify-center w-10 h-10"
        :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="isMenuOpen"
        aria-controls="side-menu"
        @click.stop="toggleMenu"
      >
        <NuxtImg
          src="/images/menu.png"
          alt=""
          aria-hidden="true"
          preset="icon"
          width="48"
          height="48"
          class="w-12 h-12 object-contain"
        />
      </button>
    </div>
  </header>

  <!-- OVERLAY -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 z-40" aria-hidden="true" />
  </Transition>

  <!--
    MENU LATERAL
    `inert` quand il est fermé : sans ça, le tiroir reste hors écran mais
    ses liens restent atteignables au clavier (bug d'accessibilité).
  -->
  <aside
    id="side-menu"
    ref="sideMenu"
    :inert="!isMenuOpen"
    class="md:hidden fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-gradient-radial text-center from-brand-purple to-brand-dark text-white z-50 transform transition-transform duration-300 shadow-xl"
    :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    role="dialog"
    aria-modal="true"
    aria-label="Menu de navigation"
  >
    <div class="relative flex items-center justify-center px-5 pt-5 pb-6 border-b border-white/10">
      <NuxtImg
        src="/images/logo.png"
        alt=""
        aria-hidden="true"
        preset="logo"
        width="126"
        height="113"
        class="h-24 w-auto mx-auto"
      />
      <button
        class="absolute top-4 right-4 text-3xl leading-none hover:text-pink-400"
        aria-label="Fermer le menu"
        @click="closeMenu"
      >
        &times;
      </button>
    </div>

    <nav class="flex flex-col text-lg" aria-label="Navigation mobile">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="px-4 py-4 hover:bg-white/10"
        :active-class="link.exact ? '' : ACTIVE_DRAWER"
        :exact-active-class="link.exact ? ACTIVE_DRAWER : ''"
        @click="closeMenu"
      >{{ link.label }}</NuxtLink>
    </nav>
  </aside>
</template>
