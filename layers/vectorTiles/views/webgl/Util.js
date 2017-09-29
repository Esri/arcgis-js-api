// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error"],function(e,r,t,n){var o=function(){function e(){}return e.vertexCount=function(r,t){return r.vertexBuffers[t].size/e.getStride(r.layout[t])},e.getStride=function(e){return e[0].stride},e.getBytesPerElement=function(e){switch(e){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1;default:throw new Error("Unknown data type")}},e.addDescriptor=function(r,t,n,o,i,u){var a=e.getBytesPerElement(o);if(r.length>0){var s=r[0].stride,f=s+a*n;r.forEach(function(e){return e.stride=f}),r.push({name:t,count:n,type:o,offset:s,stride:f,normalized:i,divisor:u})}else r.push({name:t,count:n,type:o,offset:0,stride:a*n,normalized:i,divisor:u})},e.assertCompatibleVertexAttributeLocations=function(e,r){var t=e.locations===r.locations;return t||console.error("VertexAttributeLocations are incompatible"),t},e.hasAttribute=function(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return!0;return!1},e.findAttribute=function(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return e[t];return null},e.copyFramebufferToTexture=function(e,r,t,n,o){void 0===o&&(o=0);var i=e.getBoundFramebufferObject(),u=e.getBoundTexture(0);e.bindFramebuffer(r),e.bindTexture(t,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,o,t.descriptor.pixelFormat,n[0],n[1],n[2],n[3],0),e.gl.flush(),e.bindFramebuffer(i),e.bindTexture(u,0)},e.assert=function(e,r){if(!e)throw new n(r)},e.setBaseInstanceOffset=function(e,r){var n={};for(var o in e)n[o]=e[o].map(function(e){return e.divisor?t({},e,{baseInstance:r}):e});return n},e}();return o});