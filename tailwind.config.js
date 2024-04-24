/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "intro": "url('/intro.png')",
      },
      width:{
        "nav": "calc(100% - 3.5rem)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
