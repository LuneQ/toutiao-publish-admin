// 基于 axios 的请求模块

import axios from 'axios'

// axios()
// axios.get()
// axios.post()

// 创建一个axios实例
const request = axios.create({
  baseURL: 'http://ttpi.research.itcast.cn/' // 请求的基础路径
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 谁要使用，就加载request模块
// import request from 'request.js'
// request.xxx
// request({
//   method:,
//   url:''
// })
