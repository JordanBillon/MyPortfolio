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
           Ancien militaire dans les commandos de l’air, j’ai construit mon parcours autour de la rigueur, du dépassement de soi et du travail en équipe.<br>
          Ces valeurs m’accompagnent aujourd’hui dans le développement web, où je mets la même exigence et la même discipline au service de projets numériques ambitieux.</p>

          <div class="flex justify-center my-8">
            <img 
              src="~/assets/images/beret.png" 
              alt="Logo musique" 
              class="w-20 md:w-24 h-auto opacity-90"
            />
          </div> 

          <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">Après deux formations à l’école ADRAR Formation – une première en Développement Web et Mobile (niveau 5), suivie d’une en Conception et Développement d’Applications (niveau 6) – j’ai acquis une solide expérience sur l’ensemble du cycle de création d’un projet : front-end, back-end et architecture applicative.</p>

          <div class="flex justify-center my-8">
          
            <img 
              src="~/assets/images/diplome.png" 
              alt="Diplôme" 
              class="w-20 md:w-28 h-auto opacity-90"
              @click="showDiploma = true"
            />

          </div> 

          <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">Curieux et passionné, j’aime autant concevoir des interfaces élégantes que résoudre des problématiques techniques complexes.
          En parallèle, la musique occupe une place importante dans ma vie : je pratique la guitare et le piano, deux instruments qui développent, comme le code, la créativité et la précision.</p>

        <div class="flex justify-center my-8">
          <img 
            src="~/assets/images/musique.png" 
            alt="Logo musique" 
            class="w-40 h-auto opacity-90"
          />
        </div>  

        <!--<p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.95rem] sm:text-base md:text-lg">Aujourd’hui, je suis à la recherche d’opportunités dans la région toulousaine, au sein d’une entreprise où je pourrais mettre à profit mes compétences techniques et mes qualités humaines pour contribuer à des projets innovants et exigeants.
        </p>-->
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
