// Avec le www : jordanbillon.fr redirige (307) vers www.jordanbillon.fr.
// Une URL canonique doit pointer vers l'adresse finale, pas vers une redirection.
export const SITE_URL = 'https://www.jordanbillon.fr'
export const SITE_NAME = 'Jordan Billon'
export const SITE_OG_IMAGE = '/images/og-image.png'

interface PageSeoOptions {
  /** Titre de la page, sans le suffixe « | Jordan Billon » (ajouté automatiquement). */
  title: string
  /** Meta description, idéalement entre 120 et 160 caractères. */
  description: string
  /** Chemin de la page, ex. '/contact'. Sert à l'URL canonique. */
  path: string
  /** Image de partage spécifique à la page (sinon celle du site). */
  image?: string
}

/**
 * Centralise le SEO d'une page : titre, description, URL canonique,
 * Open Graph (LinkedIn, Facebook) et Twitter Card.
 */
export function usePageSeo({ title, description, path, image = SITE_OG_IMAGE }: PageSeoOptions) {
  const url = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${image}`
  const fullTitle = `${title} | ${SITE_NAME}`

  useSeoMeta({
    title: fullTitle,
    description,
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: url,
    ogLocale: 'fr_FR',
    ogImage: imageUrl,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${SITE_NAME} — Concepteur Développeur Web Full Stack`,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: imageUrl,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
