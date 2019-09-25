import {SETDC} from './constants.js';

const initialState = {
	selectedDC: ''
}

export const setDCR = (state=initialState, action={})=>{
	switch(action.type){
		case SETDC:
		  	console.log("selectedDC--",action.payload);
			return Object.assign({},state,{selectedDC: action.payload})
		default:
			return state;
	}
}