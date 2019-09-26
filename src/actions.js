import {SETDC} from './constants.js';

export const setDC = (dcid)=>{
	console.log("payload--",dcid);
	return{
		type: SETDC,
		payload: dcid
	}
}