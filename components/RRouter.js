import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Petrol from './Petrol'

var RRouter = React.createClass({
  render: function(){
    return (
    	<Router history={hashHistory}>
    		<Route path="/" component={App}>
    			<Route path="/petrol" component={Petrol}/>
    		</Route>
  		</Router>

    	);
  }
});

export default RRouter;
