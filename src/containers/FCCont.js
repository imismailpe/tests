import React from 'react';
import {Link} from 'react-router-dom';

const FCCont = ({fclist})=>{
	//console.log("dclist--",dclist);
	return(
		<div className="gridContainer">
		{
			fclist.map(fc=>{
				return(
					<div className="smallCard" key={`${fc.id}`}>
					<Link to="/DC/FC/Vendor">
					
						<div><img className="smallCardImg" src={`${fc.img}${fc.name}`} alt="dc"/>
							<div className="smallCardTitle">{`${fc.name}`}</div>
						</div>
					
					</Link>
					</div>
				)
			})
		}
		</div>
	)
}

export default FCCont;