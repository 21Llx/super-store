import axios from 'axios'
import {message} from 'antd'

const ajax = axios.create({
  baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1'
})

ajax.interceptors.request.use(config=>{
  config.data = Object.assign({},config.data,{
    token: 'asdsad'
  })
  return config
})

ajax.interceptors.response.use(resp=>{
  if(resp.data.meta.status===200){
    return resp.data.message
  }else{
    message.error('出现错误')
  }
  return resp
})

//获得轮播图
export const getArticle = ()=>{
  return ajax.get('home/swiperdata')
}