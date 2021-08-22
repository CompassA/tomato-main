import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from '@/router'

import {
  ConfigProvider
} from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'


function App() {
  const [count, setCount] = useState(0)

  return <Router>
    <ConfigProvider primaryColor={'#000000'} locale={zhCN}>
      <Switch>
        {
          routes.map(route => <Route exact key = {route.path} path={route.path}>
            <route.component />
          </Route>)
        }
      </Switch>
    </ConfigProvider>
  </Router>
}

export default App
