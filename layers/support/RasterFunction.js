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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../../core/kebabDictionary","../../core/JSONSupport","../../core/lang"],function(e,r,t){var n=e({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"}),s=r.createSubclass({declaredClass:"esri.layers.support.RasterFunction",properties:{functionArguments:{value:null,json:{read:{source:["rasterFunctionArguments"],reader:function(e,r){return this._resolveFunctionArguments(t.clone(r.rasterFunctionArguments))}}}},functionName:{value:null,json:{read:{source:["rasterFunction","rasterFunctionInfos"],reader:function(e,r){e=r.rasterFunction;var t=r.rasterFunctionInfos;return t&&t.length&&"None"!==t[0].name&&(e=t[0].name),e}}}},outputPixelType:{value:"unknown"},variableName:{value:null}},clone:function(){return s.fromJSON(this.toJSON())},toJSON:function(){var e=t.clone(this.functionArguments),r=function(e){return e&&"esri.layers.support.RasterFunction"===e.declaredClass?e.toJSON():e};if(e&&(e.Raster=r(e.Raster),e.Raster2=r(e.Raster2),e.DEM=r(e.DEM),e.FillRaster=r(e.FillRaster),e.Rasters&&e.Rasters.length)){var s,a=[];for(s=0;s<e.Rasters.length;s++)a.push(r(e.Rasters[s]));e.Rasters=a}var u=n.toJSON(this.outputPixelType);u="UNKNOWN"!==u?u:null;var o={rasterFunction:this.functionName,rasterFunctionArguments:e,variableName:this.variableName,outputPixelType:u};return t.filter(o,function(e){return null!=e})},_resolveFunctionArguments:function(e){var r=function(e){return e&&e.rasterFunction?s.fromJSON(e):e};if(e&&(e.Raster=r(e.Raster),e.Raster2=r(e.Raster2),e.DEM=r(e.DEM),e.FillRaster=r(e.FillRaster),e.Rasters&&e.Rasters.length))for(var t=0;t<e.Rasters.length;t++)e.Rasters[t]=r(e.Rasters[t]);return e}});return s});