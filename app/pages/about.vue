<template>
  <div class="bg-gradient-radial from-[#2f1491] to-[#030005] min-h-screen relative overflow-hidden text-white">
    <img 
        src="~/assets/images/bureau.png"
        alt="Fond tech" 
        class="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
    <!-- INTRO -->
    <section class="relative z-10 text-center py-20 px-6">
      <h1 class="text-4xl font-extrabold mb-6">À propos de moi</h1>
      <p class="text-gray-300 max-w-3xl mx-auto">
        Développeur web full stack passionné, je crée des sites modernes, performants et optimisés SEO.
        Mon objectif : transformer des idées en projets concrets tout en apportant des solutions adaptées aux besoins des entreprises.
      </p>
    </section>

    <!-- PRESENTATION -->
    <section class="relative z-10 py-20 px-6 bg-white/5 backdrop-blur-lg rounded-2xl mx-6 md:mx-20 text-center shadow-lg">
      <h2 class="text-3xl font-bold mb-6">Qui suis-je ?</h2>
      <p class="text-gray-300 max-w-3xl mx-auto">
        Ancien fusilier commando de l’air, j’ai acquis discipline, rigueur et esprit d’équipe.
        Ces valeurs m’accompagnent aujourd’hui dans ma reconversion en développement web,
        où je mets mon énergie et ma créativité au service de projets digitaux ambitieux.
      </p>
    </section>

    <!-- COMPÉTENCES -->
    <section class="relative z-10 py-20 px-6 text-center">
      <h2 class="text-3xl font-bold mb-10">Mes Compétences</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
        <!-- Exemple de techno -->
        <div class="flex flex-col items-center">
          <img src="~/assets/images/html.png" alt="HTML" class="w-16 h-16 mb-2" />
          <span class="text-sm text-gray-300">HTML5</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="~/assets/images/css.png" alt="CSS" class="w-16 h-16 mb-2" />
          <span class="text-sm text-gray-300">CSS3</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="~/assets/images/js.png" alt="JavaScript" class="w-16 h-16 mb-2" />
          <span class="text-sm text-gray-300">JavaScript</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="~/assets/images/vue.png" alt="Vue.js" class="w-16 h-16 mb-2" />
          <span class="text-sm text-gray-300">Vue.js</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="~/assets/images/nuxt.png" alt="Nuxt.js" class="w-16 h-16 mb-2" />
          <span class="text-sm text-gray-300">Nuxt</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="~/assets/images/tailwind.png" alt="TailwindCSS" class="w-16 h-16 mb-2" />
          <span class="text-sm text-gray-300">TailwindCSS</span>
        </div>
        <!-- Tu peux continuer avec Node.js, MySQL, Git, etc -->
      </div>
    </section>
  </div>
</template>
