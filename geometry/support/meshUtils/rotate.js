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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","./projection","../../../views/3d/lib/gl-matrix","../../../views/3d/support/projectionUtils"],function(e,t,r,a,i,o){function n(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var a=e.spatialReference,i=a.isWGS84||a.isWebMercator&&(!r||!1!==r.geographic),o=r&&r.origin||e.extent.center;i?p(e,t,o):s(e,t,o)}}function c(e,t,r){return i.vec3d.set(e,r),r[3]=t,r}function l(e,t,r){return i.quat4d.fromAngleAxis(e[3],e,v),i.quat4d.fromAngleAxis(t[3],t,g),i.quat4d.multiply(g,v,v),i.quat4d.toAngleAxis(v,r),r}function p(e,t,r){var n=e.spatialReference,c=F;o.pointToVector(r,c,o.SphericalECEFSpatialReference)||o.pointToVector(e.extent.center,c,o.SphericalECEFSpatialReference);var l=e.vertexAttributes.position,p=e.vertexAttributes.normal,s=new Float64Array(l.length),d=new Float32Array(p?p.length:0);o.computeLinearTransformation(o.SphericalECEFSpatialReference,c,x,o.SphericalECEFSpatialReference),i.mat4d.toMat3(x,A);var f=i.mat3d.multiplyVec3(A,t,m);f[3]=t[3],a.projectToECEF(l,n,s),p&&a.projectNormalToECEF(p,l,s,n,d),u(s,f,c),a.projectFromECEF(s,l,n),p&&(u(d,f),a.projectNormalFromECEF(d,l,s,n,p)),e.clearCache()}function s(e,t,r){var a=F;if(!o.pointToVector(r,a,e.spatialReference)){var i=e.extent.center;a[0]=i.x,a[1]=i.y,a[2]=i.z,d.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}u(e.vertexAttributes.position,t,a),u(e.vertexAttributes.normal,t),e.clearCache()}function u(e,t,r){if(void 0===r&&(r=E),e){i.mat4d.identity(x),i.mat4d.rotate(x,t[3],t);for(var a=0;a<e.length;a+=3){for(var o=0;o<3;o++)f[o]=e[a+o]-r[o];i.mat4d.multiplyVec3(x,f);for(var o=0;o<3;o++)e[a+o]=f[o]+r[o]}}}Object.defineProperty(t,"__esModule",{value:!0});var d=r.getLogger("esri.geometry.support.meshUtils.rotate");t.rotate=n,t.axisAngleFrom=c,t.axisAngleMultiply=l;var f=i.vec3d.create(),m=i.vec4d.create(),v=i.quat4d.create(),g=i.quat4d.create(),x=i.mat4d.create(),A=i.mat3d.create(),E=[0,0,0],F=[0,0,0]});