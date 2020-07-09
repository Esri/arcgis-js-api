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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../PointToPointAnimationController","../../utils/navigationUtils","../../../support/geometryUtils","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing"],(function(e,t,i,r,n,a,o,s,c,p,h,m,l){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.zoomLocation=a.vec3f64.create(),t.tmpCamera=new h.default,t.tmpViewDir=a.vec3f64.create(),t.targetOnSphere=a.vec3f64.create(),t.tmpCenter=a.vec3f64.create(),t.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new h.default,interactionDirection:null,tiltMode:0},t.sphere=p.sphere.create(),t}return i.__extends(t,e),t.prototype.initialize=function(){this.intersector=new m.Intersector(this.view.viewingMode)},t.prototype.zoomStep=function(e,t){if(this.active){var i=this.view.state,r=this.constraintOptions.interactionStartCamera;this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r);var a=!1;e>0&&this.intersectionHelper.intersectScreen(t,this.zoomLocation)&&(a=!0),this.tmpCamera.copyFrom(i.camera),a?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:n.vec3.copy(this.zoomLocation,this.tmpCamera.center);var o=Math.pow(.6,e);this.updateCamera(this.tmpCamera,o,this.zoomLocation,t),this.begin(this.tmpCamera)}},t.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:l.outExpo}},t.prototype.updateCamera=function(e,t,i,r){this.sphere.radius=n.vec3.length(i),n.vec3.subtract(this.tmpViewDir,e.center,e.eye);var a=n.vec3.length(this.tmpViewDir),s=a*t;if(t<=1&&s<4&&(t=(s=4)/a),!(Math.abs(a-s)<1e-6)){var h=n.vec3.length(e.center);if(this.sphere.radius!==h){var m=this.sphere.radius+t*(h-this.sphere.radius);n.vec3.scale(e.center,e.center,m/h)}n.vec3.scale(this.tmpViewDir,this.tmpViewDir,-t),n.vec3.add(e.eye,e.center,this.tmpViewDir),o.applyAll(this.view,e,this.constraintOptions),n.vec3.squaredDistance(i,e.center)>1e-12&&p.sphere.intersectScreen(this.sphere,e,r,this.targetOnSphere)&&c.panToPosition(this.sphere,e,i,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0),o.applySurfaceCollisionConstraint(this.view,e)}},t=i.__decorate([r.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],t)}(s.PointToPointAnimationController);t.ZoomStepController=u}));