import React from 'react';
import {Link} from 'react-router-dom';

const FCComp = ({fclist})=>{
	//console.log("dclist--",dclist);
	return(
		<div className="gridContainer">
		{
			fclist.map(fc=>{
				return(
					<div key={fc.id} className="smallCard">
					<Link to={`/fcid=${fc.id}`}>
						<div>{`FC id:${fc.id}`}</div>
						<div>{`FC Name:${fc.name}`}</div>
					</Link>
					</div>
				)
			})
		}
		</div>
	)
}

export default FCComp;