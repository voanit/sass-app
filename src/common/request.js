/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2020-09-01 14:23:30
 * @LastEditors: voanit
 * @LastEditTime: 2021-06-21 19:28:42
 */
function request(param, noload) {
  const app = getApp()

  let url = param.url,
    data = param.data || {},
    header = param.header

  //是否显示loading/noload:true | hideload
  if (!noload) {
    uni.showLoading({
      title: '加载中',
      mask: true
    })
  }
  //拼接完整请求地址
  var requestUrl = url
  if (url.indexOf('http') === -1) requestUrl = app.globalData.BaseUrl + url

  //GET或POST
  if (param.method) {
    param.method = param.method.toUpperCase() //小写改为大写
  }
  //网络请求
  return new Promise((resolve, reject) => {
    uni.request({
      url: requestUrl,
      method: param.method || 'GET',
      header: header || {
        'content-type': 'application/json',
        authorization: uni.getStorageSync('token')
      },
      data: data,
      success: res => {
        if (!noload || noload === 'hideLoad') uni.hideLoading()
        if (res.data.code === 3001) {
          //判断登录超时
          uni.showToast({
            title: res.data.message,
            duration: 2000,
            icon: 'none'
          })
          uni.removeStorageSync('token')
          uni.removeStorageSync('userInfo')
          uni.navigateTo({
            url: '/pages/login/index'
          })
        } else {
          if (res.data.code === 0) {
            typeof param.success == 'function' && param.success(res.data)
            resolve(res.data.data)
          } else {
            reject(res.data)
          }
        }
      },
      fail: e => {
        console.log('网络请求fail:' + JSON.stringify(e))
        if (!noload || noload === 'hideLoad') uni.hideLoading()
        reject(res.data)
        // uni.showModal({
        //   content: "" + res.errMsg
        // });
        setTimeout(() => {
          uni.showToast({
            title: '网络异常',
            icon: 'none'
          })
        }, 0)
        typeof param.fail == 'function' && param.fail(res.data)
      },
      complete: res => {
        typeof param.complete == 'function' && param.complete(res.data)
        return
      }
    })
  })
}
function JSON_to_URLEncoded(element, key, list) {
  var list = list || []
  if (typeof element == 'object') {
    for (var idx in element) JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list)
  } else {
    list.push(key + '=' + encodeURIComponent(element))
  }
  return list.join('&')
}
export default request
