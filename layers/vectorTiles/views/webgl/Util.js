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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error"],(function(e,r,t,n){return function(){function e(){}return e.vertexCount=function(r,t){return r.vertexBuffers[t].size/e.getStride(r.layout[t])},e.getStride=function(e){return e[0].stride},e.getBytesPerElement=function(e){switch(e){case 5126:case 5124:case 5125:return 4;case 5122:case 5123:return 2;case 5120:case 5121:return 1;default:throw new Error("Unknown data type")}},e.addDescriptor=function(r,t,n,i,o,s){var a=e.getBytesPerElement(i);if(r.length>0){var u=r[0].stride,f=u+a*n;r.forEach((function(e){return e.stride=f})),r.push({name:t,count:n,type:i,offset:u,stride:f,normalized:o,divisor:s})}else r.push({name:t,count:n,type:i,offset:0,stride:a*n,normalized:o,divisor:s})},e.assertCompatibleVertexAttributeLocations=function(e,r){var t=e.locations===r.locations;return t||console.error("VertexAttributeLocations are incompatible"),t},e.hasAttribute=function(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return!0;return!1},e.findAttribute=function(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return e[t];return null},e.copyFramebufferToTexture=function(e,r,t,n,i){void 0===i&&(i=0);var o=e.getBoundFramebufferObject(),s=e.getBoundTexture(0);e.bindFramebuffer(r),e.bindTexture(t,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,i,t.descriptor.pixelFormat,n[0],n[1],n[2],n[3],0),e.gl.flush(),e.bindFramebuffer(o),e.bindTexture(s,0)},e.assert=function(e,r){if(!e)throw new n(r)},e.setBaseInstanceOffset=function(e,r){var n={};for(var i in e)n[i]=e[i].map((function(e){return e.divisor?t({},e,{baseInstance:r}):e}));return n},e.bindVertexBufferLayout=function(e,r,t,n,i){var o=e.gl,s=e.capabilities.instancing;e.bindBuffer(t),n.forEach((function(e){var t=r[e.name],n=(i||(0+e.baseInstance?e.baseInstance:0))*e.stride;if(void 0===t&&console.error("There is no location for vertex attribute '"+e.name+"' defined."),e.baseInstance&&!e.divisor&&console.error("Vertex attribute '"+e.name+"' uses baseInstanceOffset without divisor."),e.count<=4)o.vertexAttribPointer(t,e.count,e.type,e.normalized,e.stride,e.offset+n),o.enableVertexAttribArray(t),e.divisor&&e.divisor>0&&s&&s.vertexAttribDivisor(t,e.divisor);else if(9===e.count)for(var a=0;a<3;a++)o.vertexAttribPointer(t+a,3,e.type,e.normalized,e.stride,e.offset+12*a+n),o.enableVertexAttribArray(t+a),e.divisor&&e.divisor>0&&s&&s.vertexAttribDivisor(t+a,e.divisor);else if(16===e.count)for(a=0;a<4;a++)o.vertexAttribPointer(t+a,4,e.type,e.normalized,e.stride,e.offset+16*a+n),o.enableVertexAttribArray(t+a),e.divisor&&e.divisor>0&&s&&s.vertexAttribDivisor(t+a,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}))},e.unbindVertexBufferLayout=function(e,r,t,n){var i=e.gl;e.bindBuffer(t),n.forEach((function(e){var t=r[e.name];if(e.count<=4)i.disableVertexAttribArray(t);else if(9===e.count)for(var n=0;n<3;n++)i.disableVertexAttribArray(t+n);else if(16===e.count)for(n=0;n<4;n++)i.disableVertexAttribArray(t+n);else console.error("Unsupported vertex attribute element count: "+e.count)})),e.unbindBuffer(34962)},e}()}));