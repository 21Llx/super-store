import React from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'

import './index.less'
import { SearchInput } from '../../components'
import { getArticle } from '../../request'
export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      swiperdata: []
    }
  }
  componentDidMount() {
    getArticle()
      .then(res => {
        this.setState({
          swiperdata: res
        })
      })
  }
  componentDidUpdate(){
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination :{
        el: '.swiper-pagination',
        clickable :true,
        }
    });
  }
  render() {
    return (
      <>
        <SearchInput></SearchInput>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              this.state.swiperdata.map(v => {
                return (
                  <div key={v.goods_id} className="swiper-slide">
                    <img src={v.image_src} alt=""/>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </>
    );
  }
}
