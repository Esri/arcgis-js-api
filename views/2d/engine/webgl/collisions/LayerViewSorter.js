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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","@dojo/shim/Map"],function(e,t,r){function a(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass}function i(e){switch(e.get("layer.renderer.type")){case"class-breaks":case"simple":case"unique-value":return!0;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t,a){void 0===a&&(a=null),this.registerLayer=e,this.unregisterLayer=t,this.onLabelsVisible=a,this._layerViewState=new r.default,this._priorityCounter=4294967295}return e.prototype.update=function(e){for(var t=e.added,r=e.removed,s=0,n=t;s<n.length;s++){var l=n[s];a(l)&&i(l)&&!this._layerViewState.has(l)&&this._createState(l)}for(var o=0,u=r;o<u.length;o++){var l=u[o];a(l)&&this._layerViewState.has(l)&&this._deleteState(l)}this._recomputeOrder()},e.prototype.destroy=function(){var e=this;this._layerViewState.forEach(function(t,r){return e._deleteState(r)})},e.prototype._createState=function(e){var t=this,r={enabled:e.labelsVisible,priority:this._priorityCounter--,order:null,handle:null};return r.handle=e.watch("labelsVisible",function(e){r.enabled=e,t._recomputeOrder(),t.onLabelsVisible&&t._layerViewState.forEach(function(e,r){return t.onLabelsVisible(r)})}),this._layerViewState.set(e,r),r},e.prototype._deleteState=function(e){var t=this._layerViewState.get(e);t.handle.remove(),t.enabled&&this.unregisterLayer(e),this._layerViewState.delete(e)},e.prototype._recomputeOrder=function(){var e=[];this._layerViewState.forEach(function(t,r){e.push({layerView:r,state:t})}),e.sort(function(e,t){return e.state.priority-t.state.priority});for(var t=0,r=0,a=e;r<a.length;r++){var i=a[r];i.state.order!==t&&(i.state.order=t,this.unregisterLayer(i.layerView)),i.state.enabled?this.registerLayer(i.layerView,t):this.unregisterLayer(i.layerView),++t}},e}();t.default=s});