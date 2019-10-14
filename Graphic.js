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

define(["require","exports","./core/tsSupport/assignHelper","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./geometry","./PopupTemplate","./symbols","./core/JSONSupport","./core/lang","./core/maybe","./core/accessorSupport/decorators","./geometry/support/jsonUtils","./symbols/support/jsonUtils"],function(e,t,r,o,p,i,s,u,l,a,n,y,c,b){var m=function(e){function t(t,r,o,p){var i=e.call(this,t,r,o,p)||this;return i.layer=null,i.popupTemplate=null,i.sourceLayer=null,Object.defineProperty(i,"uid",{value:l.generateUID()}),i}o(t,e),l=t,t.prototype.normalizeCtorArgs=function(e,t,r,o){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:o}},Object.defineProperty(t.prototype,"attributes",{set:function(e){var t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometry",{set:function(e){var t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbol",{set:function(e){var t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){var t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))},enumerable:!0,configurable:!0}),t.prototype.getEffectivePopupTemplate=function(e){return void 0===e&&(e=!1),this.popupTemplate?this.popupTemplate:this.sourceLayer?this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:e&&n.isSome(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null},t.prototype.getAttribute=function(e){return this.attributes&&this.attributes[e]},t.prototype.setAttribute=function(e,t){var r;if(this.attributes){var o=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",o,t,e)}else this.attributes=(r={},r[e]=t,r),this._notifyLayer("attributes",void 0,t,e)},t.prototype.toJSON=function(){return{geometry:n.isSome(this.geometry)?this.geometry.toJSON():null,symbol:n.isSome(this.symbol)?this.symbol.toJSON():null,attributes:r({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},t.prototype.clone=function(){return new l(this.cloneProperties())},t.prototype.cloneProperties=function(){return{attributes:a.clone(this.attributes),geometry:a.clone(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:a.clone(this.symbol),visible:this.visible}},t.prototype._notifyLayer=function(e,t,r,o){if(this.layer&&this.layer.graphicChanged){var p={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(p.attributeName=o),this.layer.graphicChanged(p)}};var l;return p([y.property({value:null})],t.prototype,"attributes",null),p([y.property({value:null,types:i.geometryTypes,json:{read:c.fromJSON}})],t.prototype,"geometry",null),p([y.property()],t.prototype,"layer",void 0),p([y.property({type:s})],t.prototype,"popupTemplate",void 0),p([y.property()],t.prototype,"sourceLayer",void 0),p([y.property({value:null,types:u.symbolTypes,json:{read:b.read}})],t.prototype,"symbol",null),p([y.property({type:Boolean,value:!0,set:function(e){}})],t.prototype,"visible",null),t=l=p([y.subclass("esri.Graphic")],t)}(y.declared(l.JSONSupport)),h=0;return function(e){function t(){return h++}e.generateUID=t}(m||(m={})),m});