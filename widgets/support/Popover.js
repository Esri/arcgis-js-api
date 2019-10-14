// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/domUtils","../../core/accessorSupport/decorators","../Widget","./widget"],function(e,t,o,r,n,i,p,l){var d=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],s={base:"esri-popover",open:"esri-popover--open"},c={position:"absolute",top:"",left:"","z-index":""};return function(e){function t(t){var o=e.call(this)||this;return o.anchorElement=null,o.open=!1,o.renderContentFunction=null,o._afterRootCreate=function(e){o._rootNode=e,o._updatePosition(e)},o._updatePosition=function(e){var t=o,r=t.open,n=t.renderContentFunction;if(!r||!n)return e.style.top=c.top,e.style.left=c.left,void(e.style.zIndex=c["z-index"]);var i=o._getAnchor();if(i){var p,l,d=o.placement,s=i.getBoundingClientRect(),a=s.left,u=s.height,f=s.width,h=s.top,y=e.getBoundingClientRect(),m=y.height,b=y.width,g=document.scrollingElement||document.documentElement,v=g.scrollLeft,x=g.scrollTop,_=document.documentElement,C=_.offsetHeight,w=_.offsetWidth;d.indexOf("top")>-1&&(l=h-m,p="top-start"===d?a:"top-end"===d?a+f-b:a+f/2-b/2),d.indexOf("bottom")>-1&&(l=h+u,p="bottom-start"===d?a:"bottom-end"===d?a+f-b:a+f/2-b/2),d.indexOf("left")>-1&&(p=a-b,l="left-start"===d?h:"left-end"===d?h+u-m:h+u/2-m/2),d.indexOf("right")>-1&&(p=a+f,l="right-start"===d?h:"right-end"===d?h+u-m:h+u/2-m/2),p<0?p=a:p+b>w&&(p=a-b),l<0?l=h+u:l+m>C&&(l=h-m),e.style.top=l+x+"px",e.style.left=p+v+"px",e.style.zIndex="1000"}},o}return o(t,e),t.prototype.initialize=function(){this._projector.append(document.body,this.render)},t.prototype.destroy=function(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._projector.detach(this.render),n.remove(this._rootNode)},Object.defineProperty(t.prototype,"container",{set:function(e){},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"owner",{set:function(e){this._set("owner",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"placement",{get:function(){return"top"},set:function(e){if(-1===d.indexOf(e))return void this._clearOverride("placement");this._override("placement",e)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=e.open,o=e.owner,r=e.renderContentFunction;return l.tsx("div",{class:this.classes(s.base,t?s.open:null),styles:c,afterCreate:this._afterRootCreate,afterUpdate:this._updatePosition},t&&r&&r.call(o))},t.prototype._getAnchor=function(){var e=this.anchorElement;return n.byId("function"==typeof e?e():e)},r([i.property(),l.renderable()],t.prototype,"anchorElement",void 0),r([i.property()],t.prototype,"container",null),r([i.property(),l.renderable()],t.prototype,"open",void 0),r([i.property(),l.renderable()],t.prototype,"owner",null),r([i.property(),l.renderable()],t.prototype,"placement",null),r([i.property(),l.renderable()],t.prototype,"renderContentFunction",void 0),t=r([i.subclass("esri.widgets.support.Popover")],t)}(i.declared(p))});