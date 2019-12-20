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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Error","../../../../../core/Logger"],function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var a=i.getLogger("esri.views.2d.engine.collisions.LayerViewSorter");function o(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass||"esri.views.2d.layers.StreamLayerView2D"===e.declaredClass}function l(e){if(!e.layer||!e.layer.renderer)return!1;switch(e.layer.renderer.type){case"class-breaks":case"simple":case"unique-value":case"dictionary":return!0;default:return a.error(new t("mapview-labeling","Renderer of type "+e.layer.renderer.type+" does not currently support labeling")),!1}}var n=function(){function e(e,r){this.registerLayer=e,this.unregisterLayer=r,this._layerViewState=new Map}return e.prototype.findIndex=function(r){return r.view.allLayerViews.findIndex(function(e){return e.uid===r.uid})},e.prototype.update=function(e){for(var r=e.added,t=0,i=e.removed;t<i.length;t++){o(s=i[t])&&this._layerViewState.has(s)&&this._deleteState(s)}for(var a=0,n=r;a<n.length;a++){var s;o(s=n[a])&&l(s)&&!this._layerViewState.has(s)&&this._createState(s)}this._recomputeOrder()},e.prototype.destroy=function(){this._layerViewState.forEach(function(e){return e.handle.remove()})},e.prototype._createState=function(e){var r={priority:-1,handle:null};return r.handle=e.watch("labelsVisible",this._recomputeOrder.bind(this)),this._layerViewState.set(e,r),r},e.prototype._deleteState=function(e){if(this._layerViewState.has(e)){var r=this._layerViewState.get(e);r.handle.remove(),-1!==r.priority&&this.unregisterLayer(e),this._layerViewState.delete(e)}},e.prototype._recomputeOrder=function(){var n=this;this._layerViewState.forEach(function(e,r){var t=r.view.map.allLayers.findIndex(function(e){return e.uid===r.layer.uid}),i=r.layer,a=i.visible&&i.labelsVisible&&i.labelingInfo?4294967295-t:-1;a!==e.priority&&(e.priority=a,n.unregisterLayer(r),-1!==a&&n.registerLayer(r,a))})},e}();r.LayerViewSorter=n});