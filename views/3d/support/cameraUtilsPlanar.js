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

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","./cameraUtilsInternal","./projectionUtils"],(function(e,t,r,i,a,o,n,c,l,d){Object.defineProperty(t,"__esModule",{value:!0});var f=n.vec3f64.fromValues(0,1,0),m=n.vec3f64.fromValues(0,0,1),u=a.mat4f64.create(),v=n.vec3f64.create(),s=n.vec3f64.create();function T(e,t,a,n){void 0===n&&(n=l.createDirectionUp()),i.mat4.identity(u);var c=n.direction,d=n.up;return i.mat4.rotateZ(u,u,-r.deg2rad(t)),i.mat4.rotateX(u,u,r.deg2rad(a)),o.vec3.transformMat4(c,m,u),o.vec3.scale(c,c,-1),o.vec3.transformMat4(d,f,u),n}t.headingTiltToDirectionUp=T,t.directionToHeadingTilt=function(e,t,r,i){return l.directionToHeadingTilt(t,r,i,m,f)},t.eyeForCenterWithHeadingTilt=function(e,t,r,i){var a=T(0,r,i),c=n.vec3f64.create();return o.vec3.scale(c,a.direction,-t),o.vec3.add(c,c,e),{up:a.up,eye:c,heading:r,tilt:i}},t.lookAtTiltToEyeTilt=function(e){return r.rad2deg(e)},t.eyeTiltToLookAtTilt=function(e){return r.deg2rad(e)},t.toExtent=function(e,t,r,i,a){var o=e.renderSpatialReference,n=e.map&&e.spatialReference||t.spatialReference;return d.pointToVector(t,v,o),d.pointToVector(t,s,o),v[0]-=r/2,s[0]+=r/2,v[1]-=i/2,s[1]+=i/2,d.vectorToVector(v,o,v,n),d.vectorToVector(s,o,s,n),a?(a.xmin=v[0],a.ymin=v[1],a.xmax=s[0],a.ymax=s[1],a.spatialReference=n):a=new c(v[0],v[1],s[0],s[1],n),a}}));