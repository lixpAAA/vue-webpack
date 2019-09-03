const path = require('path') // node里的路径处理工具

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  }
}