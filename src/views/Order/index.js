import React from 'react';
import {connect} from 'react-redux'

import {Top,Tabbar} from '../../components'
import './index.less'

class Order extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  toGoodDetail=(id)=>{
    this.props.history.push({pathname:'/detail',query:{goods_id:id}})
  }
  render(){
    const content = (
      <div className="order_content">
        {
          this.props.order.map(v => {
            return (
              <div onClick={this.toGoodDetail.bind(this,v.id)} className="goods" key={v.id} >
                <img src={v.img} alt="" />
                <div className="good"> 
                  <p className="good_name">{v.name}</p>
                  <p className="good_price">{v.price}</p>
                </div>
                <div className="total">
                  ×{v.total}
                </div>
              </div>
            )
          })
        }
      </div>
    )
    const noContent = (
      <div className="noContent">
        你还没有购买商品
      </div>
    )
    return(
      <div className='order'>
        <Top title='我的订单' noback='true' />
        {this.props.order[0] ? content : noContent}
        <Tabbar pathname={this.props.location.pathname}/>
      </div>
    )
  }
}

const mapState = state=>{
  return{
    order:state.order
  }
}

export default connect(mapState)(Order)