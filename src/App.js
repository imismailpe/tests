import React,{lazy,Suspense} from 'react';
import './App.css';
import WindowResize from './components/WindowResize';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DCList} from './DCList.js';
import {FCList} from './FCList.js';
//import Async from 'react-async';
const Users = lazy(() => import('./components/Users'));
const Posts = lazy(()=>import('./components/Posts'));
const DCs = lazy(()=>import('./components/DCComp.js'));
const FCs = lazy(()=>import('./components/FCComp.js'));
//const Dclist = lazy(()=>import('./DCs.js'));


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
      fclist:[]
    }
  }
  componentDidMount(){
    window.addEventListener("resize",this.updateSize);
    this.getData();
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
    })().catch(e=>alert(e));
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
        return {users:userList,posts:userPosts,comments:commentList,
          dclist:DCList,
          fclist:FCList
        }
      })
    })().catch(e=>alert(e));
    console.log("dclist--",this.state.dclist);
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
      <Route exact path="/DC"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <DCs dclist={this.state.dclist}/>
          </Suspense>
        }
      />
      <Route path="/dcid"
        render={()=>
          <Suspense fallback={'Loading...'}>
            <FCs fclist={this.state.fclist}/>
          </Suspense>
        }
      />
      </Switch>
    </Router>
    </div>
  );
}
}

export default App;
