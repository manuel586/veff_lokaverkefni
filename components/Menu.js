import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel } from 'React-Bootstrap'
import Loader from 'halogen'
import {LinkContainer} from 'react-router-bootstrap'
var Menu = React.createClass({
	render: function(){
		return(
			<div>
			<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Bensín verð</a>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
			    <LinkContainer to={{pathname:'/Petrol'}}>
			      <NavItem eventKey={1} >Link</NavItem>
			      </LinkContainer>
			      <NavItem eventKey={2} href="#">Link</NavItem>
			      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1}>Action</MenuItem>
			        <MenuItem eventKey={3.2}>Another action</MenuItem>
			        <MenuItem eventKey={3.3}>Something else here</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.3}>Separated link</MenuItem>
			      </NavDropdown>
			    </Nav>
			  </Navbar>
			   <Panel header="titill" bsStyle="success">
      			Panel content
    			</Panel>
    			<Loader color="#26A65B" size="16px" margin="4px"/>
    			</div>
			);
	}
});

export default Menu;