import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from './components/auth/helpers/auth'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

//! Add Login form - collapses

const MyNavbar = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    window.location.reload()
  }
  const location = useLocation()
  useEffect(() => {
    // re-render Navbar when url changes
  }, [location.pathname])



  return (
    <>
      <Navbar expand="lg" className="bring-to-front">
        <Navbar.Brand href="/"><img className="logo" src='/assets/logo_white_large.jpeg' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/map">Map</Nav.Link> */}
            {/* <Nav.Link href="/packages">Packages</Nav.Link> */}
          </Nav>
          <>
            {!userIsAuthenticated() &&
              <>
                {['bottom'].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">{'Fill in your details'}</Popover.Title>
                        <Popover.Content>
                          <Login />
                          {/* <strong>Holy guacamole!</strong> Check this info. */}
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Login</Button>
                  </OverlayTrigger>
                ))}
                {['bottom'].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">{'Fill in your details'}</Popover.Title>
                        <Popover.Content>
                          <Register />
                          {/* <strong>Holy guacamole!</strong> Check this info. */}
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Sign Up</Button>
                  </OverlayTrigger>
                ))}
              </>
            }
            {userIsAuthenticated() &&
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                {/* <button type="button" onClick={handleLogout}>Log Out</button> */}
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
              </>
            }
          </>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
