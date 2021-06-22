<!--
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-06-21 16:21:50
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 20:00:11
-->
<template>
  <view class="">
    <image class="" src="/static/logo.png"></image>
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
  onShow() {},
  onLoad() {
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

<style></style>
