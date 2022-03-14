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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./pixelShaders","./RasterFunctionX","./RasterFunctionWebGLMixin"],(function(t,e,r,n,i){return t([n,i],{declaredClass:"esri.layers.rasterLib.function.IdentityFunction",functionName:"Identity",supportWebGL:!0,support2D:!0,constructor:function(t){this.functionArguments={raster:null}},bind:function(t){var r=this.getSourceRasterInfo(t);return r.raster?(this.rasterInfo=e.mixin(r.raster,{}),!0):new Error("The raster input to identity function is invalid.")},read2D:function(t){return t.raster},readGL:function(t){this._initializeProgram({fragment:r.identity,fragmentName:"identity"});var e=this._setupTextureData(t.raster),n=this.bindFrameBuffer();return this._bindTexture(e.texture,"u_image"),this._drawGL(),{extent:e.extent,texture:n.texture}}})}));