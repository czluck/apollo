webpackJsonp([0],{602:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(3),l=n(i),r=a(0),o=n(r),d=a(1),u=n(d),f=a(5),c=n(f),s=a(4),p=n(s),m=a(2),v=n(m),h=a(34),g=n(h),k=a(605),y=n(k),M=a(127),E=n(M),_=a(19),w=n(_),H=a(606),b=n(H),x=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={routingView:!1},a.onClickHandler=a.onClickHandler.bind(a),a.scriptOnLoadHandler=a.scriptOnLoadHandler.bind(a),a}return(0,p.default)(t,e),(0,u.default)(t,[{key:"onClickHandler",value:function(){var e=!this.state.routingView;e?E.default.enableControls():E.default.disableControls(),this.setState({routingView:e})}},{key:"componentDidMount",value:function(){E.default.mapAPILoaded&&this.scriptOnLoadHandler()}},{key:"scriptOnLoadHandler",value:function(){a(607)("./"+g.default.navigation.map+"Adapter").then(function(e){var t=e.default,a=new t;E.default.mapAPILoaded=!0,E.default.initialize(w.default,a),E.default.disableControls()})}},{key:"componentWillUnmount",value:function(){E.default.reset()}},{key:"render",value:function(){var e=this.props,t=e.viewHeight,a=e.viewWidth;if("GoogleMap"!==g.default.navigation.map&&"BaiduMap"!==g.default.navigation.map)return console.error("Map API "+g.default.navigation.map+" is not supported."),null;if(!E.default.mapAPILoaded){var n=function(){console.log("Map API script loaded.")};"BaiduMap"===g.default.navigation.map?window.initMap=this.scriptOnLoadHandler:"GoogleMap"===g.default.navigation.map&&(n=this.scriptOnLoadHandler),(0,b.default)({url:g.default.navigation.mapAPiUrl,onLoad:n,onError:function(){console.log("Failed to load map api")}})}var i=0,l=0,r=a,o=t,d="maximizing";return this.state.routingView||(i=10,l=20,r=Math.min(.3*a,250),o=Math.min(.5*t,300),d="minimizing"),v.default.createElement("div",{displayname:"navigation",className:"navigation-view",style:{width:r,height:o,top:i,left:l}},v.default.createElement("div",{id:"map_canvas"}),v.default.createElement(y.default,{type:d,onClick:this.onClickHandler}))}}]),t}(v.default.Component);t.default=x},605:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(3),l=n(i),r=a(0),o=n(r),d=a(1),u=n(d),f=a(5),c=n(f),s=a(4),p=n(s),m=a(2),v=n(m),h=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"getMaximizingIcon",value:function(){return v.default.createElement("svg",{viewBox:"0 0 20 20"},v.default.createElement("defs",null,v.default.createElement("path",{d:"M20 0L0 20h20V0z",id:"a"}),v.default.createElement("path",{d:"M11.53 18.5l-.03-7h7",id:"b"}),v.default.createElement("path",{d:"M12 12l7 7",id:"c"})),v.default.createElement("use",{xlinkHref:"#a",opacity:".6",fill:"#549BFF"}),v.default.createElement("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}),v.default.createElement("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}))}},{key:"getMinimizingIcon",value:function(){return v.default.createElement("svg",{viewBox:"0 0 20 20"},v.default.createElement("defs",null,v.default.createElement("path",{d:"M20 0L0 20h20V0z",id:"a"}),v.default.createElement("path",{d:"M18.47 11.5l.03 7h-7",id:"b"}),v.default.createElement("path",{d:"M11 11l7 7",id:"c"})),v.default.createElement("use",{xlinkHref:"#a",opacity:".6",fill:"#549BFF"}),v.default.createElement("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}),v.default.createElement("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}))}},{key:"render",value:function(){var e=this.props,t=e.type,a=e.onClick,n=null;switch(t){case"minimizing":n=this.getMinimizingIcon();break;case"maximizing":n=this.getMaximizingIcon()}return v.default.createElement("div",{className:"window-resize-control",onClick:a},n)}}]),t}(v.default.PureComponent);t.default=h},606:function(e,t,a){"use strict";function n(e){var t=e.url,a=e.onLoad,n=e.onError,i=document.createElement("script");i.src=t,i.type="text/javascript",i.async=!0,i.onload=a,i.onerror=n,document.body.appendChild(i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},607:function(e,t,a){function n(e){var t=i[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./BaiduMapAdapter":[603,2],"./GoogleMapAdapter":[604,1]};n.keys=function(){return Object.keys(i)},e.exports=n,n.id=607}});
//# sourceMappingURL=0.bundle.js.map