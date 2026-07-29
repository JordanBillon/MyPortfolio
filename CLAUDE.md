# CLAUDE.md — jordanbillon.fr

Portfolio personnel (Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS), généré en statique et déployé sur Vercel.

## Commandes spécifiques

```bash
npm run generate  # Génération statique (déployé sur Vercel)
npm run typecheck # Vérification TypeScript
npm run lint      # ESLint (lint:fix pour corriger)
```

## Pages

```
app/pages/
├── index.vue
├── about.vue
├── contact.vue
└── projets/
    ├── index.vue
    ├── completed.vue
    └── work-in-progress.vue
```

## Composants et composables

- `<AppHeader>` — en-tête fixe + tiroir mobile. Les liens de navigation sont
  définis **une seule fois** dans le tableau `links`, partagé par les deux navigations.
- `<PageBackground src="...">` — image de fond décorative plein écran
  (`alt=""` + `aria-hidden`). Le parent doit être `relative`, le contenu au-dessus `relative z-10`.
- `<ProjectCard>` — carte de projet.
- `usePageSeo({ title, description, path })` — **à appeler dans chaque page**.
  Pose titre, description, canonical, Open Graph et Twitter Card.

## Modules

- `@nuxtjs/tailwindcss` — config dans `tailwind.config.js`
- `@nuxt/fonts` — Poppins, Roboto, Abril Fatface → via `font-sans`, `font-roboto`, `font-abril`
- `@nuxt/image` — utiliser `<NuxtImg>` avec un `preset`
- `@nuxt/eslint` — config dans `eslint.config.mjs`

## Images

Sources dans `public/images/`, optimisées au build par IPX. Toujours passer par un
**preset** défini dans `nuxt.config.ts` plutôt que de régler les modificateurs à la main :
`logo`, `icon`, `avatar`, `illustration`.

⚠️ L'option de config est `format` (singulier). Écrite `formats`, elle est ignorée
en silence et la conversion WebP ne se fait plus.

## Tailwind custom

- Couleurs de marque : `brand-purple` (#2f1491), `brand-dark` (#030005), `brand-plum`, `brand-rose`.
  Utiliser ces noms plutôt que de recopier les codes hexa.
- `font-sans` → Poppins (avec fallback sans-serif)
- Animations `gradient`, `slideGradient`
- Utilitaires : `bg-gradient-radial`, `bg-gradient-conic`

## Styles

CSS global : `app/assets/css/main.css` (focus visible, `prefers-reduced-motion`, scroll-padding).

## À ne pas oublier

- Nouvelle page → appeler `usePageSeo()` **et** l'ajouter à `public/sitemap.xml`.
- Toute page doit avoir un `<h1>` unique.
- Images décoratives → `<PageBackground>` ou `alt=""` + `aria-hidden="true"`.
