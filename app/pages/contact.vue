<script setup>
useHead({
  title: 'Contact | Travaillons ensemble – Développeur Web à Toulouse',
  meta: [
    {
      name: 'description',
      content:
        "Besoin d’un site web ou d’un développeur full stack à Toulouse ? Contactez-moi pour échanger sur vos projets et vos besoins numériques."
    }
  ]
})
</script>


<template>
  <section
    class="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center 
           bg-gradient-radial from-[#2f1491] to-[#030005] text-white px-6 py-16"
  >
    <!-- Image de fond -->
    <NuxtImg 
      src="/images/bg-contact.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-20"
      fetchpriority="high"
      loading="eager"
    />

    <!-- Bloc principal contact -->
    <div class="relative z-10 max-w-3xl w-full text-center mb-24">
      <h1
        class="font-bold mb-6 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]"
      >
        📬 Contactez-moi
      </h1>

      <p
        class="text-gray-200 mb-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Je suis disponible pour échanger autour d'opportunités professionnelles ou pour la réalisation de vos projets web.
      </p>

      <!-- Bloc contacts -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
      >
        <!-- Téléphone -->
        <a 
          href="tel:+33641940401"
          class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg 
                 hover:scale-105 hover:bg-white/20 transition-all duration-200 
                 w-full md:w-[360px] lg:w-[380px] max-w-[400px]"
        >
          <NuxtImg src="/images/phone.png" alt="Téléphone" class="w-12 h-12" />
          <div class="flex-1 flex flex-col items-center justify-center">
            <h2 class="text-lg md:text-xl font-semibold">Téléphone</h2>
            <p class="text-gray-300 text-sm md:text-base">+33 6 41 94 04 01</p>
          </div>
        </a>

        <!-- Email -->
        <a 
          href="mailto:jordan-billon@hotmail.fr"
          class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg 
                 hover:scale-105 hover:bg-white/20 transition-all duration-200 
                 w-full md:w-[360px] lg:w-[380px] max-w-[400px]"
        >
          <NuxtImg src="/images/mail.png" alt="Email" class="w-12 h-12" />
          <div class="flex-1 flex flex-col items-center justify-center">
            <h2 class="text-lg md:text-xl font-semibold">Email</h2>
            <p class="text-gray-300 text-sm md:text-base">jordan-billon@hotmail.fr</p>
          </div>
        </a>   
      </div>
    </div>

    <!-- Bloc réseaux -->
    <div class="relative z-10 max-w-3xl w-full text-center mb-12">
      <h1
        class="font-bold mb-6 text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]"
      >
        Pour suivre l'avancée de mes projets, n'hésitez pas à me suivre !
      </h1>

      <p
        class="text-gray-200 mb-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Je partage mes projets et mon parcours sur ces réseaux, n'hésitez pas à me suivre.
      </p>

      <!-- Cartes réseaux -->
      <div class="flex flex-col items-center gap-8">
        <!-- LinkedIn -->
        <div class="w-full max-w-[400px]">
          <a 
            href="https://linkedin.com/in/jordan-billon" 
            target="_blank"
            class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg 
                   hover:scale-105 hover:bg-white/20 transition-all duration-200"
          >
            <NuxtImg src="/images/linkedin.png" alt="Logo LinkedIn" class="w-12 h-12" />
            <div class="flex-1 flex flex-col items-center justify-center">
              <h2 class="text-lg md:text-xl font-semibold">LinkedIn</h2>
              <p class="text-gray-300 text-sm md:text-base">linkedin.com/in/jordan-billon/</p>
            </div>
          </a>
        </div>

        <!-- GitHub -->
        <div class="w-full max-w-[400px]">
          <a 
            href="https://github.com/JordanBillon" 
            target="_blank"
            class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg 
                   hover:scale-105 hover:bg-white/20 transition-all duration-200"
          >
            <NuxtImg src="/images/github.png" alt="Logo GitHub" class="w-12 h-12"/>
            <div class="flex-1 flex flex-col items-center justify-center">
              <h2 class="text-lg md:text-xl font-semibold">GitHub</h2>
              <p class="text-gray-300 text-sm md:text-base">github.com/JordanBillon</p>
            </div>
          </a>
        </div>

        <!-- X (désactivé) -->
        <div class="w-full max-w-[400px]">
          <div 
            class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg 
                   transition-all duration-200 opacity-70 cursor-not-allowed"
          >
            <NuxtImg src="/images/x.png" alt="Logo X" class="w-12 h-12" />
            <div class="flex-1 flex flex-col items-center justify-center">
              <h2 class="text-lg md:text-xl font-semibold text-center">X</h2>
              <p class="text-gray-400 italic text-sm md:text-base">Bientôt...</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
</template>