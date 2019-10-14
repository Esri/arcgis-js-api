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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView"],function(e,r,f,t,a,o,c,i,n,u){function m(e,r,f,t,a){return t.isWebMercator||t.isWGS84?(T(0,u.BufferViewVec3f.fromTypedArray(e),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(a)),a):(v.error("Cannot convert PCS spatial reference buffer to ECEF"),a)}function p(e,r,f,t,a){return t.isWebMercator||t.isWGS84?(T(1,u.BufferViewVec3f.fromTypedArray(e),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(a)),a):(v.error("Cannot convert to PCS spatial reference buffer from ECEF"),a)}function l(e,r,f){return n.bufferToBuffer(e,r,0,f,n.SphericalECEFSpatialReference,0,e.length/3),f}function s(e,r,f){return n.bufferToBuffer(e,n.SphericalECEFSpatialReference,0,r,f,0,e.length/3),r}function E(e,r,f){if(void 0===f&&(f=!1),e)for(var t=0;t<e.length;t+=3){for(var a=0;a<3;a++)C[a]=e[t+a];c.vec3.transformMat4(C,C,r),f&&c.vec3.normalize(C,C);for(var a=0;a<3;a++)e[t+a]=C[a]}}function V(e,r,f,t,a){if(!t.isWebMercator&&!t.isWGS84)return v.error("Cannot convert PCS spatial reference buffer to ECEF"),a;T(0,u.BufferViewVec3f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(var o=3;o<e.length;o+=4)a[o]=e[o];return a}function y(e,r,f,t,a){if(!t.isWebMercator&&!t.isWGS84)return v.error("Cannot convert to PCS spatial reference buffer from ECEF"),a;T(1,u.BufferViewVec3f.fromTypedArray(e,16),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(a,16));for(var o=3;o<e.length;o+=4)a[o]=e[o];return a}function T(e,r,f,a,o,i){if(r){var u=o.isWGS84,m=f.count;if(u)for(var p=0;p<m;p++)a.getVec(p,C),r.getVec(p,g),n.computeLinearTransformation(n.SphericalECEFSpatialReference,C,S,n.SphericalECEFSpatialReference),t.mat3.fromMat4(d,S),1===e&&t.mat3.transpose(d,d),c.vec3.transformMat3(g,g,d),i.setVec(p,g);else for(var p=0;p<m;p++){a.getVec(p,C),r.getVec(p,g),n.computeLinearTransformation(n.SphericalECEFSpatialReference,C,S,n.SphericalECEFSpatialReference),t.mat3.fromMat4(d,S);var l=n.webMercator.y2lat(f.get(p,1)),s=Math.cos(l);0===e&&(s=1/s),d[0]*=s,d[1]*=s,d[2]*=s,d[3]*=s,d[4]*=s,d[5]*=s,1===e&&t.mat3.transpose(d,d),c.vec3.transformMat3(g,g,d),c.vec3.normalize(g,g),i.setVec(p,g)}return i}}Object.defineProperty(r,"__esModule",{value:!0});var v=f.getLogger("esri.geometry.support.meshUtils.normalProjection");r.projectNormalToECEF=m,r.projectNormalFromECEF=p,r.projectToECEF=l,r.projectFromECEF=s,r.transformBufferInPlace=E,r.projectTangentToECEF=V,r.projectTangentFromECEF=y;var C=i.vec3f64.create(),g=i.vec3f64.create(),S=o.mat4f64.create(),d=a.mat3f64.create()});