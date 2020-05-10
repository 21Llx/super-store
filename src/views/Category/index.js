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
      cartRightList: [],
      cats: []
    }
  }
  componentDidMount() {
    getCategory()
      .then(res => {
        this.setState({
          cartList: res,
          cartRightList: res[0].children,
        })
      })
  }
  componentDidUpdate() {
    new Swiper('.swiper-container', {
      direction: 'vertical',
      height: 50,
      freeMode: true,
      slidesOffsetAfter: -400,
    })
  }
  // 改变菜单内容
  getMenu = (cat) => {
    var index = this.state.cartList.indexOf(cat)
    this.setState({
      currentIndex: index,
      cartRightList: cat.children,
    })
  }
  toGoods_detail = (cid)=>{
    this.props.history.push('/list/'+cid)
  }
  render() {
    return (
      <div>
        {/* 头部 */}
        <SearchInput name="商品分类"/>
        {/* main */}
        <div className="main">
          {/* 左侧菜单 */}
          <div className="main_left">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  this.state.cartList.map((v, index) => {
                    return (
                      <div
                        key={v.cat_id}
                        className={index === this.state.currentIndex ? 'swiper-slide title active' : 'swiper-slide title'}
                        onClick={this.getMenu.bind(this, v)}
                      >
                        {v.cat_name}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/* 右侧菜单 */}
          <div className="main_right">
            {
              this.state.cartRightList.map(v => {
                let children = v.children
                let tem = 123
                children
                  ? tem = <div key={v.cat_id}>
                    <p className='main_right_title'>/ {v.cat_name} /</p>
                    <div className="cats">
                      {
                        children.map(v => {
                            return (
                              <div onClick={this.toGoods_detail.bind(this,v.cat_id)} className="cat" key={v.cat_id}>
                                <img src={v.cat_icon} alt="" />
                                <p>{v.cat_name}</p>
                              </div>
                            )
                          })
                      }
                    </div>
                  </div>
                  : tem=''
                return (
                  tem
                )
              })
            }
          </div>
        </div>
        {/* tabbar */}
        <Tabbar pathname={this.props.location.pathname} />
      </div>
    )
  }
}