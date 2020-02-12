import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const HeaderComponent = () => {
  return (
    <Navbar bg="light">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#users">Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderComponent
