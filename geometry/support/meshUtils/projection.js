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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../views/3d/lib/glMatrix","../../../views/3d/support/projectionUtils"],function(e,r,t,o,a){function n(e,r,t,o,a){return o.isWebMercator||o.isWGS84?u(0,e,r,t,o,a):(p.error("Cannot convert PCS spatial reference buffer to ECEF"),a)}function i(e,r,t,o,a){return o.isWebMercator||o.isWGS84?u(1,e,r,t,o,a):(p.error("Cannot convert to PCS spatial reference buffer from ECEF"),a)}function c(e,r,t){return a.bufferToBuffer(e,r,0,t,a.SphericalECEFSpatialReference,0,e.length/3),t}function f(e,r,t){return a.bufferToBuffer(e,a.SphericalECEFSpatialReference,0,r,t,0,e.length/3),r}function l(e,r,t){if(void 0===t&&(t=!1),e)for(var a=0;a<e.length;a+=3){for(var n=0;n<3;n++)m[n]=e[a+n];o.mat4d.multiplyVec3(r,m),t&&o.vec3d.normalize(m);for(var n=0;n<3;n++)e[a+n]=m[n]}}function u(e,r,t,n,i,c){if(r){for(var f=i.isWGS84,l=0;l<r.length;l+=3){for(var u=0;u<3;u++)m[u]=n[l+u],s[u]=r[l+u];if(a.computeLinearTransformation(a.SphericalECEFSpatialReference,m,E,a.SphericalECEFSpatialReference),o.mat4d.toMat3(E,v),f)o.mat3d.multiplyVec3(v,s);else{var p=a.webMercator.y2lat(t[l+1]),d=Math.cos(p);0===e&&(d=1/d),v[0]*=d,v[1]*=d,v[2]*=d,v[3]*=d,v[4]*=d,v[5]*=d,1===e&&o.mat3d.transpose(v),o.mat3d.multiplyVec3(v,s),o.vec3d.normalize(s)}for(var u=0;u<3;u++)c[l+u]=s[u]}return c}}Object.defineProperty(r,"__esModule",{value:!0});var p=t.getLogger("esri.geometry.support.meshUtils.normalProjection");r.projectNormalToECEF=n,r.projectNormalFromECEF=i,r.projectToECEF=c,r.projectFromECEF=f,r.transformBufferInPlace=l;var m=o.vec3d.create(),s=o.vec3d.create(),E=o.mat4d.create(),v=o.mat3d.create()});