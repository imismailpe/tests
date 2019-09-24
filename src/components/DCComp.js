import React from 'react';
import {Link} from 'react-router-dom';

const DCComp = ({dclist})=>{
	//console.log("dclist--",dclist);
	return(
		<div className="gridContainer">
		{
			dclist.map(dc=>{
				return(
					<div key={dc.id} className="smallCard">
					<Link to={`/dcid=${dc.id}`}>
						<div>{`DC id:${dc.id}`}</div>
						<div>{`DC Name:${dc.name}`}</div>
					</Link>
					</div>
				)
			})
		}
		</div>
	)
}

export default DCComp;