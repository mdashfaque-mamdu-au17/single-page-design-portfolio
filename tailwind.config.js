/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'theme-galactic-blue': '#755CDE',
        'theme-summer-yellow': '#F6A560',
        'theme-pink': '#F39E9E',
        'theme-light-red': '#EB7565',
        'theme-cyan': '#61C4B7',
        'theme-dark-purple': '#552049',
        'theme-black': '#030303',
        'theme-medium-brown': '#7A746E',
        'theme-light-cream': '#FFF7F0',
        'theme-background-white': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
