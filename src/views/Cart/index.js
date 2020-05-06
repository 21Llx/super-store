import React from 'react';
import {Tabbar} from '../../components'
export default class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <div>
        <Tabbar pathname={this.props.location.pathname}/>
      </div>
    )
  }
}