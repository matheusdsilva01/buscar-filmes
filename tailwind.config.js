module.exports = {
  content: ["./src/**/*.tsx", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'merri': ['Merriweather', 'serif']
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
