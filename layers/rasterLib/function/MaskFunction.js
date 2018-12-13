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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],function(t,e,n,a,r,s,i){return t([n,s],{declaredClass:"esri.layers.rasterLib.function.MaskFunction",functionName:"Mask",supportWebGL:!0,support2D:!0,constructor:function(t){var e={includedRanges:null,noDataInterpretation:0,noDataValues:null,raster:null};this.functionArguments=this.mixinIgnoreCase(e,t)},bind:function(t){var n=this.getSourceRasterInfo(t);return n.raster?(this.rasterInfo=e.mixin(n.raster,{bandCount:n.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,n.raster.pixelType),statistics:n.raster.statistics,histograms:n.raster.histograms}),!0):new Error("The raster input to mask function is invalid.")},read2D:function(t){this._performance.start();var e=t.raster,n=i.mask(e.pixelBlock,{includedRanges:this.functionArguments.includedRanges,noDataInterpretation:this.functionArguments.noDataInterpretation,noDataValues:this.functionArguments.noDataValues});return this._addPerformanceMetric(this._performance.elapsed()),"Unknown"!==this.pixelType&&(n.pixelType=this.pixelType),{extent:e.extent,pixelBlock:n}},readGL:function(t){this._performance.start(),this._initializeProgram({fragment:r.mask,fragmentName:"Mask"});var e=this._setupTextureData(t.raster),n=this.bindFrameBuffer(),a=this.gl;a.bindTexture(a.TEXTURE_2D,e.texture);var s=this.functionArguments.includedRanges,i=this.functionArguments.noDataValues?this.functionArguments.noDataValues.map(function(t){return parseFloat(t,10)}):null,u=this.functionArguments.noDataInterpretation,o=this.sourceRasterInfo.raster.bandCount;return this._setUniforms({u_includedRanges:s,u_includedRanges_specified:!!s,u_noDataValues:i,u_noDataValues_specified:!!i,u_noDataInterpretation:u,u_bandCount:Math.min(o,3)}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,texture:n.texture}}})});