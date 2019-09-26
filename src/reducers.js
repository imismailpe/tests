import {SETDC} from './constants.js';

const initialState = {
	selectedDC: ''
}

export const setDCR = (state=initialState, action={})=>{
	console.log("action.type--",action.type);
	switch(action.type){
		case SETDC:
			return Object.assign({},state,{selectedDC: action.payload})
		default:
			return state;
	}
}