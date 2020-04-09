// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/domUtils","../../core/accessorSupport/decorators","../Widget","./widget"],(function(e,t,o,r,n,i,p,l){var s=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],d="esri-popover",a="esri-popover--open",c={position:"absolute",top:"-9999px",left:9999*(l.isRTL()?1:-1)+"px","z-index":""};return function(e){function t(t){var o=e.call(this,t)||this;return o.anchorElement=null,o.open=!1,o.renderContentFunction=null,o._afterRootCreate=function(e){o._rootNode=e,o._updatePosition(e)},o._updatePosition=function(e){var t=o,r=t.open,n=t.renderContentFunction;if(!r||!n)return e.style.top=c.top,e.style.left=c.left,void(e.style.zIndex=c["z-index"]);var i=o._getAnchor();if(i){var p,l,s=o.placement,d=i.getBoundingClientRect(),a=d.left,u=d.height,f=d.width,h=d.top,m=e.firstElementChild,y=getComputedStyle(m),g=parseInt(y.marginTop,10)+parseInt(y.marginBottom,10),b=parseInt(y.marginLeft,10)+parseInt(y.marginRight,10),v=m.offsetHeight+g,x=m.offsetWidth+b;s.indexOf("top")>-1&&(l=h-v,p="top-start"===s?a:"top-end"===s?a+f-x:a+f/2-x/2),s.indexOf("bottom")>-1&&(l=h+u,p="bottom-start"===s?a:"bottom-end"===s?a+f-x:a+f/2-x/2),s.indexOf("left")>-1&&(p=a-x,l="left-start"===s?h:"left-end"===s?h+u-v:h+u/2-v/2),s.indexOf("right")>-1&&(p=a+f,l="right-start"===s?h:"right-end"===s?h+u-v:h+u/2-v/2);var _=document.documentElement,C=_.clientWidth,E=_.clientHeight;if(p<0)p=a;else if(p+x>C){p-=p+x-C}if(l<0)l=h+u;else if(l+v>E){l-=l+v-E}var O=document.scrollingElement||document.documentElement,w=O.scrollLeft,I=O.scrollTop;e.style.top=l+I+"px",e.style.left=p+w+"px",e.style.zIndex="1000"}},o}return o(t,e),t.prototype.initialize=function(){this._projector.append(document.body,this.render)},t.prototype.destroy=function(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._projector.detach(this.render),n.remove(this._rootNode)},Object.defineProperty(t.prototype,"container",{set:function(e){},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"owner",{set:function(e){this._set("owner",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"placement",{get:function(){return"top"},set:function(e){-1!==s.indexOf(e)?this._override("placement",e):this._clearOverride("placement")},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.open,t=this.owner,o=this.renderContentFunction;return l.tsx("div",{class:this.classes(d,e?a:null),styles:c,afterCreate:this._afterRootCreate,afterUpdate:this._updatePosition},e&&o&&o.call(t))},t.prototype._getAnchor=function(){var e=this.anchorElement;return n.byId("function"==typeof e?e():e)},r([i.property(),l.renderable()],t.prototype,"anchorElement",void 0),r([i.property()],t.prototype,"container",null),r([i.property(),l.renderable()],t.prototype,"open",void 0),r([i.property(),l.renderable()],t.prototype,"owner",null),r([i.property(),l.renderable()],t.prototype,"placement",null),r([i.property(),l.renderable()],t.prototype,"renderContentFunction",void 0),t=r([i.subclass("esri.widgets.support.Popover")],t)}(i.declared(p))}));