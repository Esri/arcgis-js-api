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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./convolutionKernel","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],(function(e,t,r,n,i,s,o,a){return e([r,o],{declaredClass:"esri.layers.rasterLib.function.ConvolutionFunction",functionName:"Convolution",supportWebGL:!0,support2D:!0,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({columns:3,rows:3,type:0,kernel:null,raster:null},e)},bind:function(e){var r=this.getSourceRasterInfo(e);return r.raster?(this.rasterInfo=t.mixin(r.raster,{bandCount:r.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,r.raster.pixelType),statistics:r.raster.statistics,histograms:r.raster.histograms}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to convolution function is invalid.")},read2D:function(e){this._performance.start();var r=e.raster,n=this._analyzeKernel(),i=a.convolute(r.pixelBlock,{normalizedKernel:n.normalizedKernel,kernelCols:this.functionArguments.columns,kernelRows:this.functionArguments.rows});return this._addPerformanceMetric(this._performance.elapsed()),"Unknown"!==this.pixelType&&(i.pixelType=this.pixelType),i.pixels=i.pixels.map(t.hitch(this,(function(e){return this._clampBand(e,i.pixelType)}))),{extent:r.extent,pixelBlock:i}},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:s.convolution,fragmentName:"Convolution"});var t=this._setupTextureData(e.raster),r=this.bindFrameBuffer(),n=this.gl,i=n.drawingBufferWidth,o=n.drawingBufferHeight,a=this.functionArguments.kernel,u=e&&e.raster&&e.raster.pixelBlock?[1/e.raster.pixelBlock.width,1/e.raster.pixelBlock.height]:[1/i,1/o];return this._setUniforms({u_resolution:u,u_kernel:a,u_kernelSize:a.length}),this._bindTexture(t.texture,"u_image"),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:t.extent,texture:r.texture}},_analyzeKernel:function(){var e=this.functionArguments.kernel,t=e.reduce((function(e,t){return e+t}));0!==t&&1!==t&&(e=e.map((function(e){return e/t})));var r,n=[];for(r=0;r<e.length;r++)n.some((function(t){return t===e[r]}))||n.push(e[r]);return{normalizedKernel:e,distinctValues:n}},_analyzeKernelPattern:function(){var e,t,r,n,i,s,o=this.functionArguments.rows,a=this.functionArguments.columns,u=this.functionArguments.kernel,l=[];for(e=0;e<o;e++)l.push({weights:u.slice(e*a,(e+1)*a)});for(e=1;e<o;e++)for(i=l[e].weights,t=0;t<e;t++)if(n=l[t].weights){for(s=i[0]/n[0],r=1;r<a;r++)i[r]/n[r]!==s&&(s=null);null!==s&&(l[e]={row:t,factor:s})}return l}})}));