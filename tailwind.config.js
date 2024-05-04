/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      // Primary
      nutmeg: "hsl(14, 45%, 36%)",
      "dark-raspberry": "hsl(332, 51%, 32%)",
      // Neutral
      white: "hsl(0, 0%, 100%)",
      "rose-white": "hsl(330, 100%, 98%)",
      eggshell: "hsl(30, 54%, 90%)",
      "light-grey": "hsl(30, 18%, 87%)",
      "wenge-brown": "hsl(30, 10%, 34%)",
      "dark-charcoal": "hsl(24, 5%, 18%)",
    },
    fontFamily: {
      serif: ["Young Serif", "serif"],
      sans: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
