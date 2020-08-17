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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],(function(t,n,e,s,r){var i=t(null,{declaredClass:"esri.layers.RasterFunction",functionName:null,arguments:null,functionArguments:null,variableName:null,outputPixelType:null,_isTemplate:null,_templateJson:null,constructor:function(t){if(n.isObject(t)){this._isRFTJson(t)&&(this._isTemplate=!0,this._templateJson=t);var e,s=0;if(this.functionName=t.rasterFunction||t.name,this.functionArguments=n.clone(t.rasterFunctionArguments||t.arguments),n.mixin(this,t),(e=this.functionArguments)&&(e.Raster=this._toRasterFunction(e.Raster),e.Raster2=this._toRasterFunction(e.Raster2),e.DEM=this._toRasterFunction(e.DEM),e.FillRaster=this._toRasterFunction(e.FillRaster),e.Rasters&&e.Rasters.length))for(s=0;s<e.Rasters.length;s++)e.Rasters[s]=this._toRasterFunction(e.Rasters[s])}},_isRFTJson:function(t){return t.name&&t.arguments&&t.function&&t.hasOwnProperty("functionType")},_toRasterFunction:function(t){return t&&(t.rasterFunction||t.functionName)?new i(t):t},_rfToJson:function(t){return t&&"esri.layers.RasterFunction"===t.declaredClass&&(t=t.toJson()),t},toJson:function(){if(this._isTemplate)return this._templateJson;var t=n.clone(this.functionArguments||this.arguments);if(t&&(t.Raster=this._rfToJson(t.Raster),t.Raster2=this._rfToJson(t.Raster2),t.DEM=this._rfToJson(t.DEM),t.FillRaster=this._rfToJson(t.FillRaster),t.Rasters&&t.Rasters.length)){var e,s=[];for(e=0;e<t.Rasters.length;e++)s.push(this._rfToJson(t.Rasters[e]));t.Rasters=s}var i={rasterFunction:this.functionName,rasterFunctionArguments:t,variableName:this.variableName,outputPixelType:this.outputPixelType?this.outputPixelType:null};return r.filter(i,(function(t){if(null!=t)return!0}))}});return e("extend-esri")&&n.setObject("layers.RasterFunction",i,s),i}));
