import React, { Component } from 'react'

import {Navbar, NavBar, Nav, NavItem, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
export default class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
  <Navbar.Brand href="/">Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="AboutApp">About</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="MyfunctionApp">Function</NavDropdown.Item>
        <NavDropdown.Item href="StatApp">Statement</NavDropdown.Item>
        <NavDropdown.Item href="MountingApp">Mounting</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="AppRedux">Redux</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}
