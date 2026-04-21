/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C67A0",
        secondary: "#E6B89C",
        neutral: "#F7F7F7",
        dark: "#1F2937",
        logo: "#236BA4",
        logoDark: "#3D464B"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ['MixtaSharpAlt', 'sans-serif'],
        body: ['MixtaSharpAlt', 'sans-serif'],
        paragraph: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

