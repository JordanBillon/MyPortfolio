<script setup>
useHead({
  title: 'Accueil | Mon Portfolio – Développeur Web Full Stack à Toulouse',
  meta: [
    {
      name: 'description',
      content:
        "Bienvenue sur mon portfolio ! Découvrez mes projets web, mes compétences ainsi que mon parcours ."
    }
  ]
})
</script>


<template>
  <div class="bg-gradient-radial from-[#2f1491] to-[#030005] min-h-screen relative">

    <!-- INTRO ET CONTACT PREVIEW -->
    <section id="contact" class="section-contact relative z-10 mx-auto pt-24 lg:pb-60 md:pb-40 pb-20 px-6 -mb-4 md:-mb-6 lg:-mb-10 2xl:-mb-14 text-center">
      <NuxtImg
        src="/images/bg-contact.png"
        alt="Fond tech"
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        fetchpriority="high"
        loading="eager"
      />
      
      <div class="relative z-20">   
        <h2 class="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.25rem] font-bold text-white pb-12">
          Bienvenue sur mon espace personnel.
        </h2>

        <div class="inline-block mx-auto max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-lg mb-16 md:mb-20 xl:mb-24 border border-white/10">
          <p class="text-gray-100 leading-relaxed sm:leading-loose text-[0.90rem] sm:text-base md:text-lg">
            Vous trouverez ici mes projets terminés, ceux en cours de construction, et un aperçu de qui je suis ainsi que de mon parcours.<br><br>
            Le site évoluera régulièrement au fil de mes idées et de mes nouvelles réalisations.<br><br>
            Ce site reflète mon parcours, mes projets et la passion que je mets dans chaque création.
          </p>
        </div>  

        <h2 class="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold mb-6 text-white">
          Un projet en tête ? Vous êtes une entreprise ?
        </h2><br>

        <p class="text-gray-300 mb-16 text-[0.90rem] sm:text-base md:text-lg">
          Disponible dès maintenant, je suis à la recherche d’opportunités dans la région toulousaine.<br><br>
          Mon profil full stack me permet d’intervenir aussi bien sur le front-end (HTML, VueJS, TailwindCSS) que sur le back-end (Symfony PHP).<br><br>
          Je serais ravi d’échanger autour de vos besoins ou projets web.
        </p>

        <NuxtLink
          to="/contact"
          class="bg-pink-500 hover:bg-pink-600 px-4 py-2 md:px-5 lg:px-6 md:py-3 rounded-lg font-semibold shadow-lg"
        >
          Me contacter
        </NuxtLink>
      </div>
    </section>

    <!-- Séparateur haut -->
    <div class="w-full h-2 bg-gradient-animated skew-y-3"></div>

    <!-- PROJETS PREVIEW -->
    <section id="projets" class="section-projets relative z-10 mx-auto pb-40 pt-40 -mt-16 lg:-mb-16 -mb-8 text-center">
      <NuxtImg
        src="/images/projet-image.png"
        alt="Fond tech"
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      
      <div class="relative z-20">
        <h2 class="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold mb-6 text-white">Mes Projets</h2>
        <p class="text-gray-300 max-w-2xl mx-auto text-[0.90rem] sm:text-base md:text-lg">
          Voici un aperçu de mes projets récents. Découvrez-en davantage en cliquant sur le bouton ci-dessous !
        </p>

        <div class="flex flex-wrap justify-center gap-10 my-20">
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <NuxtImg src="/images/jujupeinturt.png" alt="Juju Peint'Urt" class="w-full h-full object-cover" />
          </div>
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <NuxtImg src="/images/odouceurdejulie.png" alt="Ô Douceur de Julie" class="w-full h-full object-cover" />
          </div>
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <NuxtImg src="/images/calinsdanges.png" alt="Câlins d'Anges" class="w-full h-full object-cover" />
          </div>
        </div>

        <NuxtLink
          to="/projets"
          class="inline-block bg-pink-500 hover:bg-pink-600 px-4 py-2 md:px-5 lg:px-6 md:py-3 rounded-lg font-semibold shadow-lg duration-300"
        >
          Voir tous mes projets →
        </NuxtLink>
      </div>
    </section>

    <!-- Séparateur bas -->
    <div class="w-full h-2 bg-gradient-animated-reverse -skew-y-3 mb--3"></div>

    <!-- ABOUT PREVIEW -->
    <section id="about" class="section-about relative z-10 mx-auto pb-20 pt-40 px-6 2xl:-mt-10 lg:-mt-8 -mt-8 text-center">
      <NuxtImg
        src="/images/bureau.png"
        alt="Fond tech"
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      
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

/* 🎯 CLIP PATHS RESPONSIVES */
.section-contact {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
}

.section-projets {
  clip-path: polygon(0 0, 100% 16%, 100% 85%, 0 100%);
}

.section-about {
  clip-path: polygon(0 23%, 100% 0%, 100% 100%, 0 100%);
}

/* === BREAKPOINTS === */

/* ≥1536px (2XL) */
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

/* ≥1024px (LG) */
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

/* ≥768px (MD) */
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

/* ≥568px (SD) */
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
