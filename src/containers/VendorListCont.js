import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setaVendor} from '../actions.js';
import {Link} from 'react-router-dom';
import VendorComp from '../components/VendorComp';

const mapStateToProps = (state)=>{
  return{
  	selectedVendor: state.selectedVendor
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    selectVendor: (vendorid)=> dispatch(setaVendor(vendorid))
  }
}


class VendorListCont extends Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log("vendorcont props--",this.props.match);
	return(
		<div className="gridContainer">
		{	
			this.props.vendorlist.map((vendor,i)=>{
				return(
					<Link to={`/DC/:dcid/FC/:fcid/Vendor/${vendor.id}/Food`} key={`${vendor.id}`} onClick={()=>{this.props.selectVendor(vendor.id)}}>
						<VendorComp vendor={this.props.vendorlist[i]} />
					</Link>
				)
			})
		}
		</div>
	)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(VendorListCont);