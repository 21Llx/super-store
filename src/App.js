import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import routes from './routes'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <>
        <Switch>
          {
            routes.map(route=>{
              return(
                <Route 
                  key={route.pathname}
                  path={route.pathname} 
                  exact
                  render={res=>{
                    return(<route.component {...res}/>)
                  }}
                  />
              )
            })
          }
          <Redirect to='/home' from='/' exact></Redirect>
          <Redirect to='/404' ></Redirect>
        </Switch>
      </>
    )
  }
}