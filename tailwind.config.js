/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
      xxl: '1200px'
    },
    extend: {
      colors: {
        'mainDark': '#0d2238',
        'lightGray': '#90919b'
      }
    },
  },
  plugins: [],
}
