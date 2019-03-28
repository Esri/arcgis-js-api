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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../core/libs/gl-matrix-2/vec4f64","./projection","../../../views/3d/support/projectionUtils"],function(e,t,r,a,i,o,n,c,l,s,f,p,m,g){function u(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var a=e.spatialReference,i=a.isWGS84||a.isWebMercator&&(!r||!1!==r.geographic),o=r&&r.origin||e.extent.center;i?E(e,t,o):b(e,t,o)}}function v(e,t,r){return s.vec3.copy(r,e),r[3]=t,r}function x(e,t,r){return c.quat.setAxisAngle(C,e,e[3]),c.quat.setAxisAngle(j,t,t[3]),c.quat.multiply(C,j,C),r[3]=c.quat.getAxisAngle(r,C),r}function E(e,t,r){var i=e.spatialReference,o=S;g.pointToVector(r,o,g.SphericalECEFSpatialReference)||g.pointToVector(e.extent.center,o,g.SphericalECEFSpatialReference);var n=e.vertexAttributes.position,c=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,f=new Float64Array(n.length),p=new Float32Array(c?c.length:0),u=new Float32Array(l?l.length:0);g.computeLinearTransformation(g.SphericalECEFSpatialReference,o,y,g.SphericalECEFSpatialReference),a.mat3.fromMat4(q,y);var v=d;s.vec3.transformMat3(d,t,q),v[3]=t[3],m.projectToECEF(n,i,f),c&&m.projectNormalToECEF(c,n,f,i,p),l&&m.projectTangentToECEF(l,n,f,i,u),A(f,v,3,o),m.projectFromECEF(f,n,i),c&&(A(p,v,3),m.projectNormalFromECEF(p,n,f,i,c)),l&&(A(u,v,4),m.projectTangentFromECEF(u,n,f,i,l)),e.clearCache()}function b(e,t,r){var a=S;if(!g.pointToVector(r,a,e.spatialReference)){var i=e.extent.center;a[0]=i.x,a[1]=i.y,a[2]=i.z,F.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}A(e.vertexAttributes.position,t,3,a),A(e.vertexAttributes.normal,t,3),A(e.vertexAttributes.tangent,t,4),e.clearCache()}function A(e,t,r,a){if(void 0===a&&(a=R),e){o.mat4.identity(y),o.mat4.rotate(y,y,t[3],t);for(var i=0;i<e.length;i+=r){for(var n=0;n<3;n++)h[n]=e[i+n]-a[n];s.vec3.transformMat4(h,h,y);for(var n=0;n<3;n++)e[i+n]=h[n]+a[n]}}}Object.defineProperty(t,"__esModule",{value:!0});var F=r.getLogger("esri.geometry.support.meshUtils.rotate");t.rotate=u,t.axisAngleFrom=v,t.axisAngleMultiply=x;var h=f.vec3f64.create(),d=p.vec4f64.create(),C=l.quatf64.create(),j=l.quatf64.create(),y=n.mat4f64.create(),q=i.mat3f64.create(),R=f.vec3f64.create(),S=f.vec3f64.create()});