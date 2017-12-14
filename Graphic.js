// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/accessorSupport/decorators","dojo/_base/lang","./core/lang","./core/JSONSupport","./PopupTemplate","./symbols/support/typeUtils","./symbols/support/jsonUtils","./geometry","./geometry/support/typeUtils"],function(t,e,r,o,p,i,s,l,u,a,n,y,b){var m=0,c=function(t){function e(e,r,o,p){var i=t.call(this,e,r,o,p)||this;return i.layer=null,Object.defineProperty(i,"uid",{value:m++}),i}return r(e,t),l=e,e.prototype.normalizeCtorArgs=function(t,e,r,o){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:r,popupTemplate:o}},Object.defineProperty(e.prototype,"attributes",{set:function(t){var e=this._get("attributes");e!==t&&(this._set("attributes",t),this._notifyLayer("attributes",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"geometry",{set:function(t){var e=this._get("geometry");e!==t&&(this._set("geometry",t),this._notifyLayer("geometry",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"popupTemplate",{get:function(){return this.get("layer.popupTemplate")||null},set:function(t){return void 0===t?void this._clearOverride("popupTemplate"):void this._override("popupTemplate",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"symbol",{set:function(t){var e=this._get("symbol");e!==t&&(this._set("symbol",t),this._notifyLayer("symbol",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){var e=this._get("visible");e!==t&&(this._set("visible",t),this._notifyLayer("visible",e,t))},enumerable:!0,configurable:!0}),e.prototype.getAttribute=function(t){return this.attributes&&this.attributes[t]},e.prototype.setAttribute=function(t,e){var r=this.attributes;if(r){var o=this.getAttribute(t);this.attributes[t]=e,this._notifyLayer("attributes",o,e,t)}else this.attributes=(p={},p[t]=e,p),this._notifyLayer("attributes",void 0,e,t);var p},e.prototype.toJSON=function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:i.mixin({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},e.prototype.clone=function(){return new l({attributes:s.clone(this.attributes),geometry:this.geometry&&this.geometry.clone()||null,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})},e.prototype._notifyLayer=function(t,e,r,o){if(this.layer){var p={graphic:this,property:t,oldValue:e,newValue:r};o&&(p.attributeName=o),this.layer.graphicChanged(p)}},o([p.property({value:null})],e.prototype,"attributes",null),o([p.property({value:null,types:b.types,json:{read:y.fromJSON}})],e.prototype,"geometry",null),o([p.property()],e.prototype,"layer",void 0),o([p.property({dependsOn:["layer.popupTemplate"],type:u})],e.prototype,"popupTemplate",null),o([p.property({value:null,types:a.types,json:{read:n.read}})],e.prototype,"symbol",null),o([p.property({value:!0,set:function(t){}})],e.prototype,"visible",null),e=l=o([p.subclass("esri.Graphic")],e);var l}(p.declared(l));return c});