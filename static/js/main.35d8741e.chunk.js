(this["webpackJsonpmettle-works"]=this["webpackJsonpmettle-works"]||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),s=n(24),a=n.n(s),c=(n(31),n(12)),r=n(13),l=n(15),d=n(14),m=n(10),u=n(2),h=n(11),p=n.n(h),g=n(18),f=n(7),v=n(1),b=function(e){var t=e.contents;return Object(v.jsx)("div",{className:"page-container",children:Object(v.jsx)("div",{id:"root",className:"App",children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:"mw-content-ltr sitedir-ltr ltr mw-body-content parsoid-body mediawiki mw-parser-output"})})})},j=(n(34),n(21),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).state={mousedown:!1},o}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=document.getElementsByClassName("minimap-treeview")[0],t=document.getElementsByClassName("miniregion")[0];"undefined"!==typeof e&&null!==e&&e.parentNode.removeChild(e),"undefined"!==typeof t&&null!==t&&t.parentNode.removeChild(t)}},{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.rootId);if("undefined"===typeof e&&null===e)return!1;e.className="react-minimap-component";var t=document.createElement("div");t.className="minimap-treeview";var n=document.getElementsByClassName("minimap-container")[0];n.appendChild(t);var o=e.cloneNode(!0);(o=this.highlightSection(o)).className="minimap noselect "+this.props.rootId;var i=document.createElement("div");i.className="miniregion",n.appendChild(i),t.appendChild(o);var s=document.getElementsByClassName("minimap")[0],a=document.createElement("div");a.className="minimap-overlay",s.appendChild(a),this.onResizeHandler(s),console.log("componentDidMount"),window.addEventListener("resize",this.onResizeHandler.bind(this,e),!1),window.addEventListener("scroll",this.onScrollHandler.bind(this),!1),s.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),s.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),s.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),s.addEventListener("click",this.onClickHandler.bind(this),!1),t.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"getHighlightedText",value:function(e,t){return e.replace(t,"<span style='color:red;' >".concat(t,"</span>"))}},{key:"highlightSection",value:function(e){var t=this.props.searchQuery;return t?(e.querySelectorAll("p").forEach((function(e,n){e.textContent.toLowerCase().includes(t.toLowerCase())?e.style.backgroundColor="#ffff00":e.style.backgroundColor="transparent"})),e):e}},{key:"componentDidUpdate",value:function(){this.props.searchQuery;var e=document.getElementsByClassName("minimap")[0],t=document.getElementsByClassName("miniregion")[0];t.parentNode.removeChild(t),e.parentNode.removeChild(e);var n=document.getElementById(this.props.rootId),o=document.getElementsByClassName("minimap-treeview")[0],i=document.getElementsByClassName("minimap-container")[0],s=n.cloneNode(n);console.log("componentDidUpdate"),(s=this.highlightSection(s)).className="minimap noselect "+this.props.rootId;var a=document.createElement("div");a.className="miniregion",i.appendChild(a),o.appendChild(s);var c=document.getElementsByClassName("minimap")[0],r=document.createElement("div");r.className="minimap-overlay",c.appendChild(r),this.onResizeHandler(this),c.addEventListener("mousemove",this.onMouseMoveHandler.bind(this)),c.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"onResizeHandler",value:function(e){console.log("onResizeHandler")}},{key:"onScrollHandler",value:function(){console.log("onScrollHandler")}},{key:"onClickHandler",value:function(e){console.log("onClickHandler"),this._scrollTop(e),this.setState({mousedown:!1})}},{key:"onMouseMoveHandler",value:function(e){if(console.log("onMouseMoveHandler"),!this.state.mousedown)return this.setState({mousedown:!1}),!1;this._scrollTop(e)}},{key:"onMouseDownHandler",value:function(e){console.log("onMouseDownHandler"),this.setState({mousedown:!0});var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.addClass(t,"dragging"),this.addClass(n,"noselect")}},{key:"onMouseUpHandler",value:function(e){console.log("onMouseUpHandler");var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.removeClass(t,"dragging"),this.removeClass(n,"noselect"),this.setState({mousedown:!1})}},{key:"scale",value:function(){console.log("scale");var e=this.props,t=(e.widthRatio,e.heightRatio,document.getElementsByClassName("minimap")[0]),n=document.getElementById(this.props.rootId);if("undefined"===typeof t)return!1;if("undefined"===typeof n)return!1;if(t.offsetHeight<=7e3){return{x:document.getElementById(this.props.rootId).clientWidth/t.clientWidth*.07,y:document.getElementById(this.props.rootId).clientHeight/t.clientHeight*.1}}return{x:document.documentElement.clientWidth/t.clientWidth*.08,y:document.documentElement.clientHeight/t.clientHeight*.95}}},{key:"onScrollChecker",value:function(e){return console.log("onScrollChecker"),document.getElementById(e).scrollHeight>document.getElementById(e).clientHeight}},{key:"_mergeStyles",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))}},{key:"_miniRegion",value:function(){console.log("_miniRegion");var e=this.props,t=e.offsetHeightRatio,n=e.offsetWidthRatio,o=e.position,i=e.style,s=document.getElementsByClassName("minimap")[0];if("undefined"===typeof s)return!1;var a=s.getBoundingClientRect(),c=this.scale(),r=a.top*c.y,l=document.documentElement.clientWidth*n,d={width:document.getElementsByClassName("minimap-treeview")[0].clientWidth+5+"px",height:window.innerHeight*c.y+"px",margin:"0px",top:window.pageYOffset*c.y+document.documentElement.clientHeight*t-r+"px",display:"block"};d[o]=l+"px",Object.assign(document.getElementsByClassName("miniregion")[0].style,this._mergeStyles(d,i))}},{key:"_scrollTop",value:function(e){console.log("_scrollTop");var t=this.props,n=t.offsetHeightRatio,o=t.toggle,i=t.smoothScrollDelay,s=t.smoothScroll;if(!o)return!1;var a=document.getElementsByClassName("minimap")[0].getBoundingClientRect(),c=this.scale(),r=document.documentElement.clientHeight*n,l=a.top*c.y,d=document.getElementsByClassName("miniregion")[0].offsetHeight,m=(e.clientY-d/2-r+l)/c.y;if("click"===e.type&&s){var u=window.pageYOffset,h=document.getElementsByClassName("minimap")[0].offsetHeight,p=(m=Math.max(m,Math.min(m,h)))>u,g=i,f=Math.abs(u-m),v=g/f,b=1,j=4;v>=4?j=parseInt(b,15):b=v>=1?4*parseInt(v,15):parseInt(4/v,15);var y=u,A=parseInt(f/b,8),C=window.setInterval((function(){y+=p?b:-b,--A<=0&&(clearInterval(C),y=m),window.scrollTo(0,y)}),j)}else window.scrollTo(0,m);e.stopPropagation()}},{key:"addClass",value:function(e,t){e.className?e.classList.add(t):this.hasClass(e,t)||(e.className+=" "+t)}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\b"+t+"(\\b)"))}},{key:"removeClass",value:function(e,t){if(e.classList)e.classList.remove(t);else if(this.hasClass(e,t)){var n=new RegExp("(\\b"+t+"(\\b)");e.className=e.className.replace(n," ")}}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(o.Component));j.defaultProps={heightRatio:.95,widthRatio:.05,offsetHeightRatio:.01,offsetWidthRatio:.002,position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0};var y=j,A=n(25),C=function(e){var t=e.contentToHighlight,n=e.submitForm,i=e.showMinimap,s=Object(o.useState)(i),a=Object(f.a)(s,2),c=a[0],r=a[1],l=function(){r(!0)};return Object(o.useEffect)((function(){return window.addEventListener("scroll",(function(){l()}),!1),window.addEventListener("scroll",Object(A.debounce)((function(){r(!1)}),5e3)),function(){return window.removeEventListener("scroll",l)}}),[]),Object(v.jsx)("div",{children:c&&Object(v.jsx)("div",{className:"minimap-container",id:"tests",children:Object(v.jsx)(y,{rootId:"root",position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0,contentToHighlight:t,searchQuery:n})})})},w=(n(36),function(){var e=[];e.push('here<div style="background-color: green;">Green text goes here</div>here');var t=Object(u.f)(),n=Object(o.useState)([]),i=Object(f.a)(n,2),s=i[0],a=i[1],c=Object(o.useState)(!1),r=Object(f.a)(c,2),l=(r[0],r[1],Object(o.useState)()),d=Object(f.a)(l,2),m=(d[0],d[1],Object(o.useState)("")),h=Object(f.a)(m,2),j=h[0],y=h[1],A=Object(o.useState)(),w=Object(f.a)(A,2),O=w[0],E=w[1],x=Object(o.useState)(!1),N=Object(f.a)(x,2),k=N[0],H=N[1];function B(){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(p.a.mark((function e(){var n,o,i,s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t.search),o=n.get("query"),i=o&&o.substring(o.lastIndexOf("/")+1),e.next=5,fetch("https://en.m.wikipedia.org/w/rest.php/v1/page/".concat(i,"/html"));case 5:return s=e.sent,e.next=8,s.text();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(o.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[]);return Object(o.useEffect)((function(){var e=setTimeout((function(){E(j),j&&j.length&&H(!0)}),1e3);return function(){return clearTimeout(e)}}),[j]),Object(v.jsxs)("div",{className:"page-section",children:[Object(v.jsx)("input",{placeholder:"Enter search query",className:"search-query",type:"text",name:"name",value:j,onChange:function(e){y(e.target.value)}}),Object(v.jsx)("hr",{}),Object(v.jsx)(b,{contents:s}),Object(v.jsx)(C,{contentToHighlight:e,submitForm:O,showMinimap:k})]})}),O=(n(41),function(){return Object(v.jsx)(i.a.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Home Page of Mettle Works (Under Progress)"}),Object(v.jsxs)("h4",{children:["Click ",Object(v.jsx)(m.b,{to:"/details?query=https://en.m.wikipedia.org/wiki/seattle",children:"here"})," to redirect to Details page"]})]})})}),E=function(){return Object(v.jsxs)(m.a,{children:[Object(v.jsx)(u.c,{children:Object(v.jsx)(u.a,{exact:!0,path:"/",component:O})}),Object(v.jsx)(u.c,{children:Object(v.jsx)(u.a,{exact:!0,path:"/details",component:w})})]})},x=(n(42),n(43),function(){return Object(v.jsx)(i.a.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"menu-bar",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAGwAAAADVx3bDAAABBUlEQVRIDe2UwWrCQBCGZzZptEHxoCBsoGLfRHyBPmT1FXwAvUuP9dRCExoaeiokGjPbPYjC5JCMB/Gwe9mZ4Z/Z5efbBXDLOXAvDiC/SNTvD/1OJ+B1Sf6ZZb9Wv+c9PisofzB4UehNWV2QktFavyZJ8s6b+GFUEm26Bt+4sH1+hLwovtvrnVLoQI3GZ62fCCAUzjnLDzaycHzZ7e9cPAUcEAXgzT1PXU1jF9FEo2gRZ/Gu6TA6KLP26bjlQkmeZ7GjUWKYTFujcTKeTCuoerIxFzVCaYo0/fhpRWNAswe4/m9EVFRpvbT8N/+NkOerKgwfL3eVRWjRt+8slXU5tXPg1g78Aw5rSQg3SrIBAAAAAElFTkSuQmCC",alt:"menu",height:"36px",width:"36px"})}),Object(v.jsx)("div",{className:"icon-brand",children:"MettleWorks"})]})})}),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(x,{}),Object(v.jsx)(E,{})]})}}]),n}(o.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),s(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),k()}},[[44,1,2]]]);
//# sourceMappingURL=main.35d8741e.chunk.js.map