/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2020-12-15 19:52:34
 * @LastEditors: voanit
 * @LastEditTime: 2021-01-29 19:34:18
 */
// 引入ali-oss

import ajax from '@/common/request'

export let progress // 上传进度
// 获取 oss Token
export const getAliTokenFunc = async options => {
  return new Promise((reslove, reject) => {
    ajax({
      url: `/hsyx-platform/oss/sts`,
      method: 'get',
      data: {},
      success: res => {
        if (res.code == 1) {
          reslove(res.data)
        } else {
          console.log(res)
          reject('获取阿里云临时token失败')
        }
      },
      error: err => {
        console.error(err)
        reject('获取阿里云临时token失败')
      }
    })
  })
}
