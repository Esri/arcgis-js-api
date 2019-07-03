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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView"],function(e,r,f,t,n,o,a,c,i,u){function s(e,r,f,t,n){return t.isWebMercator||t.isWGS84?(E(0,new u.BufferViewVec3f(e.buffer,e.byteOffset),new u.BufferViewVec3f64(r.buffer,r.byteOffset),new u.BufferViewVec3f64(f.buffer,f.byteOffset),t,new u.BufferViewVec3f(n.buffer,n.byteOffset)),n):(v.error("Cannot convert PCS spatial reference buffer to ECEF"),n)}function b(e,r,f,t,n){return t.isWebMercator||t.isWGS84?(E(1,new u.BufferViewVec3f(e.buffer,e.byteOffset),new u.BufferViewVec3f64(r.buffer,r.byteOffset),new u.BufferViewVec3f64(f.buffer,f.byteOffset),t,new u.BufferViewVec3f(n.buffer,n.byteOffset)),n):(v.error("Cannot convert to PCS spatial reference buffer from ECEF"),n)}function l(e,r,f){return i.bufferToBuffer(e,r,0,f,i.SphericalECEFSpatialReference,0,e.length/3),f}function V(e,r,f){return i.bufferToBuffer(e,i.SphericalECEFSpatialReference,0,r,f,0,e.length/3),r}function m(e,r,f){if(void 0===f&&(f=!1),e)for(var t=0;t<e.length;t+=3){for(var n=0;n<3;n++)C[n]=e[t+n];a.vec3.transformMat4(C,C,r),f&&a.vec3.normalize(C,C);for(var n=0;n<3;n++)e[t+n]=C[n]}}function w(e,r,f,t,n){if(!t.isWebMercator&&!t.isWGS84)return v.error("Cannot convert PCS spatial reference buffer to ECEF"),n;E(0,new u.BufferViewVec3f(e.buffer,e.byteOffset,16),new u.BufferViewVec3f64(r.buffer,r.byteOffset),new u.BufferViewVec3f64(f.buffer,f.byteOffset),t,new u.BufferViewVec3f(n.buffer,n.byteOffset,16));for(var o=3;o<e.length;o+=4)n[o]=e[o];return n}function p(e,r,f,t,n){if(!t.isWebMercator&&!t.isWGS84)return v.error("Cannot convert to PCS spatial reference buffer from ECEF"),n;E(1,new u.BufferViewVec3f(e.buffer,e.byteOffset,16),new u.BufferViewVec3f64(r.buffer,r.byteOffset),new u.BufferViewVec3f64(f.buffer,f.byteOffset),t,new u.BufferViewVec3f(n.buffer,n.byteOffset,16));for(var o=3;o<e.length;o+=4)n[o]=e[o];return n}function E(e,r,f,n,o,c){if(r){var u=o.isWGS84,s=f.count;if(u)for(var b=0;b<s;b++)n.getVec(b,C),r.getVec(b,g),i.computeLinearTransformation(i.SphericalECEFSpatialReference,C,S,i.SphericalECEFSpatialReference),t.mat3.fromMat4(B,S),1===e&&t.mat3.transpose(B,B),a.vec3.transformMat3(g,g,B),c.setVec(b,g);else for(var b=0;b<s;b++){n.getVec(b,C),r.getVec(b,g),i.computeLinearTransformation(i.SphericalECEFSpatialReference,C,S,i.SphericalECEFSpatialReference),t.mat3.fromMat4(B,S);var l=i.webMercator.y2lat(f.get(b,1)),V=Math.cos(l);0===e&&(V=1/V),B[0]*=V,B[1]*=V,B[2]*=V,B[3]*=V,B[4]*=V,B[5]*=V,1===e&&t.mat3.transpose(B,B),a.vec3.transformMat3(g,g,B),a.vec3.normalize(g,g),c.setVec(b,g)}return c}}Object.defineProperty(r,"__esModule",{value:!0});var v=f.getLogger("esri.geometry.support.meshUtils.normalProjection");r.projectNormalToECEF=s,r.projectNormalFromECEF=b,r.projectToECEF=l,r.projectFromECEF=V,r.transformBufferInPlace=m,r.projectTangentToECEF=w,r.projectTangentFromECEF=p;var C=c.vec3f64.create(),g=c.vec3f64.create(),S=o.mat4f64.create(),B=n.mat3f64.create()});