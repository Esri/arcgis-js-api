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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/gl-matrix","../../../views/3d/support/projectionUtils"],function(e,r,t,o,a){function n(e,r,t,o,a){return o.isWebMercator||o.isWGS84?s(0,e,r,t,o,a):(u.error("Cannot convert PCS spatial reference buffer to ECEF"),a)}function f(e,r,t,o,a){return o.isWebMercator||o.isWGS84?s(1,e,r,t,o,a):(u.error("Cannot convert to PCS spatial reference buffer from ECEF"),a)}function c(e,r,t){return a.bufferToBuffer(e,r,0,t,a.SphericalECEFSpatialReference,0,e.length/3),t}function i(e,r,t){return a.bufferToBuffer(e,a.SphericalECEFSpatialReference,0,r,t,0,e.length/3),r}function l(e,r,t){if(void 0===t&&(t=!1),e)for(var a=0;a<e.length;a+=3){for(var n=0;n<3;n++)m[n]=e[a+n];o.vec3.transformMat4(m,m,r),t&&o.vec3.normalize(m,m);for(var n=0;n<3;n++)e[a+n]=m[n]}}function s(e,r,t,n,f,c){if(r){for(var i=f.isWGS84,l=0;l<r.length;l+=3){for(var s=0;s<3;s++)m[s]=n[l+s],p[s]=r[l+s];if(a.computeLinearTransformation(a.SphericalECEFSpatialReference,m,v,a.SphericalECEFSpatialReference),o.mat3.fromMat4(E,v),i)o.vec3.transformMat3(p,p,E);else{var u=a.webMercator.y2lat(t[l+1]),C=Math.cos(u);0===e&&(C=1/C),E[0]*=C,E[1]*=C,E[2]*=C,E[3]*=C,E[4]*=C,E[5]*=C,1===e&&o.mat3.transpose(E,E),o.vec3.transformMat3(p,p,E),o.vec3.normalize(p,p)}for(var s=0;s<3;s++)c[l+s]=p[s]}return c}}Object.defineProperty(r,"__esModule",{value:!0});var u=t.getLogger("esri.geometry.support.meshUtils.normalProjection");r.projectNormalToECEF=n,r.projectNormalFromECEF=f,r.projectToECEF=c,r.projectFromECEF=i,r.transformBufferInPlace=l;var m=o.vec3f64.create(),p=o.vec3f64.create(),v=o.mat4f64.create(),E=o.mat3f64.create()});