(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(13),r=n.n(c),i=n(14),o=n(15),l=(n(45),n(12)),u=n.n(l),d=n(20),m=n(27),h=n(28),p=n(32),f=n(29),w=n(33),E=function(e){var t=e.width,n=e.height;return s.a.createElement("div",{className:"f3 white resizecard"},"this window is ".concat(t,"px wide and ").concat(n,"px high"))},g=n(8),b=function(){return s.a.createElement("ul",{className:"navlinks"},s.a.createElement(g.b,{to:"/"},s.a.createElement("li",{className:"navlink"},"Home")),s.a.createElement("li",{className:"navlink"},"About"),s.a.createElement(g.b,{to:"/users"},s.a.createElement("li",{className:"navlink"},"Users")),s.a.createElement(g.b,{to:"/posts"},s.a.createElement("li",{className:"navlink"},"Posts")),s.a.createElement(g.b,{to:"/DC"},s.a.createElement("li",{className:"navlink"},"DCs")))},v=n(7),C=[{id:1,name:"Bangalore",img:"https://picsum.photos/200/150/?"},{id:2,name:"Pune",img:"https://picsum.photos/200/150/?"},{id:3,name:"Mysore",img:"https://picsum.photos/200/150/?"}],j=[{id:1,name:"Terminal",dcid:1,img:"https://picsum.photos/200/150/?"},{id:2,name:"Kasa",dcid:1,img:"https://picsum.photos/200/150/?"},{id:4,name:"FC1",dcid:2,img:"https://picsum.photos/200/150/?"},{id:5,name:"Amoeba",dcid:3,img:"https://picsum.photos/200/150/?"}],k=(n(53),Object(a.lazy)(function(){return n.e(6).then(n.bind(null,55))})),y=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,58))}),D=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,56))}),O=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,57))}),x=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).updateSize=function(e){n.setState(function(t){return{wWidth:e.target.innerWidth,wHeight:e.target.innerHeight}})},n.getUserList=function(){Object(d.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n.setState(function(){return{users:a}});case 7:case"end":return e.stop()}},e)}))().catch(function(e){return alert(e)})},n.getData=function(){Object(d.a)(u.a.mark(function e(){var t,a,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://jsonplaceholder.typicode.com/users/"),fetch("https://jsonplaceholder.typicode.com/posts/"),fetch("https://jsonplaceholder.typicode.com/comments")]);case 2:return t=e.sent,e.next=5,t[0].json();case 5:return a=e.sent,e.next=8,t[1].json();case 8:return s=e.sent,e.next=11,t[2].json();case 11:c=e.sent,n.setState(function(){return{users:a,posts:s,comments:c,dclist:C,fclist:j}});case 13:case"end":return e.stop()}},e)}))().catch(function(e){return alert(e)})},n.state={wWidth:window.innerWidth,wHeight:window.innerHeight,users:[],posts:[],comments:[],dclist:[],fclist:[]},n}return Object(w.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize),this.getData()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize(0,0))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.selectedDC,t.onDCClick);return console.log("this.state.selectedDC--",this.state.selectedDC),s.a.createElement("div",{className:"App"},s.a.createElement(g.a,null,s.a.createElement("header",{className:"App-header"},s.a.createElement(b,null)),s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",render:function(){return s.a.createElement(E,{width:e.state.wWidth,height:e.state.wHeight})}}),s.a.createElement(v.a,{path:"/users",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(k,{userlist:e.state.users,isAuthed:!0}))}}),s.a.createElement(v.a,{path:"/posts",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(y,{feed:e.state.posts,userlist:e.state.users,commentlist:e.state.comments,showHideComment:e.showHideComment}))}}),s.a.createElement(v.a,{exact:!0,path:"/DC",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(D,{dclist:e.state.dclist,dcClick:n}))}}),s.a.createElement(v.a,{path:"/DC/dcid=",render:function(){return s.a.createElement(a.Suspense,{fallback:"Loading..."},s.a.createElement(O,{fclist:e.state.fclist}))}}))))}}]),t}(s.a.Component),S=Object(o.b)(function(e){return{selectedDC:e.selectedDC}},function(e){return{onDCClick:function(t){return e({type:"SETDC",payload:t.target.value})}}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z={selectedDC:""},N=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SETDC":return console.log("selectedDC--",t.payload),Object.assign({},e,{selectedDC:t.payload});default:return e}});r.a.render(s.a.createElement(o.a,{store:N},s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.4d46426c.chunk.js.map