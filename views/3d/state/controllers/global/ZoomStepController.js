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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../camera/constraintUtils","../PointToPointAnimationController","../../utils/navigationUtils","../../../support/geometryUtils","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(e,t,i,r,n,a,o,s,c,p){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t,i){var n=e.call(this,t.state,t.sceneIntersectionHelper,"interaction"===i?null:void 0)||this;return n.view=t,n.mode=i,n.zoomLocation=r.vec3f64.create(),n.tmpCamera=new c,n.tmpViewDir=r.vec3f64.create(),n.targetOnSphere=r.vec3f64.create(),n.tmpCenter=r.vec3f64.create(),n.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new c,interactionDirection:null,tiltMode:0},n.sphere=s.sphere.create(),n}return i(t,e),Object.defineProperty(t.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),t.prototype.zoomStep=function(e,t){if(this.active){var i=this.view.state,n=this.constraintOptions.interactionStartCamera;this.animation.finished?n.copyFrom(i.camera):this.animation.cameraAt(1,n);var a=!1;e>0&&this.intersectionHelper.intersectScreen(t,this.zoomLocation)&&(a=!0),this.tmpCamera.copyFrom(i.camera),a?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:r.vec3.copy(this.zoomLocation,this.tmpCamera.center);var o=Math.pow(.6,e);this.updateCamera(this.tmpCamera,o,this.zoomLocation,t),this.begin(this.tmpCamera)}},t.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:p.outExpo}},t.prototype.updateCamera=function(e,t,i,a){this.sphere.radius=r.vec3.length(i),r.vec3.subtract(this.tmpViewDir,e.center,e.eye);var c=r.vec3.length(this.tmpViewDir),p=c*t;if(t<=1&&p<4&&(p=4,t=p/c),!(Math.abs(c-p)<1e-6)){var h=r.vec3.length(e.center);if(this.sphere.radius!==h){var m=this.sphere.radius+t*(h-this.sphere.radius);r.vec3.scale(e.center,e.center,m/h)}r.vec3.scale(this.tmpViewDir,this.tmpViewDir,-t),r.vec3.add(e.eye,e.center,this.tmpViewDir),n.applyAll(this.view,e,this.constraintOptions),r.vec3.squaredDistance(i,e.center)>1e-12&&s.sphere.intersectScreen(this.sphere,e,a,this.targetOnSphere)&&o.panToPosition(this.sphere,e,i,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0),n.applySurfaceCollision(this.view,e)}},t}(a.PointToPointAnimationController);t.ZoomStepController=h});