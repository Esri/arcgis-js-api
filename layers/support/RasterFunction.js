// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/kebabDictionary","../../core/JSONSupport","../../core/lang"],function(r,e,t){var n=r({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"}),s=e.createSubclass({declaredClass:"esri.layers.support.RasterFunction",properties:{functionArguments:{value:null,json:{readFrom:["rasterFunctionArguments"],read:function(r,e){return this._resolveFunctionArguments(t.clone(e.rasterFunctionArguments))}}},functionName:{value:null,json:{readFrom:["rasterFunction","rasterFunctionInfos"],read:function(r,e){r=e.rasterFunction;var t=e.rasterFunctionInfos;return t&&t.length&&"None"!==t[0].name&&(r=t[0].name),r}}},outputPixelType:{value:"unknown"},variableName:{value:null}},clone:function(){return s.fromJSON(this.toJSON())},toJSON:function(){var r=t.clone(this.functionArguments),e=function(r){return r&&"esri.layers.support.RasterFunction"===r.declaredClass?r.toJSON():r};if(r&&(r.Raster=e(r.Raster),r.Raster2=e(r.Raster2),r.DEM=e(r.DEM),r.FillRaster=e(r.FillRaster),r.Rasters&&r.Rasters.length)){var s,a=[];for(s=0;s<r.Rasters.length;s++)a.push(e(r.Rasters[s]));r.Rasters=a}var u={rasterFunction:this.functionName,rasterFunctionArguments:r,variableName:this.variableName,outputPixelType:n.toJSON(this.outputPixelType)};return t.filter(u,function(r){return null!==r&&void 0!==r?!0:void 0})},_resolveFunctionArguments:function(r){var e=function(r){return r&&r.rasterFunction?s.fromJSON(r):r};if(r&&(r.Raster=e(r.Raster),r.Raster2=e(r.Raster2),r.DEM=e(r.DEM),r.FillRaster=e(r.FillRaster),r.Rasters&&r.Rasters.length))for(var t=0;t<r.Rasters.length;t++)r.Rasters[t]=e(r.Rasters[t]);return r}});return s});