(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s});var a="SETDC",i="SETFC",s="SETVENDOR"},35:function(e,t,n){e.exports=n(55)},46:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(15),r=n.n(s),o=n(16),c=n(13),l=(n(46),n(12)),d=n.n(l),u=n(21),m=n(24),p=n(25),h=n(27),f=n(26),g=n(28),E=function(e){var t=e.width,n=e.height;return i.a.createElement("div",{className:"f3 white resizecard"},"this window is ".concat(t,"px wide and ").concat(n,"px high"))},b=n(8),v=function(){return i.a.createElement("ul",{className:"navlinks"},i.a.createElement(b.b,{to:"/"},i.a.createElement("li",{className:"navlink"},"Home")),i.a.createElement("li",{className:"navlink"},"About"),i.a.createElement(b.b,{to:"/users"},i.a.createElement("li",{className:"navlink"},"Users")),i.a.createElement(b.b,{to:"/posts"},i.a.createElement("li",{className:"navlink"},"Posts")),i.a.createElement(b.b,{to:"/DC"},i.a.createElement("li",{className:"navlink"},"DCs")))},w=n(7),C=[{id:0,name:"Bangalore",img:"https://picsum.photos/200/150/?"},{id:1,name:"Pune",img:"https://picsum.photos/200/150/?"},{id:2,name:"Mysore",img:"https://picsum.photos/200/150/?"},{id:3,name:"Trivandrum",img:"https://picsum.photos/200/150/?"}],y=[{id:0,name:"Terminal",dcid:0,img:"https://picsum.photos/200/150/?"},{id:1,name:"Kasa",dcid:0,img:"https://picsum.photos/200/150/?"},{id:2,name:"FC1",dcid:1,img:"https://picsum.photos/200/150/?"},{id:3,name:"Amoeba",dcid:2,img:"https://picsum.photos/200/150/?"},{id:4,name:"Heritage",dcid:0,img:"https://picsum.photos/200/150/?"},{id:5,name:"FC2",dcid:1,img:"https://picsum.photos/200/150/?"},{id:6,name:"TriFC",dcid:3,img:"https://picsum.photos/200/150/?"}],F=[{id:0,name:"Hatti Kappi",fcid:0,img:"https://picsum.photos/200/150/?"},{id:1,name:"Sub Way",fcid:0,img:"https://picsum.photos/200/150/?"},{id:2,name:"Chocolate",fcid:0,img:"https://picsum.photos/200/150/?"},{id:3,name:"Thalassery",fcid:1,img:"https://picsum.photos/200/150/?"}],j=[{id:1,name:"Tea",vendorid:0,price:5,rating:3.5},{id:2,name:"Coffee",vendorid:1,price:5,rating:2.8},{id:3,name:"Cup cake",vendorid:1,price:15,rating:4.2}],k=(n(54),Object(a.lazy)(function(){return n.e(7).then(n.bind(null,57))})),O=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,58))}),D=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,61))}),S=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,62))}),V=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,60))}),x=Object(a.lazy)(function(){return n.e(8).then(n.bind(null,59))}),z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateSize=function(e){n.setState(function(t){return{wWidth:e.target.innerWidth,wHeight:e.target.innerHeight}})},n.getUserList=function(){},n.getData=function(){Object(u.a)(d.a.mark(function e(){var t,a,i,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://jsonplaceholder.typicode.com/users/"),fetch("https://jsonplaceholder.typicode.com/posts/"),fetch("https://jsonplaceholder.typicode.com/comments")]);case 2:return t=e.sent,e.next=5,t[0].json();case 5:return a=e.sent,e.next=8,t[1].json();case 8:return i=e.sent,e.next=11,t[2].json();case 11:s=e.sent,n.setState(function(){return{users:a,posts:i,comments:s,dclist:C,fclist:y,vendorlist:F,foodlist:j}});case 13:case"end":return e.stop()}},e)}))()},n.filterData=function(){n.filteredFCs=n.state.fclist.filter(function(e){return e.dcid===n.props.selectedDC}),n.filteredVendors=n.state.vendorlist.filter(function(e){return e.fcid===n.props.selectedFC}),n.filteredFoods=n.state.foodlist.filter(function(e){return e.vendorid===n.props.selectedVendor}),console.log(n.props.selectedVendor),n.setState(function(){return{filteredFCs:this.filteredFCs,filteredVendors:this.filteredVendors,filteredFoods:this.filteredFoods}}),console.log("state after filter--",n.state)},n.state={wWidth:window.innerWidth,wHeight:window.innerHeight,users:[],posts:[],comments:[],dclist:[],fclist:[],vendorlist:[],filteredFCs:[],filteredVendors:[],filteredFoods:[]},n.filteredFCs=[],n.filteredVendors=[],n.filteredFoods=[],n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize),this.getData()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.filterData()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize(0,0))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(b.a,null,i.a.createElement("header",{className:"App-header"},i.a.createElement(v,null)),i.a.createElement(w.c,null,i.a.createElement(w.a,{exact:!0,path:"/",render:function(){return i.a.createElement(E,{width:e.state.wWidth,height:e.state.wHeight})}}),i.a.createElement(w.a,{path:"/users",render:function(){return i.a.createElement(a.Suspense,{fallback:"Loading..."},i.a.createElement(k,{userlist:e.state.users,isAuthed:!0}))}}),i.a.createElement(w.a,{path:"/posts",render:function(){return i.a.createElement(a.Suspense,{fallback:"Loading..."},i.a.createElement(O,{feed:e.state.posts,userlist:e.state.users,commentlist:e.state.comments,showHideComment:e.showHideComment}))}}),i.a.createElement(w.a,{exact:!0,path:"/DC",render:function(){return i.a.createElement(a.Suspense,{fallback:"Loading..."},i.a.createElement(D,{dclist:e.state.dclist}))}}),i.a.createElement(w.a,{exact:!0,path:"/DC/:dcid/FC",render:function(){return i.a.createElement(a.Suspense,{fallback:"Loading..."},i.a.createElement(S,{fclist:e.state.filteredFCs}))}}),i.a.createElement(w.a,{exact:!0,path:"/FC/:fcid/Vendor",render:function(){return i.a.createElement(a.Suspense,{fallback:"Loading..."},i.a.createElement(V,{vendorlist:e.state.filteredVendors}))}}),i.a.createElement(w.a,{exact:!0,path:"/Vendor/:vendorid/Food",render:function(){return i.a.createElement(a.Suspense,{fallback:"Loading..."},i.a.createElement(x,{foodlist:e.state.filteredFoods}))}}))))}}]),t}(i.a.Component),H=Object(c.b)(function(e){return{selectedDC:e.selectedDC,selectedFC:e.selectedFC,selectedVendor:e.selectedVendor}})(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(14),L={selectedDC:-1,selectedFC:-1,selectedVendor:-1},W=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("action--",t.type),console.log("payload--",t.payload),t.type){case N.a:return Object.assign({},e,{selectedDC:t.payload});case N.b:return Object.assign({},e,{selectedFC:t.payload});case N.c:return Object.assign({},e,{selectedVendor:t.payload});default:return e}});r.a.render(i.a.createElement(c.a,{store:W},i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.a9ce8a7e.chunk.js.map