/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Adjust the path to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Bhai 2"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};



