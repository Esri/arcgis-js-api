// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./ViewOverlayItem","maquette"],function(t,e,r,o,i,s,p,n){var a={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.x=0,e.y=0,e.text="-",e.fontSize=14,e.anchor="center",e.visible=!0,e}return r(e,t),Object.defineProperty(e.prototype,"position",{get:function(){return[this.x,this.y]},set:function(t){this._set("x",t[0]),this._set("y",t[1])},enumerable:!0,configurable:!0}),e.prototype.render=function(){return n.h("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px"}},[this.text])},e.prototype._cssClasses=function(){var t={"esri-text-overlay-item":!0};for(var e in a)t[a[e]]=this.anchor===e;return t},o([s.property()],e.prototype,"x",void 0),o([s.property()],e.prototype,"y",void 0),o([s.property({dependsOn:["x","y"]})],e.prototype,"position",null),o([s.property()],e.prototype,"text",void 0),o([s.property()],e.prototype,"fontSize",void 0),o([s.property()],e.prototype,"anchor",void 0),o([s.property()],e.prototype,"visible",void 0),e=o([s.subclass("esri.views.overlay.TextOverlayItem")],e)}(s.declared(i,p))});