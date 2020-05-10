import React from 'react';
import { connect } from 'react-redux'

import './index.less'
import { Top } from '../../components'

// const collects = [
//   {
//     id: 47869,
//     img: "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000715469339_1_400x400.jpg",
//     name: "海信(Hisense)LED55N3000U 55英寸 4K HDR超高清智能电视",
//     price: 3199
//   }
// ]

class Collect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    console.log(this.props)
  }

  render() {
    return (
      <div className="collect">
        <Top history={this.props.history} title="收藏" />

      </div>
    )
  }
}

const mapState = (state => {
  return {
    collect: state.collect
  }
})
export default connect(mapState)(Collect)