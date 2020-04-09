import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'

import App from './App'
import './index.less'
import { mainRouter } from './routes'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routerProps)=>{
        return <App {...routerProps} />
      }} />
      {/* <Route path={mainRouter[1].pathname} component={mainRouter[1].component} />
      <Route path={mainRouter[0].pathname} component={mainRouter[0].component} /> */}
      {
        mainRouter.map(route=>{
          return <Route key={route.pathname} path={route.pathname} component={route.component} />
        })
      }
      <Redirect to="/admin" from="/" exact />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
);


