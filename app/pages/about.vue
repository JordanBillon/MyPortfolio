<template>
  <div class="bg-gradient-radial from-[#2f1491] to-[#030005] min-h-screen relative overflow-hidden text-white">
    <!-- Image de fond -->
    <img 
      src="~/assets/images/bureau.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
    />

    <!-- PRESENTATION -->
    <section class="relative z-10 py-12 sm:py-16 px-6 text-center">
      <div class="inline-block mx-auto max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-lg border border-white/10">
        <h2 class="font-bold mb-8 sm:mb-10 md:mb-12 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
          Qui suis-je ?
        </h2>
        <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">
          Si tu lis ca loick t'es un PD, j’ai acquis discipline, rigueur et esprit d’équipe.
          Ces valeurs m’accompagnent aujourd’hui dans ma reconversion en développement web,
          où je mets mon énergie et ma créativité au service de projets digitaux ambitieux.<br><br>
          Si tu lis ca loick t'es un PD, j’ai acquis discipline, rigueur et esprit d’équipe.
          Ces valeurs m’accompagnent aujourd’hui dans ma reconversion en développement web,
          où je mets mon énergie et ma créativité au service de projets digitaux ambitieux.
        </p>
      </div>
    </section>

    <!-- COMPÉTENCES -->
    <section class="relative z-10 pt-8 pb-16 px-6 text-center">
      <h2 class="font-bold mb-10 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]">
        Mes Compétences
      </h2>

      <div class="max-w-6xl mx-auto space-y-16">

        <!-- FRONT-END -->
        <div>
          <h3
            class="relative inline-block text-lg sm:text-xl font-semibold text-pink-400 mb-10
                  after:content-[''] after:block after:w-16 after:h-[3px] after:mx-auto after:mt-2 after:bg-pink-400 after:rounded-full"
          >
            Front-end
          </h3>

          <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-14 md:gap-20 mb-12">
            <div
              v-for="tech in frontTechs"
              :key="tech.name"
              class="flex flex-col items-center text-center"
            >
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="object-contain mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <span class="text-white/90 text-xs sm:text-sm md:text-base">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- BACK-END -->
        <div>
          <h3
            class="relative inline-block text-lg sm:text-xl font-semibold text-green-400 mb-10
                  after:content-[''] after:block after:w-16 after:h-[3px] after:mx-auto after:mt-2 after:bg-green-400 after:rounded-full"
          >
            Back-end
          </h3>

          <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-14 md:gap-20 mb-12">
            <div
              v-for="tech in backTechs"
              :key="tech.name"
              class="flex flex-col items-center text-center"
            >
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="object-contain mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <span class="text-white/90 text-xs sm:text-sm md:text-base">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- OUTILS -->
        <div>
          <h3
            class="relative inline-block text-lg sm:text-xl font-semibold text-sky-400 mb-10
                  after:content-[''] after:block after:w-16 after:h-[3px] after:mx-auto after:mt-2 after:bg-sky-400 after:rounded-full"
          >
            Outils & Gestion
          </h3>

          <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-14 md:gap-20">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="flex flex-col items-center text-center"
            >
              <img
                :src="tool.icon"
                :alt="tool.name"
                class="object-contain mb-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <span class="text-white/90 text-xs sm:text-sm md:text-base">{{ tool.name }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
/* FRONT-END */
import htmlIcon from '~/assets/images/html.png'
import cssIcon from '~/assets/images/css.png'
import jsIcon from '~/assets/images/js.png'
import vueIcon from '~/assets/images/vue.png'
import nuxtIcon from '~/assets/images/nuxt.png'
import tailwindIcon from '~/assets/images/tailwind.png'

/* BACK-END */
import nodeIcon from '~/assets/images/node.png'
import phpIcon from '~/assets/images/php.png'
import symfonyIcon from '~/assets/images/symfony.png'
import mysqlIcon from '~/assets/images/mysql.png'

/* OUTILS & GESTION */
import gitIcon from '~/assets/images/git.png'
import dockerIcon from '~/assets/images/docker.png'
import cypressIcon from '~/assets/images/cypress.png'
import postmanIcon from '~/assets/images/postman.png'

const frontTechs = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Vue.js", icon: vueIcon },
  { name: "Nuxt", icon: nuxtIcon },
  { name: "TailwindCSS", icon: tailwindIcon },
]

const backTechs = [
  { name: "Node.js", icon: nodeIcon },
  { name: "PHP", icon: phpIcon },
  { name: "Symfony", icon: symfonyIcon },
  { name: "MySQL", icon: mysqlIcon },
]

const tools = [
  { name: "Git", icon: gitIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Cypress", icon: cypressIcon },
  { name: "Postman", icon: postmanIcon },
]
</script>
