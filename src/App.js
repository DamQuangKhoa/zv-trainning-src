import React, { Suspense } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Spin } from 'antd'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import routes from './route'
import { BlankLayout } from './common/BlankLayout'

const WaitingComponent = (Layout, Component) => props => (
  <Layout>
    <Suspense fallback={<Spin tip='Loading...' />}>
      <Component {...props} />
    </Suspense>
  </Layout>
)

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )
    }
  />
)
function App() {
  const showContent = () => {
    let result = []
    let isLogin = true
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const layout = route.layout || BlankLayout

        if (route.auth && !isLogin) {
          return (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={WaitingComponent(layout, route.main)}
              isLogin={isLogin}
            />
          )
        }

        return (
          <Route key={index} path={route.path} exact={route.exact} component={WaitingComponent(layout, route.main)} />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
  return (
    <Router>
      <div className='App'>{showContent()}</div>
    </Router>
  )
}

export default App
