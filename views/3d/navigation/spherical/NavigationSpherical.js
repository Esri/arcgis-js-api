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

define(["../Navigation","./ConstraintsSpherical","./AnimationSpherical","./actions/PanSpherical","./actions/ZoomSpherical","./actions/RotateSpherical","../../webgl-engine/lib/Camera","../../support/earthUtils","../../lib/glMatrix"],function(e,t,a,i,r,n,o,s,c){var h=c.vec3d,l=c.mat4d,p=h.create(),g=h.create(),u=l.create(),m=e.createSubclass([t,a],{declaredClass:"esri.views.3d.navigation.spherical.NavigationSpherical",initialize:function(){this.pan=new i({navigation:this}),this.zoom=new r({navigation:this}),this.rotate=new n({navigation:this}),this._intersectTerrainSelector.enableBackfacesTerrain=!1},getInitialCamera:function(){return new o(h.createFrom(4*s.earthRadius,0,0),h.createFrom(s.earthRadius,0,0),h.createFrom(0,0,1))},fixTargetUpVector:function(){this.cameras.target.computeUpOnSphere()},setPoiAuto:function(e,t){var a=this.picker.pickAlongRay(this.cameras.target.eye,this.cameras.target.center,null,e);this.picker.pickedIntersectionPoint(a,p)&&(this.setCameraFromEyeAndCenter(this.cameras.target.eye,p,{animate:!1}),h.set(this.cameras.target.center,this.cameras.current.center),t&&this.setCurrentToTarget())},rotateCameraWithPointsOnSphere:function(e,t,a,i,r){var n;null==r&&(r=h.length(e)),Math.abs(h.length(e)-r)>=1e-4&&(console.error("[NavigationSpherical.rotateCameraWithPointsOnSphere]: invalid radius for source point (got "+r+", but expected "+h.length(e)+", "+e+")"),n=h.length(e)),Math.abs(h.length(t)-r)>=1e-4&&(console.error("[NavigationSpherical.rotateCameraWithPointsOnSphere: invalid radius for target point (got "+r+", but expected "+h.length(t)+")"),void 0===n&&(n=h.length(t))),void 0!==n&&(r=n);var o=this.rotationFromPointsOnSphere(e,t,r,g);l.identity(u),l.rotate(u,o,g),l.multiplyVec3(u,a.eye,i.eye),l.multiplyVec3(u,a.center,i.center),l.multiplyVec3(u,a.up,i.up)},rotationFromPointsOnSphere:function(e,t,a,i){return h.cross(e,t,i),-Math.acos(1-h.dist2(e,t)/(2*a*a))}});return m});