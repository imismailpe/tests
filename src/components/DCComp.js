import React from 'react';
import {Link} from 'react-router-dom';

const DCComp = ({dclist,dcClick})=>{
	//console.log("dclist--",dclist);
	return(
		<div className="gridContainer">
		{
			dclist.map(dc=>{
				return(
					<div className="smallCard" onClick={dcClick} key={`${dc.id}`}>
					<Link to={`/DC/dcid=${dc.id}`}>
					
						<div><img className="smallCardImg" src={`${dc.img}${dc.name}`} alt="dc"/>
							<h2 className="smallCardTitle">{`${dc.name}`}</h2>
						</div>
					
					</Link>
					</div>
				)
			})
		}
		</div>
	)
}

export default DCComp;