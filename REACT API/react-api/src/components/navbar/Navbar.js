import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" style={{ padding: '10px' }}>
        <Navbar.Brand href="#home">API List of Users</Navbar.Brand>
        <Nav className="mr-auto" style={{ marginLeft: '25px' }}>
          <Nav.Link href="#home" className='nav-style'>Home</Nav.Link>
          <Nav.Link href="#about" className='nav-style'>About</Nav.Link>
          <Nav.Link href="#contact" className='nav-style'>contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default NavBar
