import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setaFC} from '../actions.js';
import {Link} from 'react-router-dom';
import FCComp from '../components/FCComp';

const mapStateToProps = (state)=>{
  return{
      selectedFC: state.selectedFC,
      selectedDC: state.selectedDC
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    selectFC: (fcid)=> dispatch(setaFC(fcid))
  }
}


class FCListCont extends Component{
	constructor(props){
		super(props)
	}
	render(){
	return(
		<div className="gridContainer">
		{	
			this.props.fclist.map((fc,i)=>{
				return(
					<Link to={`/DC/${this.props.selectedDC}/FC/${fc.id}/Vendor`} key={`${fc.id}`} onClick={()=>{this.props.selectFC(fc.id)}}>
						<FCComp fc={this.props.fclist[i]} />
					</Link>
				)
			})
		}
		</div>
	)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(FCListCont);