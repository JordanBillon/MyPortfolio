<template>
  <!-- ABOUT PREVIEW -->
    <div class="bg-gradient-radial from-[#2f1491] to-[#030005]">
      <section id="about" class="mx-auto py-20 px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 text-white">À propos de moi</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          Je suis un développeur passionné par la création de sites modernes,
          performants et élégants. J’aime transformer des idées en projets concrets
          et travailler avec les dernières technologies.
        </p>
        <NuxtLink
          to="/about"
          class="inline-block mt-6 text-pink-400 hover:underline"
        >
          En savoir plus →
        </NuxtLink>
      </section>
      
        <!-- CONTACT PREVIEW -->
      <section id="contact" class=" mx-auto py-20 px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 text-white">Un projet en tête ? Une collaboration ? Vous etes une entreprise ?</h2>
        <p class="text-gray-300 mb-6">
          N’hésite pas à me contacter pour discuter de vos idées ou projets.
        </p>
        <NuxtLink
          to="/contact"
          class="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Me contacter
        </NuxtLink>
      </section>
    </div>
</template>


