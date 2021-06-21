/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2021-06-21 16:21:50
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 20:42:37
 */
import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

import request from './common/request'
Vue.prototype.$request = request

import utils from '@/common/utils.js'
Vue.prototype.$utils = utils

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
