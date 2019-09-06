/**
 * 生产模式配置
 */
const UglifyjsWbpackPlugin = require('uglifyjs-webpack-plugin')
const baseconfig = require('./base.config')
const webpackMerge = require('webpack-merge')

const prodconfig = {
  plugins: [new UglifyjsWbpackPlugin()]
}
module.exports = webpackMerge(baseconfig, prodconfig)