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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","./LayerInfoTemplateProvider","esri/dijit/geoenrichment/utils/InvokeUtil"],(function(e,r,t){return e(null,{AREA_FEATURE_POINTS:"areaFeaturePoints",LOCATOR_POINTS:"locatorPoints",ADDITIONAL_LAYER_POINTS:"additionalLayerPoints",STD_POLYGON_LABELS:"stdPolygonLabels",AREA_FEATURE_POLYGONS:"areaFeaturePolygons",STD_POLYGONS:"stdPolygons",ADDITIONAL_LAYER_POLYGONS:"additionalLayerPolygons",_map:null,_infos:null,constructor:function(e){this._map=e,this._infos=[]},registerLayerInfo:function(e){switch(e.type){case this.AREA_FEATURE_POINTS:case this.LOCATOR_POINTS:case this.ADDITIONAL_LAYER_POINTS:case this.STD_POLYGON_LABELS:e.geometryType="esriGeometryPoint";break;case this.AREA_FEATURE_POLYGONS:case this.STD_POLYGONS:case this.ADDITIONAL_LAYER_POLYGONS:e.geometryType="esriGeometryPolygon";break;default:e.geometryType=e.geometryType||("esriGeometryPoint"===e.layer.geometryType?"esriGeometryPoint":"esriGeometryPolygon")}this._map.removeLayer(e.layer),this._infos.push(e),this.sortLayers()},addFromAdditionalLayerInfos:function(e){var t=this;e&&e.forEach((function(e){t._map.graphicsLayerIds.some((function(a){var o=t._map.getLayer(a);if(o.url===e.url){if(o.renderer&&"heatmap"===o.renderer.type)return;return r.provideInfoTemplate(o),t.registerLayerInfo({layer:o,type:"esriGeometryPoint"===o.geometryType?t.ADDITIONAL_LAYER_POINTS:t.ADDITIONAL_LAYER_POLYGONS,preferredIndex:e.index}),!0}}))}))},sortLayers:function(){return t.invoke(this,"_doSortLayers",50)},_doSortLayers:function(){var e=this;function r(r){if(e._isHeatmapLayer(r))return 0;var t=0;switch("esriGeometryPoint"===r.geometryType&&(t+=1e6),r.type){case e.STD_POLYGON_LABELS:t+=1e3;break;case e.ADDITIONAL_LAYER_POINTS:t+=2e3;break;case e.LOCATOR_POINTS:t+=3e3;break;case e.AREA_FEATURE_POINTS:t+=4e3;break;case e.ADDITIONAL_LAYER_POLYGONS:t+=1e3;break;case e.STD_POLYGONS:t+=2e3;break;case e.AREA_FEATURE_POLYGONS:t+=3e3}return t+(r.preferredIndex||0)}this._infos.sort((function(e,t){return r(e)-r(t)})),this._infos.forEach((function(r,t){e._map.addLayer(r.layer),e._isHeatmapLayer(r)&&r.layer.setRenderer(r.layer.renderer)}))},_isHeatmapLayer:function(e){return e.layer.renderer&&("heatmap"===e.layer.renderer.type||"esri.renderer.HeatmapRenderer"===e.layer.renderer.declaredClass)}})}));