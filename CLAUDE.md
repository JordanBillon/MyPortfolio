# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Build for production
npm run generate  # Static site generation
npm run preview   # Preview production build
```

## Architecture

**Nuxt 4 portfolio website** (Vue 3 + TypeScript + Tailwind CSS).

### Key conventions

- Source lives entirely in `app/` (Nuxt 4 app directory pattern)
- Routing is file-based via `app/pages/` — no router config needed
- Components in `app/components/` are auto-imported (no explicit imports required)
- Global styles in `app/assets/css/main.css`

### Pages structure

```
app/pages/
├── index.vue          # Home
├── about.vue
├── contact.vue
└── projets/
    ├── index.vue            # All projects
    ├── completed.vue        # Finished projects
    └── work-in-progress.vue
```

### Modules in use

- `@nuxtjs/tailwindcss` — utility classes, config in `tailwind.config.js`
- `@nuxt/fonts` — Google Fonts (Poppins, Roboto, Abril Fatface); reference via Tailwind `font-sans`, `font-[Roboto]`, `font-[Abril_Fatface]`
- `@nuxt/image` — use `<NuxtImg>` for images (WebP/AVIF output, 80% quality)

### Custom Tailwind utilities (tailwind.config.js)

- `font-sans` → Poppins
- Custom animations: `gradient` (5s ease infinite)
- Custom gradient utilities: `radial-gradient`, `conic-gradient`

### Deployment

Deployed on Vercel. `nuxt generate` produces the static output.
