/**
 * Reconstitue une chaîne à partir de codes de caractères.
 *
 * Sert à ne pas écrire en clair les coordonnées de contact (téléphone,
 * e-mail) dans le code source : combiné à <ClientOnly>, le résultat est
 * absent du HTML pré-généré et n'apparaît pas non plus en clair dans les
 * bundles JavaScript.
 *
 * Limite : ceci arrête les robots qui se contentent de lire le HTML brut,
 * pas ceux qui exécutent du JavaScript. Aucune protection côté client ne
 * le peut — si un humain peut lire la valeur, une machine bien faite aussi.
 *
 * Pour générer les codes d'une nouvelle valeur :
 *   [...'texte'].map(c => c.charCodeAt(0))
 */
export function decodeChars(codes: number[]): string {
  return codes.map(code => String.fromCharCode(code)).join('')
}
