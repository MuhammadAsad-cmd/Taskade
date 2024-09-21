/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bodycolor':"#212529",
        'dark-gray': '#17191C', 
        'appcolor': 'rgb(37, 40, 45)', 
        'vivid-pink':"rgb(255, 45, 96)",
        'light-gray': '#eaebef',
        'upgrade':"#f6c349",
        'medium-gray': '#b5b6ba',
        'dark-maroon': '#452029',
        'primary':"#ffd014",
        'hoverPrimary':"#f88501",
        "applight":"#18191d",
        'slate-gray': '#1c1f22',
        "textcolor":"#606467",
        "cool-gray":"#93999F", 
        'light-gray': '#e3e5e8',
        'dark-charcoal': '#2c3035',
        'slate-gray': '#484d51',
        'custom-orange-yellow': '0 4px 15px rgba(255, 165, 0, 0.5), 0 2px 7px rgba(255, 255, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
