import React from 'react'
import Home from './Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavbar from './Navbar'
import UserProfile from './components/auth/UserProfile'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MyNavbar />
          <Home />
        </Route>
        <Route path="/profile">
          <MyNavbar />
          <UserProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App