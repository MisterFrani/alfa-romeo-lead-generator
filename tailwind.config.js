/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        alfaBlack: "#161821",
        alfaRed: "#ad171c",
        alfaRedDark: "#962a1e",
        alfaWhite: "#F4F4F4",
        alfaWhiteSmoke: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
