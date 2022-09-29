/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '30em',
      md: '48em',
      lg: '63.75em',
      xl: '90em',
    },
    extend: {
      colors: {
        veryDarkblue: '#001155',
        bglightBlue: '#c5eff7',
        greenHeading: '#137e6d',
        bglightGreen: '#90fda9',
        Blueheading: '#1569C7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
