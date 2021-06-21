/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2021-06-21 16:59:34
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 17:03:48
 */

export default {
  getStorage: key => {
    return uni.getStorageSync(key)
  },
  setStorage: (key, val) => {
    uni.setStorageSync(key, val)
  },
  //数字精度
  formatFloat: (f, digit = 2) => {
    var m = Math.pow(10, digit)
    // @ts-ignore
    return Math.round(f * m, 10) / m
  },
  // 获取URL中?之后的字符
  getSearchString: (key, Url) => {
    var str = Url
    str = str.substring(1, str.length)
    // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
    var arr = str.split('&')
    var obj = new Object()

    // 将每一个数组元素以=分隔并赋给obj对象
    for (var i = 0; i < arr.length; i++) {
      var tmp_arr = arr[i].split('=')
      obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1])
    }
    return obj[key]
  }
}
