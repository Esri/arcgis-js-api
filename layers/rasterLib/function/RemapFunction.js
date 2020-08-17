// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","../../../renderers/colorRampGenerator","./RasterFunctionX","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],(function(e,r,t,n,a,s,o){return e([n,s],{declaredClass:"esri.layers.rasterLib.function.RemapFunction",functionName:"Remap",pixelType:"U8",renderTexture:!1,supportWebGL:!0,support2D:!0,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({inputRanges:null,outputValues:null,outputColors:null,colorBreaks:null,raster:null},e)},bind:function(e){var t=this.getSourceRasterInfo(e);if(!t.raster)return new Error("The raster input is not available.");var n=!(!this.functionArguments.outputColors&&!this.functionArguments.colorBreaks);return this.rasterInfo=r.mixin(t.raster,{bandCount:n?3:1,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType=n?"Processed":"Thematic",!0},read2D:function(e){return this._remap(e.raster)},readGL:function(e){return this._remapGL(e.raster)},_remap:function(e){this._performance.start();var r=o.remapColor(e.pixelBlock,this.functionArguments.colorBreaks);return this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,pixelBlock:r}},_remapGL:function(e){this._performance.start(),this._initializeProgram({fragment:a.remap,fragmentName:"Remap"});var r=[],t=this.functionArguments.colorBreaks;t.forEach((function(e){r.push(e.mappedColor[0]),r.push(e.mappedColor[1]),r.push(e.mappedColor[2]),r.push(e.mappedColor[3]<=1?255*e.mappedColor[3]:e.mappedColor[3])}));var n=new Float32Array(16);t.forEach((function(e,r){n[r]=e.value})),n[15]=t[t.length-1].value;this._clrTexture||(this._clrTexture=this._setupColormapTexture(r));var s=this._clrTexture,o=this.bindFrameBuffer(),i=this._setupTextureData(e);return this._setUniforms({u_indexedColormapOffset:0,u_indexedColormapMaxIndex:r.length/4-1,u_breaks:n}),this._bindTexture(s,"u_image1"),this._bindTexture(i.texture,"u_image"),this._drawGL(),{extent:i.extent,texture:o.texture}},_setupColormapTexture:function(e){var r,t=this._createTexture(),n=e.length/4,a=new Float32Array(e.length),s=this.renderTexture?255:1,o=this.gl;for(r=0;r<e.length;r++)a[r]=e[r]/s;return o.getExtension("OES_texture_float"),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,n,1,0,o.RGBA,o.FLOAT,a),t}})}));
