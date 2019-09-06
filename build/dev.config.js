/**
 * 开发配置
 */

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

const devConfig = {
  devServer: {
    contentBase: './dist',  // 服务监听的文件夹，
    inline: true, // 开启实时监听
    port: 8081
  },

}
// 对baseconfig进行合并
module.exports = webpackMerge(baseConfig, devConfig)