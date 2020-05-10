import React from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'

import './index.less'
import { SearchInput,Tabbar } from '../../components'
import { getSwiperData, getCatitems } from '../../request'


export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      swiperdata: [],
      catitems: [],
    }
  }
  componentDidMount() {
    // 获得轮播图
    getSwiperData()
      .then(res => {
        this.setState({
          swiperdata: res
        })
      })
    // 获得导航图
    getCatitems()
      .then(res => {
        this.setState({
          catitems: res
        })
      })
  }

  componentDidUpdate() {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
  render() {
    return (
      <div className='home'>
        {/* 头部 */}
        <SearchInput name="超级商城" />
        {/* 轮播 */}
        <div className="content">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              this.state.swiperdata.map(v => {
                return (
                  <div key={v.goods_id} className="swiper-slide">
                    <img src={v.image_src} alt="" />
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
        {/* 导航  */}
        <div className="nav">
          {
            this.state.catitems.map(v => {
              return (
                <img key={v.image_src} src={v.image_src} alt="" />
              )
            })
          }
        </div>
        {/* 楼层 */}
        <div className="floor">
          <img className='floor_title' src='https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png' alt="" />
          <div className='floor_img'>
            <div className="big_img">
              <img src="https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png" alt="" />
            </div>
            <div className="small_img">
              <img src="https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png" alt="" />
              <img src="https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png" alt="" />
              <img src="https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png" alt="" />
              <img src="https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png" alt="" />
            </div>
          </div>
        </div>
        </div>
        {/* tabbar */}
        <Tabbar pathname={this.props.location.pathname}/>
      </div>
    );
  }
}
