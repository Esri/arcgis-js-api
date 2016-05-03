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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../Navigation","./ConstraintsSpherical","./AnimationSpherical","./actions/PanSpherical","./actions/ZoomSpherical","./actions/RotateSpherical","../../lib/glMatrix"],function(e,t,i,a,r,n,o){var s=o.vec3d,c=o.mat4d,h=s.create(),l=s.create(),p=c.create(),u=e.createSubclass([t,i],{declaredClass:"esri.views.3d.navigation.spherical.NavigationSpherical",initialize:function(){this.pan=new a(this),this.zoom=new r(this),this.rotate=new n(this)},fixTargetUpVector:function(){this.cameras.target.computeUpOnSphere()},setPoiAuto:function(e,t){var i=this.picker.pickAlongRay(this.cameras.target.eye,this.cameras.target.center,null,e);this.picker.pickedIntersectionPoint(i,h)&&(this.setCameraFromEyeAndCenter(this.cameras.target.eye,h),s.set(this.cameras.target.center,this.cameras.current.center),t&&this.setCurrentToTarget())},rotateCameraWithPointsOnSphere:function(e,t,i,a,r){var n;null==r&&(r=s.length(e)),Math.abs(s.length(e)-r)>=1e-4&&(console.error("[NavigationSpherical.rotateCameraWithPointsOnSphere]: invalid radius for source point (got "+r+", but expected "+s.length(e)+", "+e+")"),n=s.length(e)),Math.abs(s.length(t)-r)>=1e-4&&(console.error("[NavigationSpherical.rotateCameraWithPointsOnSphere: invalid radius for target point (got "+r+", but expected "+s.length(t)+")"),void 0===n&&(n=s.length(t))),void 0!==n&&(r=n);var o=this.rotationFromPointsOnSphere(e,t,r,l);c.identity(p),c.rotate(p,o,l),c.multiplyVec3(p,i.eye,a.eye),c.multiplyVec3(p,i.center,a.center),c.multiplyVec3(p,i.up,a.up)},rotationFromPointsOnSphere:function(e,t,i,a){return s.cross(e,t,a),-Math.acos(1-s.dist2(e,t)/(2*i*i))}});return u});