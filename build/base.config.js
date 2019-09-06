/**
 * webpack 公共的配置文件
 */
const path = require('path') // node里的路径处理工具
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 对于大于vue-loader@14.0.0，要用此插件
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWbpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    // publicPath: '../dist/' //   引用文件URL前加上路径（dist文件夹下有index。html，所以不需要）
  },
  resolve: {
    alias: {  // 别名配置，当import 。。。from。。。（文件别名）的时候,去指定文件夹下找文件
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.vue', '.js']
  },
  plugins: [new VueLoaderPlugin(),
  new webpack.BannerPlugin('版权归lxpAAA所有'),
  new HtmlWebpackPlugin({
    template: './src/index.html' // 指定打包后的index.html模版
  }),
  ],

  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        // css-loader只负责加载css文件，不负责将css添加到dom中
        // loader使用顺讯从右到左
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader', // 将less转成css
          options: {}
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader', ///当小于limit时将会转换为base64格式，大于时需要file-loader
            options: {
              limit: 10000,
              name: 'img/[name].[hash:8].[ext]' // 文件打包后的文件名及路径
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  }
}