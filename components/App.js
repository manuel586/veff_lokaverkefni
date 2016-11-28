import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Petrol from './Petrol'
import {Link} from 'react-router'

var App = React.createClass({
  render: function(){
    return (
    	<div>
	    	<Header />
	    	<Link to="/Petrol">Petrol</Link>
	    	<Footer />
    	</div>
    	);
  }
});

export default App;
