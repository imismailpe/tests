import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setaDC} from '../actions.js';
import {Link} from 'react-router-dom';
import DCComp from '../components/DCComp';

const mapStateToProps = (state)=>{
  return{
      selectedDC: state.selectedDC
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    selectDC: (dcid)=> dispatch(setaDC(dcid))
  }
}


class DCListCont extends Component{
	constructor(props){
		super(props)
	}
	render(){
	return(
		<div className="gridContainer">
		{	
			this.props.dclist.map((dc,i)=>{
				return(
					<Link to={`/DC/${dc.id}/FC`} key={`${dc.id}`} onClick={()=>{this.props.selectDC(dc.id)}}>
						<DCComp dc={this.props.dclist[i]} />
					</Link>
				)
			})
		}
		</div>
	)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(DCListCont);