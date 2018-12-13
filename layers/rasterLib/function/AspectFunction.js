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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../../WKIDUnitConversion","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./surfaceUtils"],function(e,t,r,i,n,s,a,o){return e([r,a],{declaredClass:"esri.layers.rasterLib.function.AspectFunction",functionName:"Aspect",supportWebGL:!0,support2D:!0,constructor:function(e){var t={raster:null};this.functionArguments=this.mixinIgnoreCase(t,e)},bind:function(){var e=this.getSourceRasterInfo();return e.raster?(this.rasterInfo=t.mixin(e.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"F32"),statistics:[{min:0,max:360}],histogram:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to aspect function is invalid.")},read2D:function(e){this._performance.start();var t=e.raster,r=o.aspect(t);return this._addPerformanceMetric(this._performance.elapsed()),r},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:s.aspect,fragmentName:"Aspect"});var t=this._setupTextureData(e.raster),r=this.bindFrameBuffer(),i=this.gl;i.bindTexture(i.TEXTURE_2D,t.texture);var n=i.drawingBufferWidth,a=i.drawingBufferHeight,o=t.extent,u=(o.xmax-o.xmin)/n,c=(o.ymax-o.ymin)/a;return this._setUniforms({u_resolution:[1/n,1/a],u_cellSize:[u,c]}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:t.extent,texture:r.texture}}})});