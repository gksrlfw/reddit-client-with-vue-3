module.exports = {
  devServer: { 
    historyApiFallback: true,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  }
}