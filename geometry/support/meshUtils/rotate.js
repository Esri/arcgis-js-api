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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../core/libs/gl-matrix-2/vec4f64","./projection","../../../views/3d/support/pointUtils","../../../views/3d/support/projectionUtils"],(function(e,t,r,a,i,o,n,c,l,s,p,f,m,g,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.axisAngleMultiply=t.axisAngleFrom=t.rotate=void 0;var v=r.getLogger("esri.geometry.support.meshUtils.rotate");function x(e,t,r,a){if(void 0===a&&(a=p.vec3f64.ZEROS),e){o.mat4.identity(d),o.mat4.rotate(d,d,t[3],t);for(var i=0;i<e.length;i+=r){for(var n=0;n<3;n++)A[n]=e[i+n]-a[n];s.vec3.transformMat4(A,A,d);for(n=0;n<3;n++)e[i+n]=A[n]+a[n]}}}t.rotate=function(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var i=e.spatialReference,o=i.isWGS84||i.isWebMercator&&(!r||!1!==r.geographic),n=r&&r.origin||e.extent.center;o?function(e,t,r){var i=e.spatialReference,o=C;g.pointToVector(r,o,u.SphericalECEFSpatialReference)||g.pointToVector(e.extent.center,o,u.SphericalECEFSpatialReference);var n=e.vertexAttributes.position,c=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,p=new Float64Array(n.length),f=new Float32Array(c?c.length:0),v=new Float32Array(l?l.length:0);u.computeLinearTransformation(u.SphericalECEFSpatialReference,o,d,u.SphericalECEFSpatialReference),a.mat3.fromMat4(h,d);var A=E;s.vec3.transformMat3(E,t,h),A[3]=t[3],m.projectToECEF(n,i,p),c&&m.projectNormalToECEF(c,n,p,i,f);l&&m.projectTangentToECEF(l,n,p,i,v);x(p,A,3,o),m.projectFromECEF(p,n,i),c&&(x(f,A,3),m.projectNormalFromECEF(f,n,p,i,c));l&&(x(v,A,4),m.projectTangentFromECEF(v,n,p,i,l));e.clearCache()}(e,t,n):function(e,t,r){var a=C;if(!g.pointToVector(r,a,e.spatialReference)){var i=e.extent.center;a[0]=i.x,a[1]=i.y,a[2]=i.z,v.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}x(e.vertexAttributes.position,t,3,a),x(e.vertexAttributes.normal,t,3),x(e.vertexAttributes.tangent,t,4),e.clearCache()}(e,t,n)}},t.axisAngleFrom=function(e,t,r){return s.vec3.copy(r,e),r[3]=t,r},t.axisAngleMultiply=function(e,t,r){return c.quat.setAxisAngle(b,e,e[3]),c.quat.setAxisAngle(F,t,t[3]),c.quat.multiply(b,F,b),r[3]=c.quat.getAxisAngle(r,b),r};var A=p.vec3f64.create(),E=f.vec4f64.create(),b=l.quatf64.create(),F=l.quatf64.create(),d=n.mat4f64.create(),h=i.mat3f64.create(),C=p.vec3f64.create()}));