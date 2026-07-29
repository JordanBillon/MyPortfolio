<script setup lang="ts">
usePageSeo({
  title: 'À propos',
  description:
    "Découvrez mon parcours : ancien militaire des commandos de l'air reconverti dans le développement web full stack, formé à l'école ADRAR à Toulouse.",
  path: '/about',
})

// FRONT-END
const frontTechs = [
  { name: 'HTML5', icon: '/images/html.png' },
  { name: 'CSS3', icon: '/images/css.png' },
  { name: 'JavaScript', icon: '/images/js.png' },
  { name: 'Vue.js', icon: '/images/vue.png' },
  { name: 'Nuxt', icon: '/images/nuxt.png' },
  { name: 'Angular', icon: '/images/angular.png' },
  { name: 'TailwindCSS', icon: '/images/tailwind.png' },
]

// BACK-END
const backTechs = [
  { name: 'Node.js', icon: '/images/node.png' },
  { name: 'PHP', icon: '/images/php.png' },
  { name: 'Symfony', icon: '/images/symfony.png' },
  { name: 'MySQL', icon: '/images/mysql.png' },
]

// OUTILS & GESTION
const tools = [
  { name: 'Git', icon: '/images/git.png' },
  { name: 'Docker', icon: '/images/docker.png' },
  { name: 'Cypress', icon: '/images/cypress.png' },
  { name: 'Postman', icon: '/images/postman.png' },
]

const skillGroups = [
  { title: 'Front-end', color: 'text-pink-400', bar: 'after:bg-pink-400', items: frontTechs },
  { title: 'Back-end', color: 'text-green-400', bar: 'after:bg-green-400', items: backTechs },
  { title: 'Outils & Gestion', color: 'text-sky-400', bar: 'after:bg-sky-400', items: tools },
]
</script>

<template>
  <div class="bg-gradient-radial from-brand-purple to-brand-dark min-h-screen relative overflow-hidden text-white">
    <PageBackground src="/images/bureau.webp" opacity="opacity-30" priority />

    <!-- PRESENTATION -->
    <section class="relative z-10 py-12 sm:py-16 px-6 text-center">
      <div class="inline-block mx-auto max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-lg border border-white/10">
        <h1 class="font-bold mb-8 sm:mb-10 md:mb-12 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
          Qui suis-je ?
        </h1>

        <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">
          Ancien militaire dans les commandos de l’air, j’ai construit mon parcours autour de la rigueur, du dépassement de soi et du travail en équipe.<br>
          Ces valeurs m’accompagnent aujourd’hui dans le développement web, où je mets la même exigence et la même discipline au service de projets numériques ambitieux.
        </p>

        <div class="flex justify-center my-8">
          <NuxtImg
            src="/images/beret.png"
            alt="Béret des commandos de l'air"
            preset="illustration"
            width="96"
            height="54"
            class="w-20 md:w-24 h-auto opacity-90"
          />
        </div>

        <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">
          Après deux formations à l’école ADRAR Formation – une première en Développement Web et Mobile (niveau 5), suivie d’une en Conception et Développement d’Applications (niveau 6) – j’ai acquis une solide expérience sur l’ensemble du cycle de création d’un projet : front-end, back-end et architecture applicative.
        </p>

        <div class="flex justify-center my-8">
          <NuxtImg
            src="/images/diplome.png"
            alt="Diplôme"
            preset="illustration"
            width="112"
            height="112"
            loading="lazy"
            class="w-20 md:w-28 h-auto opacity-90"
          />
        </div>

        <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">
          Curieux et passionné, j’aime autant concevoir des interfaces élégantes que résoudre des problématiques techniques complexes.
          En parallèle, la musique occupe une place importante dans ma vie : je pratique la guitare et le piano, deux instruments qui développent, comme le code, la créativité et la précision.
        </p>

        <div class="flex justify-center my-8">
          <NuxtImg
            src="/images/musique.png"
            alt="Guitare et piano"
            preset="illustration"
            width="160"
            height="107"
            loading="lazy"
            class="w-40 h-auto opacity-90"
          />
        </div>
      </div>
    </section>

    <!-- COMPÉTENCES -->
    <section class="relative z-10 pt-8 pb-16 px-6 text-center">
      <h2 class="font-bold mb-10 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
        Mes Compétences
      </h2>

      <div class="max-w-6xl mx-auto space-y-16">
        <div v-for="group in skillGroups" :key="group.title">
          <h3
            class="relative inline-block text-lg sm:text-xl font-semibold mb-10
                   after:content-[''] after:block after:w-16 after:h-[3px] after:mx-auto after:mt-2 after:rounded-full"
            :class="[group.color, group.bar]"
          >
            {{ group.title }}
          </h3>

          <ul class="flex flex-wrap justify-center items-center gap-8 sm:gap-14 md:gap-20 list-none">
            <li
              v-for="tech in group.items"
              :key="tech.name"
              class="flex flex-col items-center text-center"
            >
              <!--
                Pas de width/height ici : les logos n'ont pas tous le même
                format (nuxt.png est en 4:1, php.png en 1.9:1). Forcer un
                carré les ferait recadrer par IPX. La taille est fixée par
                les classes CSS, donc pas de décalage de mise en page.
              -->
              <NuxtImg
                :src="tech.icon"
                alt=""
                aria-hidden="true"
                preset="icon"
                loading="lazy"
                class="object-contain mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <span class="text-white/90 text-xs sm:text-sm md:text-base">{{ tech.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
