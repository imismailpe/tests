import React,{Component} from 'react';

const DCComp =({dc})=>{
  	return(
  		<div id={`${dc.name}`} className="smallCard" >
  			<img className="smallCardImg" src={`${dc.img}${dc.name}`} alt={`${dc.name}`}/>
  			<div className="smallCardTitle">{`${dc.name}`}</div>
  		</div>
  	)
}

export default DCComp;