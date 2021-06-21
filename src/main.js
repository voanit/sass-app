/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2021-06-21 16:21:50
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 17:05:53
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import request from './common/request'
Vue.prototype.$request = request

import utils from '@/utils/utils.js'
Vue.prototype.$utils = utils

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
