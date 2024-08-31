/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'bg-spin': {
          '0%': { '--border-angle': '0turn' },
          '100%': { '--border-angle': '1turn' }
        }
      },
      animation: {
        'bg-spin': 'bg-spin 3s linear infinite'
      },
      borderRadius: {
        '4xl': '2rem' // Adjust if needed
      }
    }
  },
  plugins: [],
};
