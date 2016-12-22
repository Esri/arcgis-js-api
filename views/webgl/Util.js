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

define(["require","exports"],function(e,r){var t=function(){function e(){}return e.vertexCount=function(r,t){return r.vertexBuffers[t].size/e.getStride(r.layout[t])},e.getStride=function(e){return e[0].stride},e.addDescriptor=function(e,r,t,n,i,o){var a=0;switch(n){case 5126:a=4;break;case 5124:a=4;break;case 5125:a=4;break;case 5122:a=2;break;case 5123:a=2;break;case 5120:a=1;break;case 5121:a=1;break;default:throw new Error("Unknown data type")}if(e.length>0){var u=e[0].stride,f=u+a*t;e.forEach(function(e){return e.stride=f}),e.push({name:r,count:t,type:n,offset:u,stride:f,normalized:i,divisor:o})}else e.push({name:r,count:t,type:n,offset:0,stride:a*t,normalized:i,divisor:o})},e.assertCompatibleVertexAttributeLocations=function(e,r){var t=e.locations===r.locations;return t||console.error("VertexAttributeLocations are incompatible"),t},e.hasAttribute=function(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return!0;return!1},e.findAttribute=function(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return e[t];return null},e.copyFramebufferToTexture=function(e,r,t,n,i){void 0===i&&(i=0);var o=e.getBoundFramebufferObject(),a=e.getBoundTexture(0);e.bindFramebuffer(r),e.bindTexture(t,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,i,t.descriptor.pixelFormat,n[0],n[1],n[2],n[3],0),e.gl.flush(),e.bindFramebuffer(o),e.bindTexture(a,0)},e}();return t});