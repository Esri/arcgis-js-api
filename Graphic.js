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

define(["require","exports","tslib","./geometry","./PopupTemplate","./symbols","./core/JSONSupport","./core/lang","./core/maybe","./core/accessorSupport/decorators","./geometry/support/jsonUtils","./symbols/support/jsonUtils"],(function(e,t,r,o,i,p,s,a,u,l,n,y){var c=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.layer=null,o.popupTemplate=null,o.sourceLayer=null,Object.defineProperty(o,"uid",{value:s.generateUID()}),o}var s;return r.__extends(t,e),s=t,t.prototype.normalizeCtorArgs=function(e,t,r,o){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:o}},Object.defineProperty(t.prototype,"attributes",{set:function(e){var t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometry",{set:function(e){var t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbol",{set:function(e){var t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{set:function(e){var t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))},enumerable:!0,configurable:!0}),t.prototype.getEffectivePopupTemplate=function(e){return void 0===e&&(e=!1),this.popupTemplate?this.popupTemplate:this.sourceLayer?this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:e&&u.isSome(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null},t.prototype.getAttribute=function(e){return this.attributes&&this.attributes[e]},t.prototype.setAttribute=function(e,t){var r;if(this.attributes){var o=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",o,t,e)}else this.attributes=((r={})[e]=t,r),this._notifyLayer("attributes",void 0,t,e)},t.prototype.getObjectId=function(){return this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null},t.prototype.toJSON=function(){return{geometry:u.isSome(this.geometry)?this.geometry.toJSON():null,symbol:u.isSome(this.symbol)?this.symbol.toJSON():null,attributes:r.__assign({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},t.prototype.clone=function(){return new s(this.cloneProperties())},t.prototype.cloneProperties=function(){return{attributes:a.clone(this.attributes),geometry:a.clone(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:a.clone(this.symbol),visible:this.visible}},t.prototype._notifyLayer=function(e,t,r,o){if(this.layer&&this.layer.graphicChanged){var i={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(i.attributeName=o),this.layer.graphicChanged(i)}},r.__decorate([l.property({value:null})],t.prototype,"attributes",null),r.__decorate([l.property({value:null,types:o.geometryTypes,json:{read:n.fromJSON}})],t.prototype,"geometry",null),r.__decorate([l.property()],t.prototype,"layer",void 0),r.__decorate([l.property({type:i})],t.prototype,"popupTemplate",void 0),r.__decorate([l.property()],t.prototype,"sourceLayer",void 0),r.__decorate([l.property({value:null,types:p.symbolTypes,json:{read:y.read}})],t.prototype,"symbol",null),r.__decorate([l.property({type:Boolean,value:!0})],t.prototype,"visible",null),t=s=r.__decorate([l.subclass("esri.Graphic")],t)}(s.JSONSupport),b=0;return function(e){e.generateUID=function(){return b++}}(c||(c={})),c}));