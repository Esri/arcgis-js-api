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

define(["require","exports","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","./cameraUtilsInternal","./mathUtils","./projectionUtils"],function(e,t,r,i,a,o,n,c,l,d){function f(e,t,i,o){void 0===o&&(o=c.createDirectionUp()),r.mat4.identity(x);var n=o.direction,d=o.up;return r.mat4.rotateZ(x,x,-l.deg2rad(t)),r.mat4.rotateX(x,x,l.deg2rad(i)),a.vec3.transformMat4(n,g,x),a.vec3.scale(n,n,-1),a.vec3.transformMat4(d,p,x),o}function m(e,t,r,i){return c.directionToHeadingTilt(t,r,i,g,p)}function u(e,t,r,i){var n=f(e,r,i),c=o.vec3f64.create();return a.vec3.scale(c,n.direction,-t),a.vec3.add(c,c,e),{up:n.up,eye:c,heading:r,tilt:i}}function v(e,t,r){return l.rad2deg(r)}function s(e,t,r){return l.deg2rad(r)}function T(e,t,r,i,a){var o=e.renderSpatialReference,c=e.map&&e.spatialReference||t.spatialReference;return d.pointToVector(t,y,o),d.pointToVector(t,V,o),y[0]-=r/2,V[0]+=r/2,y[1]-=i/2,V[1]+=i/2,d.vectorToVector(y,o,y,c),d.vectorToVector(V,o,V,c),a?(a.xmin=y[0],a.ymin=y[1],a.xmax=V[0],a.ymax=V[1],a.spatialReference=c):a=new n(y[0],y[1],V[0],V[1],c),a}Object.defineProperty(t,"__esModule",{value:!0});var p=o.vec3f64.fromValues(0,1,0),g=o.vec3f64.fromValues(0,0,1),x=i.mat4f64.create(),y=o.vec3f64.create(),V=o.vec3f64.create();t.headingTiltToDirectionUp=f,t.directionToHeadingTilt=m,t.eyeForCenterWithHeadingTilt=u,t.lookAtTiltToEyeTilt=v,t.eyeTiltToLookAtTilt=s,t.toExtent=T});