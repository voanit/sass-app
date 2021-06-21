<!--
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-06-21 16:21:50
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 19:33:59
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ userInfo.name }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  onShow() {
    //必经之路
    console.log(2)
  },
  onLoad() {
    //每次页面重新加载时执行
    console.log(1)
    this.getData()
  },
  methods: {
    getData() {
      let data = { method: 'post', url: '/api/users/info', data: {} }
      this.$request(data)
        .then(res => {
          this.userInfo = res.user
        })
        .catch(error => {
          console.log('error信息：', error)
        })
    }
  }
}
</script>

<style>
.content {
  text-align: center;
  padding: 20px;
}
.logo {
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
}
</style>
