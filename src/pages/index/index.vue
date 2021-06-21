<!--
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-06-21 16:21:50
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 20:38:46
-->
<template>
  <view class="content">
    <view v-if="hasLogin" class="hello">
      <view class="title">您好 {{ userInfo.name }}，您已成功登录。</view>
      <view class="ul">
        <view>这是 App首页。</view>
      </view>
    </view>
    <view v-if="!hasLogin" class="hello">
      <view class="title">
        您好 游客。
      </view>
      <view class="ul">
        <view>这是 App首页。</view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
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

    const loginType = uni.getStorageSync('login_type')
    if (loginType === 'local') {
      this.login(uni.getStorageSync('username'))
      return
    }
    let uniIdToken = uni.getStorageSync('uni_id_token')
    if (uniIdToken) {
      this.getData()
    } else {
      this.guideToLogin()
    }
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
    },
    ...mapMutations(['login']),
    guideToLogin() {
      uni.showModal({
        title: '未登录',
        content: '您未登录，需要登录后才能继续',
        /**
         * 如果需要强制登录，不显示取消按钮
         */
        showCancel: !this.forcedLogin,
        success: res => {
          if (res.confirm) {
            if (this.forcedLogin) {
              uni.reLaunch({
                url: '../login/login'
              })
            } else {
              uni.navigateTo({
                url: '../login/login'
              })
            }
          }
        }
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
