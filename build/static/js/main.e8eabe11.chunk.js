(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){e.exports=a(369)},179:function(e,t,a){},181:function(e,t,a){},366:function(e,t,a){},367:function(e,t,a){},368:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(55),i=a.n(c),o=(a(179),a(9)),l=a(10),s=a(12),u=a(11),m=a(13),h=a(16),d=(a(181),a(35)),p=a(42),E=a(138),f=a(43);var v=Object(p.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_IS_LOADING":return Object(f.a)({},e,{isLoading:t.isLoading,hasError:!1});case"DATA_HAS_ERROR":return Object(f.a)({},e,{isLoading:!1,hasError:t.hasError});case"BTC_FETCH_DATA_SUCCESS":return Object(f.a)({},e,{data:t.data,isLoading:!1,hasError:!1});case"CHANGE_SCALE":return Object(f.a)({},e,{selected:t.select});default:return e}},{data:!1,selected:"month",isLoading:!0,hasError:!0},Object(p.a)(E.a)),b=a(22),g=(a(366),a(367),Object(h.cn)("load")),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:g()},r.a.createElement("div",{className:g("circle",{item:1})}),r.a.createElement("div",{className:g("circle",{item:2})}),r.a.createElement("div",{className:g("circle",{item:3})}),r.a.createElement("div",{className:g("circle",{item:4})}),r.a.createElement("div",{className:g("circle",{item:5})}),r.a.createElement("div",{className:g("circle",{item:6})}),r.a.createElement("div",{className:g("circle",{item:7})}),r.a.createElement("div",{className:g("circle",{item:8})}))}}]),t}(n.Component),j=Object(h.cn)("chart"),y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderTooltip=function(e){var t=e.active,n=e.payload;e.label;if(t){var c=Object(h.cn)("tooltip"),i=new Date;i.setTime(1e3*n[0].payload.time);var o=(i.getMinutes()<10?"0":"")+i.getMinutes(),l=(i.getHours()<10?"0":"")+i.getHours(),s="".concat(i.getDate(),".").concat(i.getMonth()+1,".").concat(i.getFullYear()),u="".concat(l,":").concat(o);return r.a.createElement("div",{className:c()},function(){if("year"!==a.props.scale)return r.a.createElement("p",{className:c("content",{date:!0})},u)}(),r.a.createElement("p",{className:c("content",{date:!0})},s),r.a.createElement("p",{className:c("content")},"High: ".concat(n[0].payload.high,"$")),r.a.createElement("p",{className:c("content")},"Low: ".concat(n[0].payload.low,"$")))}return null},a.renderLegend=function(e){var t=Object(h.cn)("legend");return r.a.createElement("div",{className:t()},r.a.createElement("span",null,"BTC to USD"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"ticks",value:function(){var e=this,t=[],a={day:60,year:30,month:48},n=0;return this.props.data.Data.forEach(function(r,c){n===a[e.props.scale]&&(t.push(c),n=0),n++}),t}},{key:"tickFormatter",value:function(e){var t=new Date;return t.setTime(1e3*this.props.data.Data[e].time),{day:function(){return t.getHours()+":"+t.getMinutes()+" "+t.getDate()+" "+y[t.getMonth()]},year:function(){return y[t.getMonth()]+" "+t.getFullYear()},month:function(){return t.getDate()+" "+y[t.getMonth()]}}[this.props.scale]()}},{key:"loading",value:function(){return r.a.createElement("div",{className:j("loading")},r.a.createElement(O,null))}},{key:"render",value:function(){var e=this;return this.props.data?this.props.hasError?r.a.createElement("div",null,"Error!"):r.a.createElement("div",{className:j()},r.a.createElement(b.e,{width:"100%",height:600},r.a.createElement(b.b,{data:this.props.data.Data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(b.c,{strokeDasharray:"5 5"}),r.a.createElement(b.g,{ticks:this.ticks(),angle:45,tickFormatter:function(t){return e.tickFormatter(t)},height:70,tickSize:35}),r.a.createElement(b.h,{domain:["dataMin-15","dataMax+15"]}),r.a.createElement(b.f,{content:this.renderTooltip}),r.a.createElement(b.d,{verticalAlign:"top",height:36,content:this.renderLegend}),r.a.createElement(b.a,{type:"monotone",dataKey:"close",stroke:"#8884d8",fill:"#8884d8"}))),this.props.isLoading?this.loading():""):r.a.createElement("div",null,r.a.createElement(O,null))}}]),t}(n.PureComponent);function k(e){return{type:"DATA_IS_LOADING",isLoading:e}}function A(e){return{type:"DATA_HAS_ERROR",hasError:e}}function D(e){return function(t){t(k(!0)),t({type:"CHANGE_SCALE",select:e}),fetch("btc-"+e+".json").then(function(e){if(!e.ok)throw t(A(!0)),Error(e.statusText);return e.json()}).then(function(e){t(function(e){return{type:"BTC_FETCH_DATA_SUCCESS",data:e}}(e)),t(k(!1))}).catch(function(){return t(A(!0))})}}var w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchScale(this.props.scale)}},{key:"render",value:function(){return r.a.createElement(N,{data:this.props.data,scale:this.props.scale,hasError:this.props.hasError,isLoading:this.props.isLoading})}}]),t}(n.Component),C={fetchScale:D},S=Object(d.b)(function(e){return{scale:e.selected,data:e.data,isLoading:e.isLoading,hasError:e.hasError}},C)(w),L=(a(368),Object(h.cn)("radio")),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"item",value:function(e,t){var a=this;return r.a.createElement("div",{className:L("btn"),key:t},r.a.createElement("input",{type:"radio",id:e.name+"-"+t,name:e.name,value:e.value,checked:e.value===this.props.selected,onChange:function(){return a.props.change(e.value)}}),r.a.createElement("label",{htmlFor:e.name+"-"+t},e.label))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:L("container")},this.props.data.map(function(t,a){return e.item(t,a)}))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{data:[{name:"scale",label:"Year",value:"year"},{name:"scale",label:"Month",value:"month"},{name:"scale",label:"Day",value:"day"}],change:this.props.fetchScale,selected:this.props.selected})}}]),t}(n.Component),M={fetchScale:D},H=Object(d.b)(function(e){return{selected:e.selected}},M)(_),F=Object(h.cn)("container"),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:F()},r.a.createElement(d.a,{store:v},r.a.createElement("h1",{className:F("header")},"\u041a\u0443\u0440\u0441 \u0431\u0438\u0442\u043a\u043e\u0438\u043d\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u043b\u043b\u0430\u0440\u0430 \u0421\u0428\u0410"),r.a.createElement("div",{className:F("select")},r.a.createElement(H,null)),r.a.createElement("div",{className:F("chart")},r.a.createElement(S,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[174,1,2]]]);
//# sourceMappingURL=main.e8eabe11.chunk.js.map