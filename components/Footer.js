import React from 'react'

var Footer = React.createClass({
		render: function(){
			var footerStyle = {
				border: 'solid green'
			};
				return(
						<div style={footerStyle}>
							<h2>Þetta er footer</h2>
						</div>
					);
		}
});

export default Footer;