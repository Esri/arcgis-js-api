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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../../WKIDUnitConversion","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./surfaceUtils"],(function(e,t,r,i,s,n,a,o){return e([r,a],{declaredClass:"esri.layers.rasterLib.function.AspectFunction",functionName:"Aspect",supportWebGL:!0,support2D:!0,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({raster:null},e)},bind:function(){var e=this.getSourceRasterInfo();return e.raster?(this.rasterInfo=t.mixin(e.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"F32"),statistics:[{min:0,max:360}],histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to aspect function is invalid.")},read2D:function(e){this._performance.start();var t=e.raster,r=o.aspect(t);return this._addPerformanceMetric(this._performance.elapsed()),r},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:n.aspect,fragmentName:"Aspect"});var t=this._setupTextureData(e.raster),r=this.bindFrameBuffer(),i=this.gl,s=i.drawingBufferWidth,a=i.drawingBufferHeight,o=t.extent,c=(o.xmax-o.xmin)/s,u=(o.ymax-o.ymin)/a,l=e&&e.raster&&e.raster.pixelBlock?[1/e.raster.pixelBlock.width,1/e.raster.pixelBlock.height]:[1/s,1/a];return this._setUniforms({u_resolution:l,u_cellSize:[c,u]}),this._bindTexture(t.texture,"u_image"),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:t.extent,texture:r.texture}}})}));