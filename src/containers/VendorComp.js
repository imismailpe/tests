import React,{Component} from 'react';

const VendorComp =({vendor})=>{
  	return(
  		<div id={`${vendor.name}`} className="smallCard" >
  			<img className="smallCardImg" src={`${vendor.img}${vendor.name}`} alt={`${vendor.name}`}/>
  			<div className="smallCardTitle">{`${vendor.name}`}</div>
  		</div>
  	)
}

export default VendorComp;