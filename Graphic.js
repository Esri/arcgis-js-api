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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/assignHelper","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./geometry","./PopupTemplate","./core/JSONSupport","./core/lang","./core/accessorSupport/decorators","./geometry/support/typeUtils","./symbols/support/jsonUtils","./symbols/support/typeUtils"],function(t,e,r,o,p,i,s,u,l,a,n,y,b){var c=function(t){function e(e,r,o,p){var i=t.call(this,e,r,o,p)||this;return i.layer=null,i.popupTemplate=null,i.sourceLayer=null,Object.defineProperty(i,"uid",{value:u.generateUID()}),i}o(e,t),u=e,e.prototype.normalizeCtorArgs=function(t,e,r,o){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:r,popupTemplate:o}},Object.defineProperty(e.prototype,"attributes",{set:function(t){var e=this._get("attributes");e!==t&&(this._set("attributes",t),this._notifyLayer("attributes",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"geometry",{set:function(t){var e=this._get("geometry");e!==t&&(this._set("geometry",t),this._notifyLayer("geometry",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"symbol",{set:function(t){var e=this._get("symbol");e!==t&&(this._set("symbol",t),this._notifyLayer("symbol",e,t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{set:function(t){var e=this._get("visible");e!==t&&(this._set("visible",t),this._notifyLayer("visible",e,t))},enumerable:!0,configurable:!0}),e.prototype.getEffectivePopupTemplate=function(){return this.popupTemplate||this.sourceLayer&&this.sourceLayer.popupTemplate},e.prototype.getAttribute=function(t){return this.attributes&&this.attributes[t]},e.prototype.setAttribute=function(t,e){var r;if(this.attributes){var o=this.getAttribute(t);this.attributes[t]=e,this._notifyLayer("attributes",o,e,t)}else this.attributes=(r={},r[t]=e,r),this._notifyLayer("attributes",void 0,e,t)},e.prototype.toJSON=function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:r({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},e.prototype.clone=function(){return new u({attributes:l.clone(this.attributes),geometry:this.geometry&&this.geometry.clone()||null,layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})},e.prototype._notifyLayer=function(t,e,r,o){if(this.layer){var p={graphic:this,property:t,oldValue:e,newValue:r};"attributes"===t&&(p.attributeName=o),this.layer.graphicChanged(p)}};var u;return p([a.property({value:null})],e.prototype,"attributes",null),p([a.property({value:null,types:n.types,json:{read:i.fromJSON}})],e.prototype,"geometry",null),p([a.property()],e.prototype,"layer",void 0),p([a.property({type:s})],e.prototype,"popupTemplate",void 0),p([a.property()],e.prototype,"sourceLayer",void 0),p([a.property({value:null,types:b.types,json:{read:y.read}})],e.prototype,"symbol",null),p([a.property({type:Boolean,value:!0,set:function(t){}})],e.prototype,"visible",null),e=u=p([a.subclass("esri.Graphic")],e)}(a.declared(u)),h=0;return function(t){function e(){return h++}t.generateUID=e}(c||(c={})),c});