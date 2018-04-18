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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","dojo/_base/lang","./geometry","./PopupTemplate","./core/JSONSupport","./core/lang","./core/accessorSupport/decorators","./geometry/support/typeUtils","./symbols/support/jsonUtils","./symbols/support/typeUtils"],function(t,e,r,o,p,i,s,l,u,a,n,y,b){var c=0;return function(t){function e(e,r,o,p){var i=t.call(this,e,r,o,p)||this;return i.layer=null,i.sourceLayer=null,Object.defineProperty(i,"uid",{value:c++}),i}return r(e,t),l=e,e.prototype.normalizeCtorArgs=function(t,e,r,o){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:r,popupTemplate:o}},Object.defineProperty(e.prototype,"attributes",{set:function(t){var e=this._get("attributes");e!==t&&(this._set("attributes",t),this._notifyLayer("attributes",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"geometry",{set:function(t){var e=this._get("geometry");e!==t&&(this._set("geometry",t),this._notifyLayer("geometry",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"popupTemplate",{get:function(){return this.get("sourceLayer.popupTemplate")||null},set:function(t){if(void 0===t)return void this._clearOverride("popupTemplate");this._override("popupTemplate",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"symbol",{set:function(t){var e=this._get("symbol");e!==t&&(this._set("symbol",t),this._notifyLayer("symbol",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){var e=this._get("visible");e!==t&&(this._set("visible",t),this._notifyLayer("visible",e,t))},enumerable:!0,configurable:!0}),e.prototype.getAttribute=function(t){return this.attributes&&this.attributes[t]},e.prototype.setAttribute=function(t,e){if(this.attributes){var r=this.getAttribute(t);this.attributes[t]=e,this._notifyLayer("attributes",r,e,t)}else this.attributes=(o={},o[t]=e,o),this._notifyLayer("attributes",void 0,e,t);var o},e.prototype.toJSON=function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:p.mixin({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},e.prototype.clone=function(){return new l({attributes:u.clone(this.attributes),geometry:this.geometry&&this.geometry.clone()||null,layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})},e.prototype._notifyLayer=function(t,e,r,o){if(this.layer){var p={graphic:this,property:t,oldValue:e,newValue:r};o&&(p.attributeName=o),this.layer.graphicChanged(p)}},o([a.property({value:null})],e.prototype,"attributes",null),o([a.property({value:null,types:n.types,json:{read:i.fromJSON}})],e.prototype,"geometry",null),o([a.property()],e.prototype,"layer",void 0),o([a.property({dependsOn:["sourceLayer.popupTemplate"],type:s})],e.prototype,"popupTemplate",null),o([a.property()],e.prototype,"sourceLayer",void 0),o([a.property({value:null,types:b.types,json:{read:y.read}})],e.prototype,"symbol",null),o([a.property({value:!0,set:function(t){}})],e.prototype,"visible",null),e=l=o([a.subclass("esri.Graphic")],e);var l}(a.declared(l))});