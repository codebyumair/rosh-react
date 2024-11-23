/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "820px",
      // => @media (min-width: 960px) { ... }

      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#e0d3c3",
        secondary: "#bc9d89",
        borderColor: "#a77a5b",
        green: "#00a2a7",
        red: "#e71364",
        yellow: "#ffbf0b",
      },
      fontFamily: {
        dmRegular: ["DMSerifRegular"],
        ebGroundRegular: ["EBGroundRegular"],
        ebGroundMedium: ["EBGroundMedium"],
        ebGroundSemibold: ["EBGroundSemibold"],
        ebGroundBold: ["EBGroundBold"],
        ebGroundExtraBold: ["EBGroundExtraBold"],
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      keyframes: {
        loader: {
          "0%": { transform: "scale(4)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        loader: "loader 3s linear",
      },
    },
  },
  plugins: [],
};
