import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setaVendor} from '../actions.js';
import {Link} from 'react-router-dom';
import VendorComp from '../components/VendorComp';

const mapStateToProps = (state)=>{
  return{
  	selectedVendor: state.selectedVendor,
  	selectedDC: state.selectedDC,
    selectedFC: state.selectedFC
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
		{	this.props.vendorlist.length>0?
			this.props.vendorlist.map((vendor,i)=>{
				return(
					<Link to={`/DC/${this.props.selectedDC}/FC/${this.props.selectedFC}/Vendor/${vendor.id}/Food`} key={`${vendor.id}`} onClick={()=>{this.props.selectVendor(vendor.id)}}>
						<VendorComp vendor={this.props.vendorlist[i]} />
					</Link>
				)
			})
			: <div>ⓘ No vendors are open at this FC now. Please visit other FCs</div>
		}
		</div>
	)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(VendorListCont);