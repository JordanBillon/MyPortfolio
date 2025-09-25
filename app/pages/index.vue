<template>
  <div class="bg-gradient-radial from-[#2f1491] to-[#030005] min-h-screen relative">

    <img 
      src="~/assets/images/bg-contact.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
    />
      
    <!-- CONTACT PREVIEW -->
    <section id="contact" class="relative z-10 mx-auto pt-20 pb-12 px-6 text-center">
      <h2 class="text-3xl font-bold mb-6 text-white">Un projet en tête ? Une collaboration ? Vous êtes une entreprise ?</h2><br>
      <p class="text-gray-300 mb-16">
        N'hésitez pas à me contacter pour discuter de vos idées ou projets.
      </p>
      <NuxtLink
        to="/contact"
        class="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
      >
        Me contacter
      </NuxtLink>
    </section>

    <!-- Séparateur haut -->
    <div class="w-full mt-8 mb-6 h-4 bg-gradient-animated skew-y-3"></div>


    <!-- PROJETS PREVIEW -->
    <section id="projets" class="relative z-10 mx-auto py-12 px-6 text-center">
      <h2 class="text-3xl font-bold mb-6 text-white">Mes Projets</h2>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Voici un aperçu de mes projets récents. Cliquez sur le bouton ci-dessous pour en découvrir davantage !
      </p>

      <!-- Logos ronds -->
      <div class="flex flex-wrap justify-center gap-10 m-20">
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
            alt="Câlins d’Anges"
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
    </section>

    <!-- Séparateur haut -->
    <div class="w-full mt-8 mb-6 h-4 bg-gradient-animated-reverse -skew-y-3 "></div>


    <!-- ABOUT PREVIEW -->
    <section id="about" class="relative z-10 mx-auto py-12 px-6 text-center">
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