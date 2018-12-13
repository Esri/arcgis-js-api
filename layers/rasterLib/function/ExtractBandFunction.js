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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin"],function(t,n,s,i,e,r){return t([s,r],{declaredClass:"esri.layers.rasterLib.function.ExtractBandFunction",functionName:"ExtractBand",supportWebGL:!0,support2D:!0,constructor:function(t){var n={bandIDs:[],missingBandAction:0,raster:null};this.functionArguments=this.mixinIgnoreCase(n,t)},bind:function(t){var s=this.getSourceRasterInfo(t);if(!s.raster)return new Error("The raster input to extract band function is invalid.");var i=[],e=s.raster.statistics,r=[],a=s.raster.histograms,u=this.functionArguments.bandIDs.length||s.raster.bandCount;return this.functionArguments.bandIDs.forEach(n.hitch(this,function(t){if(t>=u-1){if(1===this.functionArguments.missingBandAction)return new Error("missing band "+t);t=u-1}if(t<0)return new Error("missing band "+t);void 0!==e&&null!==e&&e.length>0&&i.push(e[t]),void 0!==a&&null!==a&&a.length>0&&r.push(a[t])})),this.rasterInfo=n.mixin(s.raster,{bandCount:u,pixelType:this._calculatePixelType(this.pixelType,s.raster.pixelType),statistics:i,histograms:r}),!0},read2D:function(t){var n=t.raster,s=this._clonePixelData(n);if(null!==s&&null!==s.pixelBlock&&null!==s.pixelBlock.pixels){this._performance.start();var i=s.pixelBlock,e=i.statistics,r=i.pixels,a=r.length;if(null==this.functionArguments.bandIDs)throw"missing bandIDs parameter";if(0===this.functionArguments.bandIDs.length)return s;var u=[],o=[];return this.functionArguments.bandIDs.forEach(function(t){if(t>=a-1){if(1===this.functionArguments.missingBandAction)throw"missing band "+t;t=a-1}if(t<0)throw"missing band "+t;u.push(r[t]),void 0!==e&&null!==e&&e.length>0&&o.push(e[t])}),i.pixels=u,i.statistics=o,i.planes=this.functionArguments.bandIDs.length,s}},readGL:function(t){if(this._performance.start(),null==this.functionArguments.bandIDs)throw"missing bandIDs parameter";if(this.functionArguments.bandIDs.length>3)throw"this version does not support more than 3 bands yet";this._initializeProgram({fragment:e.extractBand,fragmentName:"ExtractBand"});var n=this.functionArguments.bandIDs;1===n.length&&(n=[n[0],n[0],n[0]]),this._bandIDs=n,this._alterBand=!(0===this.functionArguments.bandIDs.length||0===n[0]&&1===n[1]&&2===n[2]);var s=!!(this._alterBand&&t.raster&&t.raster.texture),i=this._setupTextureData(t.raster,{bandIDs:n}),r=this.gl,a=this.bindFrameBuffer();return r.bindTexture(r.TEXTURE_2D,i.texture),s?this._setUniforms({u_bandIDs:n,u_alterBand:this._alterBand}):this._setUniforms({u_bandIDs:n,u_alterBand:!1}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:i.extent,texture:a.texture}}})});