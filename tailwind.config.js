/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // 🎨 Брендова палітра
        primary: "#F56005", // головний помаранчевий (кнопки, акценти)
        "primary-light": "#FFF8F4", // світлий фон/бекграунд кнопок
        border: "rgba(244, 89, 5, 0.13)", // кольори бордерів, підсвітки

        // 🖋️ Тексти
        text: {
          main: "#121212", // основний чорний текст
          secondary: "#828282", // другорядний
          grey: "#6D6D6D", // неактивний або опис
          light: "#7F7F7F", // допоміжний/нейтральний
        },

        // 🔘 Базовий фон
        background: {
          default: "#FFFFFF",
          soft: "#FFF8F4",
        },
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
