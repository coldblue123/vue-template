const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const isPro = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  // publicPath: '/',
  // outputDir: 'dist',
  // assetsDir: 'static',
  lintOnSave: isDev,
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack(config) {
    config.name = 'vue项目模板'
    config.resolve = {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
    config.externals = {
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'G2Plot': 'G2Plot'
    }
    // 关闭print
    config.optimization.minimizer[0].options.minimizer.options.compress.drop_console = isPro
  },
  chainWebpack(config) {
    config
      .optimization.splitChunks({
        chunks: 'all',
        // 依赖剥离
        cacheGroups: {
          libs: {
            name: 'file-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          }
          // 复用组件剥离
          // commons: {
          //   name: 'chunk-commons',
          //   test: resolve('src/components'),
          //   minChunks: 3,
          //   priority: 20,
          //   reuseExistingChunk: true
          // }
        }
      })
  }
})
