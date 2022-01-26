module.exports = {
  content: [
    "./src/*.{js,css}",
    "./src/components/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'themeviolet': '#7A13FD',
        'themedarkviolet': '#5D0FBF',
        'darkblack':'#0A0A0A',
        'lightblack':"#090A0A",
        'darkgrey':'#16181A',
      },
      screens:{
        'xs': '321px',
      }
    },
  },
  plugins: [],
}
