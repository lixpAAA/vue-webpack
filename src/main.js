let utils = require('./utils/util')
import { app } from './utils/test'
console.log('sum:', utils.sum(1, 2, 3, 4, 5))
console.log('app:', app)
///  引入css文件, 把css文件打包进js文件
import './style/css/main.css' // 也可用require引入
import './style/less/main.less'

import Vue from 'vue'
import App from './vue/App'

const appa = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

