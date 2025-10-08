<template>
  <div class="bg-gradient-radial from-[#2f1491] to-[#030005] min-h-screen relative">
    <!-- INTRO ET CONTACT PREVIEW -->
    <section id="contact" class="relative z-10 mx-auto pt-24 pb-32 -mb-14 text-center" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);">
      <img 
        src="~/assets/images/bg-contact.png"
        alt="Fond tech" 
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      
      <div class="relative z-20">
        
        <h2 class="text-4xl font-bold text-white pb-12">Bienvenue sur mon espace personnel.</h2>
        <p class="text-gray-200 max-w-5xl text-lg mx-auto mb-32">
        J’y partage mes projets réalisés ainsi que ceux en construction, une vitrine de mon travail et de mon évolution. 
        </p>  

        <!-- <p class="text-gray-300 max-w-5xl mx-auto mb-16">
        Je crée des sites modernes, performants et optimisés SEO. 
        Ouvert aux opportunités professionnelles et à l'accompagnement des entreprises dans leur visibilité en ligne.
        </p>   -->
        <h2 class="text-3xl font-bold mb-6 text-white">Un projet en tête ? Vous êtes une entreprise ?</h2><br>
        <p class="text-gray-300 mb-16">
          N'hésitez pas à me contacter pour discuter de vos idées ou projets.
        </p>
        <NuxtLink
          to="/contact"
          class="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Me contacter
        </NuxtLink>
      </div>
    </section>

    <!-- Séparateur haut -->
    <div class="w-full h-2 bg-gradient-animated skew-y-3"></div>

    <!-- PROJETS PREVIEW -->
    <section id="projets" class="relative z-10 mx-auto pb-32 pt-32 -mt-16 -mb-16 text-center" style="clip-path: polygon(0 0, 100% 18%, 100% 82%, 0 100%);">
      <img 
        src="~/assets/images/projet-image.png"
        alt="Fond tech" 
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      
      <div class="relative z-20">
        <h2 class="text-3xl font-bold mb-6 text-white">Mes Projets</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          Voici un aperçu de mes projets récents. Cliquez sur le bouton ci-dessous pour en découvrir davantage !
        </p>

        <!-- Logos ronds -->
        <div class="flex flex-wrap justify-center gap-10 my-20">
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="~/assets/images/jujupeinturt.png"
              alt="Juju Peint'Urt"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="~/assets/images/odouceurdejulie.png"
              alt="Ô Douceur de Julie"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="~/assets/images/calinsdanges.png"
              alt="Câlins d'Anges"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Bouton voir plus -->
        <NuxtLink
          to="/projets"
          class="inline-block bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold shadow-lg duration-300"
        >
          Voir tous mes projets →
        </NuxtLink>
      </div>
    </section>

    <!-- Séparateur bas -->
    <div class="w-full h-2 bg-gradient-animated-reverse -skew-y-3 mb--3"></div>

    <!-- ABOUT PREVIEW -->
    <section id="about" class="relative z-10 mx-auto pb-16 pt-32 px-6 -mt-16 text-center" style="clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0 100%);">
      <img 
        src="~/assets/images/bg-contact.png"
        alt="Fond tech" 
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      
      <div class="relative z-20">
        <h2 class="text-3xl font-bold mb-6 text-white">À propos de moi</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
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
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>