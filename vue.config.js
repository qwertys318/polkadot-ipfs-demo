module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: false,
      }
    }
  },
  publicPath: './',
}
