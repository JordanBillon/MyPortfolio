<script setup lang="ts">
type Tag = { label: string }

defineProps<{
  title: string
  description: string
  imgSrc: string
  /** Description de l'image ; par défaut on retombe sur le titre du projet. */
  imgAlt?: string
  tags?: Tag[]
  /** Lien vers le site en ligne. Ignoré si `offline` est vrai. */
  href?: string
  /** Lien vers le dépôt GitHub. Le bouton « Voir le code » n'apparaît que s'il est renseigné. */
  repo?: string
  /** Si vrai, affiche un bouton désactivé « Site hors ligne ». */
  offline?: boolean
}>()
</script>

<template>
  <div
    class="bg-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300
           flex flex-col items-center text-center
           w-[260px] h-auto sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px] p-5 sm:p-6"
  >
    <!-- Image -->
    <div class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-6 shadow-lg shadow-pink-500/40">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt || title"
        preset="avatar"
        width="160"
        height="160"
        loading="lazy"
        class="w-full h-full object-cover"
      />
    </div>

    <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{{ title }}</h3>

    <p class="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
      {{ description }}
    </p>

    <div v-if="tags?.length" class="flex flex-wrap gap-2 justify-center mb-4">
      <span
        v-for="t in tags"
        :key="t.label"
        class="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-pink-500/20 text-pink-300"
      >
        {{ t.label }}
      </span>
    </div>

    <div class="mt-auto flex flex-wrap items-center justify-center gap-3">
      <button
        v-if="offline"
        type="button"
        disabled
        class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gray-500/60 text-gray-200 cursor-not-allowed"
      >
        Site hors ligne
      </button>
      <a
        v-else-if="href"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-pink-500 hover:bg-pink-600 transition-colors duration-200 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-white"
      >
        Voir le site<span class="sr-only"> {{ title }} (nouvel onglet)</span>
      </a>

      <a
        v-if="repo"
        :href="repo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10
               transition-colors duration-200 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-white"
      >
        <NuxtImg
          src="/images/github.png"
          alt=""
          aria-hidden="true"
          preset="icon"
          width="16"
          height="16"
          loading="lazy"
          class="w-4 h-4"
        />
        Voir le code<span class="sr-only"> de {{ title }} (nouvel onglet)</span>
      </a>
    </div>
  </div>
</template>
