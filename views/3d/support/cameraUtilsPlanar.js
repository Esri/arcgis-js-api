// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","./cameraUtilsInternal","./projectionUtils"],function(e,t,r,i,a,o,n,c,l,d){function f(e,t,a,n){void 0===n&&(n=l.createDirectionUp()),i.mat4.identity(x);var c=n.direction,d=n.up;return i.mat4.rotateZ(x,x,-r.deg2rad(t)),i.mat4.rotateX(x,x,r.deg2rad(a)),o.vec3.transformMat4(c,g,x),o.vec3.scale(c,c,-1),o.vec3.transformMat4(d,p,x),n}function m(e,t,r,i){return l.directionToHeadingTilt(t,r,i,g,p)}function u(e,t,r,i){var a=f(e,r,i),c=n.vec3f64.create();return o.vec3.scale(c,a.direction,-t),o.vec3.add(c,c,e),{up:a.up,eye:c,heading:r,tilt:i}}function v(e){return r.rad2deg(e)}function s(e){return r.deg2rad(e)}function T(e,t,r,i,a){var o=e.renderSpatialReference,n=e.map&&e.spatialReference||t.spatialReference;return d.pointToVector(t,y,o),d.pointToVector(t,V,o),y[0]-=r/2,V[0]+=r/2,y[1]-=i/2,V[1]+=i/2,d.vectorToVector(y,o,y,n),d.vectorToVector(V,o,V,n),a?(a.xmin=y[0],a.ymin=y[1],a.xmax=V[0],a.ymax=V[1],a.spatialReference=n):a=new c(y[0],y[1],V[0],V[1],n),a}Object.defineProperty(t,"__esModule",{value:!0});var p=n.vec3f64.fromValues(0,1,0),g=n.vec3f64.fromValues(0,0,1),x=a.mat4f64.create(),y=n.vec3f64.create(),V=n.vec3f64.create();t.headingTiltToDirectionUp=f,t.directionToHeadingTilt=m,t.eyeForCenterWithHeadingTilt=u,t.lookAtTiltToEyeTilt=v,t.eyeTiltToLookAtTilt=s,t.toExtent=T});