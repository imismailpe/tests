import React,{Component} from 'react';

const FoodComp =({food})=>{
  	return(
  		<div id={`${food.name}`} className="smallCard" >
  			<img className="smallCardImg" src={`${food.img}${food.name}`} alt={`${food.name}`}/>
  			<div className="smallCardTitle">{`${food.name}`}</div>
  			<div className="smallCardPrice">{`Rs.${food.price}`}</div>
  			<div className="smallCardRating">{`${food.rating}⭐`}</div>
  		</div>
  	)
}

export default FoodComp;