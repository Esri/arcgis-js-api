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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","esri/layers/HeatmapManager","esri/layers/FeatureLayer"],function(e,a,t,r){return e(null,{mode:r.MODE_AUTO,geometryType:"esriGeometryPoint",declaredClass:"esri.layers.FeatureLayer",onRendererChange:function(e){this.inherited(arguments);var a=this._map;this._heatmapManager&&!this._heatmapManager.sourceLayer&&(this._heatmapManager=null),e&&"colors"in e&&"blurRadius"in e&&"maxPixelIntensity"in e?this.graphics&&this.graphics.length&&"point"==this.graphics[0].geometry.type&&!this._heatmapManager&&a&&(this._heatmapManager=new t(this),this._heatmapManager.initialize(a)):this._heatmapManager=null},_canDoClientSideQuery:function(){return!0},queryFeatures:function(e,t){var r={features:this.graphics.filter(function(a){return a.visible&&(!e||e.geometry.getExtent().intersects(a.geometry))})};return t&&t(r),a(r)}})});