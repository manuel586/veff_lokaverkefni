import React from 'react'
import { render } from 'react-dom'


var App = React.createClass({
  render: function(){
   return <span>HELLLLLO</span>;
  }
});

render(<App/>, document.getElementById('app'));
