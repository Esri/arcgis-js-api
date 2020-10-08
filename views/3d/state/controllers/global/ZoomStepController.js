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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../PointToPointAnimationController","../../utils/navigationUtils","../../../support/geometryUtils","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing"],(function(t,e,i,r,n,a,o,s,c,p,h,m,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ZoomStepController=void 0;var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.zoomLocation=a.vec3f64.create(),e.tmpCamera=new h.default,e.tmpViewDir=a.vec3f64.create(),e.targetOnSphere=a.vec3f64.create(),e.tmpCenter=a.vec3f64.create(),e.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new h.default,interactionDirection:null,tiltMode:0},e.sphere=p.sphere.create(),e}return i.__extends(e,t),e.prototype.initialize=function(){this.intersector=new m.Intersector(this.view.state.mode)},e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,r=this.constraintOptions.interactionStartCamera;this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r);var a=!1;t>0&&this.intersectionHelper.intersectScreen(e,this.zoomLocation)&&(a=!0),this.tmpCamera.copyFrom(i.camera),a?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:n.vec3.copy(this.zoomLocation,this.tmpCamera.center);var o=Math.pow(.6,t);this.updateCamera(this.tmpCamera,o,this.zoomLocation,e),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:l.outExpo}},e.prototype.updateCamera=function(t,e,i,r){this.sphere.radius=n.vec3.length(i),n.vec3.subtract(this.tmpViewDir,t.center,t.eye);var a=n.vec3.length(this.tmpViewDir),s=a*e;if(e<=1&&s<4&&(e=(s=4)/a),!(Math.abs(a-s)<1e-6)){var h=n.vec3.length(t.center);if(this.sphere.radius!==h){var m=this.sphere.radius+e*(h-this.sphere.radius);n.vec3.scale(t.center,t.center,m/h)}n.vec3.scale(this.tmpViewDir,this.tmpViewDir,-e),n.vec3.add(t.eye,t.center,this.tmpViewDir),o.applyAll(this.view,t,this.constraintOptions),n.vec3.squaredDistance(i,t.center)>1e-12&&p.sphere.intersectScreen(this.sphere,t,r,this.targetOnSphere)&&c.panToPosition(this.sphere,t,i,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0),o.applySurfaceCollisionConstraint(this.view,t)}},e=i.__decorate([r.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],e)}(s.PointToPointAnimationController);e.ZoomStepController=u}));