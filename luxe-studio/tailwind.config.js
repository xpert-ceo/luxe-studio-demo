/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "var(--c-bg)", ink: "var(--c-text)", muted: "var(--c-muted)",
        accent: "var(--c-accent)", surface: "var(--c-surface)", line: "var(--c-border)", taupe: "var(--c-taupe)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
