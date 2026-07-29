# jordanbillon.fr

Portfolio personnel de **Jordan Billon**, concepteur développeur web full stack à Toulouse.

Construit avec **Nuxt 4**, **Vue 3**, **TypeScript** et **Tailwind CSS**, généré en statique et déployé sur Vercel.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

## Commandes

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run generate` | Génération statique dans `.output/public` (c'est ce que déploie Vercel) |
| `npm run preview` | Prévisualise le build |
| `npm run typecheck` | Vérification TypeScript |
| `npm run lint` | Vérification ESLint (`npm run lint:fix` pour corriger) |

## Structure

```
app/
├── app.vue                  # Point d'entrée : skip-link, header, footer, JSON-LD
├── error.vue                # Page 404 / erreur
├── assets/css/main.css      # Styles globaux (focus visible, reduced-motion)
├── components/
│   ├── AppHeader.vue        # En-tête fixe + menu latéral mobile
│   ├── AppFooter.vue
│   ├── PageBackground.vue   # Image de fond décorative plein écran
│   └── ProjectCard.vue      # Carte de projet
├── composables/
│   └── usePageSeo.ts        # Titre, description, canonical, Open Graph
└── pages/
    ├── index.vue
    ├── about.vue
    ├── contact.vue
    └── projets/
        ├── index.vue
        ├── completed.vue
        └── work-in-progress.vue
```

## Images

Les images sources vivent dans `public/images/`. **Pas besoin de les optimiser à la main** :
`@nuxt/image` (IPX) les redimensionne et les convertit en WebP au moment du build.

Le réglage se fait au seul endroit qui compte, les `presets` de [`nuxt.config.ts`](nuxt.config.ts) :

| Preset | Usage | Sortie |
|---|---|---|
| `logo` | Logo de l'en-tête | WebP 260px |
| `icon` | Icônes techno et réseaux sociaux | WebP 160px |
| `avatar` | Vignettes rondes des projets | WebP 400×400 |
| `illustration` | Illustrations de section | WebP 600px |

Les images de fond passent par `<PageBackground>`, qui génère un `srcset` responsive
en WebP qualité 60 (elles sont affichées à faible opacité, la qualité peut être basse).

> ⚠️ L'option de configuration s'appelle `format` — **au singulier**. Écrite `formats`,
> elle est ignorée en silence et plus aucune conversion WebP n'a lieu.

## SEO

Chaque page appelle `usePageSeo()`, qui pose le titre, la description, l'URL canonique,
les balises Open Graph (aperçu LinkedIn/Facebook) et la Twitter Card.

L'image de partage est `public/images/og-image.png` (1200×630).

En cas d'ajout d'une page, penser à :
1. appeler `usePageSeo()` dedans ;
2. ajouter son URL dans [`public/sitemap.xml`](public/sitemap.xml).

## Déploiement

Vercel exécute `npm run generate` et sert `.output/public` en statique.
