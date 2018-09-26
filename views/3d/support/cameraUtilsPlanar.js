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

define(["require","exports","../../../geometry/Extent","../lib/gl-matrix","./cameraUtilsInternal","./mathUtils","./projectionUtils"],function(e,t,r,i,n,a,o){function c(e,t,r,o){void 0===o&&(o=n.createDirectionUp()),i.mat4d.identity(f);var c=o.direction,d=o.up;return i.mat4d.rotateZ(f,-a.deg2rad(t)),i.mat4d.rotateX(f,a.deg2rad(r)),i.mat4d.multiplyVec3(f,v,c),i.vec3d.scale(c,-1),i.mat4d.multiplyVec3(f,T,d),o}function d(e,t,r,i){return n.directionToHeadingTilt(t,r,i,v,T)}function l(e,t,r,n){var a=c(e,r,n),o=i.vec3d.add(i.vec3d.scale(a.direction,-t,i.vec3d.create()),e);return{up:a.up,eye:o,heading:r,tilt:n}}function u(e,t,r){return a.rad2deg(r)}function m(e,t,r){return a.deg2rad(r)}function p(e,t,i,n,a){var c=e.renderSpatialReference,d=e.map&&e.spatialReference||t.spatialReference;return o.pointToVector(t,g,c),o.pointToVector(t,y,c),g[0]-=i/2,y[0]+=i/2,g[1]-=n/2,y[1]+=n/2,o.vectorToVector(g,c,g,d),o.vectorToVector(y,c,y,d),a?(a.xmin=g[0],a.ymin=g[1],a.xmax=y[0],a.ymax=y[1],a.spatialReference=d):a=new r(g[0],g[1],y[0],y[1],d),a}Object.defineProperty(t,"__esModule",{value:!0});var T=i.vec3d.createFrom(0,1,0),v=i.vec3d.createFrom(0,0,1),f=i.mat4d.create(),g=i.vec3d.create(),y=i.vec3d.create();t.headingTiltToDirectionUp=c,t.directionToHeadingTilt=d,t.eyeForCenterWithHeadingTilt=l,t.lookAtTiltToEyeTilt=u,t.eyeTiltToLookAtTilt=m,t.toExtent=p});