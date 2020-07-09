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

define(["dojo/_base/declare","dojo/_base/lang","./pixelShaders","./RasterFunctionX","./RasterFunctionWebGLMixin"],(function(e,r,t,i,a){return e([i,a],{declaredClass:"esri.layers.rasterLib.function.ResampleFunction",renderTexture:!0,resamplingType:0,resamplingOrigin:null,resamplingRatio:null,zFactor:1,functionName:"Resample",supportWebGL:!0,support2D:!1,constructor:function(e){},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:t.mask,fragmentName:"Mask"});var r,i,a=this._setupTextureData(e.raster),n=this.bindFrameBuffer(),s=this.gl;s.bindTexture(s.TEXTURE_2D,a.texture);var o=s.drawingBufferWidth,u=s.drawingBufferHeight,l=e.raster;void 0!==l.pixelBlock?(a=a||this._setupTextureData(l),r=l.pixelBlock.width,i=l.pixelBlock.height):(a=a||l,r=o,i=u);var p=this.resamplingRatio||[r/o,i/u],c=this.resamplingOrigin||[0,1];return this._setUniforms({u_resamplingRatio:p,u_anchor:c,u_resamplingType:this.resamplingType,u_resolution:[1/o,1/u]}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:a.extent,texture:n.texture}}})}));