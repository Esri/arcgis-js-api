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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./rasterIndex"],function(t,e,n,r,i,s,a){return t([n,s],{declaredClass:"esri.layers.rasterLib.function.BandArithmeticFunction",functionName:"BandArithmetic",supportWebGL:!0,support2D:!0,constructor:function(t){var e={method:1,bandIndexes:"",raster:null};this.functionArguments=this.mixinIgnoreCase(e,t)},bind:function(t){var n=this.getSourceRasterInfo(t);return n.raster?(this.rasterInfo=e.mixin(n.raster,{bandCount:8===this.functionArguments.method?n.raster.bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"F32"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to band arithmetic function is invalid.")},read2D:function(t){this._performance.start();var e=t.raster,n=a.calculate(e.pixelBlock,{bandIndexes:this.functionArguments.bandIndexes,method:this.functionArguments.method});return this._addPerformanceMetric(this._performance.elapsed()),"Unknown"!==this.pixelType&&(n.pixelType=this.pixelType),{extent:e.extent,pixelBlock:n}},readGL:function(t){this._performance.start(),this._initializeProgram({fragment:i.bandArithmetic,fragmentName:"bandArithmetic"});var e=this.functionArguments.bandIndexes.trim().split(" ").map(function(t){return parseInt(t,10)});this._infraredBandID=e[0]-1,this._visibleBandID=e[1]-1,this._alterBand=Math.max(this._infraredBandID,this._visibleBandID)>2;var n=this._alterBand&&2==e.length?{bandIDs:[this._infraredBandID,this._visibleBandID,this._infraredBandID]}:{bandIDs:[e[0]-1,e[1]-1,e[2]-1]},r=this._setupTextureData(t.raster,n),s=this.gl,a=this.bindFrameBuffer();s.bindTexture(s.TEXTURE_2D,r.texture);var d=this.functionArguments.method,o=e.length>2?e.slice(2):null;return this._alterBand?this._setUniforms({u_method:d,u_bandId_nir:0,u_bandId_red:1,u_constants:o}):this._setUniforms({u_method:d,u_bandId_nir:e[0]-1,u_bandId_red:e[1]-1,u_constants:o}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:r.extent,texture:a.texture}}})});