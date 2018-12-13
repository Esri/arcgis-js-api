// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error"],function(e,r,t,i){function n(e,r){return e.vertexBuffers[r].size/o(e.layout[r])}function o(e){return e[0].stride}function s(e){switch(e){case 5126:case 5124:case 5125:return 4;case 5122:case 5123:return 2;case 5120:case 5121:return 1;default:throw new Error("Unknown data type")}}function a(e,r,t,i,n,o){var a=s(i);if(e.length>0){var u=e[0].stride,f=u+a*t;e.forEach(function(e){return e.stride=f}),e.push({name:r,count:t,type:i,offset:u,stride:f,normalized:n,divisor:o})}else e.push({name:r,count:t,type:i,offset:0,stride:a*t,normalized:n,divisor:o})}function u(e,r){var t=e.locations===r.locations;return t||console.error("VertexAttributeLocations are incompatible"),t}function f(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return!0;return!1}function c(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return e[t];return null}function d(e,r,t,i,n){void 0===n&&(n=0);var o=e.getBoundFramebufferObject(),s=e.getBoundTexture(0);e.bindFramebuffer(r),e.bindTexture(t,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,n,t.descriptor.pixelFormat,i[0],i[1],i[2],i[3],0),e.gl.flush(),e.bindFramebuffer(o),e.bindTexture(s,0)}function v(e,r){if(!e)throw new i(r)}function b(e,r){var i={};for(var n in e)i[n]=e[n].map(function(e){return e.divisor?t({},e,{baseInstance:r}):e});return i}function l(e,r,t,i,n){var o=e.gl,s=e.capabilities.instancing;e.bindBuffer(t),i.forEach(function(e){var t=r[e.name],i=(n||(0+e.baseInstance?e.baseInstance:0))*e.stride;if(void 0===t&&console.error("There is no location for vertex attribute '"+e.name+"' defined."),e.baseInstance&&!e.divisor&&console.error("Vertex attribute '"+e.name+"' uses baseInstanceOffset without divisor."),e.count<=4)o.vertexAttribPointer(t,e.count,e.type,e.normalized,e.stride,e.offset+i),o.enableVertexAttribArray(t),e.divisor&&e.divisor>0&&s&&s.vertexAttribDivisor(t,e.divisor);else if(9===e.count)for(var a=0;a<3;a++)o.vertexAttribPointer(t+a,3,e.type,e.normalized,e.stride,e.offset+12*a+i),o.enableVertexAttribArray(t+a),e.divisor&&e.divisor>0&&s&&s.vertexAttribDivisor(t+a,e.divisor);else if(16===e.count)for(var a=0;a<4;a++)o.vertexAttribPointer(t+a,4,e.type,e.normalized,e.stride,e.offset+16*a+i),o.enableVertexAttribArray(t+a),e.divisor&&e.divisor>0&&s&&s.vertexAttribDivisor(t+a,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)})}function x(e,r,t,i){var n=e.gl,o=e.capabilities.instancing;e.bindBuffer(t),i.forEach(function(e){var t=r[e.name];if(e.count<=4)n.disableVertexAttribArray(t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(t,0);else if(9===e.count)for(var i=0;i<3;i++)n.disableVertexAttribArray(t+i),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(t+i,0);else if(16===e.count)for(var i=0;i<4;i++)n.disableVertexAttribArray(t+i),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(t+i,0);else console.error("Unsupported vertex attribute element count: "+e.count)}),e.unbindBuffer(34962)}Object.defineProperty(r,"__esModule",{value:!0}),r.vertexCount=n,r.getStride=o,r.getBytesPerElement=s,r.addDescriptor=a,r.assertCompatibleVertexAttributeLocations=u,r.hasAttribute=f,r.findAttribute=c,r.copyFramebufferToTexture=d,r.assert=v,r.setBaseInstanceOffset=b,r.bindVertexBufferLayout=l,r.unbindVertexBufferLayout=x});