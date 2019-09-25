import {SETDC} from './constants.js';

export const setDC = (dcid)=>({
	type: SETDC,
	payload: dcid
})