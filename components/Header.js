import React from 'react'
import {Navbar,Nav,NavItem,NavDropdown, MenuItem} from 'React-Bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

var Header = React.createClass({
  render: function() {
    return (
      <Navbar inverse collapseOnSelect>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">React-Bootstrap</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav>
	      	<LinkContainer to={{pathname:'/Petrol'}}>
	        <NavItem eventKey={1}>Link</NavItem>
	        </LinkContainer>
	        <LinkContainer to={{pathname:'/Gas'}}>
	        <NavItem eventKey={2}>Link</NavItem>
	        </LinkContainer>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
    );
  }
});

export default Header;