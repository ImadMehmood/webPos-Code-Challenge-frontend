/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        webBlue: "#3b82f6",
        webDarkBlue:"#223452",
        webGreen:"#086d70",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

