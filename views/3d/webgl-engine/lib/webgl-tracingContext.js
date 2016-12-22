// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define([],function(){function e(e){var n={},r=null,t=null,u=null,a=0,c=function(n,r){var t=n+"Original";e[t]=e[n],e[n]=function(){var n=e[t].apply(e,arguments);return r(n,arguments),n}};c("createTexture",function(e,r){void 0!==e&&null!==e&&(e._traceObjId=a++,n[e._traceObjId]={type:"texture",ref:e})}),c("deleteTexture",function(e,r){void 0!==r[0]._traceObjId&&delete n[r[0]._traceObjId]}),c("bindTexture",function(e,n){null!==n[1]&&(r=n[1]._traceObjId)});var i=function(n){switch(n){case e.DEPTH_COMPONENT:return 4;case e.ALPHA:return 1;case e.RGB:return 3;case e.RGBA:return 4;case e.LUMINANCE:return 1;case e.LUMINANCE_ALPHA:return 2}return 4};c("texImage2D",function(e,t){var u;null!==r&&(t[5]instanceof HTMLImageElement&&null!==r?(u=t[5],n[r].calcSize=u.width*u.height*i(arguments[2])):t[5]instanceof HTMLCanvasElement&&null!==r?(u=t[5],n[r].calcSize=u.width*u.height*i(arguments[2])):t.length>=9?n[r].calcSize=t[3]*t[4]*i(t[2]):console.log("texMem tracing: overload not yet implemented!"))}),c("generateMipmap",function(e,t){null!==r&&(n[r].isMipmapped=!0)}),c("createRenderbuffer",function(e,r){void 0!==e&&null!==e&&(e._traceObjId=a++,n[e._traceObjId]={type:"renderBuffer",ref:e})}),c("bindRenderbuffer",function(e,n){null!==n[1]&&(t=n[1]._traceObjId)}),c("renderbufferStorage",function(e,r){null!==t&&(n[t].calcSize=r[2]*r[3]*2)}),c("deleteRenderbuffer",function(e,r){void 0!==r[0]._traceObjId&&delete n[r[0]._traceObjId]}),c("createBuffer",function(e,r){void 0!==e&&null!==e&&(e._traceObjId=a++,n[e._traceObjId]={type:"VBO",ref:e})}),c("bindBuffer",function(e,n){null!==n[1]&&(u=n[1]._traceObjId)}),c("bufferData",function(r,t){null!==u&&(n[u].calcSize=e.getBufferParameter(e.ARRAY_BUFFER,e.BUFFER_SIZE))}),c("deleteBuffer",function(e,r){void 0!==r[0]._traceObjId&&delete n[r[0]._traceObjId]});var f=function(e){var r=0;for(var t in n)n[t].type===e&&void 0!==n[t].calcSize&&(r+=n[t].calcSize,n[t].isMipmapped&&(r+=.3333*n[t].calcSize));return r/1e6};return e.getUsedTextureMemory=function(){return f("texture")},e.getUsedTextureMemoryStats=function(){var e={};for(var r in n)if("texture"===n[r].type){var t=n[r].ref._debugTracingType||"untagged",u=0;void 0!==n[r].calcSize&&(u=n[r].calcSize,n[r].isMipmapped&&(u+=.3333*n[r].calcSize)),void 0===e[t]?e[t]=u/1e6:e[t]+=u/1e6}return e},e.getUsedRenderbufferMemory=function(){return f("renderBuffer")},e.getUsedVBOMemory=function(){return f("VBO")},e._isTracingEnabled=!0,e}return{makeTracingContext:e}});