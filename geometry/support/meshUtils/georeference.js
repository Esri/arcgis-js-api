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

define(["require","exports","../../../core/maybe","../../../core/unitUtils","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/math/mat3","./projection","../../../views/3d/support/projectionUtils","../../../views/3d/support/buffer/BufferView","../../../views/3d/support/buffer/math/vec3"],(function(r,e,t,n,a,o,i,f,l,u,c,m){function p(r,e,t){u.computeLinearTransformation(r.spatialReference,[r.x,r.y,r.z||0],t,u.SphericalECEFSpatialReference);var n=y(e?e.unit:null,r.spatialReference),a=n.horizontal,i=n.vertical;return o.mat4.scale(t,t,[a,a,i]),t}function s(r,e){var t=r.spatialReference;return t.isWGS84||t.isWebMercator&&(!e||!1!==e.geographic)}function y(r,e){if(t.isNone(r))return F;var a=e.isWGS84?1:n.getMetersPerUnit(e),o=e.isWGS84?1:n.getMetersPerVerticalUnitForSR(e),i=n.convertUnit(1,r,"meters");return{horizontal:i*a,vertical:i*o}}Object.defineProperty(e,"__esModule",{value:!0}),e.georeference=function(r,e,t){return s(e,t)?function(r,e,t){var n=e.spatialReference,a=p(e,t,g),o=new Float64Array(r.position.length),i=function(r,e,t,n){m.transformMat4(c.BufferViewVec3f64.fromTypedArray(n),c.BufferViewVec3f64.fromTypedArray(r),e);var a=new Float64Array(r.length);return l.projectFromECEF(n,a,t)}(r.position,a,n,o),u=f.normalFromMat4(v,a),s=function(r,e,t,n,a){if(!t)return null;var o=new Float32Array(t.length);return m.transformMat3(c.BufferViewVec3f.fromTypedArray(o),c.BufferViewVec3f.fromTypedArray(t),n),l.projectNormalFromECEF(o,r,e,a,o),o}(i,o,r.normal,u,n),y=function(r,e,t,n,a){if(!t)return null;var o=new Float32Array(t.length);m.transformMat3(c.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),c.BufferViewVec3f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),n);for(var i=3;i<o.length;i+=4)o[i]=t[i];return l.projectTangentFromECEF(o,r,e,a,o),o}(i,o,r.tangent,u,n);return{position:i,normal:s,tangent:y}}(r,e,t):function(r,e,t){for(var n=new Float64Array(r.position.length),a=r.position,o=e.x,i=e.y,f=e.z||0,l=y(t?t.unit:null,e.spatialReference),u=l.horizontal,c=l.vertical,m=0;m<a.length;m+=3)n[m+0]=a[m+0]*u+o,n[m+1]=a[m+1]*u+i,n[m+2]=a[m+2]*c+f;return{position:n,normal:r.normal,tangent:r.tangent}}(r,e,t)},e.ungeoreference=function(r,e,t){return s(e,t)?function(r,e,t){var n=e.spatialReference;p(e,t,g);var a=o.mat4.invert(E,g),i=new Float64Array(r.position.length),u=function(r,e,t,n){var a=l.projectToECEF(r,e,n),o=c.BufferViewVec3f64.fromTypedArray(a),i=new Float64Array(a.length),f=c.BufferViewVec3f64.fromTypedArray(i);return m.transformMat4(f,o,t),i}(r.position,n,a,i),s=f.normalFromMat4(v,a),y=function(r,e,t,n,a){if(!r)return null;var o=l.projectNormalToECEF(r,e,t,n,new Float32Array(r.length)),i=c.BufferViewVec3f.fromTypedArray(o);return m.transformMat3(i,i,a),o}(r.normal,r.position,i,n,s),F=function(r,e,t,n,a){if(!r)return null;var o=l.projectTangentToECEF(r,e,t,n,new Float32Array(r.length)),i=c.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return m.transformMat3(i,i,a),o}(r.tangent,r.position,i,n,s);return{position:u,normal:y,tangent:F}}(r,e,t):function(r,e,t){for(var n=new Float64Array(r.position.length),a=r.position,o=e.x,i=e.y,f=e.z||0,l=y(t?t.unit:null,e.spatialReference),u=l.horizontal,c=l.vertical,m=0;m<a.length;m+=3)n[m+0]=(a[m+0]-o)/u,n[m+1]=(a[m+1]-i)/u,n[m+2]=(a[m+2]-f)/c;return{position:n,normal:r.normal,tangent:r.tangent}}(r,e,t)};var g=i.mat4f64.create(),E=i.mat4f64.create(),v=a.mat3f64.create(),F={horizontal:1,vertical:1}}));