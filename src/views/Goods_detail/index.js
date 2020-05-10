import React from 'react';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { Button, Toast, Modal } from 'antd-mobile'
import { connect } from 'react-redux'


import { getGoodsDetail } from '../../request'
import { Top } from '../../components'
import './index.less'
import '../../icon/iconfont.css'
import { addCollect, cancelCollect } from '../../actions/collect'
import { buyGoods } from '../../actions/order'
import { joinCart } from '../../actions/cart'

class Goods_detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goodDetail: {},
      isCollect: false,
      hasDetail: false
    }
  }
  componentDidMount() {
    let good_id = this.props.location.query ? this.props.location.query.goods_id : false
    if (good_id) {
      getGoodsDetail(good_id)
        .then(res => {
          let isCollect = this.props.collect.some(v => res.goods_id === v.id)
          this.setState({
            goodDetail: res,
            hasDetail: true,
            isCollect
          })
        })
    }
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
  // 商品收藏
  collect = (detail) => {
    if (this.state.isCollect) {
      this.props.cancelCollect(detail.goods_id)
    } else {
      const _detail = {
        id: detail.goods_id,
        img: detail.goods_small_logo,
        name: detail.goods_name,
        price: detail.goods_price
      }
      this.props.addCollect(_detail)
    }
    this.setState({
      isCollect: !this.state.isCollect
    })

  }
  // 跳转购物车页面
  toCart = () => {
    this.props.history.push('/cart')
  }
  // 加入购物车
  joinCart = (detail) => {
    const _detail = {
      choose: false,
      id: detail.goods_id,
      img: detail.goods_small_logo,
      name: detail.goods_name,
      price: detail.goods_price
    }
    Toast.success('加入成功', 2);
    this.props.joinCart(_detail)
  }
  // 购买
  buying = (goods) => {
    Modal.alert('', '是否要购买该商品', [
      { text: '在想想' },
      { text: '立即购买', onPress: this.bought.bind(this, goods) },
    ])
  }
  bought = (goods) => {
    const _goods = {
      id: goods.goods_id,
      img: goods.goods_small_logo,
      name: goods.goods_name,
      price: goods.goods_price
    }
    Toast.success('购买成功', 2)
    this.props.buyGoods(_goods)
  }
  render() {
    let goods_introduce = this.state.goodDetail.goods_introduce
    let goodDetail = this.state.goodDetail
    let swiper = goodDetail.pics || []
    const content = (
      <div>
        {/* 商品详情 */}
        <div className="content">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                swiper.map(v => {
                  return (
                    <div key={v.pics_id} className="swiper-slide">
                      <img src={v.pics_mid} alt="" />
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="good">
            <div className="good_left">
              <div className="price">￥{goodDetail.goods_price}</div>
              <div className="name">{goodDetail.goods_name}</div>
            </div>
            <div className="good_right">
              <span
                onClick={this.collect.bind(this, this.state.goodDetail)}
                className={this.state.isCollect ? 'iconfont icon-shoucang1 star' : 'iconfont icon-shoucang star'}>
              </span>
              <p className="collect">收藏</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{
            __html: goods_introduce
          }}></div>
        </div>
        <div className="foot">
          <div className="service">
            <p className="iconfont icon-kefu"></p>
            <p>客服</p>
          </div>
          <div className="share">
            <p className="iconfont icon-fenxiang"></p>
            <p>分享</p>
          </div>
          <div onClick={this.toCart} className="cart">
            <p className="iconfont icon-gouwuche"></p>
            <p>购物车</p>
          </div>
          <div className="addCart">
            <Button type="primary" onClick={this.joinCart.bind(this, this.state.goodDetail)}>加入购物车</Button>
          </div>
          <div className="buy">
            <Button onClick={this.buying.bind(this, this.state.goodDetail)} type="warning">立即购买</Button>
          </div>
        </div>

      </div>
    )
    const noContent = (
      <div className="noContent">
        你还没选择要查看的商品
      </div>
    )
    return (
      <div className="goods_detail">
        {/* 头部 */}
        <Top title='商品详情' history={this.props.history} />
        {/* 主体 */}
        {this.state.hasDetail ? content : noContent}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    collect: state.collect,
    cart: state.cart
  }
}
const mapActions = { addCollect, cancelCollect, joinCart, buyGoods }

export default connect(mapState, { ...mapActions })(Goods_detail)