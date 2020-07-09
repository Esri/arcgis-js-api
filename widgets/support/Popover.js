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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/domUtils","../../core/accessorSupport/decorators","../../libs/popper/index","../Widget","./widget"],(function(e,t,o,r,n,i,p,s){var d=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],a="esri-popover",c="esri-popover--open",l={position:"absolute",top:"-9999px",left:9999*(s.isRTL()?1:-1)+"px","z-index":""};return function(e){function t(t,o){var r=e.call(this,t,o)||this;return r._renderAttached=!1,r.anchorElement=null,r.offset=[0,0],r.open=!1,r.renderContentFunction=null,r._afterRootCreate=function(e){r._rootNode=e,r._updatePosition(e)},r._updatePosition=function(e){var t=r,o=t.open,n=t.renderContentFunction;if(o&&n){var p=r._getAnchor();if(p){var s=r,d=s.offset,a=s.placement,c=e.firstElementChild;r.popper=i.createPopper(p,c,{placement:a,modifiers:[{name:"offset",options:{offset:d}}]}),e.style.zIndex="1000"}}else e.style.zIndex=l["z-index"]},r}return o.__extends(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e._projector.append(document.body,e.render),e._renderAttached=!0}))},t.prototype.destroy=function(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._renderAttached&&(this._projector.detach(this.render),this._renderAttached=!1),this._rootNode&&(r.remove(this._rootNode),this._rootNode=null),this.popper&&this.popper.destroy()},Object.defineProperty(t.prototype,"container",{set:function(e){},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"owner",{set:function(e){this._set("owner",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"placement",{get:function(){return"top"},set:function(e){-1!==d.indexOf(e)?this._override("placement",e):this._clearOverride("placement")},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.open,t=this.owner,o=this.renderContentFunction;return s.tsx("div",{class:this.classes(a,e?c:null),styles:l,afterCreate:this._afterRootCreate,afterUpdate:this._updatePosition},e&&o&&o.call(t))},t.prototype._getAnchor=function(){var e=this.anchorElement;return r.byId("function"==typeof e?e():e)},o.__decorate([n.property(),s.renderable()],t.prototype,"anchorElement",void 0),o.__decorate([n.property()],t.prototype,"container",null),o.__decorate([n.property(),s.renderable()],t.prototype,"offset",void 0),o.__decorate([n.property(),s.renderable()],t.prototype,"open",void 0),o.__decorate([n.property(),s.renderable()],t.prototype,"owner",null),o.__decorate([n.property(),s.renderable()],t.prototype,"placement",null),o.__decorate([n.property(),s.renderable()],t.prototype,"renderContentFunction",void 0),t=o.__decorate([n.subclass("esri.widgets.support.Popover")],t)}(p)}));