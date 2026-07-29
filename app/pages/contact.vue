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
 * Le numéro de téléphone n'est écrit nulle part en clair : il est reconstruit
 * dans le navigateur à partir de codes de caractères, et le bloc est encapsulé
 * dans <ClientOnly> pour qu'il soit absent du HTML pré-généré.
 *
 * Les aspirateurs de numéros lisent le HTML brut sans exécuter de JavaScript :
 * ils ne trouvent donc rien. Ça n'arrête pas un robot qui exécute du JS.
 */
const PHONE_CODES = [51, 51, 54, 52, 49, 57, 52, 48, 52, 48, 49]
const phoneDigits = PHONE_CODES.map(c => String.fromCharCode(c)).join('')
const phoneHref = `tel:+${phoneDigits}`
const phoneDisplay = [
  phoneDigits.slice(0, 2),
  phoneDigits.slice(2, 3),
  phoneDigits.slice(3, 5),
  phoneDigits.slice(5, 7),
  phoneDigits.slice(7, 9),
  phoneDigits.slice(9, 11),
].join(' ').replace(/^/, '+')
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

      <!-- Bloc contacts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <!-- Téléphone : rendu uniquement côté navigateur (anti-aspiration) -->
        <ClientOnly>
          <a
            :href="phoneHref"
            :class="[CARD_BASE, CARD_SIZE]"
            class="hover:scale-105 hover:bg-white/20"
          >
            <NuxtImg src="/images/phone.png" alt="" aria-hidden="true" preset="icon" width="48" height="48" class="w-12 h-12" />
            <div class="flex-1 flex flex-col items-center justify-center">
              <h2 class="text-lg md:text-xl font-semibold">Téléphone</h2>
              <p class="text-gray-300 text-sm md:text-base">{{ phoneDisplay }}</p>
            </div>
          </a>

          <!-- Affiché le temps que le JavaScript prenne la main -->
          <template #fallback>
            <div :class="[CARD_BASE, CARD_SIZE]">
              <NuxtImg src="/images/phone.png" alt="" aria-hidden="true" preset="icon" width="48" height="48" class="w-12 h-12" />
              <div class="flex-1 flex flex-col items-center justify-center">
                <h2 class="text-lg md:text-xl font-semibold">Téléphone</h2>
                <p class="text-gray-400 text-sm md:text-base">Chargement…</p>
              </div>
            </div>
          </template>
        </ClientOnly>

        <!-- Email -->
        <a
          href="mailto:jordan-billon@hotmail.fr"
          :class="CARD_BASE"
          class="hover:scale-105 hover:bg-white/20 w-full md:w-[360px] lg:w-[380px] max-w-[400px]"
        >
          <NuxtImg src="/images/mail.png" alt="" aria-hidden="true" preset="icon" width="48" height="48" class="w-12 h-12" />
          <div class="flex-1 flex flex-col items-center justify-center">
            <h2 class="text-lg md:text-xl font-semibold">Email</h2>
            <p class="text-gray-300 text-sm md:text-base">jordan-billon@hotmail.fr</p>
          </div>
        </a>
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
