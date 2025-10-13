<template>
  <div class="bg-gradient-radial from-[#2f1491] to-[#030005] min-h-screen relative overflow-hidden text-white">
    <img 
        src="~/assets/images/bureau.png"
        alt="Fond tech" 
        class="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

    <!-- PRESENTATION -->
    <section class="relative z-10 py-16 px-6 text-center">
      <div class="inline-block mx-auto max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl px-6 sm:px-10 py-8 shadow-lg border border-white/10">
        <h2 class="text-3xl font-bold mb-12">Qui suis-je ?</h2>
        <p class="text-gray-100 leading-loose">
          Ancien fusilier commando de l’air, j’ai acquis discipline, rigueur et esprit d’équipe.
          Ces valeurs m’accompagnent aujourd’hui dans ma reconversion en développement web,
          où je mets mon énergie et ma créativité au service de projets digitaux ambitieux.<br><br>
          Ancien fusilier commando de l’air, j’ai acquis discipline, rigueur et esprit d’équipe.
          Ces valeurs m’accompagnent aujourd’hui dans ma reconversion en développement web,
          où je mets mon énergie et ma créativité au service de projets digitaux ambitieux.
        </p>
      </div>
    </section>

    <!-- COMPÉTENCES -->
    <section class="relative z-10 pt-8 pb-16 px-6 text-center">
      <h2 class="text-3xl font-bold mb-10">Mes Compétences</h2>

      <div class="max-w-6xl mx-auto space-y-16">
        <!-- FRONT-END -->
        <h3 class="text-xl font-semibold text-pink-400 mb-6 text-center">Front-end</h3>
        <div class="flex flex-wrap justify-center items-center gap-20 mb-12">
          <div v-for="tech in frontTechs" :key="tech.name" class="flex flex-col items-center text-center">
            <img :src="tech.icon" :alt="tech.name" class="w-20 h-20 object-contain mb-2" />
            <span class="text-white/90 text-sm">{{ tech.name }}</span>
          </div>
        </div>

        <!-- BACK-END -->
        <h3 class="text-xl font-semibold text-green-400 mb-6 text-center">Back-end</h3>
        <div class="flex flex-wrap justify-center items-center gap-20 mb-12">
          <div v-for="tech in backTechs" :key="tech.name" class="flex flex-col items-center text-center">
            <img :src="tech.icon" :alt="tech.name" class="w-20 h-20 object-contain mb-2" />
            <span class="text-white/90 text-sm">{{ tech.name }}</span>
          </div>
        </div>

        <!-- OUTILS -->
        <h3 class="text-xl font-semibold text-sky-400 mb-6 text-center">Outils & Gestion</h3>
        <div class="flex flex-wrap justify-center items-center gap-20">
          <div v-for="tool in tools" :key="tool.name" class="flex flex-col items-center text-center">
            <img :src="tool.icon" :alt="tool.name" class="w-20 h-20 object-contain mb-2" />
            <span class="text-white/90 text-sm">{{ tool.name }}</span>
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
