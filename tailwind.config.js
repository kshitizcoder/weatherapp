/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {

      light: "#2b2c34",
      ternary: "#2cb67d",
      primary: "#6246ea",
      pure: "#ffffff"
    }
  },
  plugins: [],
}