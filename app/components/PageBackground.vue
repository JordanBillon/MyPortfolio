<script setup lang="ts">
/**
 * Image de fond plein écran, purement décorative.
 *
 * `alt=""` + `aria-hidden` : les lecteurs d'écran l'ignorent, au lieu
 * d'annoncer « Fond tech » sur chaque page.
 *
 * Le parent doit être en `relative`, et le contenu au-dessus en `relative z-10`.
 */
withDefaults(
  defineProps<{
    src: string
    /** Classe Tailwind d'opacité, ex. 'opacity-20'. */
    opacity?: string
    /** À activer si l'image est visible au chargement (au-dessus de la ligne de flottaison). */
    priority?: boolean
  }>(),
  { opacity: 'opacity-15', priority: false }
)
</script>

<template>
  <NuxtImg
    :src="src"
    alt=""
    aria-hidden="true"
    role="presentation"
    format="webp"
    quality="60"
    width="1920"
    densities="1"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : 'auto'"
    class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
    :class="opacity"
  />
</template>
