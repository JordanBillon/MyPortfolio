/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}", // Nuxt 4 -> scanne tous les fichiers dans app/
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs de marque : évite de recopier les codes hexa partout
        brand: {
          purple: '#2f1491',
          dark: '#030005',
          plum: '#7c2d92',
          rose: '#be185d',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // Toujours terminer par une famille générique : si Poppins ne charge
        // pas, le navigateur retombe sur une sans-serif et non sur du serif.
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        abril: ['Abril Fatface', 'ui-serif', 'Georgia', 'serif'],
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        slideGradient: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 0%' },
        },
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
        slideGradient: 'slideGradient 8s linear infinite',
      },
    },
  },
  plugins: [],
}
