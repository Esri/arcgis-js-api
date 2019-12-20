// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/compilerUtils"],function(e,r,t,i){function n(e,r){return e.vertexBuffers[r].size/o(e.layout[r])}function o(e){return e[0].stride}function a(e){switch(e){case 5126:case 5124:case 5125:return 4;case 5122:case 5123:return 2;case 5120:case 5121:return 1;default:throw new Error("Unknown data type")}}function s(e,r,t,i,n,o){var s=a(i);if(e.length>0){var u=e[0].stride,c=u+s*t;e.forEach(function(e){return e.stride=c}),e.push({name:r,count:t,type:i,offset:u,stride:c,normalized:n,divisor:o})}else e.push({name:r,count:t,type:i,offset:0,stride:s*t,normalized:n,divisor:o})}function u(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return!0;return!1}function c(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return e[t];return null}function f(e,r,t,i,n){void 0===n&&(n=0);var o=e.getBoundFramebufferObject(),a=e.getBoundTexture(0);e.bindFramebuffer(r),e.bindTexture(t,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,n,t.descriptor.pixelFormat,i[0],i[1],i[2],i[3],0),e.gl.flush(),e.bindFramebuffer(o),e.bindTexture(a,0)}function d(e,r){var i={};for(var n in e)i[n]=e[n].map(function(e){return e.divisor?t({},e,{baseInstance:r}):e});return i}function v(e,r,t,i,n){var o=e.gl,a=e.capabilities.instancing;e.bindBuffer(t);for(var s=0,u=i;s<u.length;s++){var c=u[s],f=r[c.name],d=(n||(0+c.baseInstance?c.baseInstance:0))*c.stride;if(void 0===f&&console.error("There is no location for vertex attribute '"+c.name+"' defined."),c.baseInstance&&!c.divisor&&console.error("Vertex attribute '"+c.name+"' uses baseInstanceOffset without divisor."),c.count<=4)o.vertexAttribPointer(f,c.count,c.type,c.normalized,c.stride,c.offset+d),o.enableVertexAttribArray(f),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(f,c.divisor);else if(9===c.count)for(var v=0;v<3;v++)o.vertexAttribPointer(f+v,3,c.type,c.normalized,c.stride,c.offset+12*v+d),o.enableVertexAttribArray(f+v),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(f+v,c.divisor);else if(16===c.count)for(var v=0;v<4;v++)o.vertexAttribPointer(f+v,4,c.type,c.normalized,c.stride,c.offset+16*v+d),o.enableVertexAttribArray(f+v),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(f+v,c.divisor);else console.error("Unsupported vertex attribute element count: "+c.count)}}function l(e,r,t,i){var n=e.gl,o=e.capabilities.instancing;e.bindBuffer(t);for(var a=0,s=i;a<s.length;a++){var u=s[a],c=r[u.name];if(u.count<=4)n.disableVertexAttribArray(c),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(c,0);else if(9===u.count)for(var f=0;f<3;f++)n.disableVertexAttribArray(c+f),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(c+f,0);else if(16===u.count)for(var f=0;f<4;f++)n.disableVertexAttribArray(c+f),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(c+f,0);else console.error("Unsupported vertex attribute element count: "+u.count)}e.unbindBuffer(34962)}function b(e){switch(e){case 6406:case 6409:return 1;case 6410:return 2;case 6407:return 3;case 6408:case 34041:return 4;case 33325:return 2;case 33326:case 35898:case 33327:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33189:return 2;case 34041:return 4;case 32854:return 2;case 36168:return 1;default:i.neverReached(e)}return 0}function m(e){if(!e)return 0;if("colorAttachment"in e)return e.glName?m(e.colorAttachment)+m(e.depthStencilAttachment):0;if("descriptor"in e)return e.glName?m(e.descriptor):0;var r=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!r)return 0;var t="hasMipmap"in e&&e.hasMipmap?1.3:1,i=e.width*e.height;return b(r)*i*t}Object.defineProperty(r,"__esModule",{value:!0}),r.vertexCount=n,r.getStride=o,r.getBytesPerElement=a,r.addDescriptor=s,r.hasAttribute=u,r.findAttribute=c,r.copyFramebufferToTexture=f,r.setBaseInstanceOffset=d,r.bindVertexBufferLayout=v,r.unbindVertexBufferLayout=l,r.getBytesPerElementFormat=b,r.getGpuMemoryUsage=m});