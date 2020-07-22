const { proxyConfig } = require('./src/config/request/proxy')

module.exports = {
  /**
   * 本地开发时，需要代理转发的请求
   */
  devServer: {
    proxy: proxyConfig
  },
  chainWebpack() {
    // use webpack-chain
  },
  configureWebpack: {
    // normal webpack config
  }
}
