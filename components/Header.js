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
	        <NavItem eventKey={1} href="https://www.youtube.com/watch?v=7baQQEzIxGU">Link</NavItem>
	        <NavItem eventKey={2} href="https://www.youtube.com/watch?v=jAiRdMSIVko">Link</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
    );
  }
});

export default Header;