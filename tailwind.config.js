/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibmPlexMono", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
