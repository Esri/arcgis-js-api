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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/Map"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});function l(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass||"esri.views.2d.layers.StreamLayerView2D"===e.declaredClass}function o(e){switch(e.get("layer.renderer.type")){case"class-breaks":case"simple":case"unique-value":return!0;default:return!1}}var i=function(){function e(e,t){this.registerLayer=e,this.unregisterLayer=t,this._layerViewState=new r.default}return e.prototype.findIndex=function(t){return t.view.allLayerViews.findIndex(function(e){return e.uid===t.uid})},e.prototype.update=function(e){for(var t=e.added,r=0,i=e.removed;r<i.length;r++){l(s=i[r])&&this._layerViewState.has(s)&&this._deleteState(s)}for(var a=0,n=t;a<n.length;a++){var s;l(s=n[a])&&o(s)&&!this._layerViewState.has(s)&&this._createState(s)}this._recomputeOrder()},e.prototype.destroy=function(){var r=this;this._layerViewState.forEach(function(e,t){return r._deleteState(t)})},e.prototype._createState=function(e){var t={priority:-1,handle:null};return t.handle=e.watch("labelsVisible",this._recomputeOrder.bind(this)),this._layerViewState.set(e,t),t},e.prototype._deleteState=function(e){if(this._layerViewState.has(e)){var t=this._layerViewState.get(e);t.handle.remove(),-1!==t.priority&&this.unregisterLayer(e),this._layerViewState.delete(e)}},e.prototype._recomputeOrder=function(){var n=this;this._layerViewState.forEach(function(e,t){var r=t.view.map.allLayers.findIndex(function(e){return e.uid===t.layer.uid}),i=t.layer,a=i.visible&&i.labelsVisible&&i.labelingInfo?4294967295-r:-1;a!==e.priority&&(e.priority=a,n.unregisterLayer(t),-1!==a&&n.registerLayer(t,a))})},e}();t.default=i});