import React from 'react';
import {Link} from 'react-router-dom'

import './index.less'

export default class SearchInput extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <div className="search_input">
        <p className='title'>超级商城</p>
        <Link to='/search' className="text">搜索</Link>
      </div>
    )
  }
}