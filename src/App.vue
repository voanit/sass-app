<!--
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-06-21 16:21:50
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 19:26:58
-->
<script>
export default {
  globalData: {
    BaseUrl: process.env.NODE_ENV === 'development' ? 'https://www.fastmock.site/mock/174ece20fc3eb80f592140d4989970dc' : 'https://api.***.com/api'
  },
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import './common/app.scss';
@import './common/style.scss';
</style>
