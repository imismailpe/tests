import React from 'react';
import {Link} from 'react-router-dom';

const FCComp = ({fclist})=>{
	//console.log("dclist--",dclist);
	return(
		<div className="gridContainer">
		{
			fclist.map(fc=>{
				return(
					<div className="smallCard" key={`${fc.id}`}>
					<Link to={`/FC/fcid=${fc.id}`}>
					
						<div><img className="smallCardImg" src={`${fc.img}${fc.name}`} alt="dc"/>
							<h2 className="smallCardTitle">{`${fc.name}`}</h2>
						</div>
					
					</Link>
					</div>
				)
			})
		}
		</div>
	)
}

export default FCComp;