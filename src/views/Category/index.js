import React from 'react';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import './index.less'
import { SearchInput, Tabbar } from '../../components'
import { getCategory } from '../../request'
export default class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartList: [],
      currentIndex: 0,
    }
  }
  componentDidMount() {
    getCategory()
      .then(res => {
        this.setState({
          cartList: res
        })
      })
  }
  componentDidUpdate() {
    new Swiper('.swiper-container', {
      direction: 'vertical',
      height: 50,
      freeMode: true,
      slidesOffsetAfter : -400,
    })
  }
  render() {
    return (
      <div>
        {/* 头部 */}
        <SearchInput />
        {/* main */}
        <div className="main">
          <div className="main_left">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  this.state.cartList.map((v,index) => {
                    return (
                      <div 
                      key={v.cat_id} 
                      className={index===this.state.currentIndex?'swiper-slide title active':'swiper-slide title'}
                      >
                        {v.cat_name}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="main_right"></div>
        </div>
        {/* tabbar */}
        <Tabbar pathname={this.props.location.pathname} />
      </div>
    )
  }
}