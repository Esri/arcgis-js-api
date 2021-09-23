/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/maybe"],(function(e,t,r){"use strict";function i(e,t){return e.vertexBuffers[t].size/s(e.layout[t])}function s(e){return e[0].stride}function n(e,t,r,i,s){const n=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);for(const a of i){const e=t.get(a.name);void 0===e&&console.error(`There is no location for vertex attribute '${a.name}' defined.`),a.baseInstance&&!a.divisor&&console.error(`Vertex attribute '${a.name}' uses baseInstanceOffset without divisor.`);const r=(s||(0+a.baseInstance?a.baseInstance:0))*a.stride;if(a.count<=4)n.vertexAttribPointer(e,a.count,a.type,a.normalized,a.stride,a.offset+r),n.enableVertexAttribArray(e),a.divisor>0&&o&&o.vertexAttribDivisor(e,a.divisor);else if(9===a.count)for(let t=0;t<3;t++)n.vertexAttribPointer(e+t,3,a.type,a.normalized,a.stride,a.offset+12*t+r),n.enableVertexAttribArray(e+t),a.divisor>0&&o&&o.vertexAttribDivisor(e+t,a.divisor);else if(16===a.count)for(let t=0;t<4;t++)n.vertexAttribPointer(e+t,4,a.type,a.normalized,a.stride,a.offset+16*t+r),n.enableVertexAttribArray(e+t),a.divisor>0&&o&&o.vertexAttribDivisor(e+t,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)}}function o(e,t,r,i){const s=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const o of i){const e=t.get(o.name);if(o.count<=4)s.disableVertexAttribArray(e),o.divisor&&o.divisor>0&&n&&n.vertexAttribDivisor(e,0);else if(9===o.count)for(let t=0;t<3;t++)s.disableVertexAttribArray(e+t),o.divisor&&o.divisor>0&&n&&n.vertexAttribDivisor(e+t,0);else if(16===o.count)for(let t=0;t<4;t++)s.disableVertexAttribArray(e+t),o.divisor&&o.divisor>0&&n&&n.vertexAttribDivisor(e+t,0);else console.error("Unsupported vertex attribute element count: "+o.count)}e.unbindBuffer(34962)}function a(e){switch(e){case 6406:case 6409:case 36168:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34837:return 12;case 34836:return 16;case 33776:case 33777:return.5;case 33778:case 33779:return 1;case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5;case 37490:case 37491:case 37496:case 37497:return 1}return 0}function c(e){if(r.isNone(e))return 0;if("descriptor"in e)return e.glName?c(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const i="hasMipmap"in e&&e.hasMipmap?1.3:1,s=e.width*e.height;return a(t)*s*i}e.bindVertexBufferLayout=n,e.getBytesPerElementFormat=a,e.getGpuMemoryUsage=c,e.getStride=s,e.unbindVertexBufferLayout=o,e.vertexCount=i,Object.defineProperty(e,"__esModule",{value:!0})}));
