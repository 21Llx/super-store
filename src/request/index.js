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
export const getSwiperData = ()=>{
  return ajax.get('home/swiperdata')
}

//获得导航图
export const getCatitems = ()=>{
  return ajax.get('home/catitems')
}

// 获得分类的全部数据
export const getCategory = ()=>{
  return ajax.get('categories')
}

// 获得商品列表
export const getGoodsList = (cid)=>{
  return ajax.get(`goods/search?cid=${cid}`)
}

// 获得商品详情
export const getGoodsDetail = (id)=>{
  return ajax.get(`goods/detail?goods_id=${id}`)
}

// 商品搜索
export const searchGoods = (value)=>{
  return ajax.get(`goods/qsearch?query=${value}`)
}