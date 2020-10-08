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

define(["require","exports","../../../core/maybe","../../../core/unitUtils","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/math/mat3","./projection","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView","../../../views/3d/support/buffer/math/vec3"],(function(r,e,t,n,a,o,i,f,l,c,u,s){"use strict";function m(r,e,t){c.computeLinearTransformation(r.spatialReference,[r.x,r.y,r.z||0],t,c.SphericalECEFSpatialReference);var n=y(e?e.unit:null,r.spatialReference),a=n.horizontal,i=n.vertical;return o.mat4.scale(t,t,[a,a,i]),t}function p(r,e){var t=r.spatialReference;return t.isWGS84||t.isWebMercator&&(!e||!1!==e.geographic)}function y(r,e){if(t.isNone(r))return F;var a=e.isWGS84?1:n.getMetersPerUnit(e),o=e.isWGS84?1:n.getMetersPerVerticalUnitForSR(e),i=n.convertUnit(1,r,"meters");return{horizontal:i*a,vertical:i*o}}Object.defineProperty(e,"__esModule",{value:!0}),e.ungeoreference=e.georeference=void 0,e.georeference=function(r,e,t){return p(e,t)?function(r,e,t){var n=e.spatialReference,a=m(e,t,g),o=new Float64Array(r.position.length),i=function(r,e,t,n){s.transformMat4(u.BufferViewVec3f64.fromTypedArray(n),u.BufferViewVec3f64.fromTypedArray(r),e);var a=new Float64Array(r.length);return l.projectFromECEF(n,a,t)}(r.position,a,n,o),c=f.normalFromMat4(E,a),p=function(r,e,t,n,a){if(!t)return null;var o=new Float32Array(t.length);return s.transformMat3(u.BufferViewVec3f.fromTypedArray(o),u.BufferViewVec3f.fromTypedArray(t),n),l.projectNormalFromECEF(o,r,e,a,o),o}(i,o,r.normal,c,n),y=function(r,e,t,n,a){if(!t)return null;var o=new Float32Array(t.length);s.transformMat3(u.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),u.BufferViewVec3f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),n);for(var i=3;i<o.length;i+=4)o[i]=t[i];return l.projectTangentFromECEF(o,r,e,a,o),o}(i,o,r.tangent,c,n);return{position:i,normal:p,tangent:y}}(r,e,t):function(r,e,t){for(var n=new Float64Array(r.position.length),a=r.position,o=e.x,i=e.y,f=e.z||0,l=y(t?t.unit:null,e.spatialReference),c=l.horizontal,u=l.vertical,s=0;s<a.length;s+=3)n[s+0]=a[s+0]*c+o,n[s+1]=a[s+1]*c+i,n[s+2]=a[s+2]*u+f;return{position:n,normal:r.normal,tangent:r.tangent}}(r,e,t)},e.ungeoreference=function(r,e,t){return p(e,t)?function(r,e,t){var n=e.spatialReference;m(e,t,g);var a=o.mat4.invert(v,g),i=new Float64Array(r.position.length),c=function(r,e,t,n){var a=l.projectToECEF(r,e,n),o=u.BufferViewVec3f64.fromTypedArray(a),i=new Float64Array(a.length),f=u.BufferViewVec3f64.fromTypedArray(i);return s.transformMat4(f,o,t),i}(r.position,n,a,i),p=f.normalFromMat4(E,a),y=function(r,e,t,n,a){if(!r)return null;var o=l.projectNormalToECEF(r,e,t,n,new Float32Array(r.length)),i=u.BufferViewVec3f.fromTypedArray(o);return s.transformMat3(i,i,a),o}(r.normal,r.position,i,n,p),F=function(r,e,t,n,a){if(!r)return null;var o=l.projectTangentToECEF(r,e,t,n,new Float32Array(r.length)),i=u.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return s.transformMat3(i,i,a),o}(r.tangent,r.position,i,n,p);return{position:c,normal:y,tangent:F}}(r,e,t):function(r,e,t){for(var n=new Float64Array(r.position.length),a=r.position,o=e.x,i=e.y,f=e.z||0,l=y(t?t.unit:null,e.spatialReference),c=l.horizontal,u=l.vertical,s=0;s<a.length;s+=3)n[s+0]=(a[s+0]-o)/c,n[s+1]=(a[s+1]-i)/c,n[s+2]=(a[s+2]-f)/u;return{position:n,normal:r.normal,tangent:r.tangent}}(r,e,t)};var g=i.mat4f64.create(),v=i.mat4f64.create(),E=a.mat3f64.create(),F={horizontal:1,vertical:1}}));