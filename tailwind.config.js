/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F56005",
        "primary-light": "#FFF8F4",
        border: "rgba(244, 89, 5, 0.13)",

        text: {
          main: "#121212",
          secondary: "#828282",
          grey: "#6D6D6D",
          light: "#7F7F7F",
          orange: "#F56005",
        },

        background: {
          default: "#FFFFFF",
          soft: "#FFF8F4",
        },
      },
      fontSize: {
        base: "16px",
      },
      fontFamily: {
        poppins: ["PoppinsRegular"],
        "poppins-medium": ["PoppinsMedium"],
        "poppins-bold": ["PoppinsBold"],
        inter: ["InterRegular"],
        "inter-semibold": ["InterSemiBold"],
      },
    },
  },
  plugins: [],
};
