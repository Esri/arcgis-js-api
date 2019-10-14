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

define(["require","exports","../../../../core/Evented","../../../../core/Handles"],function(e,t,n,s){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.handles=new s,this.events=new n,this.contentLayerViews=e.contentLayerViews,this.handles.add(this.contentLayerViews.on("change",this.layerViewsChanged.bind(this))),this.layerViewsChanged({added:this.contentLayerViews.toArray(),removed:[],moved:[],target:this.contentLayerViews})}return e.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},e.prototype.layerViewsChanged=function(e){var t=this;e.added.forEach(function(e){"esri.views.3d.layers.SceneLayerView3D"===e.declaredClass&&t.handles.add(e.on("visible-geometry-changed",t.contentChanged.bind(t)),e.uid)}),e.removed.forEach(function(e){return t.handles.remove(e.uid)})},e.prototype.contentChanged=function(){this.events.emit("request-update",d)},e}();t.ContentGeometryUpdates=i;var d={};t.default=i});