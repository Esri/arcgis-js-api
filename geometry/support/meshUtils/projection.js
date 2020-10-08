// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView"],(function(e,r,f,o,t,a,c,i,n,m){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.projectTangentFromECEF=r.projectTangentToECEF=r.transformBufferInPlace=r.projectFromECEF=r.projectToECEF=r.projectNormalFromECEF=r.projectNormalToECEF=void 0;var p=f.getLogger("esri.geometry.support.meshUtils.normalProjection");function u(e,r,f,t,a,i){if(r){var m=a.isWGS84,p=f.count;if(m)for(var u=0;u<p;u++)t.getVec(u,E),r.getVec(u,l),n.computeLinearTransformation(n.SphericalECEFSpatialReference,E,s,n.SphericalECEFSpatialReference),o.mat3.fromMat4(V,s),1===e&&o.mat3.transpose(V,V),c.vec3.transformMat3(l,l,V),i.setVec(u,l);else for(u=0;u<p;u++){t.getVec(u,E),r.getVec(u,l),n.computeLinearTransformation(n.SphericalECEFSpatialReference,E,s,n.SphericalECEFSpatialReference),o.mat3.fromMat4(V,s);var y=n.webMercator.y2lat(f.get(u,1)),T=Math.cos(y);0===e&&(T=1/T),V[0]*=T,V[1]*=T,V[2]*=T,V[3]*=T,V[4]*=T,V[5]*=T,1===e&&o.mat3.transpose(V,V),c.vec3.transformMat3(l,l,V),c.vec3.normalize(l,l),i.setVec(u,l)}return i}}r.projectNormalToECEF=function(e,r,f,o,t){return o.isWebMercator||o.isWGS84?(u(0,m.BufferViewVec3f.fromTypedArray(e),m.BufferViewVec3f64.fromTypedArray(r),m.BufferViewVec3f64.fromTypedArray(f),o,m.BufferViewVec3f.fromTypedArray(t)),t):(p.error("Cannot convert PCS spatial reference buffer to ECEF"),t)},r.projectNormalFromECEF=function(e,r,f,o,t){return o.isWebMercator||o.isWGS84?(u(1,m.BufferViewVec3f.fromTypedArray(e),m.BufferViewVec3f64.fromTypedArray(r),m.BufferViewVec3f64.fromTypedArray(f),o,m.BufferViewVec3f.fromTypedArray(t)),t):(p.error("Cannot convert to PCS spatial reference buffer from ECEF"),t)},r.projectToECEF=function(e,r,f){return n.bufferToBuffer(e,r,0,f,n.SphericalECEFSpatialReference,0,e.length/3),f},r.projectFromECEF=function(e,r,f){return n.bufferToBuffer(e,n.SphericalECEFSpatialReference,0,r,f,0,e.length/3),r},r.transformBufferInPlace=function(e,r,f){if(void 0===f&&(f=!1),e)for(var o=0;o<e.length;o+=3){for(var t=0;t<3;t++)E[t]=e[o+t];c.vec3.transformMat4(E,E,r),f&&c.vec3.normalize(E,E);for(t=0;t<3;t++)e[o+t]=E[t]}},r.projectTangentToECEF=function(e,r,f,o,t){if(!o.isWebMercator&&!o.isWGS84)return p.error("Cannot convert PCS spatial reference buffer to ECEF"),t;u(0,m.BufferViewVec3f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),m.BufferViewVec3f64.fromTypedArray(r),m.BufferViewVec3f64.fromTypedArray(f),o,m.BufferViewVec3f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT));for(var a=3;a<e.length;a+=4)t[a]=e[a];return t},r.projectTangentFromECEF=function(e,r,f,o,t){if(!o.isWebMercator&&!o.isWGS84)return p.error("Cannot convert to PCS spatial reference buffer from ECEF"),t;u(1,m.BufferViewVec3f.fromTypedArray(e,16),m.BufferViewVec3f64.fromTypedArray(r),m.BufferViewVec3f64.fromTypedArray(f),o,m.BufferViewVec3f.fromTypedArray(t,16));for(var a=3;a<e.length;a+=4)t[a]=e[a];return t};var E=i.vec3f64.create(),l=i.vec3f64.create(),s=a.mat4f64.create(),V=t.mat3f64.create()}));