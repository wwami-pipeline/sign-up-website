import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';

const NavBar = () => {
    return(
      <div className="App">
        <div style={{ backgroundColor: "#f8f9fa" }}>
          <a href="/" >
            <img className="toolbar-logo" alt="UW School of Medicine Volunteer Logo" src="/images/uw_name_logo.jpg" />
          </a>
            <br/>
        </div>
        <Navbar bg="light" expand="lg">
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="tabLabel" href="/">Home</Nav.Link>
                <NavDropdown className="tabLabel" title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item className="tabSubLabel" href="/contact"> About Us </NavDropdown.Item>
                  <NavDropdown.Item className="tabSubLabel" href="/contact"> Contact Us </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link className="tabLabel" href="/about">About</Nav.Link> */}
                <Nav.Link className="tabLabel" href="/resources">Resources</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link className="tabLabel" href="/donate">Donations</Nav.Link>
                <Nav.Link className="tabLabel" href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
}
export default (NavBar);