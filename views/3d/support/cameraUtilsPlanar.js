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

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","./cameraUtilsInternal","./pointUtils","./projectionUtils"],(function(e,t,i,r,o,n,a,c,l,d,T){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toExtent=t.eyeTiltToLookAtTilt=t.lookAtTiltToEyeTilt=t.eyeForCenterWithHeadingTilt=t.directionToHeadingTilt=t.headingTiltToDirectionUp=void 0;var f=a.vec3f64.fromValues(0,1,0),m=a.vec3f64.fromValues(0,0,1),u=o.mat4f64.create(),s=a.vec3f64.create(),v=a.vec3f64.create();function g(e,t,o,a){void 0===a&&(a=l.createDirectionUp()),r.mat4.identity(u);var c=a.direction,d=a.up;return r.mat4.rotateZ(u,u,-i.deg2rad(t)),r.mat4.rotateX(u,u,i.deg2rad(o)),n.vec3.transformMat4(c,m,u),n.vec3.scale(c,c,-1),n.vec3.transformMat4(d,f,u),a}t.headingTiltToDirectionUp=g,t.directionToHeadingTilt=function(e,t,i,r){return l.directionToHeadingTilt(t,i,r,m,f)},t.eyeForCenterWithHeadingTilt=function(e,t,i,r){var o=g(0,i,r),c=a.vec3f64.create();return n.vec3.scale(c,o.direction,-t),n.vec3.add(c,c,e),{up:o.up,eye:c,heading:i,tilt:r}},t.lookAtTiltToEyeTilt=function(e){return i.rad2deg(e)},t.eyeTiltToLookAtTilt=function(e){return i.deg2rad(e)},t.toExtent=function(e,t,i,r,o){var n=e.renderSpatialReference,a=e.map&&e.spatialReference||t.spatialReference;return d.pointToVector(t,s,n),d.pointToVector(t,v,n),s[0]-=i/2,v[0]+=i/2,s[1]-=r/2,v[1]+=r/2,T.vectorToVector(s,n,s,a),T.vectorToVector(v,n,v,a),o?(o.xmin=s[0],o.ymin=s[1],o.xmax=v[0],o.ymax=v[1],o.spatialReference=a):o=new c(s[0],s[1],v[0],v[1],a),o}}));