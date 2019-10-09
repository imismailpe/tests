import React,{Component} from 'react';

const FCComp =({fc})=>{
  	return(
  		<div id={`${fc.name}`} className="smallCard" >
  			<img className="smallCardImg" src={`${fc.img}${fc.name}`} alt={`${fc.name}`}/>
  			<div className="smallCardTitle">{`${fc.name}`}</div>
  		</div>
  	)
}

export default FCComp;