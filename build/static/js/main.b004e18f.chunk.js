(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(13),r=n.n(c),i=n(14),o=n(15),l=(n(45),n(12)),u=n.n(l),m=n(20),d=n(27),h=n(28),p=n(32),f=n(29),w=n(33),g=function(e){var t=e.width,n=e.height;return s.a.createElement("div",{className:"f3 white resizecard"},"this window is ".concat(t,"px wide and ").concat(n,"px high"))},E=n(8),b=function(){return s.a.createElement("ul",{className:"navlinks"},s.a.createElement(E.b,{to:"/"},s.a.createElement("li",{className:"navlink"},"Home")),s.a.createElement("li",{className:"navlink"},"About"),s.a.createElement(E.b,{to:"/users"},s.a.createElement("li",{className:"navlink"},"Users")),s.a.createElement(E.b,{to:"/posts"},s.a.createElement("li",{className:"navlink"},"Posts")),s.a.createElement(E.b,{to:"/DC"},s.a.createElement("li",{className:"navlink"},"DCs")))},v=n(7),j=[{id:1,name:"Bangalore",img:"https://picsum.photos/200/150/?"},{id:2,name:"Pune",img:"https://picsum.photos/200/150/?"},{id:3,name:"Mysore",img:"https://picsum.photos/200/150/?"},{id:4,name:"Trivandrum",img:"https://picsum.photos/200/150/?"}],k=[{id:1,name:"Terminal",dcid:1,img:"https://picsum.photos/200/150/?"},{id:2,name:"Kasa",dcid:1,img:"https://picsum.photos/200/150/?"},{id:4,name:"FC1",dcid:2,img:"https://picsum.photos/200/150/?"},{id:5,name:"Amoeba",dcid:3,img:"https://picsum.photos/200/150/?"}],y=(n(53),Object(a.lazy)(function(){return n.e(6).then(n.bind(null,55))})),C=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,58))}),D=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,56))}),O=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,57))}),x=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).updateSize=function(t){e.setState(function(e){return{wWidth:t.target.innerWidth,wHeight:t.target.innerHeight}})},e.getUserList=function(){Object(m.a)(u.a.mark(function t(){var n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users/");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState(function(){return{users:a}});case 7:case"end":return t.stop()}},t)}))().catch(function(e){return alert(e)})},e.getData=function(){Object(m.a)(u.a.mark(function t(){var n,a,s,c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("https://jsonplaceholder.typicode.com/users/"),fetch("https://jsonplaceholder.typicode.com/posts/"),fetch("https://jsonplaceholder.typicode.com/comments")]);case 2:return n=t.sent,t.next=5,n[0].json();case 5:return a=t.sent,t.next=8,n[1].json();case 8:return s=t.sent,t.next=11,n[2].json();case 11:c=t.sent,e.setState(function(){return{users:a,posts:s,comments:c,dclist:j,fclist:k}});case 13:case"end":return t.stop()}},t)}))().catch(function(e){return alert(e)})},e.state={wWidth:window.innerWidth,wHeight:window.innerHeight,users:[],posts:[],comments:[],dclist:[],fclist:[]},e}return Object(w.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize),this.getData()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize(0,0))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.selectedDC,t.onDCClick);return console.log("this.state--",this.props),s.a.createElement("div",{className:"App"},s.a.createElement(E.a,null,s.a.createElement("header",{className:"App-header"},s.a.createElement(b,null)),s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",render:function(){return s.a.createElement(g,{width:e.state.wWidth,height:e.state.wHeight})}}),s.a.createElement(v.a,{path:"/users",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(y,{userlist:e.state.users,isAuthed:!0}))}}),s.a.createElement(v.a,{path:"/posts",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(C,{feed:e.state.posts,userlist:e.state.users,commentlist:e.state.comments,showHideComment:e.showHideComment}))}}),s.a.createElement(v.a,{exact:!0,path:"/DC",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(D,{dclist:e.state.dclist,dcClick:n}))}}),s.a.createElement(v.a,{path:"/DC/FC",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(O,{fclist:e.state.fclist}))}}))))}}]),t}(s.a.Component),S=Object(o.b)(function(e){return console.log("state--",e),{selectedDC:e.selectedDC}},function(e){return{onDCClick:function(t){return e((n=t.target,console.log("payload--",n),{type:"SETDC",payload:n}));var n}}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z={selectedDC:""},N=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("action.type--",t.type),t.type){case"SETDC":return Object.assign({},e,{selectedDC:t.payload});default:return e}});r.a.render(s.a.createElement(o.a,{store:N},s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.b004e18f.chunk.js.map