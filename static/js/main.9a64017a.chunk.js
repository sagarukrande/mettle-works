(this["webpackJsonpmettle-works"]=this["webpackJsonpmettle-works"]||[]).push([[0],{22:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(25),a=n.n(s),r=(n(31),n(12)),l=n(13),c=n(15),d=n(14),m=n(10),u=n(2),h=n(11),p=n.n(h),g=n(19),f=n(7),y=n(1),v=function(e){var t=e.contents;return Object(y.jsx)("div",{className:"page-container",children:Object(y.jsx)("div",{id:"root",className:"App",children:Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:"mw-content-ltr sitedir-ltr ltr mw-body-content parsoid-body mediawiki mw-parser-output"})})})},b=(n(34),n(22),n(18)),j=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={mousedown:!1},i}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=document.getElementsByClassName("minimap-treeview")[0],t=document.getElementsByClassName("miniregion")[0];"undefined"!==typeof e&&null!==e&&e.parentNode.removeChild(e),"undefined"!==typeof t&&null!==t&&t.parentNode.removeChild(t)}},{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.rootId);if("undefined"===typeof e&&null===e)return!1;e.className="react-minimap-component";var t=document.createElement("div");t.className="minimap-treeview";var n=document.getElementsByClassName("minimap-container")[0];n.appendChild(t);var i=e.cloneNode(!0);(i=this.highlightSection(i)).className="minimap noselect "+this.props.rootId;var o=document.createElement("div");o.className="miniregion",n.appendChild(o),t.appendChild(i);var s=document.getElementsByClassName("minimap")[0],a=document.createElement("div");a.className="minimap-overlay",s.appendChild(a),this.onResizeHandler(s),console.log("componentDidMount"),window.addEventListener("resize",this.onResizeHandler.bind(this,e),!1),window.addEventListener("scroll",this.onScrollHandler.bind(this),!1),s.addEventListener("mousedown",this.onMouseDownHandler.bind(this),!1),s.addEventListener("mouseup",this.onMouseUpHandler.bind(this),!1),s.addEventListener("mousemove",this.onMouseMoveHandler.bind(this),!1),s.addEventListener("click",this.onClickHandler.bind(this),!1),t.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"getHighlightedText",value:function(e,t){return e.replace(t,"<span style='color:red;' >".concat(t,"</span>"))}},{key:"highlightSection",value:function(e){var t=this.props.searchQuery;return t?(e.querySelectorAll("p").forEach((function(e,n){e.textContent.toLowerCase().includes(t.toLowerCase())?e.style.backgroundColor="#ffff00":e.style.backgroundColor="transparent"})),e):e}},{key:"componentDidUpdate",value:function(){this.props.searchQuery;var e=document.getElementsByClassName("minimap")[0],t=document.getElementsByClassName("miniregion")[0];t.parentNode.removeChild(t),e.parentNode.removeChild(e);var n=document.getElementById(this.props.rootId),i=document.getElementsByClassName("minimap-treeview")[0],o=document.getElementsByClassName("minimap-container")[0],s=n.cloneNode(n);console.log("componentDidUpdate"),(s=this.highlightSection(s)).className="minimap noselect "+this.props.rootId;var a=document.createElement("div");a.className="miniregion",o.appendChild(a),i.appendChild(s);var r=document.getElementsByClassName("minimap")[0],l=document.createElement("div");l.className="minimap-overlay",r.appendChild(l),this.onResizeHandler(this),r.addEventListener("mousemove",this.onMouseMoveHandler.bind(this)),r.addEventListener("click",this.onClickHandler.bind(this),!1)}},{key:"onResizeHandler",value:function(e){console.log("onResizeHandler");var t=this.props,n=t.offsetHeightRatio,i=t.offsetWidthRatio,o=t.widthRatio,s=t.heightRatio;t.style,t.position;if(!t.toggle)return!1;var a=document.getElementsByClassName("minimap")[0];if("undefined"===typeof a)return!1;var r,l,c,d=document.getElementsByClassName("minimap-overlay")[0],m=document.getElementsByClassName("minimap-treeview")[0],u=this.scale(),h=document.documentElement.clientHeight*n,p=document.documentElement.clientWidth*i;r=document.documentElement.clientWidth*(1/u.x)*o,l=document.documentElement*(1/u.y)*s,a.clientHeight,u.y,a.clientWidth,u.x,c={width:r+"px",height:l+"px",margin:"0px",padding:"0px"},a&&a.style&&(console.log("INSIDE IF"),a.style.transform="scale(0.0807, 0.01063)",a.style["-webkit-transform"]="scale(0.0807, 0.01063)",a.style["-moz-transform"]="scale(0.0807, 0.01063)",a.style["-ms-transform"]="scale(0.0807, 0.01063)",a.style.width=c.width,a.style.height=c.height,a.style.margin=c.margin,a.style.padding=c.padding),d.style.setProperty("height",l+"px"),d.style.setProperty("width","475px"),m.style.setProperty("height",document.documentElement.clientHeight+"px"),m.style.setProperty("position","5px"),this._miniRegion(e)}},{key:"onScrollHandler",value:function(){console.log("onScrollHandler");var e=document.getElementsByClassName("minimap")[0];if("undefined"===typeof e)return!1;var t=document.getElementsByClassName("miniregion")[0],n=this.props.offsetHeightRatio;e=e.getBoundingClientRect();var i=this.scale(),o=window.innerHeight*n,s=e.top*i.y,a=window.pageYOffset*i.y,r=t.offsetHeight,l=e.offsetHeight*i.y+s;a+r+o<s||a>l?t.style.setProperty("display","none"):(t.style.setProperty("top",a+o-s+"px"),t.style.setProperty("display","block"))}},{key:"onClickHandler",value:function(e){console.log("onClickHandler"),this._scrollTop(e),this.setState({mousedown:!1})}},{key:"onMouseMoveHandler",value:function(e){if(console.log("onMouseMoveHandler"),!this.state.mousedown)return this.setState({mousedown:!1}),!1;this._scrollTop(e)}},{key:"onMouseDownHandler",value:function(e){console.log("onMouseDownHandler"),this.setState({mousedown:!0});var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.addClass(t,"dragging"),this.addClass(n,"noselect")}},{key:"onMouseUpHandler",value:function(e){console.log("onMouseUpHandler");var t=document.getElementsByClassName("miniregion")[0],n=document.getElementsByClassName("minimap")[0];this.removeClass(t,"dragging"),this.removeClass(n,"noselect"),this.setState({mousedown:!1})}},{key:"scale",value:function(){console.log("scale");var e=this.props,t=(e.widthRatio,e.heightRatio,document.getElementsByClassName("minimap")[0]),n=document.getElementById(this.props.rootId);if("undefined"===typeof t)return!1;if("undefined"===typeof n)return!1;if(t.offsetHeight<=7e3){return{x:document.getElementById(this.props.rootId).clientWidth/t.clientWidth*.07,y:document.getElementById(this.props.rootId).clientHeight/t.clientHeight*.1}}return{x:document.documentElement.clientWidth/t.clientWidth*.08,y:document.documentElement.clientHeight/t.clientHeight*.95}}},{key:"onScrollChecker",value:function(e){return console.log("onScrollChecker"),document.getElementById(e).scrollHeight>document.getElementById(e).clientHeight}},{key:"_mergeStyles",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))}},{key:"_miniRegion",value:function(){console.log("_miniRegion");var e=this.props,t=e.offsetHeightRatio,n=e.offsetWidthRatio,i=e.position,o=e.style,s=document.getElementsByClassName("minimap")[0];if("undefined"===typeof s)return!1;var a=s.getBoundingClientRect(),r=this.scale(),l=a.top*r.y,c=document.documentElement.clientWidth*n,d=document.getElementsByClassName("minimap-treeview")[0].clientWidth+5;({width:d+"px",height:window.innerHeight*r.y+"px",margin:"0px",top:window.pageYOffset*r.y+document.documentElement.clientHeight*t-l+"px",display:"block"})[i]=c+"px",console.log("style",o);var m=document.getElementsByClassName("miniregion")[0];m.style.setProperty("width",d+"px"),m.style.setProperty("height",window.innerHeight*r.y+"px"),m.style.setProperty("margin","0px"),m.style.setProperty("top",window.pageYOffset*r.y+document.documentElement.clientHeight*t-l+"px"),m.style.setProperty("display","block"),m.style.setProperty("position",c+"px"),m.style.setProperty("right",c+"5px")}},{key:"_scrollTop",value:function(e){console.log("_scrollTop");var t=this.props,n=t.offsetHeightRatio,i=t.toggle,o=t.smoothScrollDelay,s=t.smoothScroll;if(!i)return!1;var a=document.getElementsByClassName("minimap")[0].getBoundingClientRect(),r=this.scale(),l=document.documentElement.clientHeight*n,c=a.top*r.y,d=document.getElementsByClassName("miniregion")[0].offsetHeight,m=(e.clientY-d/2-l+c)/r.y;if("click"===e.type&&s){var u=window.pageYOffset,h=document.getElementsByClassName("minimap")[0].offsetHeight,p=(m=Math.max(m,Math.min(m,h)))>u,g=o,f=Math.abs(u-m),y=g/f,v=1,b=4;y>=4?b=parseInt(v,15):v=y>=1?4*parseInt(y,15):parseInt(4/y,15);var j=u,A=parseInt(f/v,8),w=window.setInterval((function(){j+=p?v:-v,--A<=0&&(clearInterval(w),j=m),window.scrollTo(0,j)}),b)}else window.scrollTo(0,m);e.stopPropagation()}},{key:"addClass",value:function(e,t){e.className?e.classList.add(t):this.hasClass(e,t)||(e.className+=" "+t)}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\b"+t+"(\\b)"))}},{key:"removeClass",value:function(e,t){if(e.classList)e.classList.remove(t);else if(this.hasClass(e,t)){var n=new RegExp("(\\b"+t+"(\\b)");e.className=e.className.replace(n," ")}}},{key:"render",value:function(){return Object(y.jsx)("div",{})}}]),n}(i.Component);j.defaultProps={heightRatio:.95,widthRatio:.05,offsetHeightRatio:.01,offsetWidthRatio:.002,position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0};var A=j,w=function(e){var t=e.contentToHighlight,n=e.submitForm,o=e.showMinimap,s=Object(i.useState)(o),a=Object(f.a)(s,2),r=a[0],l=a[1],c=function(){l(!0)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){c()}),!1),window.addEventListener("scroll",Object(b.debounce)((function(){l(!1)}),5e3)),function(){return window.removeEventListener("scroll",c)}}),[]),Object(y.jsx)("div",{children:r&&Object(y.jsx)("div",{className:"minimap-container",id:"tests",children:Object(y.jsx)(A,{rootId:"root",position:"right",smoothScroll:!0,smoothScrollDelay:200,toggle:!0,contentToHighlight:t,searchQuery:n})})})},C=(n(36),function(){var e=[];e.push('here<div style="background-color: green;">Green text goes here</div>here');var t=Object(u.f)(),n=Object(i.useState)([]),o=Object(f.a)(n,2),s=o[0],a=o[1],r=Object(i.useState)(!1),l=Object(f.a)(r,2),c=(l[0],l[1],Object(i.useState)()),d=Object(f.a)(c,2),m=(d[0],d[1],Object(i.useState)("")),h=Object(f.a)(m,2),b=h[0],j=h[1],A=Object(i.useState)(),C=Object(f.a)(A,2),x=C[0],E=C[1],O=Object(i.useState)(!1),N=Object(f.a)(O,2),k=N[0],H=N[1];function B(){return R.apply(this,arguments)}function R(){return(R=Object(g.a)(p.a.mark((function e(){var n,i,o,s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t.search),i=n.get("query"),o=i&&i.substring(i.lastIndexOf("/")+1),e.next=5,fetch("https://en.m.wikipedia.org/w/rest.php/v1/page/".concat(o,"/html"));case 5:return s=e.sent,e.next=8,s.text();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]);return Object(i.useEffect)((function(){var e=setTimeout((function(){E(b),b&&b.length&&H(!0)}),1e3);return function(){return clearTimeout(e)}}),[b]),Object(y.jsxs)("div",{className:"page-section",children:[Object(y.jsx)("input",{placeholder:"Enter search query",className:"search-query",type:"text",name:"name",value:b,onChange:function(e){j(e.target.value)}}),Object(y.jsx)("hr",{}),Object(y.jsx)(v,{contents:s}),Object(y.jsx)(w,{contentToHighlight:e,submitForm:x,showMinimap:k})]})}),x=(n(41),function(){return Object(y.jsx)(o.a.Fragment,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:"Home Page of Mettle Works (Under Progress)"}),Object(y.jsxs)("h4",{children:["Click ",Object(y.jsx)(m.b,{to:"/details?query=https://en.m.wikipedia.org/wiki/seattle",children:"here"})," to redirect to Details page"]})]})})}),E=function(){return Object(y.jsxs)(m.a,{children:[Object(y.jsx)(u.c,{children:Object(y.jsx)(u.a,{exact:!0,path:"/",component:x})}),Object(y.jsx)(u.c,{children:Object(y.jsx)(u.a,{exact:!0,path:"/details",component:C})})]})},O=(n(42),n(43),function(){return Object(y.jsx)(o.a.Fragment,{children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"menu-bar",children:Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAGwAAAADVx3bDAAABBUlEQVRIDe2UwWrCQBCGZzZptEHxoCBsoGLfRHyBPmT1FXwAvUuP9dRCExoaeiokGjPbPYjC5JCMB/Gwe9mZ4Z/Z5efbBXDLOXAvDiC/SNTvD/1OJ+B1Sf6ZZb9Wv+c9PisofzB4UehNWV2QktFavyZJ8s6b+GFUEm26Bt+4sH1+hLwovtvrnVLoQI3GZ62fCCAUzjnLDzaycHzZ7e9cPAUcEAXgzT1PXU1jF9FEo2gRZ/Gu6TA6KLP26bjlQkmeZ7GjUWKYTFujcTKeTCuoerIxFzVCaYo0/fhpRWNAswe4/m9EVFRpvbT8N/+NkOerKgwfL3eVRWjRt+8slXU5tXPg1g78Aw5rSQg3SrIBAAAAAElFTkSuQmCC",alt:"menu",height:"36px",width:"36px"})}),Object(y.jsx)("div",{className:"icon-brand",children:"MettleWorks"})]})})}),N=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(O,{}),Object(y.jsx)(E,{})]})}}]),n}(i.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),s(e),a(e)}))};a.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(N,{})}),document.getElementById("root")),k()}},[[44,1,2]]]);
//# sourceMappingURL=main.9a64017a.chunk.js.map