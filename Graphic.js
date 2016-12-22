// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/accessorSupport/decorators","dojo/_base/lang","./core/lang","./core/JSONSupport","./PopupTemplate","./geometry/support/jsonUtils","./symbols/support/jsonUtils"],function(t,e,r,o,i,p,s,l,u,a,n){var y=0,b=function(t){function e(e,r,o,i){t.call(this,e,r,o,i),this.layer=null,this.popupTemplate=null,Object.defineProperty(this,"uid",{value:y++})}return r(e,t),e.prototype.normalizeCtorArgs=function(t,e,r,o){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:r,popupTemplate:o}},Object.defineProperty(e.prototype,"attributes",{set:function(t){var e=this._get("attributes");e!==t&&(this._set("attributes",t),this._notifyLayer("attributes",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"geometry",{set:function(t){var e=this._get("geometry");e!==t&&(this._set("geometry",t),this._notifyLayer("geometry",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"symbol",{set:function(t){var e=this._get("symbol");e!==t&&(this._set("symbol",t),this._notifyLayer("symbol",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){var e=this._get("visible");e!==t&&(this._set("visible",t),this._notifyLayer("visible",e,t))},enumerable:!0,configurable:!0}),e.prototype.getAttribute=function(t){return this.attributes&&this.attributes[t]},e.prototype.setAttribute=function(t,e){var r=this.attributes;if(r){var o=this.getAttribute(t);this.attributes[t]=e,this._notifyLayer("attributes",o,e,t)}else this.attributes=(i={},i[t]=e,i),this._notifyLayer("attributes",void 0,e,t);var i},e.prototype.getEffectivePopupTemplate=function(){return this.popupTemplate||this.layer&&this.layer.popupTemplate},e.prototype.toJSON=function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:p.mixin({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},e.prototype.clone=function(){return new e({attributes:s.clone(this.attributes),geometry:this.geometry&&this.geometry.clone()||null,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})},e.prototype._notifyLayer=function(t,e,r,o){if(this.layer){var i={graphic:this,property:t,oldValue:e,newValue:r};o&&(i.attributeName=o),this.layer.graphicChanged(i)}},o([i.property({value:null})],e.prototype,"attributes",null),o([i.property({value:null,json:{read:a.fromJSON}})],e.prototype,"geometry",null),o([i.property()],e.prototype,"layer",void 0),o([i.property({type:u})],e.prototype,"popupTemplate",void 0),o([i.property({value:null,json:{read:n.read}})],e.prototype,"symbol",null),o([i.property({value:!0,set:function(t){}})],e.prototype,"visible",null),e=o([i.subclass("esri.Graphic")],e)}(i.declared(l));return b});