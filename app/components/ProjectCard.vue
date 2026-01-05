<script setup lang="ts">
type Tag = { label: string }
const props = defineProps<{
  title: string
  description: string
  imgSrc: string
  imgAlt?: string
  tags?: Tag[]
  href?: string        // si présent et pas offline -> bouton "Voir le site"
  offline?: boolean    // si true -> bouton désactivé
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
      <NuxtImg :src="imgSrc" :alt="title" class="w-full h-full object-cover" />
    </div>

    <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{{ title }}</h2>

    <p class="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
      {{ description }}
    </p>

    <div v-if="tags?.length" class="flex flex-wrap gap-2 justify-center mb-4">
      <span
        v-for="(t, i) in tags"
        :key="i"
        class="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-pink-500/20 text-pink-300"
      >
        {{ t.label }}
      </span>
    </div>

    <template v-if="offline">
      <button
        type="button"
        aria-disabled="true"
        class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gray-500/60 text-gray-200 cursor-not-allowed"
        title="Site hors ligne"
      >
        Site hors ligne
      </button>
    </template>
    <template v-else>
      <a
        v-if="href"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-pink-500 hover:bg-pink-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold"
      >
        Voir le site
      </a>
    </template>
  </div>
</template>

