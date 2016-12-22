// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../geometry/Extent","./mathUtils","./projectionUtils","../lib/glMatrix","./cameraUtilsInternal"],function(e,t,r,i,n){function a(e,r,i){var n=p.create(),a=p.create();return m.identity(y),m.rotateZ(y,-t.deg2rad(r)),m.rotateX(y,t.deg2rad(i)),m.multiplyVec3(y,g,n),p.scale(n,-1),m.multiplyVec3(y,f,a),{direction:n,up:a}}function o(e,t,r,i){return n.directionToHeadingTilt(t,r,i,g,f)}function c(e,t,r,i){var n=a(e,r,i),o=p.add(p.scale(n.direction,-t,p.create()),e);return{up:n.up,eye:o,heading:r,tilt:i}}function l(e,r,i){return t.rad2deg(i)}function d(e,r,i){return t.deg2rad(i)}function u(t,i,n,a,o){var c=t.renderSpatialReference,l=t.map&&t.spatialReference||i.spatialReference;return r.pointToVector(i,s,c),r.pointToVector(i,v,c),s[0]-=n/2,v[0]+=n/2,s[1]-=a/2,v[1]+=a/2,r.vectorToVector(s,c,s,l),r.vectorToVector(v,c,v,l),o?(o.xmin=s[0],o.ymin=s[1],o.xmax=v[0],o.ymax=v[1],o.spatialReference=l):o=new e(s[0],s[1],v[0],v[1],l),o}var T={headingTiltToDirectionUp:a,directionToHeadingTilt:o,eyeForCenterWithHeadingTilt:c,lookAtTiltToEyeTilt:l,eyeTiltToLookAtTilt:d,toExtent:u},p=i.vec3d,m=i.mat4d,f=p.createFrom(0,1,0),g=p.createFrom(0,0,1),y=m.create(),s=p.create(),v=p.create();return T});