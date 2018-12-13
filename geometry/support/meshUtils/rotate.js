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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/gl-matrix","./projection","../../../views/3d/support/projectionUtils"],function(e,t,r,a,i,o){function n(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var a=e.spatialReference,i=a.isWGS84||a.isWebMercator&&(!r||!1!==r.geographic),o=r&&r.origin||e.extent.center;i?s(e,t,o):p(e,t,o)}}function c(e,t,r){return a.vec3.copy(r,e),r[3]=t,r}function l(e,t,r){return a.quat.setAxisAngle(g,e,e[3]),a.quat.setAxisAngle(x,t,t[3]),a.quat.multiply(g,x,g),r[3]=a.quat.getAxisAngle(r,g),r}function s(e,t,r){var n=e.spatialReference,c=d;o.pointToVector(r,c,o.SphericalECEFSpatialReference)||o.pointToVector(e.extent.center,c,o.SphericalECEFSpatialReference);var l=e.vertexAttributes.position,s=e.vertexAttributes.normal,p=new Float64Array(l.length),u=new Float32Array(s?s.length:0);o.computeLinearTransformation(o.SphericalECEFSpatialReference,c,A,o.SphericalECEFSpatialReference),a.mat3.fromMat4(E,A);var v=m;a.vec3.transformMat3(m,t,E),v[3]=t[3],i.projectToECEF(l,n,p),s&&i.projectNormalToECEF(s,l,p,n,u),f(p,v,c),i.projectFromECEF(p,l,n),s&&(f(u,v),i.projectNormalFromECEF(u,l,p,n,s)),e.clearCache()}function p(e,t,r){var a=d;if(!o.pointToVector(r,a,e.spatialReference)){var i=e.extent.center;a[0]=i.x,a[1]=i.y,a[2]=i.z,u.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}f(e.vertexAttributes.position,t,a),f(e.vertexAttributes.normal,t),e.clearCache()}function f(e,t,r){if(void 0===r&&(r=F),e){a.mat4.identity(A),a.mat4.rotate(A,A,t[3],t);for(var i=0;i<e.length;i+=3){for(var o=0;o<3;o++)v[o]=e[i+o]-r[o];a.vec3.transformMat4(v,v,A);for(var o=0;o<3;o++)e[i+o]=v[o]+r[o]}}}Object.defineProperty(t,"__esModule",{value:!0});var u=r.getLogger("esri.geometry.support.meshUtils.rotate");t.rotate=n,t.axisAngleFrom=c,t.axisAngleMultiply=l;var v=a.vec3f64.create(),m=a.vec4f64.create(),g=a.quatf64.create(),x=a.quatf64.create(),A=a.mat4f64.create(),E=a.mat3f64.create(),F=a.vec3f64.create(),d=a.vec3f64.create()});