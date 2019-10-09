import {SETDC,SETFC,SETVENDOR} from './constants.js';

export const setaDC = (dcid)=>{
	return{
		type: SETDC,
		payload: dcid
	}
}
export const setaFC = (fcid)=>{
	return{
		type: SETFC,
		payload: fcid
	}
}
export const setaVendor = (vendorid)=>{
	return{
		type: SETVENDOR,
		payload: vendorid
	}
}