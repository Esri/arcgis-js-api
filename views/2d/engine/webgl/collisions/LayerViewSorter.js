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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Error","../../../../../core/Logger"],(function(e,r,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.LayerViewSorter=void 0;var a=i.getLogger("esri.views.2d.engine.collisions.LayerViewSorter");function n(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass||"esri.views.2d.layers.StreamLayerView2D"===e.declaredClass}function s(e){if(!e.layer||!e.layer.renderer)return!1;switch(e.layer.renderer.type){case"class-breaks":case"simple":case"unique-value":case"dictionary":case"dot-density":return!0;default:return a.error(new t("mapview-labeling","Renderer of type "+e.layer.renderer.type+" does not currently support labeling")),!1}}var l=function(){function e(e,r){this.registerLayer=e,this.unregisterLayer=r,this._layerViewState=new Map}return e.prototype.findIndex=function(e){return e.view.allLayerViews.findIndex((function(r){return r.uid===e.uid}))},e.prototype.update=function(e){for(var r=e.added,t=0,i=e.removed;t<i.length;t++){n(o=i[t])&&this._layerViewState.has(o)&&this._deleteState(o)}for(var a=0,l=r;a<l.length;a++){var o;n(o=l[a])&&s(o)&&!this._layerViewState.has(o)&&this._createState(o)}this._recomputeOrder()},e.prototype.destroy=function(){this._layerViewState.forEach((function(e){return e.handles.forEach((function(e){return e.remove()}))}))},e.prototype._createState=function(e){var r={priority:-1,handles:null};return r.handles=[e.layer.watch("visible",this._recomputeOrder.bind(this)),e.layer.watch("labelsVisible",this._recomputeOrder.bind(this)),e.layer.watch("labelingInfo",this._recomputeOrder.bind(this)),e.layer.watch("featureReduction",this._recomputeOrder.bind(this))],this._layerViewState.set(e,r),r},e.prototype._deleteState=function(e){if(this._layerViewState.has(e)){var r=this._layerViewState.get(e);r.handles.forEach((function(e){return e.remove()})),-1!==r.priority&&this.unregisterLayer(e),this._layerViewState.delete(e)}},e.prototype._recomputeOrder=function(){var e=this;this._layerViewState.forEach((function(r,t){var i=t.view.map.allLayers.findIndex((function(e){return e.uid===t.layer.uid})),a=t.layer,n=a.featureReduction,s=n&&"cluster"===n.type&&n.labelsVisible&&n.labelingInfo&&n.labelingInfo.length,l=a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length||s,o=a.visible&&l?4294967295-i:-1;o!==r.priority&&(r.priority=o,e.unregisterLayer(t),-1!==o&&e.registerLayer(t,o))}))},e}();r.LayerViewSorter=l}));