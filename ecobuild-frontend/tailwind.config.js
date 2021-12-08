module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // ...theme('colors'),
      'custom-blue': '#083460',
      'custom-yellow': '#EFF3E1',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
