import React from 'react';
import { Link } from 'react-router-dom'
import './index.less'

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  goBack=()=>{
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="search_input">
        {
          this.props.back ?
            <div onClick={this.goBack} className="back">&lt; </div>
            : ''
        }
        <div className="search">
          <p className='title'>{this.props.name}</p>
          <Link to='/search' className="text">搜索</Link>
        </div>
      </div>
    )
  }
}