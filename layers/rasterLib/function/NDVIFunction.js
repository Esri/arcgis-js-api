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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./rasterIndex"],(function(e,t,n,r,i,s,a){return e([n,s],{declaredClass:"esri.layers.rasterLib.function.NDVIFunction",functionName:"NDVI",supportWebGL:!0,support2D:!0,constructor:function(e){this.functionArguments=this.mixinIgnoreCase({visibleBandID:1,infraredBandID:2,scaled:!0,raster:null},e)},bind:function(e){var n=this.getSourceRasterInfo(e);return n.raster&&n.raster.bandCount>1?(this.rasterInfo=t.mixin(n.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,this.scaled?"U8":"F32"),statistics:this.scaled?[{min:0,max:200}]:[{min:-1,max:1}],histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to ndvi function is invalid. It requires more than 1 band.")},read2D:function(e){this._performance.start();var t,n,r,i,s,d=e.raster,o=a.calculate(d.pixelBlock,{bandIndexes:[this.functionArguments.infraredBandID+1,this.functionArguments.visibleBandID+1].join(" "),method:1});if(this.functionArguments.scaled){if(t=o.pixels[0],r=o.mask,i=t.length,n=new Uint8Array(i),null==r)for(s=0;s<i;s++)n[s]=100*t[s]+100&255;else for(s=0;s<i;s++)r[s]&&(n[s]=100*t[s]+100&255);o.pixels[0]=n,o.pixelType="U8"}return this._addPerformanceMetric(this._performance.elapsed()),"Unknown"!==this.pixelType&&(o.pixelType=this.pixelType),{extent:d.extent,pixelBlock:o}},readGL:function(e){this._performance.start(),this._initializeProgram({fragment:i.ndvi,fragmentName:"NDVI"});var t=this.functionArguments.visibleBandID,n=this.functionArguments.infraredBandID,r=this.functionArguments.scaled||!1;this._alterBand=Math.max(n,t)>2;var s=this._alterBand?{bandIDs:[n,t,n]}:null,a=this._setupTextureData(e.raster,{bandIDs:s}),d=this.bindFrameBuffer();return this._alterBand?this._setUniforms({u_bandId_nir:0,u_bandId_red:1,u_scaled:r}):this._setUniforms({u_bandId_nir:n,u_bandId_red:t,u_scaled:r}),this._bindTexture(a.texture,"u_image"),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:a.extent,texture:d.texture}}})}));