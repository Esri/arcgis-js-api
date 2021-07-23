// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./rasterIndex"],(function(e,t,n,r,i,s,a){return e([n,s],{declaredClass:"esri.layers.rasterLib.function.BandArithmeticFunction",functionName:"BandArithmetic",supportWebGL:!0,support2D:!0,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({method:1,bandIndexes:"",raster:null},e)},bind:function(e){var n=this.getSourceRasterInfo(e);return n.raster?(this.rasterInfo=t.mixin(n.raster,{bandCount:8===this.functionArguments.method?n.raster.bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"F32"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to band arithmetic function is invalid.")},read2D:function(e){this._performance.start();var t=e.raster,n=a.calculate(t.pixelBlock,{bandIndexes:this.functionArguments.bandIndexes,method:this.functionArguments.method});return this._addPerformanceMetric(this._performance.elapsed()),"Unknown"!==this.pixelType&&(n.pixelType=this.pixelType),{extent:t.extent,pixelBlock:n}},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:i.bandArithmetic,fragmentName:"bandArithmetic"});var t=this.functionArguments.bandIndexes.trim().split(" ").map((function(e){return parseInt(e,10)}));this._infraredBandID=t[0]-1,this._visibleBandID=t[1]-1,this._alterBand=Math.max(this._infraredBandID,this._visibleBandID)>2;var n=this._alterBand&&2==t.length?{bandIDs:[this._infraredBandID,this._visibleBandID,this._infraredBandID]}:{bandIDs:[t[0]-1,t[1]-1,t[2]-1]},r=this._setupTextureData(e.raster,n),s=this.bindFrameBuffer(),a=this.functionArguments.method,d=t.length>2?t.slice(2):null;return this._alterBand?this._setUniforms({u_method:a,u_bandId_nir:0,u_bandId_red:1,u_constants:d}):this._setUniforms({u_method:a,u_bandId_nir:t[0]-1,u_bandId_red:t[1]-1,u_constants:d}),this._bindTexture(r.texture,"u_image"),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:r.extent,texture:s.texture}}})}));