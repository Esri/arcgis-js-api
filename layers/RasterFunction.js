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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(t,n,s,e,r){var i=t(null,{declaredClass:"esri.layers.RasterFunction",functionName:null,arguments:null,functionArguments:null,variableName:null,outputPixelType:null,constructor:function(t){if(n.isObject(t)){var s,e=0;if(this.functionName=t.rasterFunction,this.functionArguments=n.clone(t.rasterFunctionArguments||t.arguments),n.mixin(this,t),s=this.functionArguments,s&&(s.Raster=this._toRasterFunction(s.Raster),s.Raster2=this._toRasterFunction(s.Raster2),s.DEM=this._toRasterFunction(s.DEM),s.FillRaster=this._toRasterFunction(s.FillRaster),s.Rasters&&s.Rasters.length))for(e=0;e<s.Rasters.length;e++)s.Rasters[e]=this._toRasterFunction(s.Rasters[e])}},_toRasterFunction:function(t){return t&&(t.rasterFunction||t.functionName)?new i(t):t},_rfToJson:function(t){return t&&"esri.layers.RasterFunction"===t.declaredClass&&(t=t.toJson()),t},toJson:function(){var t=n.clone(this.functionArguments||this.arguments);if(t&&(t.Raster=this._rfToJson(t.Raster),t.Raster2=this._rfToJson(t.Raster2),t.DEM=this._rfToJson(t.DEM),t.FillRaster=this._rfToJson(t.FillRaster),t.Rasters&&t.Rasters.length)){var s,e=[];for(s=0;s<t.Rasters.length;s++)e.push(this._rfToJson(t.Rasters[s]));t.Rasters=e}var i={rasterFunction:this.functionName,rasterFunctionArguments:t,variableName:this.variableName,outputPixelType:this.outputPixelType?this.outputPixelType:null};return r.filter(i,function(t){return null!==t&&void 0!==t?!0:void 0})}});return s("extend-esri")&&n.setObject("layers.RasterFunction",i,e),i});