import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom'

import { adminRouter } from './routes'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>这是公共</h2>
        <Switch>
          {
            adminRouter.map((route) => {
              return <Route
                key={route.pathname}
                path={route.pathname}
                exact = {route.exact}
                render={(routeProps) => {
                  return <route.component {...routeProps} />
                }} />
            })
          }
          <Redirect to={adminRouter[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </div>
    )
  }
}

export default App