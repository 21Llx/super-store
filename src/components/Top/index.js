import React from 'react';
import './index.less'
export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="search_inputs">
        {
          this.props.noback? '':<div onClick={this.goBack} className="back">&lt; </div>
        }
        <div className="search">
          <p className='title'>{this.props.title}</p>
        </div>
      </div>
    )
  }
}