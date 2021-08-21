import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from '../src/router'

function App() {
  const [count, setCount] = useState(0)

  return <Router>
    <Switch>
      {
        routes.map(route => <Route exact key = {route.path} path={route.path}>
          <route.component />
        </Route>)
      }
    </Switch>
  </Router>
}

export default App
