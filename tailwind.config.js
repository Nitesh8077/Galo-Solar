/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        borderRadius: {
          "4xl": "2rem", // Customize this value as needed
        },
      },
      fontSize: {
        "10xl": "10rem", // Example size, adjust as needed
        "11xl": "11rem",
        "12xl": "12rem",
      },

      animation: {
        marquee: "marquee 7s linear infinite",
      },
    },
  },
  plugins: [],
};
