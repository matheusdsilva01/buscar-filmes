module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        "black": {
          DEFAULT: "#232222",
          bright: '#3B3B3B',
        }
      },
      fontFamily: {
        'merri': ['Merriweather', 'serif']
      },
      width: {
        '24': '94px'
      },
      borderWidth: {
        '1': '1px'
      },
      text: {
        'white': '#E8E6E3'
      }
    }
  },
  plugins: [],
}
