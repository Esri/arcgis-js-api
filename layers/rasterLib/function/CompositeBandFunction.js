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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin"],(function(t,e,r,s,i,a){return t([r,a],{declaredClass:"esri.layers.rasterLib.function.CompositeBandFunction",functionName:"CompositeBand",supportWebGL:!0,support2D:!0,constructor:function(t){this.functionArguments=this.mixinIgnoreCase({rasters:null},t)},bind:function(t){var r=this.getSourceRasterInfo(t);if(!r.rasters)return new Error("The rasters input to composite band function is invalid.");var s,i=[],a=[],n=r.rasters.length;if(r.rasters[0].statistics)for(s=0;s<n;s++)i.push(r.rasters[s].statistics[0]);if(r.rasters[0].histograms)for(s=0;s<n;s++)a.push(r.rasters[s].histograms[0]);return this.rasterInfo=e.mixin(r.rasters[0],{bandCount:n,pixelType:this._calculatePixelType(this.pixelType,r.rasters[0].pixelType),statistics:i,histograms:a}),!0},read2D:function(t){var e=t.rasters;if(null!=e&&0!==e.length){var r,s,i,a,n=this._clonePixelData(e[0]),o=n.pixelBlock,l=[],u=[];for(i=0;i<e.length;i++)l.push(e[i].pixelBlock.pixels[0]),u.push(e[i].pixelBlock.statistics[0]);o.pixels=l,o.stackedStatistics=u,o.planes=e.length;var c=o.width*o.height;for(i=0;i<e.length;i++)if(s=e[i].pixelBlock.mask,r&&s)for(a=0;a<c;a++)r[a]&=s[a];else r=r||s;return n.maks=r,n}},readGL:function(t){this._performance.start(),this._initializeProgram({fragment:i.compositeBand,fragmentName:"CompositeBand"});var e=t.rasters;if(null!=e&&0!==e.length){var r,s,a,n,o=e.length,l=this.gl,u=this.bindFrameBuffer();for(r=0;r<o;r++)s=this._setupTextureData(t.rasters[r],{notOriginal:r>0}),a=r>0?r.toString():"",n=l.getUniformLocation(this.rasterProgram,"u_image"+a),l.uniform1i(n,r),l.activeTexture(l.TEXTURE0+r),l.bindTexture(l.TEXTURE_2D,s.texture);return this._setUniforms({u_rasterCount:o}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:s.extent,texture:u.texture}}}})}));