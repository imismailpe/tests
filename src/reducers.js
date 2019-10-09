import {SETDC,SETFC,SETVENDOR} from './constants.js';

const initialState = {
	selectedDC: -1,
	selectedFC: -1,
	selectedVendor: -1
}

export const setDataR = (state=initialState, action={})=>{
	switch(action.type){
		case SETDC:
			return Object.assign({},state,{selectedDC: action.payload})
		case SETFC:
			return Object.assign({},state,{selectedFC: action.payload})
		case SETVENDOR:
			return Object.assign({},state,{selectedVendor: action.payload})
		default:
			return state;
	}
}