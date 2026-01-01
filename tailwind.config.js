/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "oklch(84.5% 0.143 164.978)", // YOUR THEME COLOR
          primaryDark: "oklch(70% 0.143 164.978)",
          primaryLight: "oklch(92% 0.12 164.978)",
        },
      },
    },
    plugins: [],
  };
  