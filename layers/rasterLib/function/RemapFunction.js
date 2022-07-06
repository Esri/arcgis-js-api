// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../../renderers/colorRampGenerator","./RasterFunctionX","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],(function(e,r,t,n,a,o,i){return e([n,o],{declaredClass:"esri.layers.rasterLib.function.RemapFunction",functionName:"Remap",pixelType:"U8",renderTexture:!1,supportWebGL:!0,support2D:!0,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({inputRanges:null,outputValues:null,outputColors:null,colorBreaks:null,raster:null},e)},bind:function(e){var t=this.getSourceRasterInfo(e);if(!t.raster)return new Error("The raster input is not available.");var n=!(!this.functionArguments.outputColors&&!this.functionArguments.colorBreaks);return this.rasterInfo=r.mixin(t.raster,{bandCount:n?3:1,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType=n?"Processed":"Thematic",!0},read2D:function(e){return this._remap(e.raster)},readGL:function(e){return this._remapGL(e.raster)},_remap:function(e){this._performance.start();var r=i.remapColor(e.pixelBlock,this.functionArguments.colorBreaks);return this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,pixelBlock:r}},_remapGL:function(e){this._performance.start(),this._initializeProgram({fragment:a.remap,fragmentName:"Remap"});var r=new Uint8Array(64),t=this.functionArguments.colorBreaks;t.forEach((function(e,t){r[4*t]=e.mappedColor[0],r[4*t+1]=e.mappedColor[1],r[4*t+2]=e.mappedColor[2],r[4*t+3]=e.mappedColor[3]<=1?255*e.mappedColor[3]:e.mappedColor[3]}));var n=t[t.length-1],o=n.mappedColor;r[60]=o[0],r[61]=o[1],r[62]=o[2],r[63]=o[3]<=1?255*o[3]:o[3];var i=new Float32Array(16);t.forEach((function(e,r){i[r]=e.value})),i[15]=n.value;this._clrTexture||(this._clrTexture=this._setupColormapTexture(r));var s=this._clrTexture,u=this.bindFrameBuffer(),l=this._setupTextureData(e);return this._setUniforms({u_indexedColormapOffset:0,u_indexedColormapMaxIndex:r.length/4-1,u_breaks:i}),this._bindTexture(s,"u_image1"),this._bindTexture(l.texture,"u_image"),this._drawGL(),{extent:l.extent,texture:u.texture}},_setupColormapTexture:function(e){var r,t=this._createTexture(),n=e.length/4,a=new Float32Array(e.length),o=this.renderTexture?255:1,i=this.gl;for(r=0;r<e.length;r++)a[r]=e[r]/o;return i.getExtension("OES_texture_float"),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,n,1,0,i.RGBA,i.FLOAT,a),t}})}));