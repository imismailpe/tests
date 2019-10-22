import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import FoodComp from '../components/FoodComp';


class FoodListCont extends Component{
	constructor(props){
		super(props)
	}
	render(){
		//console.log("foodcont props--",this.props);
	return(
		<div className="gridContainer">
		{	
			this.props.foodlist.map((food,i)=>{
				return(
						<FoodComp key={`${food.id}`} food={this.props.foodlist[i]} />
				)
			})
		}
		</div>
	)
	}
}

export default FoodListCont;