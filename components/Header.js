import React from 'react'
import {Navbar,Nav,NavItem,NavDropdown, MenuItem} from 'React-Bootstrap'

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
	        <NavItem eventKey={1} href="#">Link</NavItem>
	        <NavItem eventKey={2} href="#">Link</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
    );
  }
});

export default Header;