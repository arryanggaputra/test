module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.ts',
    './resources/**/*.tsx',
    './resources/**/*.jsx',
    './resources/**/*.vue',
  ],
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-tables')()],
}
