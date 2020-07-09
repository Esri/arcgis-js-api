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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],(function(t,e,r,s,n,i,a){return t([r,i],{declaredClass:"esri.layers.rasterLib.function.ContrastBrightnessFunction",renderTexture:!0,functionName:"ContrastBrightness",supportWebGL:!0,support2D:!0,pixelType:"U8",constructor:function(t){this.functionArguments=this.mixinIgnoreCase({contrastOffset:0,brightnessOffset:0,raster:null},t)},bind:function(t){var r=this.getSourceRasterInfo(t);return r.raster?(this.rasterInfo=e.mixin(r.raster,{bandCount:r.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Processed",!0):new Error("The raster input to contrast and brightness function is invalid.")},read2D:function(t){var r=t.raster;if(null!==r&&null!==r.pixelBlock&&null!==r.pixelBlock.pixels){var s=a.contrastBrightnessStretch(r.pixelBlock,{contrastOffset:this.functionArguments.contrastOffset,brightnessOffset:this.functionArguments.brightnessOffset});return"Unknown"!==this.pixelType&&(s.pixelType=this.pixelType,s.pixels=s.pixels.map(e.hitch(this,(function(t){return this._clampBand(t,s.pixelType)})))),{extent:r.extent,pixelBlock:s}}},readGL:function(t){return this._cbGL(t.raster)},_cbGL:function(t){this._performance.start(),this._initializeProgram({fragment:n.contrastBrightness,fragmentName:"ContrastBrightness"});var e=this._setupTextureData(t),r=Math.min(Math.max(this.functionArguments.contrastOffset,-100),100),s=Math.min(Math.max(this.functionArguments.brightnessOffset,-100),100);this._setUniforms({u_contrastOffset:r,u_brightnessOffset:s,u_scaleFactor:this.renderTexture?255:1}),this._bindTexture(e.texture,"u_image");var i=this.bindFrameBuffer();return this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,texture:i.texture}}})}));