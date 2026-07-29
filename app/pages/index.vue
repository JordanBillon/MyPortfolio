<script setup lang="ts">
usePageSeo({
  title: 'Accueil',
  description:
    'Portfolio de Jordan Billon, concepteur développeur web full stack à Toulouse. Découvrez mes projets web, mes compétences front-end et back-end, ainsi que mon parcours.',
  path: '/',
})

const previewProjects = [
  { name: "Juju Peint'Urt", image: '/images/jujupeinturt.png' },
  { name: "Câlins d'Anges", image: '/images/calinsdanges.png' },
]
</script>

<template>
  <div class="bg-gradient-radial from-brand-purple to-brand-dark min-h-screen relative">

    <!-- INTRO ET CONTACT PREVIEW -->
    <section
      id="intro"
      class="section-contact relative z-10 mx-auto pt-24 lg:pb-60 md:pb-40 pb-20 px-6 -mb-4 md:-mb-6 lg:-mb-10 2xl:-mb-14 text-center"
    >
      <PageBackground src="/images/bg-contact.webp" priority />

      <div class="relative z-20">
        <h1 class="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.25rem] font-bold text-white pb-12">
          Bienvenue sur mon espace personnel.
        </h1>

        <div class="inline-block mx-auto max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-lg mb-16 md:mb-20 xl:mb-24 border border-white/10">
          <div class="text-gray-100 leading-relaxed sm:leading-loose text-[0.90rem] sm:text-base md:text-lg space-y-4">
            <p>Vous trouverez ici mes projets terminés, ceux en cours de construction, et un aperçu de qui je suis ainsi que de mon parcours.</p>
            <p>Le site évoluera régulièrement au fil de mes idées et de mes nouvelles réalisations.</p>
            <p>Ce site reflète mon parcours, mes projets et la passion que je mets dans chaque création.</p>
          </div>
        </div>

        <h2 class="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold mb-10 text-white">
          Un projet en tête ? Vous êtes une entreprise ?
        </h2>

        <div class="text-gray-300 mb-16 text-[0.90rem] sm:text-base md:text-lg space-y-4">
          <p>Disponible dès maintenant, je suis à la recherche d’opportunités dans la région toulousaine.</p>
          <p>Mon profil full stack me permet d’intervenir aussi bien sur le front-end (HTML, VueJS, TailwindCSS) que sur le back-end (Symfony PHP).</p>
          <p>Je serais ravi d’échanger autour de vos besoins ou projets web.</p>
        </div>

        <NuxtLink
          to="/contact"
          class="inline-block bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-white px-4 py-2 md:px-5 lg:px-6 md:py-3 rounded-lg font-semibold shadow-lg"
        >
          Me contacter
        </NuxtLink>
      </div>
    </section>

    <!-- Séparateur haut -->
    <div class="w-full h-2 bg-gradient-animated skew-y-3" aria-hidden="true"/>

    <!-- PROJETS PREVIEW -->
    <section id="projets" class="section-projets relative z-10 mx-auto pb-40 pt-40 -mt-16 lg:-mb-16 -mb-8 text-center">
      <PageBackground src="/images/projet-image.webp" />

      <div class="relative z-20">
        <h2 class="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold mb-6 text-white">Mes Projets</h2>
        <p class="text-gray-300 max-w-2xl mx-auto text-[0.90rem] sm:text-base md:text-lg">
          Voici un aperçu de mes projets récents. Découvrez-en davantage en cliquant sur le bouton ci-dessous !
        </p>

        <ul class="flex flex-wrap justify-center gap-10 my-20 list-none">
          <li
            v-for="project in previewProjects"
            :key="project.name"
            class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <NuxtImg
              :src="project.image"
              :alt="project.name"
              preset="avatar"
              width="128"
              height="128"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </li>
        </ul>

        <NuxtLink
          to="/projets"
          class="inline-block bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-white px-4 py-2 md:px-5 lg:px-6 md:py-3 rounded-lg font-semibold shadow-lg"
        >
          Voir tous mes projets →
        </NuxtLink>
      </div>
    </section>

    <!-- Séparateur bas -->
    <div class="w-full h-2 bg-gradient-animated-reverse -skew-y-3" aria-hidden="true"/>

    <!-- ABOUT PREVIEW -->
    <section id="about" class="section-about relative z-10 mx-auto pb-20 pt-40 px-6 2xl:-mt-10 lg:-mt-8 -mt-8 text-center">
      <PageBackground src="/images/bureau.webp" />

      <div class="relative z-20">
        <h2 class="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold mb-6 text-white">À propos de moi</h2>
        <p class="text-gray-300 max-w-2xl mx-auto text-[0.90rem] sm:text-base md:text-lg">
          Je suis un développeur passionné par la création de sites modernes,
          performants et élégants. J'aime transformer des idées en projets concrets
          et travailler avec les dernières technologies.
        </p>
        <NuxtLink
          to="/about"
          class="inline-block mt-6 text-pink-400 hover:underline"
        >
          En savoir plus →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ANIMATIONS GRADIENTS */
.bg-gradient-animated {
  background: linear-gradient(90deg, #ec4899, #be185d, #7c2d92, #2f1491, #ec4899, #be185d, #7c2d92, #2f1491);
  background-size: 250% 100%;
  animation: slideGradient 8s linear infinite;
}

.bg-gradient-animated-reverse {
  background: linear-gradient(90deg, #2f1491, #7c2d92, #be185d, #ec4899, #2f1491, #7c2d92,#be185d, #ec4899 );
  background-size: 250% 100%;
  animation: slideGradient 8s linear infinite reverse;
}

@keyframes slideGradient {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
}

/* CLIP PATHS RESPONSIVES */
.section-contact {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
}

.section-projets {
  clip-path: polygon(0 0, 100% 16%, 100% 85%, 0 100%);
}

.section-about {
  clip-path: polygon(0 23%, 100% 0%, 100% 100%, 0 100%);
}

/* === BREAKPOINTS (bornes hautes : le style s'applique EN DESSOUS) === */

/* jusqu'à 1536px (sous 2XL) */
@media (max-width: 1536px) {
  .section-contact {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 93%);
  }
  .section-projets {
    clip-path: polygon(0 0, 100% 14%, 100% 87%, 0 100%);
  }
  .section-about {
    clip-path: polygon(0 16%, 100% 0%, 100% 100%, 0 100%);
  }
}

/* jusqu'à 1024px (sous LG) */
@media (max-width: 1024px) {
  .section-contact {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  }
  .section-projets {
    clip-path: polygon(0 0, 100% 13%, 100% 91%, 0 100%);
  }
  .section-about {
    clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0 100%);
  }
}

/* jusqu'à 768px (sous MD) */
@media (max-width: 768px) {
  .section-contact {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
  }
  .section-projets {
    clip-path: polygon(0 0, 100% 12%, 100% 93%, 0 100%);
  }
  .section-about {
    clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0 100%);
  }
}

/* jusqu'à 464px (petits mobiles) */
@media (max-width: 464px) {
  .section-contact {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 97%);
  }
  .section-projets {
    clip-path: polygon(0 0, 100% 12%, 100% 93%, 0 100%);
  }
  .section-about {
    clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0 100%);
  }
}
</style>
