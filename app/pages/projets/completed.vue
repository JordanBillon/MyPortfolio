<template>
  <div class="relative min-h-screen bg-gradient-to-b from-[#2f1491] to-[#030005] text-white py-20 px-6">

    <!-- Image de fond -->
    <img 
      src="~/assets/images/projet-image.png"
      alt="Fond tech" 
      class="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
    />
    
    <!-- Contenu principal -->
    <div class="relative z-10">
      <!-- Titre -->
      <h1 class="text-4xl font-bold mb-6 text-center">Mes Réalisations ✅</h1>
      <p class="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Découvrez une sélection de projets finalisés, créés pour renforcer la présence en ligne et l’identité digitale de différentes entreprises.
      </p>

      <!-- Grille -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <!-- Ô Douceur de Julie -->
        <div class="bg-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6 text-center">
          <div class="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg shadow-pink-500/40">
            <img src="~/assets/images/odouceurdejulie.png" alt="Ô Douceur de Julie" class="w-full h-full object-cover" />
          </div>
          <h2 class="text-2xl font-semibold mb-2">Ô Douceur de Julie</h2>
          <p class="text-gray-300 mb-4">
            Site vitrine pour des ateliers bien-être bébé. Optimisé SEO pour capter une audience locale qualifiée.
          </p>
          <div class="flex flex-wrap gap-2 justify-center mb-4">
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">SEO</span>
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Local</span>
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Vitrine</span>
          </div>
          <a href="https://odouceurdejulie.fr" target="_blank" class="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-sm font-semibold">
            Voir le site
          </a>
        </div>

        <!-- Juju Peint'Urt -->
        <div class="bg-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6 text-center">
          <div class="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg shadow-pink-500/40">
            <img src="~/assets/images/jujupeinturt.png" alt="Juju Peint'Urt" class="w-full h-full object-cover" />
          </div>
          <h2 class="text-2xl font-semibold mb-2">Juju Peint'Urt</h2>
          <p class="text-gray-300 mb-4">
            Mise en avant web pour une entreprise de peinture intérieure & extérieure. Site vitrine optimisé SEO.
          </p>
          <div class="flex flex-wrap gap-2 justify-center mb-4">
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">SEO</span>
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Local</span>
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Vitrine</span>
          </div>
          <a href="https://jujupeinture.com" target="_blank" class="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-sm font-semibold">
            Voir le site
          </a>
        </div>

        <!-- Câlins d’Anges (hors ligne, hover actif, image normale) -->
        <div class="bg-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6 text-center">
          <div class="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg shadow-pink-500/40">
            <img src="~/assets/images/calinsdanges.png" alt="Câlins d’Anges" class="w-full h-full object-cover" />
          </div>
          <h2 class="text-2xl font-semibold mb-2">Câlins d’Anges</h2>
          <p class="text-gray-300 mb-4">
            Entreprise de bien-être périnatal à Toulouse. Site optimisé SEO avec quiz & blog. (Actuellement hors ligne)
          </p>
          <div class="flex flex-wrap gap-2 justify-center mb-4">
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">SEO</span>
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Blog</span>
            <span class="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300">Quiz</span>
          </div>
          <!-- Bouton désactivé -->
          <button
            type="button"
            aria-disabled="true"
            class="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-500/60 text-gray-200 cursor-not-allowed"
            title="Site hors ligne"
          >
            Site hors ligne
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
