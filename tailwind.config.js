module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#3639a4',
        secondary: '#6fdce3',
        cta: '#ffb0a3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
