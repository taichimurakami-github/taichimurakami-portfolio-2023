/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray-1': '#333333',
        'dark-gray-2': '#595959',
        'dark-gray-3': '#7F7F7F',
        'emerald-1': '#4DC0B2',
        white: '#FFF',
      },
    },
  },
  plugins: [],
};
