// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../geometry/Extent","./mathUtils","./projectionUtils","./cameraUtilsInternal","../lib/glMatrix"],function(e,t,r,i,a,n,c){function o(e,t,r){var a=c.vec3d.create(),n=c.vec3d.create();return c.mat4d.identity(f),c.mat4d.rotateZ(f,-i.deg2rad(t)),c.mat4d.rotateX(f,i.deg2rad(r)),c.mat4d.multiplyVec3(f,p,a),c.vec3d.scale(a,-1),c.mat4d.multiplyVec3(f,T,n),{direction:a,up:n}}function d(e,t,r,i){return n.directionToHeadingTilt(t,r,i,p,T)}function l(e,t,r,i){var a=o(e,r,i),n=c.vec3d.add(c.vec3d.scale(a.direction,-t,c.vec3d.create()),e);return{up:a.up,eye:n,heading:r,tilt:i}}function u(e,t,r){return i.rad2deg(r)}function m(e,t,r){return i.deg2rad(r)}function v(e,t,i,n,c){var o=e.renderSpatialReference,d=e.map&&e.spatialReference||t.spatialReference;return a.pointToVector(t,g,o),a.pointToVector(t,y,o),g[0]-=i/2,y[0]+=i/2,g[1]-=n/2,y[1]+=n/2,a.vectorToVector(g,o,g,d),a.vectorToVector(y,o,y,d),c?(c.xmin=g[0],c.ymin=g[1],c.xmax=y[0],c.ymax=y[1],c.spatialReference=d):c=new r(g[0],g[1],y[0],y[1],d),c}Object.defineProperty(t,"__esModule",{value:!0});var T=c.vec3d.createFrom(0,1,0),p=c.vec3d.createFrom(0,0,1),f=c.mat4d.create(),g=c.vec3d.create(),y=c.vec3d.create();t.headingTiltToDirectionUp=o,t.directionToHeadingTilt=d,t.eyeForCenterWithHeadingTilt=l,t.lookAtTiltToEyeTilt=u,t.eyeTiltToLookAtTilt=m,t.toExtent=v});