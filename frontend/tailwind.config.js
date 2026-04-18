/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        accent: "#ec4899",
        secondary: "#3b82f6",
      },
    },
  },
  plugins: [],
};
