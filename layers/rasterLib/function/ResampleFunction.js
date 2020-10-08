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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./pixelShaders","./RasterFunctionX","./RasterFunctionWebGLMixin"],(function(e,t,r,i,s){return e([i,s],{declaredClass:"esri.layers.rasterLib.function.ResampleFunction",renderTexture:!0,resamplingOrigin:null,resamplingRatio:null,zFactor:1,functionName:"Resample",supportWebGL:!0,support2D:!1,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({resamplingType:0},e)},bind:function(e){var r=this.getSourceRasterInfo(e);return r.raster?(this.rasterInfo=t.mixin(r.raster,{bandCount:r.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,r.raster.pixelType),statistics:r.raster.statistics,histograms:r.raster.histograms}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},!0):new Error("The raster input to convolution function is invalid.")},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:r.resample,fragmentName:"Resample"});var t,i,s=this._setupTextureData(e.raster),n=this.bindFrameBuffer(),a=this.gl,o=a.drawingBufferWidth,u=a.drawingBufferHeight,l=e.raster;void 0!==l.pixelBlock?(s=s||this._setupTextureData(l),t=l.pixelBlock.width,i=l.pixelBlock.height):(s=s||l,t=o,i=u);var p=this.resamplingRatio||[t/o,i/u],c=this.resamplingOrigin||[0,1];return this._setUniforms({u_resamplingRatio:p,u_anchor:c,u_resamplingType:this.functionArguments.resamplingType,u_resolution:[1/o,1/u]}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:s.extent,texture:n.texture}}})}));