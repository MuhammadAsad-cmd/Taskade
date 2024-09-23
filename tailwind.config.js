/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          'Inter Variable',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        "background-secondary": "#fafafb", 
        "primary": "#fb6800",
        "customBlackTransparent": '#1b1b230d',
        "textColor":"#1b1b2399"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
