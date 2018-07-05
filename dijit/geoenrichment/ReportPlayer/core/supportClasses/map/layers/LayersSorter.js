// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","./LayerInfoTemplateProvider"],function(e,r){return e(null,{AREA_FEATURE_POLYGONS:"areaFeaturePolygons",AREA_FEATURE_POINTS:"areaFeaturePoints",_map:null,_infos:null,constructor:function(e){this._map=e,this._infos=[]},registerLayerInfo:function(e){e.type==this.AREA_FEATURE_POLYGONS?(e.geometryType="esriGeometryPolygon",e.preferredIndex=1e6):e.type==this.AREA_FEATURE_POINTS?(e.geometryType="esriGeometryPoint",e.preferredIndex=1e6):(e.geometryType=e.geometryType||("esriGeometryPoint"===e.layer.geometryType?"esriGeometryPoint":"esriGeometryPolygon"),"number"==typeof e.preferredIndex&&(e.preferredIndex=1e6-e.preferredIndex-1)),this._map.removeLayer(e.layer),this._infos.push(e)},addFromAdditionalLayerInfos:function(e){var n=this;e&&e.forEach(function(e){n._map.graphicsLayerIds.some(function(t){var o=n._map.getLayer(t);if(o.url===e.url){if(o.renderer&&"heatmap"===o.renderer.type)return;return r.provideInfoTemplate(o),n.registerLayerInfo({layer:o,preferredIndex:e.index}),!0}})})},sortLayers:function(){var e=this._infos.filter(function(e){return"esriGeometryPolygon"===e.geometryType}),r=this._infos.filter(function(e){return"esriGeometryPoint"===e.geometryType});e.sort(function(e,r){return e.preferredIndex-r.preferredIndex}),r.sort(function(e,r){return e.preferredIndex-r.preferredIndex}),e.concat(r).forEach(function(e,r){this._map.addLayer(e.layer)},this),this._infos=null}})});