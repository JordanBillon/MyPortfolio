<template>
  <section class="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gradient-radial from-[#2f1491] to-[#030005] text-white px-6">

    <img 
      src="~/assets/images/bg-contact.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-20"
    />

    <div class="max-w-3xl w-full text-center m-12">
      <h1 class="text-4xl font-bold mb-6">📬 Contactez-moi</h1>
      
      <p class="text-gray-200 mb-12 text-lg">
        Je suis disponible pour échanger autour d'opportunités profesionnelles ou pour la réalisation de vos projets web.
      </p>

      <!-- Bloc contacts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <!-- Téléphone -->
        <a 
          href="tel:+33641940401"
          class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-200"
        >
          <img src="~/assets/images/phone.png" alt="Téléphone" class="w-12 h-12" />
          <div>
            <h2 class="text-xl font-semibold">Téléphone</h2>
            <p class="text-gray-300">+33 6 41 94 04 01</p>
          </div>
        </a>

        <!-- Email -->
        <a 
          href="mailto:jordan-billon@hotmail.fr"
          class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-200"
        >
          <img src="~/assets/images/mail.png" alt="Email" class="w-12 h-12" />
          <div>
            <h2 class="text-xl font-semibold">Email</h2>
            <p class="text-gray-300">jordan-billon@hotmail.fr</p>
          </div>
        </a>   
      </div>
    </div>

    <div class="max-w-3xl w-full text-center m-12">
      <h1 class="text-4xl font-bold mb-6">Pour suivre l'avancée de mes projets, n'hésitez pas à me suivre !</h1>
      <p class="text-gray-200 mb-12 text-lg">
        Je partage mes projets et mon parcours sur ces réseaux, n’hésitez pas à me suivre.
      </p>
      <!-- Conteneur centré avec largeur limitée pour les 2 boîtes du bas -->
      <div class="flex flex-col items-center gap-8 text-left">
        <div class="w-full max-w-md">
          <a 
          href="https://linkedin.com/in/jordan-billon" 
          target="_blank"
          class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-200"
          >
            <img src="~/assets/images/linkedin.png" alt="Logo LinkedIn" class="w-12 h-12" />
            <div>
              <h2 class="text-xl font-semibold">LinkedIn</h2>
              <p class="text-gray-300">linkedin.com/in/jordan-billon/</p>
            </div>
          </a>
        </div>

        <div class="w-full max-w-md">
          <a 
            href="https://github.com/JordanBillon" 
            target="_blank"
            class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-200"
          >
            <img src="~/assets/images/github.png" alt="Logo GitHub" class="w-12 h-12"/>
            <div>
              <h2 class="text-xl font-semibold">GitHub</h2>
              <p class="text-gray-300">github.com/JordanBillon</p>
            </div>
          </a>
        </div> 
        <div class="w-full max-w-md">
          <div 
            class="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-200 opacity-70 cursor-not-allowed"
          >
            <img src="~/assets/images/x.png" alt="Logo X" class="w-12 h-12" />
            <div>
              <h2 class="text-xl font-semibold">X</h2>
              <p class="text-gray-400 italic">Bientôt...</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
</template>