(this["webpackJsonpmettle-works"]=this["webpackJsonpmettle-works"]||[]).push([[0],{30:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),c=n(24),i=n.n(c),r=(n(30),n(12)),a=n(13),l=n(15),d=n(14),u=n(10),m=n(2),h=n(11),p=n.n(h),f=n(19),v=n(7),g=n(1),j=function(e){var t=e.contents;return Object(g.jsx)("div",{className:"page-container",children:Object(g.jsx)("div",{id:"root",className:"App",children:Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:"mw-content-ltr sitedir-ltr ltr mw-body-content parsoid-body mediawiki mw-parser-output"})})})},A=(n(33),n(34),n(18)),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={mousedown:!1},o}return Object(a.a)(n,[{key:"componentWillMount",value:function(){console.log("componentWillMount");var e=document.getElementsByClassName("slider")[0],t=document.getElementsByClassName("slider__controller")[0];"undefined"!==typeof e&&null!==e&&e.parentNode.removeChild(e),"undefined"!==typeof t&&null!==t&&t.parentNode.removeChild(t)}},{key:"componentDidMount",value:function(){console.log("componentDidUpdate");var e=document,t=(document.documentElement,e.body),n=window,o=e.createElement("div"),s=e.createElement("div"),c=e.createElement("div"),i=e.createElement("div"),r=.1;o.className="slider",s.className="slider__size",c.className="slider__controller",i.className+=" slider__content",i.style.transformOrigin="0 0",o.appendChild(s),o.appendChild(c),o.appendChild(i),t.appendChild(o);this.props.rootId;console.log("componentDidMount");var a=document.getElementById(this.props.rootId).cloneNode(!0);a.className="minimap noselect "+this.props.rootId,i.appendChild(a),this.getDimensions(),n.addEventListener("resize",this.getDimensions()),n.addEventListener("load",this.getDimensions()),n.addEventListener("scroll",(function(){c.style.transform="translate("+n.pageXOffset*r+"px, "+n.pageYOffset*r+"px)"}));var l=0,d=0,u=!1;function m(e){e.preventDefault(),u=!0,d=e.touches?e.touches[0].clientX:e.clientX,l=e.touches?e.touches[0].clientY:e.clientY;var t=(d-o.offsetLeft-c.clientWidth/2)/r,s=(l-o.offsetTop-c.clientHeight/2)/r;n.scrollTo(t,s)}function h(e){if(u){e.preventDefault();var t=e.touches?e.touches[0].clientX:e.clientX,o=e.touches?e.touches[0].clientY:e.clientY;n.scrollBy((t-d)/r,(o-l)/r),d=t,l=o}}function p(e){u=!1}function f(e){e.target===t&&(u=!1)}o.addEventListener("mousedown",m),o.addEventListener("touchdown",m),n.addEventListener("mousemove",h),n.addEventListener("touchmove",h),n.addEventListener("mouseup",p),n.addEventListener("touchend",p),t.addEventListener("mouseleave",f),t.addEventListener("touchleave",f)}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate");var e=document.getElementsByClassName("minimap")[0],t=document.getElementsByClassName("slider__controller")[0];t.parentNode.removeChild(t),e.parentNode.removeChild(e);this.props.rootId;console.log("componentDidMount");var n=document,o=(document.documentElement,n.body),s=window,c=.1,i=document.getElementById(this.props.rootId),r=document.getElementByClass("slider__controller")[0],a=document.getElementsByClassName("slider__content")[0],l=document.getElementsByClassName("slider")[0],d=(document.getElementsByClassName("slider__size")[0],i.cloneNode(!0));d.className="minimap noselect "+this.props.rootId,a.appendChild(d),this.getDimensions(),s.addEventListener("resize",this.getDimensions()),s.addEventListener("load",this.getDimensions()),s.addEventListener("scroll",(function(){r.style.transform="translate("+s.pageXOffset*c+"px, "+s.pageYOffset*c+"px)"}));var u=0,m=0,h=!1;function p(e){e.preventDefault(),h=!0,m=e.touches?e.touches[0].clientX:e.clientX,u=e.touches?e.touches[0].clientY:e.clientY;var t=(m-l.offsetLeft-r.clientWidth/2)/c,n=(u-l.offsetTop-r.clientHeight/2)/c;s.scrollTo(t,n)}function f(e){if(h){e.preventDefault();var t=e.touches?e.touches[0].clientX:e.clientX,n=e.touches?e.touches[0].clientY:e.clientY;s.scrollBy((t-m)/c,(n-u)/c),m=t,u=n}}function v(e){h=!1}function g(e){e.target===o&&(h=!1)}l.addEventListener("mousedown",p),l.addEventListener("touchdown",p),s.addEventListener("mousemove",f),s.addEventListener("touchmove",f),s.addEventListener("mouseup",v),s.addEventListener("touchend",v),o.addEventListener("mouseleave",g),o.addEventListener("touchleave",g)}},{key:"getDimensions",value:function(){var e=this.props.rootId,t=document.getElementById(this.props.rootId);if("undefined"===typeof t&&null===t)return!1;var n=document.getElementsByClassName("minimap")[0];if("undefined"===typeof n)return!1;if("undefined"===typeof n)return!1;var o,s=document.getElementsByClassName("slider__content")[0],c=document.getElementsByClassName("slider")[0],i=document.getElementsByClassName("slider__size")[0],r=document.getElementsByClassName("slider__controller")[0],a=document,l=(document.documentElement,a.body),d=window,u=l.clientWidth,m=l.clientHeight,h=l.clientHeight/u,p=d.innerHeight/d.innerWidth,f=.1;c.style.height=document.documentElement.clientHeight+"px",c.style.position="5px",o=c.clientWidth/u,c.clientHeight,i.style.paddingTop=100*h+"%",r.style.paddingTop=100*p+"%";var v,g,j=document.getElementsByClassName("minimap")[0];if(console.log("clientHeight",document.documentElement.clientHeight),j.offsetHeight<=7e3){({x:document.getElementById(e).clientWidth/j.clientWidth*.07,y:document.getElementById(e).clientHeight/j.clientHeight*.1})}else{({x:document.documentElement.clientWidth/j.clientWidth*.08,y:document.documentElement.clientHeight/j.clientHeight*.95})}v=document.documentElement.clientWidth*(1/f.x)*.08,g=document.documentElement*(1/f.y)*.95,n.style.width=v+"px",n.style.height=g+"px",n.style.margin="0px",n.style.padding="0px",s.style.width=100/o+"%",s.style.height=100/o+"%"}},{key:"render",value:function(){return Object(g.jsx)("div",{})}}]),n}(o.Component),E=function(e){e.contentToHighlight,e.submitForm;var t=e.showMinimap,n=Object(o.useState)(t),s=Object(v.a)(n,2),c=s[0],i=s[1],r=function(){i(!0)};return Object(o.useEffect)((function(){return window.addEventListener("scroll",(function(){r()}),!1),window.addEventListener("scroll",Object(A.debounce)((function(){i(!1)}),5e3)),function(){return window.removeEventListener("scroll",r)}}),[]),Object(g.jsx)("div",{children:c&&Object(g.jsx)("div",{className:"minimap-container",id:"tests",children:Object(g.jsx)(b,{rootId:"root"})})})},O=(n(36),function(){var e=[];e.push('here<div style="background-color: green;">Green text goes here</div>here');var t=Object(m.f)(),n=Object(o.useState)([]),s=Object(v.a)(n,2),c=s[0],i=s[1],r=Object(o.useState)(!1),a=Object(v.a)(r,2),l=(a[0],a[1],Object(o.useState)()),d=Object(v.a)(l,2),u=(d[0],d[1],Object(o.useState)("")),h=Object(v.a)(u,2),A=h[0],b=h[1],O=Object(o.useState)(),y=Object(v.a)(O,2),x=y[0],w=y[1],C=Object(o.useState)(!1),N=Object(v.a)(C,2),B=N[0],L=N[1];function D(){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(p.a.mark((function e(){var n,o,s,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t.search),o=n.get("query"),s=o&&o.substring(o.lastIndexOf("/")+1),e.next=5,fetch("https://en.m.wikipedia.org/w/rest.php/v1/page/".concat(s,"/html"));case 5:return c=e.sent,e.next=8,c.text();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:t=e.sent,i(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(o.useEffect)((function(){!function(){_.apply(this,arguments)}()}),[]);return Object(o.useEffect)((function(){var e=setTimeout((function(){w(A),A&&A.length&&L(!0)}),1e3);return function(){return clearTimeout(e)}}),[A]),Object(g.jsxs)("div",{className:"page-section",children:[Object(g.jsx)("input",{placeholder:"Enter search query",className:"search-query",type:"text",name:"name",value:A,onChange:function(e){b(e.target.value)}}),Object(g.jsx)("hr",{}),Object(g.jsx)(j,{contents:c}),Object(g.jsx)(E,{contentToHighlight:e,submitForm:x,showMinimap:B})]})}),y=(n(41),function(){return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Home Page of Mettle Works (Under Progress)"}),Object(g.jsxs)("h4",{children:["Click ",Object(g.jsx)(u.b,{to:"/details?query=https://en.m.wikipedia.org/wiki/seattle",children:"here"})," to redirect to Details page"]})]})})}),x=function(){return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(m.c,{children:Object(g.jsx)(m.a,{exact:!0,path:"/",component:y})}),Object(g.jsx)(m.c,{children:Object(g.jsx)(m.a,{exact:!0,path:"/details",component:O})})]})},w=(n(42),n(43),function(){return Object(g.jsx)(s.a.Fragment,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"menu-bar",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAG6ADAAQAAAABAAAAGwAAAADVx3bDAAABBUlEQVRIDe2UwWrCQBCGZzZptEHxoCBsoGLfRHyBPmT1FXwAvUuP9dRCExoaeiokGjPbPYjC5JCMB/Gwe9mZ4Z/Z5efbBXDLOXAvDiC/SNTvD/1OJ+B1Sf6ZZb9Wv+c9PisofzB4UehNWV2QktFavyZJ8s6b+GFUEm26Bt+4sH1+hLwovtvrnVLoQI3GZ62fCCAUzjnLDzaycHzZ7e9cPAUcEAXgzT1PXU1jF9FEo2gRZ/Gu6TA6KLP26bjlQkmeZ7GjUWKYTFujcTKeTCuoerIxFzVCaYo0/fhpRWNAswe4/m9EVFRpvbT8N/+NkOerKgwfL3eVRWjRt+8slXU5tXPg1g78Aw5rSQg3SrIBAAAAAElFTkSuQmCC",alt:"menu",height:"36px",width:"36px"})}),Object(g.jsx)("div",{className:"icon-brand",children:"MettleWorks"})]})})}),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(w,{}),Object(g.jsx)(x,{})]})}}]),n}(o.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.3e909d22.chunk.js.map