import React from 'react';
import { InputItem, Button, Toast } from 'antd-mobile';

import './index.less'
import { Top } from '../../components'
import { searchGoods } from '../../request'


export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      goodsList: []
    }
  }
  searchInput = (value) => {
    this.setState({
      searchValue: value
    })
  }
  searchGoods = () => {
    if (!this.state.searchValue) {
      Toast.fail('你还没输入搜索词', 1);
    }
    searchGoods(this.state.searchValue)
      .then(res => {
        this.setState({
          goodsList: res
        })
      })
  }
  toDetail = (id)=>{
    this.props.history.push({pathname:'/detail',query:{goods_id:id}})
  }
  render() {
    console.log(this.state.goodsList)
    return (
      <div className="search">
        <Top title='搜索' history={this.props.history} />
        <div className="search_content">
          <div className="searchInput">
            <InputItem
              className="input"
              clear
              placeholder="请输入商品名"
              onChange={value => { this.searchInput(value) }}
            />
            <Button onClick={this.searchGoods} className="btn" type="primary">搜索</Button>
          </div>
          <div className="searchList">
            <ul>
              {
                this.state.goodsList.map(v => (
                  <li onClick={this.toDetail.bind(this,v.goods_id)} key={v.goods_id}>{v.goods_name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}