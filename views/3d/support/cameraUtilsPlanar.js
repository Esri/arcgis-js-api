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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/Extent","./cameraUtilsInternal","./mathUtils","./projectionUtils"],function(e,t,r,i,n,a,o){function c(e,t,i,o){void 0===o&&(o=n.createDirectionUp()),r.mat4.identity(p);var c=o.direction,l=o.up;return r.mat4.rotateZ(p,p,-a.deg2rad(t)),r.mat4.rotateX(p,p,a.deg2rad(i)),r.vec3.transformMat4(c,T,p),r.vec3.scale(c,c,-1),r.vec3.transformMat4(l,v,p),o}function l(e,t,r,i){return n.directionToHeadingTilt(t,r,i,T,v)}function d(e,t,i,n){var a=c(e,i,n),o=r.vec3f64.create();return r.vec3.scale(o,a.direction,-t),r.vec3.add(o,o,e),{up:a.up,eye:o,heading:i,tilt:n}}function f(e,t,r){return a.rad2deg(r)}function u(e,t,r){return a.deg2rad(r)}function m(e,t,r,n,a){var c=e.renderSpatialReference,l=e.map&&e.spatialReference||t.spatialReference;return o.pointToVector(t,s,c),o.pointToVector(t,g,c),s[0]-=r/2,g[0]+=r/2,s[1]-=n/2,g[1]+=n/2,o.vectorToVector(s,c,s,l),o.vectorToVector(g,c,g,l),a?(a.xmin=s[0],a.ymin=s[1],a.xmax=g[0],a.ymax=g[1],a.spatialReference=l):a=new i(s[0],s[1],g[0],g[1],l),a}Object.defineProperty(t,"__esModule",{value:!0});var v=r.vec3f64.fromValues(0,1,0),T=r.vec3f64.fromValues(0,0,1),p=r.mat4f64.create(),s=r.vec3f64.create(),g=r.vec3f64.create();t.headingTiltToDirectionUp=c,t.directionToHeadingTilt=l,t.eyeForCenterWithHeadingTilt=d,t.lookAtTiltToEyeTilt=f,t.eyeTiltToLookAtTilt=u,t.toExtent=m});