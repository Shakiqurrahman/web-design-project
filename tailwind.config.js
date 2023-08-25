/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#00040f",
      //   secondary: "#00f6ff",
      //   dimWhite: "rgba(255, 255, 255, 0.7)",
      //   dimBlue: "rgba(9, 151, 124, 0.1)",
      // },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        '3xl': '16px 25px 0px rgba(19, 57, 154, 0.08)'}
        // 16px 25px 0px 0px rgba(19, 57, 154, 0.08)
    },
    screens: {
      xs: "480px",
      ss: "620px",
      // sm: "768px",
      sm: "800px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}