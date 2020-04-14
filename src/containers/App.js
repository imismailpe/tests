import React,{lazy,Suspense} from 'react';
import {connect} from 'react-redux';
import WindowResize from '../components/WindowResize';
import Nav from '../components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DCList} from '../DCList.js';
import {FCList} from '../FCList.js';
import {VendorList} from '../VendorList.js';
import {FoodList} from '../FoodList.js';
import {CovidStats} from '../CovidStats.js';
import './App.css';
//import Async from 'react-async';
const Users = lazy(() => import('../components/Users'));
const Posts = lazy(()=>import('../components/Posts'));
const DCs = lazy(()=>import('./DCListCont.js'));
const FCs = lazy(()=>import('./FCListCont.js'));
const Vendors = lazy(()=>import('./VendorListCont.js'));
const Foods = lazy(()=>import('./FoodListCont.js'));
//const Dclist = lazy(()=>import('./DCs.js'));

const mapStateToProps = (state)=>{
  return{
      selectedDC: state.selectedDC,
      selectedFC: state.selectedFC,
      selectedVendor: state.selectedVendor
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      wWidth:window.innerWidth,
      wHeight:window.innerHeight,
      users:[],
      posts:[],
      comments:[],
      dclist:[],
      fclist:[],
      vendorlist:[],
      filteredFCs:[],
      filteredVendors:[],
      filteredFoods:[]
    }
    this.filteredFCs=[];
    this.filteredVendors=[];
    this.filteredFoods=[];
  }
  componentDidMount(){
    window.addEventListener("resize",this.updateSize);
    this.getData();
  }
  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      this.filterData();
    }
  }

  updateSize=(e)=>{
    this.setState(function(prevState){
      return {wWidth:e.target.innerWidth,wHeight:e.target.innerHeight}
    });
  }
  getUserList = ()=>{
    (async ()=>{
      let resp = await fetch("https://jsonplaceholder.typicode.com/users/");
      let userlist = await resp.json();
      this.setState(function(){
        return {users:userlist}  
      })
    }).catch(e=>alert(e));
  }
  getData = ()=>{
    (async ()=>{
      let resp = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/"),
        fetch("https://jsonplaceholder.typicode.com/posts/"),
        fetch("https://jsonplaceholder.typicode.com/comments")
        ])
      let userList = await resp[0].json();
      let userPosts = await resp[1].json();
      let commentList = await resp[2].json();
      this.setState(function(){
        return {
          users:userList,
          posts:userPosts,
          comments:commentList,
          dclist:DCList,
          fclist:FCList,
          vendorlist: VendorList,
          foodlist: FoodList
        }
      })
    })();
  }

  filterData = ()=>{
    this.filteredFCs=this.state.fclist.filter(fc=>fc.dcid===this.props.selectedDC)
    this.filteredVendors=this.state.vendorlist.filter(vendor=>vendor.fcid===this.props.selectedFC)
    this.filteredFoods=this.state.foodlist.filter(food=>food.vendorid===this.props.selectedVendor)
    console.log(this.props.selectedVendor)
    this.setState(function(){
      return {
        filteredFCs:this.filteredFCs,
        filteredVendors: this.filteredVendors,
        filteredFoods: this.filteredFoods
        }
    })
    //console.log("state after filter--",this.state)
  }
  componentWillUnmount(){
    window.removeEventListener("resize",this.updateSize(0,0));
  }
  render(){
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <Nav/>
      </header>
      
      <Switch>
      <Route exact path="/"
        render={()=>
          <WindowResize width={this.state.wWidth} height={this.state.wHeight} />
        }
      />
      <Route path="/users" 
        render={() =>
          <Suspense fallback={'Loading...'}>
            <Users userlist={this.state.users} isAuthed={true} />
          </Suspense>
        }
      />
      <Route path="/posts"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <Posts feed={this.state.posts} userlist={this.state.users} commentlist={this.state.comments} showHideComment={this.showHideComment}/>
          </Suspense>
        }
      />
      <Route exact path="/Covid"
              render={()=>
                <Suspense fallback={'Loading...'}>
                  <CovidStats />
                </Suspense>
              }
            />
      <Route exact path="/DC"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <DCs dclist={this.state.dclist}/>
          </Suspense>
        }
      />
      <Route exact path="/DC/:dcid/FC"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <FCs fclist={this.state.filteredFCs}/>
          </Suspense>
        }
      />
      <Route exact path="/DC/:dcid/FC/:fcid/Vendor"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <Vendors vendorlist={this.state.filteredVendors}/>
          </Suspense>
        }
      />
      <Route exact path="/DC/:dcid/FC/:fcid/Vendor/:vendorid/Food"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <Foods foodlist={this.state.filteredFoods}/>
          </Suspense>
        }
      />
      </Switch>
    </Router>
    </div>
  );
}
}

export default connect(mapStateToProps)(App);