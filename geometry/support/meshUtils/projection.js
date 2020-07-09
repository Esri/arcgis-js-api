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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView"],(function(e,r,f,t,o,a,c,i,n,u){Object.defineProperty(r,"__esModule",{value:!0});var m=f.getLogger("esri.geometry.support.meshUtils.normalProjection");function p(e,r,f,o,a,i){if(r){var u=a.isWGS84,m=f.count;if(u)for(var p=0;p<m;p++)o.getVec(p,l),r.getVec(p,s),n.computeLinearTransformation(n.SphericalECEFSpatialReference,l,E,n.SphericalECEFSpatialReference),t.mat3.fromMat4(V,E),1===e&&t.mat3.transpose(V,V),c.vec3.transformMat3(s,s,V),i.setVec(p,s);else for(p=0;p<m;p++){o.getVec(p,l),r.getVec(p,s),n.computeLinearTransformation(n.SphericalECEFSpatialReference,l,E,n.SphericalECEFSpatialReference),t.mat3.fromMat4(V,E);var y=n.webMercator.y2lat(f.get(p,1)),T=Math.cos(y);0===e&&(T=1/T),V[0]*=T,V[1]*=T,V[2]*=T,V[3]*=T,V[4]*=T,V[5]*=T,1===e&&t.mat3.transpose(V,V),c.vec3.transformMat3(s,s,V),c.vec3.normalize(s,s),i.setVec(p,s)}return i}}r.projectNormalToECEF=function(e,r,f,t,o){return t.isWebMercator||t.isWGS84?(p(0,u.BufferViewVec3f.fromTypedArray(e),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(o)),o):(m.error("Cannot convert PCS spatial reference buffer to ECEF"),o)},r.projectNormalFromECEF=function(e,r,f,t,o){return t.isWebMercator||t.isWGS84?(p(1,u.BufferViewVec3f.fromTypedArray(e),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(o)),o):(m.error("Cannot convert to PCS spatial reference buffer from ECEF"),o)},r.projectToECEF=function(e,r,f){return n.bufferToBuffer(e,r,0,f,n.SphericalECEFSpatialReference,0,e.length/3),f},r.projectFromECEF=function(e,r,f){return n.bufferToBuffer(e,n.SphericalECEFSpatialReference,0,r,f,0,e.length/3),r},r.transformBufferInPlace=function(e,r,f){if(void 0===f&&(f=!1),e)for(var t=0;t<e.length;t+=3){for(var o=0;o<3;o++)l[o]=e[t+o];c.vec3.transformMat4(l,l,r),f&&c.vec3.normalize(l,l);for(o=0;o<3;o++)e[t+o]=l[o]}},r.projectTangentToECEF=function(e,r,f,t,o){if(!t.isWebMercator&&!t.isWGS84)return m.error("Cannot convert PCS spatial reference buffer to ECEF"),o;p(0,u.BufferViewVec3f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(var a=3;a<e.length;a+=4)o[a]=e[a];return o},r.projectTangentFromECEF=function(e,r,f,t,o){if(!t.isWebMercator&&!t.isWGS84)return m.error("Cannot convert to PCS spatial reference buffer from ECEF"),o;p(1,u.BufferViewVec3f.fromTypedArray(e,16),u.BufferViewVec3f64.fromTypedArray(r),u.BufferViewVec3f64.fromTypedArray(f),t,u.BufferViewVec3f.fromTypedArray(o,16));for(var a=3;a<e.length;a+=4)o[a]=e[a];return o};var l=i.vec3f64.create(),s=i.vec3f64.create(),E=a.mat4f64.create(),V=o.mat3f64.create()}));