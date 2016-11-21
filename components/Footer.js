import React from 'react'

var Footer = React.createClass({
		render: function(){
			var footerStyle = {
				border: 'solid #006400',
				background: '#556B2F'
			};
				return(
						<div style={footerStyle}>
							<h2>Manuel Björn Gomes Jóhannsson</h2>
							<h2>VFOR2AN05</h2>
							<h2><a href="https://github.com/manuel586">Github</a></h2>
						</div>
					);
		}
});

export default Footer;