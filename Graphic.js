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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","./core/JSONSupporter","./core/lang","./PopupTemplate","./geometry/support/jsonUtils","./symbols/support/jsonUtils"],function(t,e,r,i,o,s){var u=0,n=e.createSubclass({declaredClass:"esri.Graphic",classMetadata:{properties:{popupTemplate:{type:i}}},constructor:function(){this.id=u++},normalizeCtorArgs:function(t,e,r,i){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:r,popupTemplate:i}},attributes:null,_attributesSetter:function(t,e){return e===t?e:(this._notifyLayer("attributes",e,t),t)},geometry:null,_geometrySetter:function(t,e){return e===t?e:(this._notifyLayer("geometry",e,t),t)},_geometryReader:function(t){return o.fromJSON(t)},popupTemplate:null,symbol:null,_symbolSetter:function(t,e){return e===t?e:(this._notifyLayer("symbol",e,t),t)},_symbolReader:function(t){return s.fromJSON(t)},visible:!0,_visibleSetter:function(t,e){return e===t?e:(this._notifyLayer("visible",e,t),t)},getAttribute:function(t){return this.attributes&&this.attributes[t]},setAttribute:function(t,e){var r,i=this.getAttribute(t);this.attributes?(this.attributes[t]=e,this._notifyLayer("attributes",i,e,t)):(r={},r[t]=e,this.attributes=r)},getEffectivePopupTemplate:function(){return this.popupTemplate||this.layer&&this.layer.popupTemplate},toJSON:function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:t.mixin({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},clone:function(){return new n({attributes:t.clone(this.attributes),geometry:this.geometry&&this.geometry.clone()||null,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})},_notifyLayer:function(t,e,r,i){var o;this.layer&&(o={graphic:this,property:t,oldValue:e,newValue:r},i&&(o.attributeName=i),this.layer.graphicChanged(o))}});return n});