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
	        <NavItem eventKey={2} href="https://www.youtube.com/watch?v=7baQQEzIxGU">Link</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
    );
  }
});

export default Header;