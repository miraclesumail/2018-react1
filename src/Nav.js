import React from 'react'

import { Switch, Route } from 'react-router-dom'
import App from './App'
import Home from './component/home'
import About from './component/about'

const Nav = () => (
  <div>
     <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/Home' component={Home}/>
                <Route path='/About' component={About}/>
     </Switch>
  </div>
)

export default Nav