import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";
import './index.css';

const NavBar = () => {
    return(
      <div className="App">
        <Navbar collapseOnSelect bg="light" expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="toolbar-logo" alt="UW School of Medicine Volunteer Logo" src="/images/uw_name_logo.jpg" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link className="tabLabel">Home</Nav.Link>
              </LinkContainer>
              <NavDropdown className="tabLabel" title="About" id="collasible-nav-dropdown">
                <LinkContainer to="/about">
                  <NavDropdown.Item className="tabSubLabel"> About Us </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavDropdown.Item className="tabSubLabel"> Contact </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown className="tabLabel" title="Resources" id="collasible-nav-dropdown">
                <LinkContainer to="/resources/links">
                  <NavDropdown.Item className="tabSubLabel"> Website Links </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/resources/videos">
                  <NavDropdown.Item className="tabSubLabel"> Training Videos </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/resources/tools">
                  <NavDropdown.Item className="tabSubLabel"> Teaching Tools </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/resources/protocols">
                  <NavDropdown.Item className="tabSubLabel"> Protocols </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown className="tabLabel" title="Other Student Orgs" id="collasible-nav-dropdown">
                <LinkContainer to="/outsideOrganizations/Seattle">
                  <NavDropdown.Item className="tabSubLabel"> Seattle </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/outsideOrganizations/Spokane">
                  <NavDropdown.Item className="tabSubLabel"> Spokane </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/outsideOrganizations/Wyoming">
                  <NavDropdown.Item className="tabSubLabel"> Wyoming </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/outsideOrganizations/Alaska">
                  <NavDropdown.Item className="tabSubLabel"> Alaska </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/outsideOrganizations/Montana">
                  <NavDropdown.Item className="tabSubLabel"> Montana </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/outsideOrganizations/Idaho">
                  <NavDropdown.Item className="tabSubLabel"> Idaho </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/donate">
                <Nav.Link className="tabLabel">Donations</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
export default (NavBar);