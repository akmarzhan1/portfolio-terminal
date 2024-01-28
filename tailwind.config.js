/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Midnight Flame Gothic", "sans-serif"],
        basic: ["Rulinover", "sans-serif"],
        steel: ["Steel", "sans-serif"],
      },
      screens: {
        xxs: "0px",
        xs: "380px",
        s: "500px",
      },
    },
  },
  plugins: [],
};
