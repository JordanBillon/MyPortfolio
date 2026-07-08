# CLAUDE.md — jordanbillon.fr

Portfolio personnel (Vue 3 + TypeScript + Tailwind CSS).

## Commandes spécifiques

```bash
npm run generate  # Génération statique (déployé sur Vercel)
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

## Modules

- `@nuxtjs/tailwindcss` — config dans `tailwind.config.js`
- `@nuxt/fonts` — Poppins, Roboto, Abril Fatface → via `font-sans`, `font-[Roboto]`, `font-[Abril_Fatface]`
- `@nuxt/image` — utiliser `<NuxtImg>` (output WebP/AVIF, qualité 80%)

## Tailwind custom

- `font-sans` → Poppins
- Animation `gradient` (5s ease infinite)
- Utilitaires : `radial-gradient`, `conic-gradient`

## Styles

CSS global : `app/assets/css/main.css`
