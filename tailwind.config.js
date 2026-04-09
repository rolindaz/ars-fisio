/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B8F71",
        secondary: "#E6B89C",
        neutral: "#F7F7F7",
        dark: "#1F2937",
        logo: "#236BA4",
        logoDark: "#3D464B"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        customTitle: ['Mixta Sharp Alt Bold', 'sans-serif'],
        customBody: ['Mixta Sharp Alt', 'sans-serif']
      },
    },
  },
  plugins: [],
}

