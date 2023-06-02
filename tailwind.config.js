/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "--clr-primary": "#0b0d17",
        "--clr-pale-blue": "#d0d6f9",
        "--clr-yellowish-gray": "#ffffff",
      },
      fontFamily: {
        cfont1: ["Barlow Condensed", "sans-serif"],
        cfont2: ["Bellefair", "serif"],
        cfont3: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
