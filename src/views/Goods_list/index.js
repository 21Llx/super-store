import React from 'react';

import { getGoodsList} from '../../request'
import { SearchInput } from '../../components'
import './index.less'


export default class Good_list extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsList: []
    }
  }
  componentDidMount() {
    let cid = this.props.match.params.id
    getGoodsList(cid)
      .then(res => {
        this.setState({
          goodsList: res.goods,
        })
      })
  }
  toGoodDetail=(id)=>{
    this.props.history.push({pathname:'/detail',query:{goods_id:id}})
  }
  render() {
    return (
      <div>
        <SearchInput history={this.props.history} back="true" name="商品列表"/>
        <div className="goods_list">
          {
           this.state.goodsList.map(v => {
              if (!v.goods_small_logo) {
                return null
              }
              return (
                <div onClick={this.toGoodDetail.bind(this,v.goods_id)} className="goods" key={v.goods_id} >
                  <img src={v.goods_small_logo} alt="" />
                  <div className="good"> 
                    <p className="good_name">{v.goods_name}</p>
                    <p className="good_price">{v.goods_price}</p>
                  </div>
                </div>
              )
            })
          }
          <div className="bottom">到底了</div>
        </div>
      </div>
    )
  }
}