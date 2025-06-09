/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: "#BEE2FD",
        darkBlue: "#022959",
        mainBgColor: "#EFF5FF",
        lightBlue: "#ABBCFF",
        grey: "#9699AA",
        formOutline: "#D6D9E6",
        buttonBg: "#164A8A",
        purpleOutline: "#483EFF",
      },
      backgroundImage: {
        "mobile-sidebar-bg": "url('/src/assets/Group 25.png')",
        "desktop-sidebar-bg": "url('/src/assets/Oval.png')",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
