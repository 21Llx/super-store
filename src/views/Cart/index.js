import React from 'react';
import { connect } from 'react-redux'
import { Button, Checkbox, Toast } from 'antd-mobile'

import { addCart, subCart, chooseCart, payCart } from '../../actions/cart'
import {buyGoods} from '../../actions/order'
import { Tabbar, Top } from '../../components'
import './index.less'

const CheckboxItem = Checkbox.CheckboxItem;

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allMoney: 0,
    }
  }
  // 增加商品数量
  addCart = (detail) => {
    this.props.addCart(detail.id)
    if (detail.choose) {
      this.setState({
        allMoney: this.state.allMoney + detail.price,
      })
    }
  }
  // 减少商品数量
  subCart = (detail) => {
    this.props.subCart(detail.id)
    if (detail.choose) {
      this.setState({
        allMoney: this.state.allMoney - detail.price,
      })
    }
  }
  // 复选框
  changes = (e, detail) => {
    this.props.chooseCart(detail.id)
    const money = detail.price * detail.total
    if (e.target.checked) {
      this.setState({
        allMoney: this.state.allMoney + money,
      })
    } else {
      this.setState({
        allMoney: this.state.allMoney - money
      })
    }
  }
  // 结算
  pay = () => {
    if (this.state.allMoney === 0) {
      Toast.fail('还没选择要支付的商品', 2);
      return
    }
    Toast.success('购买成功', 2);
    const carts = this.props.cart.filter(v => v.choose === false)
    const order = this.props.cart.filter(v => v.choose)
    this.props.buyGoods(order)
    this.props.payCart(carts)
  }
  toGoodDetail=(id)=>{
    this.props.history.push({pathname:'/detail',query:{goods_id:id}})
  }
  render() {
    const content = (
      <div>
        <div className="content">
          {
            this.props.cart.map((v, index) => {
              return (
                <div className="goods" key={index} >
                  <CheckboxItem className="checkbox" checked={v.choose} onChange={e => this.changes(e, v)} />
                  <img src={v.img} alt="" />
                  <div  className="good">
                    <div onClick={this.toGoodDetail.bind(this,v.id)} className="good_name">{v.name}</div>
                    <div className="good_price">
                      <p>{v.price}</p>
                      <div className="operation">
                        <Button onClick={this.addCart.bind(this, v)} size="small">+</Button>
                        <p>{v.total}</p>
                        <Button onClick={this.subCart.bind(this, v)} size="small">-</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="pay">
            <div className="money">
              合计：<span>￥{this.state.allMoney}</span>
            </div>
            <Button onClick={this.pay} className="pay_btn" type='warning' size="small">结算</Button>
          </div>
      </div>
    )
    const noContent = (
      <div className="noContent">
        你的购物车空空如也
      </div>
    )
    return (
      <div className="cart">
        <Top title='购物车' noback='true' />
        {this.props.cart[0] ? content : noContent}
        <Tabbar pathname={this.props.location.pathname} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}
const mapActions = { addCart, subCart, chooseCart, payCart,buyGoods }
export default connect(mapState, { ...mapActions })(Cart)