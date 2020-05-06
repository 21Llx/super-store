import React from 'react';
import {Link} from 'react-router-dom'

import './index.less'
import home from '../../assets/home.png'
import homeA from '../../assets/home-o.png'
import cart from '../../assets/cart.png'
import cartA from '../../assets/cart-o.png'
import my from '../../assets/my.png'
import myA from '../../assets/my-o.png'
import category from '../../assets/category.png'
import categoryA from '../../assets/category-o.png'

export default class Tabbar extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="tabbar">
        <Link className="linktitle" to='/home'>
          <img src={this.props.pathname==='/home'? homeA : home} alt=""/>
          <p className={this.props.pathname==='/home'? 'pActive' : ''}>首页</p>
        </Link>
        <Link className="linktitle" to='/category'>
          <img src={this.props.pathname==='/category'? categoryA : category} alt=""/>
          <p className={this.props.pathname==='/category'? 'pActive' : ''}>分类</p>
        </Link>
        <Link className="linktitle" to='/cart'>
          <img src={this.props.pathname==='/cart'? cartA : cart} alt=""/>
          <p className={this.props.pathname==='/cart'? 'pActive' : ''}>购物车</p>
        </Link>
        <Link className="linktitle" to='/user'>
          <img src={this.props.pathname==='/user'? myA : my} alt=""/>
          <p className={this.props.pathname==='/user'? 'pActive' : ''}>我的</p>
        </Link>
      </div>
    )
  }
}