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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../geometry/Extent","../lib/glMatrix","./cameraUtilsInternal","./mathUtils","./projectionUtils"],function(e,t,r,i,a,n,c){function o(e,t,r){var a=i.vec3d.create(),c=i.vec3d.create();return i.mat4d.identity(f),i.mat4d.rotateZ(f,-n.deg2rad(t)),i.mat4d.rotateX(f,n.deg2rad(r)),i.mat4d.multiplyVec3(f,p,a),i.vec3d.scale(a,-1),i.mat4d.multiplyVec3(f,T,c),{direction:a,up:c}}function d(e,t,r,i){return a.directionToHeadingTilt(t,r,i,p,T)}function l(e,t,r,a){var n=o(e,r,a),c=i.vec3d.add(i.vec3d.scale(n.direction,-t,i.vec3d.create()),e);return{up:n.up,eye:c,heading:r,tilt:a}}function u(e,t,r){return n.rad2deg(r)}function m(e,t,r){return n.deg2rad(r)}function v(e,t,i,a,n){var o=e.renderSpatialReference,d=e.map&&e.spatialReference||t.spatialReference;return c.pointToVector(t,g,o),c.pointToVector(t,y,o),g[0]-=i/2,y[0]+=i/2,g[1]-=a/2,y[1]+=a/2,c.vectorToVector(g,o,g,d),c.vectorToVector(y,o,y,d),n?(n.xmin=g[0],n.ymin=g[1],n.xmax=y[0],n.ymax=y[1],n.spatialReference=d):n=new r(g[0],g[1],y[0],y[1],d),n}Object.defineProperty(t,"__esModule",{value:!0});var T=i.vec3d.createFrom(0,1,0),p=i.vec3d.createFrom(0,0,1),f=i.mat4d.create(),g=i.vec3d.create(),y=i.vec3d.create();t.headingTiltToDirectionUp=o,t.directionToHeadingTilt=d,t.eyeForCenterWithHeadingTilt=l,t.lookAtTiltToEyeTilt=u,t.eyeTiltToLookAtTilt=m,t.toExtent=v});