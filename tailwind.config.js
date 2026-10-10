/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        base: "var(--color-secondary)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
