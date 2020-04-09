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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../core/libs/gl-matrix-2/vec4f64","./projection","../../../views/3d/support/projectionUtils"],(function(e,t,r,a,i,o,n,c,l,s,f,p,m,g){Object.defineProperty(t,"__esModule",{value:!0});var u=r.getLogger("esri.geometry.support.meshUtils.rotate");function v(e,t,r,a){if(void 0===a&&(a=f.vec3f64.ZEROS),e){o.mat4.identity(F),o.mat4.rotate(F,F,t[3],t);for(var i=0;i<e.length;i+=r){for(var n=0;n<3;n++)x[n]=e[i+n]-a[n];s.vec3.transformMat4(x,x,F);for(n=0;n<3;n++)e[i+n]=x[n]+a[n]}}}t.rotate=function(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var i=e.spatialReference,o=i.isWGS84||i.isWebMercator&&(!r||!1!==r.geographic),n=r&&r.origin||e.extent.center;o?function(e,t,r){var i=e.spatialReference,o=d;g.pointToVector(r,o,g.SphericalECEFSpatialReference)||g.pointToVector(e.extent.center,o,g.SphericalECEFSpatialReference);var n=e.vertexAttributes.position,c=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,f=new Float64Array(n.length),p=new Float32Array(c?c.length:0),u=new Float32Array(l?l.length:0);g.computeLinearTransformation(g.SphericalECEFSpatialReference,o,F,g.SphericalECEFSpatialReference),a.mat3.fromMat4(h,F);var x=E;s.vec3.transformMat3(E,t,h),x[3]=t[3],m.projectToECEF(n,i,f),c&&m.projectNormalToECEF(c,n,f,i,p);l&&m.projectTangentToECEF(l,n,f,i,u);v(f,x,3,o),m.projectFromECEF(f,n,i),c&&(v(p,x,3),m.projectNormalFromECEF(p,n,f,i,c));l&&(v(u,x,4),m.projectTangentFromECEF(u,n,f,i,l));e.clearCache()}(e,t,n):function(e,t,r){var a=d;if(!g.pointToVector(r,a,e.spatialReference)){var i=e.extent.center;a[0]=i.x,a[1]=i.y,a[2]=i.z,u.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}v(e.vertexAttributes.position,t,3,a),v(e.vertexAttributes.normal,t,3),v(e.vertexAttributes.tangent,t,4),e.clearCache()}(e,t,n)}},t.axisAngleFrom=function(e,t,r){return s.vec3.copy(r,e),r[3]=t,r},t.axisAngleMultiply=function(e,t,r){return c.quat.setAxisAngle(b,e,e[3]),c.quat.setAxisAngle(A,t,t[3]),c.quat.multiply(b,A,b),r[3]=c.quat.getAxisAngle(r,b),r};var x=f.vec3f64.create(),E=p.vec4f64.create(),b=l.quatf64.create(),A=l.quatf64.create(),F=n.mat4f64.create(),h=i.mat3f64.create(),d=f.vec3f64.create()}));