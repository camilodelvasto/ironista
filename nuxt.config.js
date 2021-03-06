module.exports = {
  head: {
    title: 'Ironista - Laboratorio de cambio cultural',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cambio cultural a la medida' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cardo|Josefin+Sans:400,700|Oleo+Script|400|Roboto:300,400,500,700|Material+Icons' },
    ]
  },
  loading: false,
  build: {
    extractCSS: true,

    extend(config, {isClient, dev}) {
      if (isClient) {
        config.entry.app = ["~/SplitText.min", config.entry.app];
      }
    }
  },
  plugins: ['~plugins/buefy.js'],
  css: [
    { src: 'assets/main.scss', lang: 'scss' }
  ]
}
