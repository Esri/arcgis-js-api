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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","./DynamicLayerView3D"],function(e,r,t,a,i,s,o){var n=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._exportImageParameters=null,r._imageVersion=null,r}return t(r,e),r.prototype.initialize=function(){var e=this;this._exportImageParameters=new s({layer:this.layer}),this._handles.add(this._exportImageParameters.watch("version",function(r){e._imageVersion!==r&&(e._imageVersion=r,e.refetch())}))},r.prototype.destroy=function(){this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)},r.prototype.beforeFetch=function(){this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale),this._imageVersion=this._exportImageParameters.version},r.prototype.getPopupData=function(e){var r=this,t=this.view.scale,a=this.layer.allSublayers.filter(function(e){var r=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;return e.popupTemplate&&e.visible&&r&&a});return a.map(function(t){var a=t.createQuery();return a.geometry=e,a.outFields=r.getTemplateOutFields(t.popupTemplate),t.queryFeatures(a).then(function(e){return e.features})})},r.prototype.getTemplateOutFields=function(e){if(!e||!e.fieldInfos)return["*"];var r=[];return e.fieldInfos.forEach(function(e){var t=e.fieldName&&e.fieldName.toLowerCase();t&&"shape"!==t&&0!==t.indexOf("relationships/")&&r.push(e.fieldName)}),r},a([i.property()],r.prototype,"layer",void 0),r=a([i.subclass("esri.views.3d.layers.MapImageLayerView3D")],r)}(i.declared(o));return n});