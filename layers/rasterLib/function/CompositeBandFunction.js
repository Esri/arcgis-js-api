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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin"],(function(t,e,s,r,i,a){return t([s,a],{declaredClass:"esri.layers.rasterLib.function.CompositeBandFunction",functionName:"CompositeBand",supportWebGL:!0,support2D:!0,constructor:function(t){this.functionArguments=this.mixinIgnoreCase({rasters:null},t)},bind:function(t){var s=this.getSourceRasterInfo(t);if(!s.rasters)return new Error("The rasters input to composite band function is invalid.");var r,i=[],a=[],n=s.rasters.length;if(s.rasters[0].statistics)for(r=0;r<n;r++)i.push(s.rasters[r].statistics[0]);if(s.rasters[0].histograms)for(r=0;r<n;r++)a.push(s.rasters[r].histograms[0]);return this.rasterInfo=e.mixin(s.rasters[0],{bandCount:n,pixelType:this._calculatePixelType(this.pixelType,s.rasters[0].pixelType),statistics:i,histograms:a}),!0},read2D:function(t){var e=t.rasters;if(null!=e&&0!==e.length){var s,r,i,a,n=this._clonePixelData(e[0]),o=n.pixelBlock,l=[],u=[];for(i=0;i<e.length;i++)l.push(e[i].pixelBlock.pixels[0]),u.push(e[i].pixelBlock.statistics[0]);o.pixels=l,o.stackedStatistics=u,o.planes=e.length;var c=o.width*o.height;for(i=0;i<e.length;i++)if(r=e[i].pixelBlock.mask,s&&r)for(a=0;a<c;a++)s[a]&=r[a];else s=s||r;return n.maks=s,n}},readGL:function(t){this._performance.start(),this._initializeProgram({fragment:i.compositeBand,fragmentName:"CompositeBand"});var e=t.rasters;if(null!=e&&0!==e.length){var s,r,a,n=e.length,o=this.bindFrameBuffer();for(s=0;s<n;s++)r=this._setupTextureData(t.rasters[s],{notOriginal:s>0}),a=s>0?s.toString():"",this._bindTexture(r.texture,"u_image"+a);return this._setUniforms({u_rasterCount:n}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:r.extent,texture:o.texture}}}})}));