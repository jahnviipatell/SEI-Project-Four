import React from 'react'
import Home from './Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavbar from './Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MyNavbar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App