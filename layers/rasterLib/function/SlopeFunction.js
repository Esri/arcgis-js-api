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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../../WKIDUnitConversion","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./surfaceUtils"],function(e,t,r,i,n,s,a,o){return e([r,a],{declaredClass:"esri.layers.rasterLib.function.SlopeFunction",functionName:"Slope",supportWebGL:!0,support2D:!0,constructor:function(e){var t={zFactor:1,slopeType:1,psPower:.664,psFactor:.024,raster:null};this.functionArguments=this.mixinIgnoreCase(t,e)},bind:function(e){var r=this.getSourceRasterInfo(e);return r.raster?(this.rasterInfo=t.mixin(r.raster,{bandCount:1,pixelType:this._calculatePixelType(this.outputPixelType,"F32"),statistics:1===this.slopeType||3===this.slopeType?[{min:0,max:90}]:null,histogram:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to slope function is invalid.")},read2D:function(e){this._performance.start();var t=e.raster,r=t.extent.spatialReference.wkid&&null==i[t.extent.spatialReference.wkid],n=o.slope(t,{zFactor:this.functionArguments.zFactor,psPower:this.functionArguments.psPower,psFactor:this.functionArguments.psFactor,slopeType:this.functionArguments.slopeType,isGCS:r});return this._addPerformanceMetric(this._performance.elapsed()),n},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:s.slope,fragmentName:"Slope"});var t=this._setupTextureData(e.raster),r=this.bindFrameBuffer(),i=this.gl;i.bindTexture(i.TEXTURE_2D,t.texture);var n=i.drawingBufferWidth,a=i.drawingBufferHeight,o=t.extent,u=(o.xmax-o.xmin)/n,c=(o.ymax-o.ymin)/a,p=this.functionArguments.zFactor;return this._setUniforms({u_resolution:[1/n,1/a],u_cellSize:[u,c],u_zfactor:p}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:t.extent,texture:r.texture}}})});