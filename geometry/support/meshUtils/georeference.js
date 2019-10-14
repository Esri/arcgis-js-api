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

define(["require","exports","../../../core/maybe","../../../core/unitUtils","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/math/mat3","./projection","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView","../../../views/3d/support/buffer/math/vec3"],function(r,e,t,n,a,o,i,f,l,u,c,m){function p(r,e,t){return M(e,t)?g(r,e,t):y(r,e,t)}function s(r,e,t){return M(e,t)?A(r,e,t):w(r,e,t)}function y(r,e,t){for(var n=new Float64Array(r.position.length),a=r.position,o=e.x,i=e.y,f=e.z||0,l=B(t?t.unit:null,e.spatialReference),u=l.horizontal,c=l.vertical,m=0;m<a.length;m+=3)n[m+0]=a[m+0]*u+o,n[m+1]=a[m+1]*u+i,n[m+2]=a[m+2]*c+f;return{position:n,normal:r.normal,tangent:r.tangent}}function g(r,e,t){var n=e.spatialReference,a=h(e,t,R),o=new Float64Array(r.position.length),i=E(r.position,a,n,o),l=f.normalFromMat4(j,a);return{position:i,normal:v(i,o,r.normal,l,n),tangent:F(i,o,r.tangent,l,n)}}function E(r,e,t,n){m.transformMat4(c.BufferViewVec3f64.fromTypedArray(n),c.BufferViewVec3f64.fromTypedArray(r),e);var a=new Float64Array(r.length);return l.projectFromECEF(n,a,t)}function v(r,e,t,n,a){if(!t)return null;var o=new Float32Array(t.length);return m.transformMat3(c.BufferViewVec3f.fromTypedArray(o),c.BufferViewVec3f.fromTypedArray(t),n),l.projectNormalFromECEF(o,r,e,a,o),o}function F(r,e,t,n,a){if(!t)return null;var o=new Float32Array(t.length);m.transformMat3(c.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),c.BufferViewVec3f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),n);for(var i=3;i<o.length;i+=4)o[i]=t[i];return l.projectTangentFromECEF(o,r,e,a,o),o}function w(r,e,t){for(var n=new Float64Array(r.position.length),a=r.position,o=e.x,i=e.y,f=e.z||0,l=B(t?t.unit:null,e.spatialReference),u=l.horizontal,c=l.vertical,m=0;m<a.length;m+=3)n[m+0]=(a[m+0]-o)/u,n[m+1]=(a[m+1]-i)/u,n[m+2]=(a[m+2]-f)/c;return{position:n,normal:r.normal,tangent:r.tangent}}function A(r,e,t){var n=e.spatialReference;h(e,t,R);var a=o.mat4.invert(b,R),i=new Float64Array(r.position.length),l=T(r.position,n,a,i),u=f.normalFromMat4(j,a);return{position:l,normal:V(r.normal,r.position,i,n,u),tangent:d(r.tangent,r.position,i,n,u)}}function h(r,e,t){u.computeLinearTransformation(r.spatialReference,[r.x,r.y,r.z||0],t,u.SphericalECEFSpatialReference);var n=B(e?e.unit:null,r.spatialReference),a=n.horizontal,i=n.vertical;return o.mat4.scale(t,t,[a,a,i]),t}function T(r,e,t,n){var a=l.projectToECEF(r,e,n),o=c.BufferViewVec3f64.fromTypedArray(a),i=new Float64Array(a.length),f=c.BufferViewVec3f64.fromTypedArray(i);return m.transformMat4(f,o,t),i}function V(r,e,t,n,a){if(!r)return null;var o=l.projectNormalToECEF(r,e,t,n,new Float32Array(r.length)),i=c.BufferViewVec3f.fromTypedArray(o);return m.transformMat3(i,i,a),o}function d(r,e,t,n,a){if(!r)return null;var o=l.projectTangentToECEF(r,e,t,n,new Float32Array(r.length)),i=c.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return m.transformMat3(i,i,a),o}function M(r,e){var t=r.spatialReference;return t.isWGS84||t.isWebMercator&&(!e||!1!==e.geographic)}function B(r,e){if(t.isNone(r))return S;var a=e.isWGS84?1:n.getMetersPerUnit(e),o=e.isWGS84?1:n.getMetersPerVerticalUnitForSR(e),i=n.convertUnit(1,r,"meters");return{horizontal:i*a,vertical:i*o}}Object.defineProperty(e,"__esModule",{value:!0}),e.georeference=p,e.ungeoreference=s;var R=i.mat4f64.create(),b=i.mat4f64.create(),j=a.mat3f64.create(),S={horizontal:1,vertical:1}});