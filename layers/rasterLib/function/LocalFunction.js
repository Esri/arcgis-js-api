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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],(function(t,e,r,n,a,i,o){return t([r,i],{declaredClass:"esri.layers.rasterLib.function.LocalFunction",functionName:"Local",supportWebGL:!0,support2D:!0,constructor:function(t){this.functionArguments=this.mixinIgnoreCase({operation:null,rasters:null},t)},bind:function(t){var r=this.getSourceRasterInfo(t),n=0;if(r.raster?n=r.raster.bandCount:r.rasters&&(n=Math.max.apply(null,r.rasters.map((function(t){return t.bandCount})))),0===n)return new Error("The raster input to local function is invalid. It only takes single band input.");var a=r.raster||r.rasters.filter((function(t){return!!t.extent}))[0];return this.rasterInfo=e.mixin(a,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"F32"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0},read2D:function(t){var r=[],n=(r=t.raster?t.raster2?[t.raster,t.raster2]:[t.raster]:t.rasters).map((function(t){return t.pixelBlock})),a=this.functionArguments.operation;if(null===a)return r[0];this._performance.start();var i,u=this._getOperations(),c=u.operators[a-1],s=u.functors[a-1];if(this.functionArguments.rasters){if(999!==c&&this.functionArguments.rasters.length!==c)throw"number of rasters does not meet (short or exceed) the operation requirment, require "+c}else if(1!==c)throw"no sufficient rasters, require "+c;return i=31===a?o.isNull(n[0]):50===a?o.setNull(n[0]):o.local(n,{rasterCountNeeded:c,functor:s}),"Unknown"!==this.pixelType&&(i.pixelType=this.pixelType,i.pixels=i.pixels.map(e.hitch(this,(function(t){return this._clampBand(t,i.pixelType)})))),i.statistics||i.calculateStatistics(),{extent:r[0].extent,pixelBlock:i}},readGL:function(t){this._performance.start();var e=this.functionArguments.operation,r=this._getWebGLOperations(),n=r.operators[e-1],i=r.functors[e-1],o=a.local,u="vec4 replaceme"+n+";",c="result="+i+";";31!==e&&50!==e&&(c+="result = vec4(result.rgb, a.a);"),o=o.replace(u,c);var s=this.gl.getParameter(this.gl.VERSION),l="";(s.toLowerCase().indexOf("webgl 1.0")>-1||s.toLowerCase().indexOf("webgl 0.")>-1)&&(l=this._getPolyfill(e)),o=o.replace("vec4 polyfill;",l),n>1&&(o=o.replace("gl_FragColor = localOp1();","gl_FragColor = localOp1();".replace("1",n.toString()))),this._initializeProgram({fragment:o,fragmentName:"Local"});var f=t.rasters;if(null!=f&&0!==f.length){var h,p,x,v=f.length,b=this.bindFrameBuffer();for(h=0;h<v;h++)x=h>0?h.toString():"",p=this._setupTextureData(t.rasters[h],{reCreate:!0}),this._bindTexture(p.texture,"u_image"+x);return this._setUniforms({}),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:p.extent,texture:b.texture}}},_getOperations:function(){return{operators:[2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,1,1,1,1,999,999,1,1,999,1,1,2,2,2,999,999,999,999,999,999,999,999,999,999,3],functors:[function(t,e){return t+e},function(t,e){return t-e},function(t,e){return t*e},function(t){return Math.sqrt(t)},function(t,e){return Math.pow(t,e)},function(t){return Math.acos(t)},function(t){return Math.asin(t)},function(t){return Math.atan(t)},function(t){return Math.atanh(t)},function(t){return Math.abs(t)},function(t,e){return t&e},function(t,e){return t<<e},function(t){return~t},function(t,e){return t|e},function(t,e){return t>>e},function(t,e){return t^e},function(t,e){return t&&e},function(t){return!t},function(t,e){return t||e},function(t,e){return t!=e},function(t){return Math.cos(t)},function(t,e){return Math.cosh(t)},function(t,e){return t/e},function(t,e){return t==e},function(t){return Math.exp(t)},function(t){return Math.pow(10,t)},function(t){return Math.pow(2,t)},function(t,e){return t>e?1:0},function(t,e){return t>=e?1:0},function(t,e){return Math.floor(t)},function(t){return!t},function(t){return t},function(t,e){return t<e?1:0},function(t,e){return t<=e?1:0},function(t){return Math.log(t)},function(t,e){return Math.log10(t)},function(t,e){return Math.log2(t)},999,999,999,999,999,999,function(t,e){return t%e},function(t){return-t},function(t,e){return t!=e?1:0},999,function(t,e){return Math.floor(t)},function(t,e){return Math.ceil(t)},function(t,e){return e?0:t},function(t,e){return Math.sin(t)},function(t,e){return Math.sinh(t)},function(t,e){return t*t},999,999,function(t){return Math.tan(t)},function(t){return Math.tanh(t)},999,function(t){return Math.acosh(t)},function(t){return Math.asinh(t)},function(t,e){return Math.atan2(t,e)},function(t,e){return t/e},function(t,e){return Math.floor(t/e)},999,999,999,999,999,999,999,999,999,999,function(t,e,r){return t?e:r}]}},_polyfill:{sinh:["vec4 sinh(vec4 x) {","vec4 halfexp = exp(x)/2.0;","return halfexp - 1.0/halfexp;","}"].join("\n"),asinh:["vec4 asinh(vec4 x) {","vec4 halfexp = exp(x)/2.0;","return 1.0/(halfexp - 1.0/halfexp);","}"].join("\n"),cosh:["vec4 cosh(vec4 x) {","vec4 halfexp = exp(x)/2.0;","return halfexp + 1.0/halfexp;","}"].join("\n"),acosh:["vec4 acosh(vec4 x) {","vec4 halfexp = exp(x)/2.0;","return 1.0/(halfexp + 1.0/halfexp);","}"].join("\n"),tanh:["vec4 tanh(vec4 x) {","vec4 expx = exp(x);","return (expx - 1.0/expx)/(expx + 1.0/expx);","}"].join("\n"),atanh:["vec4 atanh(vec4 x) {","vec4 expx = exp(x);","return (expx + 1.0/expx)/(expx - 1.0/expx);","}"].join("\n")},_getPolyfill:function(t){var e="";switch(t){case 9:e=this._polyfill.atanh;break;case 22:e=this._polyfill.cosh;break;case 52:e=this._polyfill.sinh;break;case 57:e=this._polyfill.tanh;break;case 59:e=this._polyfill.acosh;break;case 60:e=this._polyfill.asinh}return e},_getWebGLOperations:function(){return{operators:[2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,1,1,1,1,999,999,1,1,999,1,1,2,2,2,999,999,999,999,999,999,999,999,999,999,3],functors:["(a + b)","(a - b)","(a * b)","sqrt(a)","pow(a, b)","acos(a)","asin(a)","atan(a)","atanh(a)","abs(a)","a","a","a","a","a","a","(a.r==0.0 || b.r==0.0) ? vec4(0.0,0.0,0.0,a.a) : vec4(1.0,1.0,1.0,a.a)","a.r==0.0?vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","(a.r==0.0 && b.r==0.0) ? vec4(0.0,0.0,0.0,a.a) : vec4(1.0,1.0,1.0,a.a)","(a.r==0.0 ^^ b.r==0.0) ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","cos(a)","cosh(a)","a / b","a.r == b.r? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","exp(a)","pow(10.0, a)","pow(2.0, a)","a.r > b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","a.r >= b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","floor(a)","a.a == 0.0? vec4(1.0,1.0,1.0,1.0) : vec4(0.0,0.0,0.0,1.0)","a","a.r < b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","a.r <= b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","log(a)","log2(a) / log2(10.0)","log2(a)",999,999,999,999,999,999,"mod(a, b)","-a","a.r != b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)",999,"floor(a)","ceil(a)","a.r != 0.0 ? vec4(0.0,0.0,0.0,0.0) : a","sin(a)","sinh(a)","a * a",999,999,"tan(a)","tanh(a)",999,"acosh(a)","asinh(a)","atan(a, b)","a / b","floor(a / b)",999,999,999,999,999,999,999,999,999,999,"a.r!=0 ? b : c"]}}})}));