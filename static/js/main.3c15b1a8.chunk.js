(this["webpackJsonpmettle-works"]=this["webpackJsonpmettle-works"]||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(24),a=n.n(s),c=(n(30),n(12)),l=n(13),r=n(15),m=n(14),d=n(10),u=n(2),h=n(11),p=n.n(h),g=n(18),f=n(8),v=n(1),y=function(e){var t=e.contents;return Object(v.jsx)("div",{className:"page-container",children:Object(v.jsx)("div",{id:"root",className:"App",children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:"mw-content-ltr sitedir-ltr ltr mw-body-content parsoid-body mediawiki mw-parser-output"})})})},b=(n(33),n(34),n(22),function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={mousedown:!1},i}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=document.getElementsByClassName("minimap-treeview")[0],t=document.getElementsByClassName("miniregion")[0];"undefined"!==typeof e&&null!==e&&e.parentNode.removeChild(e),"undefined"!==typeof t&&null!==t&&t.parentNode.removeChild(t)}},{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.rootId);if("undefined"===typeof e&&null===e)return!1;e.className="react-minimap-component";var t=document.createElement("div");t.className="minimap-treeview";var n=document.getElementsByClassName("minimap-container")[0];n.appendChild(t);var i=e.cloneNode(!0);(i=this.highlightSection(i)).className="minimap noselect "+this.props.rootId;var o=document.createElement("div");o.className="miniregion",n.appendChild(o),t.appendChild(i);var s=document.getElementsByClassName("minimap")[0],a=document.createElement("div");a.className="minimap-overlay",s.appendChild(a),this.onResizeHandler(s),window.addEventListener("scroll",this.onScrollHandler.bind(this),!1),o.addEventListener("click",this.onClickHandler.bind(this),!1),s.addEventListener("click",this.onClickHandler.bind(this),!1),t.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.removeEventListener("scroll",this.onScrollHandler.bind(this),!1)}},{key:"getHighlightedText",value:function(e,t){return e.replace(t,"<span style='color:red;' >".concat(t,"</span>"))}},{key:"highlightSection",value:function(e){var t=this.props.searchQuery;return t?(e.querySelectorAll("p").forEach((function(e,n){e.textContent.toLowerCase().includes(t.toLowerCase())?e.style.backgroundColor="#ffff00":e.style.backgroundColor="transparent"})),e):e}},{key:"componentDidUpdate",value:function(){var e=window.performance.memory;console.log("2",e);this.props.searchQuery;var t=document.getElementsByClassName("minimap")[0],n=document.getElementsByClassName("miniregion")[0];n.parentNode.removeChild(n),t.parentNode.removeChild(t);var i=document.getElementById(this.props.rootId),o=document.getElementsByClassName("minimap-treeview")[0],s=document.getElementsByClassName("minimap-container")[0],a=i.cloneNode(i);(a=this.highlightSection(a)).className="minimap noselect "+this.props.rootId;var c=document.createElement("div");c.className="miniregion",s.appendChild(c),o.appendChild(a);var l=document.getElementsByClassName("minimap")[0],r=document.createElement("div");r.className="minimap-overlay",l.appendChild(r),this.onResizeHandler(this),l.addEventListener("click",this.onClickHandler.bind(this),!1),c.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"onResizeHandler",value:function(e){console.log("onResizeHandler");var t=this.props,n=t.offsetHeightRatio,i=t.offsetWidthRatio,o=t.widthRatio,s=t.heightRatio,a=t.style,c=t.position;if(!t.toggle)return!1;var l=document.getElementsByClassName("minimap")[0];if("undefined"===typeof l)return!1;var r,m,d,u,h=document.getElementsByClassName("minimap-overlay")[0],p=document.getElementsByClassName("minimap-treeview")[0],g=this.scale(),f=document.documentElement.clientHeight*n,v=document.documentElement.clientWidth*i;m=document.documentElement.clientWidth*(1/g.x)*o,d=document.documentElement*(1/g.y)*s,l.clientHeight,g.y,l.clientWidth,g.x,u={"-webkit-transform":r="scale3d("+g.x+","+g.y+",1)","-moz-transform":r,"-ms-transform":r,"-o-transform":r,transforn:r,width:m+"px",height:d+"px",margin:"0px",padding:"0px"},Object.assign(l.style,this._mergeStyles(u,a)),Object.assign(h.style,{height:d+"px",width:"475px"});var y={height:document.documentElement.clientHeight+"px"};y[c]="5px",Object.assign(p.style,this._mergeStyles(y,a)),this._miniRegion(e)}},{key:"onScrollHandler",value:function(){console.log("onScrollHandler");var e=document.getElementsByClassName("minimap")[0];if("undefined"===typeof e)return!1;var t=document.getElementsByClassName("miniregion")[0],n=this.props.offsetHeightRatio;e=e.getBoundingClientRect();var i=this.scale(),o=window.innerHeight*n,s=e.top*i.y,a=window.pageYOffset*i.y,c=t.offsetHeight,l=e.offsetHeight*i.y+s;a+c+o<s||a>l?Object.assign(t.style,{display:"none"}):Object.assign(t.style,{top:a+o-s+"px",display:"block"})}},{key:"onClickHandler",value:function(e){console.log("onClickHandler"),this._scrollTop(e),this.setState({mousedown:!1})}},{key:"onMouseMoveHandler",value:function(e){if(console.log("onMouseMoveHandler"),!this.state.mousedown)return this.setState({mousedown:!1}),!1;this._scrollTop(e)}},{key:"onMouseDownHandler",value:function(e){console.log("onMouseDownHandler"),this.setState({mousedown:!0});var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.addClass(t,"dragging"),this.addClass(n,"noselect")}},{key:"onMouseUpHandler",value:function(e){console.log("onMouseUpHandler");var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.removeClass(t,"dragging"),this.removeClass(n,"noselect"),this.setState({mousedown:!1})}},{key:"scale",value:function(){console.log("scale");var e=this.props,t=(e.widthRatio,e.heightRatio,document.getElementsByClassName("minimap")[0]),n=document.getElementById(this.props.rootId);if("undefined"===typeof t)return!1;if("undefined"===typeof n)return!1;if(t.offsetHeight<=7e3){return{x:document.getElementById(this.props.rootId).clientWidth/t.clientWidth*.07,y:document.getElementById(this.props.rootId).clientHeight/t.clientHeight*.1}}return{x:document.documentElement.clientWidth/t.clientWidth*.08,y:document.documentElement.clientHeight/t.clientHeight*.95}}},{key:"onScrollChecker",value:function(e){return console.log("onScrollChecker"),document.getElementById(e).scrollHeight>document.getElementById(e).clientHeight}},{key:"_mergeStyles",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))}},{key:"_miniRegion",value:function(){console.log("_miniRegion");var e=this.props,t=e.offsetHeightRatio,n=e.offsetWidthRatio,i=e.position,o=e.style,s=document.getElementsByClassName("minimap")[0];if("undefined"===typeof s)return!1;var a=s.getBoundingClientRect(),c=this.scale(),l=a.top*c.y,r=document.documentElement.clientWidth*n,m={width:document.getElementsByClassName("minimap-treeview")[0].clientWidth+5+"px",height:window.innerHeight*c.y+"px",margin:"0px",top:window.pageYOffset*c.y+document.documentElement.clientHeight*t-l+"px",display:"block"};m[i]=r+"px",Object.assign(document.getElementsByClassName("miniregion")[0].style,this._mergeStyles(m,o))}},{key:"_scrollTop",value:function(e){console.log("_scrollTop");var t=this.props,n=t.offsetHeightRatio,i=t.toggle,o=t.smoothScrollDelay,s=t.smoothScroll;if(!i)return!1;var a=document.getElementsByClassName("minimap")[0].getBoundingClientRect(),c=this.scale(),l=document.documentElement.clientHeight*n,r=a.top*c.y,m=document.getElementsByClassName("miniregion")[0].offsetHeight,d=(e.clientY-m/2-l+r)/c.y;if("click"===e.type&&s){var u=window.pageYOffset,h=document.getElementsByClassName("minimap")[0].offsetHeight,p=(d=Math.max(d,Math.min(d,h)))>u,g=o,f=Math.abs(u-d),v=g/f,y=1,b=4;v>=4?b=parseInt(y,15):y=v>=1?4*parseInt(v,15):parseInt(4/v,15);var j=u,A=parseInt(f/y,8),C=window.setInterval((function(){j+=p?y:-y,--A<=0&&(clearInterval(C),j=d),window.scrollTo(0,j)}),b)}else window.scrollTo(0,d);e.stopPropagation()}},{key:"addClass",value:function(e,t){e.className?e.classList.add(t):this.hasClass(e,t)||(e.className+=" "+t)}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\b"+t+"(\\b)"))}},{key:"removeClass",value:function(e,t){if(e.classList)e.classList.remove(t);else if(this.hasClass(e,t)){var n=new RegExp("(\\b"+t+"(\\b)");e.className=e.className.replace(n," ")}}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(i.Component));b.defaultProps={heightRatio:.95,widthRatio:.05,offsetHeightRatio:.01,offsetWidthRatio:.002,position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0};var j=function(e){e.contentToHighlight,e.submitForm;var t=e.showMinimap,n=Object(i.useState)(t),o=Object(f.a)(n,2);o[0],o[1];return Object(i.useEffect)((function(){}),[]),Object(v.jsx)("div",{children:!1})},A=(n(36),function(){var e=[];e.push('here<div style="background-color: green;">Green text goes here</div>here');var t=Object(u.f)(),n=Object(i.useState)([]),o=Object(f.a)(n,2),s=o[0],a=o[1],c=Object(i.useState)(""),l=Object(f.a)(c,2),r=l[0],m=l[1],d=Object(i.useState)(),h=Object(f.a)(d,2),b=h[0],A=h[1],C=Object(i.useState)(!1),w=Object(f.a)(C,2),E=w[0],x=w[1];function O(){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(p.a.mark((function e(){var n,i,o,s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t.search),i=n.get("query"),o=i&&i.substring(i.lastIndexOf("/")+1),e.next=5,fetch("https://en.wikipedia.org/w/rest.php/v1/page/".concat(o,"/html"),{"Api-User-Agent":"MediaWiki REST API docs examples/0.1 (https://www.mediawiki.org/wiki/API_talk:REST_API)"});case 5:return s=e.sent,e.next=8,s.text();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]);return Object(i.useEffect)((function(){var e=setTimeout((function(){A(r),r&&r.length&&x(!0)}),1e3);return function(){return clearTimeout(e)}}),[r]),Object(v.jsxs)("div",{className:"page-section",children:[Object(v.jsx)("input",{placeholder:"Enter search query",className:"search-query",type:"text",name:"name",value:r,onChange:function(e){m(e.target.value)}}),Object(v.jsx)("hr",{}),Object(v.jsx)(y,{contents:s}),Object(v.jsx)(j,{contentToHighlight:e,submitForm:b,showMinimap:E})]})}),C=(n(41),function(){return Object(v.jsx)(o.a.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Home Page of Mettle Works (Under Progress)"}),Object(v.jsxs)("h4",{children:["Click ",Object(v.jsx)(d.b,{to:"/details?query=https://en.m.wikipedia.org/wiki/Seattle",children:"here"})," to redirect to Details page"]})]})})}),w=function(){return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(u.c,{children:Object(v.jsx)(u.a,{exact:!0,path:"/",component:C})}),Object(v.jsx)(u.c,{children:Object(v.jsx)(u.a,{exact:!0,path:"/details",component:A})})]})},E=(n(42),n(43),function(){return Object(v.jsx)(o.a.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"menu-bar",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAGwAAAADVx3bDAAABBUlEQVRIDe2UwWrCQBCGZzZptEHxoCBsoGLfRHyBPmT1FXwAvUuP9dRCExoaeiokGjPbPYjC5JCMB/Gwe9mZ4Z/Z5efbBXDLOXAvDiC/SNTvD/1OJ+B1Sf6ZZb9Wv+c9PisofzB4UehNWV2QktFavyZJ8s6b+GFUEm26Bt+4sH1+hLwovtvrnVLoQI3GZ62fCCAUzjnLDzaycHzZ7e9cPAUcEAXgzT1PXU1jF9FEo2gRZ/Gu6TA6KLP26bjlQkmeZ7GjUWKYTFujcTKeTCuoerIxFzVCaYo0/fhpRWNAswe4/m9EVFRpvbT8N/+NkOerKgwfL3eVRWjRt+8slXU5tXPg1g78Aw5rSQg3SrIBAAAAAElFTkSuQmCC",alt:"menu",height:"36px",width:"36px"})}),Object(v.jsx)("div",{className:"icon-brand",children:"MettleWorks"})]})})}),x=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(E,{}),Object(v.jsx)(w,{})]})}}]),n}(i.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),s(e),a(e)}))};a.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.3c15b1a8.chunk.js.map