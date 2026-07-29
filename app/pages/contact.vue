<script setup lang="ts">
usePageSeo({
  title: 'Contact',
  description:
    'Besoin d’un développeur web full stack à Toulouse ? Contactez Jordan Billon par téléphone, e-mail ou LinkedIn pour échanger sur votre projet web.',
  path: '/contact',
})

const socials = [
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/jordan-billon/',
    href: 'https://linkedin.com/in/jordan-billon',
    icon: '/images/linkedin.png',
  },
  {
    name: 'GitHub',
    handle: 'github.com/JordanBillon',
    href: 'https://github.com/JordanBillon',
    icon: '/images/github.png',
  },
]

const CARD_BASE =
  'flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-200'

const CARD_SIZE = 'w-full md:w-[360px] lg:w-[380px] max-w-[400px]'

/*
 * Coordonnées de contact : ni le numéro ni l'e-mail ne sont écrits en clair.
 * Ils sont reconstruits dans le navigateur par decodeChars(), et les cartes
 * sont encapsulées dans <ClientOnly> pour être absentes du HTML pré-généré.
 * Voir app/utils/obfuscate.ts pour les limites de cette approche.
 */
const phoneDigits = decodeChars([51, 51, 54, 52, 49, 57, 52, 48, 52, 48, 49])
const email = decodeChars([
  106, 111, 114, 100, 97, 110, 45, 98, 105, 108, 108, 111,
  110, 64, 104, 111, 116, 109, 97, 105, 108, 46, 102, 114,
])

const phoneDisplay = '+' + [
  phoneDigits.slice(0, 2),
  phoneDigits.slice(2, 3),
  phoneDigits.slice(3, 5),
  phoneDigits.slice(5, 7),
  phoneDigits.slice(7, 9),
  phoneDigits.slice(9, 11),
].join(' ')

const contactMethods = [
  { label: 'Téléphone', value: phoneDisplay, href: `tel:+${phoneDigits}`, icon: '/images/phone.png' },
  { label: 'Email', value: email, href: `mailto:${email}`, icon: '/images/mail.png' },
]
</script>

<template>
  <section
    class="relative min-h-[calc(100vh-120px)] flex flex-col items-center justify-center
           bg-gradient-radial from-brand-purple to-brand-dark text-white px-6 py-16"
  >
    <PageBackground src="/images/bg-contact.webp" opacity="opacity-20" priority />

    <!-- Bloc principal contact -->
    <div class="relative z-10 max-w-3xl w-full text-center mb-24">
      <h1 class="font-bold mb-6 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
        📬 Contactez-moi
      </h1>

      <p class="text-gray-200 mb-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Je suis disponible pour échanger autour d'opportunités professionnelles ou pour la réalisation de vos projets web.
      </p>

      <!--
        Bloc contacts : rendu uniquement côté navigateur, pour que le numéro
        et l'e-mail n'apparaissent pas dans le HTML pré-généré.
      -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <ClientOnly>
          <a
            v-for="method in contactMethods"
            :key="method.label"
            :href="method.href"
            :class="[CARD_BASE, CARD_SIZE]"
            class="hover:scale-105 hover:bg-white/20"
          >
            <NuxtImg :src="method.icon" alt="" aria-hidden="true" preset="icon" width="48" height="48" class="w-12 h-12" />
            <div class="flex-1 flex flex-col items-center justify-center">
              <h2 class="text-lg md:text-xl font-semibold">{{ method.label }}</h2>
              <p class="text-gray-300 text-sm md:text-base break-all">{{ method.value }}</p>
            </div>
          </a>

          <!-- Affiché le temps que le JavaScript prenne la main -->
          <template #fallback>
            <div
              v-for="placeholder in [
                { label: 'Téléphone', icon: '/images/phone.png' },
                { label: 'Email', icon: '/images/mail.png' },
              ]"
              :key="placeholder.label"
              :class="[CARD_BASE, CARD_SIZE]"
            >
              <NuxtImg :src="placeholder.icon" alt="" aria-hidden="true" preset="icon" width="48" height="48" class="w-12 h-12" />
              <div class="flex-1 flex flex-col items-center justify-center">
                <h2 class="text-lg md:text-xl font-semibold">{{ placeholder.label }}</h2>
                <p class="text-gray-400 text-sm md:text-base">Chargement…</p>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <!-- Bloc réseaux -->
    <div class="relative z-10 max-w-3xl w-full text-center mb-12">
      <h2 class="font-bold mb-6 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
        Pour suivre l'avancée de mes projets, n'hésitez pas à me suivre !
      </h2>

      <p class="text-gray-200 mb-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Je partage mes projets et mon parcours sur ces réseaux.
      </p>

      <!-- Cartes réseaux -->
      <div class="flex flex-col items-center gap-8">
        <div v-for="social in socials" :key="social.name" class="w-full max-w-[400px]">
          <a
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :class="CARD_BASE"
            class="hover:scale-105 hover:bg-white/20"
          >
            <NuxtImg :src="social.icon" alt="" aria-hidden="true" preset="icon" width="48" height="48" loading="lazy" class="w-12 h-12" />
            <div class="flex-1 flex flex-col items-center justify-center">
              <h3 class="text-lg md:text-xl font-semibold">{{ social.name }}</h3>
              <p class="text-gray-300 text-sm md:text-base">{{ social.handle }}</p>
            </div>
            <span class="sr-only">(ouvre un nouvel onglet)</span>
          </a>
        </div>

        <!-- X (pas encore actif) -->
        <div class="w-full max-w-[400px]">
          <div :class="CARD_BASE" class="opacity-70 cursor-not-allowed">
            <NuxtImg src="/images/x.png" alt="" aria-hidden="true" preset="icon" width="48" height="48" loading="lazy" class="w-12 h-12" />
            <div class="flex-1 flex flex-col items-center justify-center">
              <h3 class="text-lg md:text-xl font-semibold text-center">X</h3>
              <p class="text-gray-400 italic text-sm md:text-base">Bientôt...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
