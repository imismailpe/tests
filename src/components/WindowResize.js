import React from 'react';

const WindowResize = ({width,height})=>{
	return(
		<div className="f3 white resizecard">
			{`this window is ${width}px wide and ${height}px high`}
		</div>
		)
}

export default WindowResize;