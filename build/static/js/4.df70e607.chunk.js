(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{56:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o});var c=n(14),a=function(e){return{type:c.a,payload:e}},r=function(e){return{type:c.b,payload:e}},o=function(e){return{type:c.c,payload:e}}},62:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(25),r=n(27),o=n(26),i=n(28),s=n(0),u=n.n(s),l=n(13),d=n(56),f=n(8),m=function(e){var t=e.fc;return u.a.createElement("div",{id:"".concat(t.name),className:"smallCard"},u.a.createElement("img",{className:"smallCardImg",src:"".concat(t.img).concat(t.name),alt:"".concat(t.name)}),u.a.createElement("div",{className:"smallCardTitle"},"".concat(t.name)))},p=function(e){function t(e){return Object(c.a)(this,t),Object(r.a)(this,Object(o.a)(t).call(this,e))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"gridContainer"},this.props.fclist.map(function(t,n){return u.a.createElement(f.b,{to:"/DC/".concat(e.props.selectedDC,"/FC/").concat(t.id,"/Vendor"),key:"".concat(t.id),onClick:function(){e.props.selectFC(t.id)}},u.a.createElement(m,{fc:e.props.fclist[n]}))}))}}]),t}(s.Component);t.default=Object(l.b)(function(e){return{selectedFC:e.selectedFC,selectedDC:e.selectedDC}},function(e){return{selectFC:function(t){return e(Object(d.b)(t))}}})(p)}}]);
//# sourceMappingURL=4.df70e607.chunk.js.map