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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/domUtils","../../core/accessorSupport/decorators","../Widget","./widget"],function(e,t,o,r,n,i,p,l){var s=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],a={base:"esri-popover",open:"esri-popover--open"},d={position:"absolute",top:"-9999px",left:9999*(l.isRTL()?1:-1)+"px","z-index":""};return function(e){function t(t){var o=e.call(this,t)||this;return o.anchorElement=null,o.open=!1,o.renderContentFunction=null,o._afterRootCreate=function(e){o._rootNode=e,o._updatePosition(e)},o._updatePosition=function(e){var t=o,r=t.open,n=t.renderContentFunction;if(!r||!n)return e.style.top=d.top,e.style.left=d.left,void(e.style.zIndex=d["z-index"]);var i=o._getAnchor();if(i){var p,l,s=o.placement,a=i.getBoundingClientRect(),c=a.left,f=a.height,u=a.width,h=a.top,m=e.firstElementChild,y=getComputedStyle(m),g=parseInt(y.marginTop,10)+parseInt(y.marginBottom,10),b=parseInt(y.marginLeft,10)+parseInt(y.marginRight,10),v=m.offsetHeight+g,x=m.offsetWidth+b,_=document.scrollingElement||document.documentElement,C=_.scrollLeft,E=_.scrollTop,O=document.documentElement,w=O.offsetHeight,I=O.offsetWidth;if(s.indexOf("top")>-1&&(l=h-v,p="top-start"===s?c:"top-end"===s?c+u-x:c+u/2-x/2),s.indexOf("bottom")>-1&&(l=h+f,p="bottom-start"===s?c:"bottom-end"===s?c+u-x:c+u/2-x/2),s.indexOf("left")>-1&&(p=c-x,l="left-start"===s?h:"left-end"===s?h+f-v:h+f/2-v/2),s.indexOf("right")>-1&&(p=c+u,l="right-start"===s?h:"right-end"===s?h+f-v:h+f/2-v/2),p<0)p=c;else if(p+x>I){var P=p+x-I;p-=P}if(l<0)l=h+f;else if(l+v>w){var P=l+v-w;l-=P}e.style.top=l+E+"px",e.style.left=p+C+"px",e.style.zIndex="1000"}},o}return o(t,e),t.prototype.initialize=function(){this._projector.append(document.body,this.render)},t.prototype.destroy=function(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._projector.detach(this.render),n.remove(this._rootNode)},Object.defineProperty(t.prototype,"container",{set:function(e){},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"owner",{set:function(e){this._set("owner",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"placement",{get:function(){return"top"},set:function(e){if(-1===s.indexOf(e))return void this._clearOverride("placement");this._override("placement",e)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=e.open,o=e.owner,r=e.renderContentFunction;return l.tsx("div",{class:this.classes(a.base,t?a.open:null),styles:d,afterCreate:this._afterRootCreate,afterUpdate:this._updatePosition},t&&r&&r.call(o))},t.prototype._getAnchor=function(){var e=this.anchorElement;return n.byId("function"==typeof e?e():e)},r([i.property(),l.renderable()],t.prototype,"anchorElement",void 0),r([i.property()],t.prototype,"container",null),r([i.property(),l.renderable()],t.prototype,"open",void 0),r([i.property(),l.renderable()],t.prototype,"owner",null),r([i.property(),l.renderable()],t.prototype,"placement",null),r([i.property(),l.renderable()],t.prototype,"renderContentFunction",void 0),t=r([i.subclass("esri.widgets.support.Popover")],t)}(i.declared(p))});