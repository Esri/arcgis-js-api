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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../../../lib/glMatrix","../PointToPointAnimationController","../../utils/navigationUtils","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(e,t,i,r,n,a,o,s,c){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,i,r){var a=e.call(this,t.state,i,"interaction"===r?null:void 0)||this;return a.view=t,a.mode=r,a.zoomLocation=n.vec3d.create(),a.tmpCamera=new s,a.panAxis=n.vec3d.create(),a.tmpViewDir=n.vec3d.create(),a.targetOnSphere=n.vec3d.create(),a.tmpCenter=n.vec3d.create(),a.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new s,interactionDirection:null},a.sphere={center:n.vec3d.create(),radius:0},a}return i(t,e),Object.defineProperty(t.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),t.prototype.zoomStep=function(e,t){if(this.active){var i=this.view.state,r=this.constraintOptions.interactionStartCamera;this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r);var a=!1;e>0&&this.pickingHelper.pickPointInScreen(t,this.zoomLocation)&&(a=!0),this.tmpCamera.copyFrom(i.camera),a?this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:n.vec3d.set(this.tmpCamera.center,this.zoomLocation);var o=Math.pow(.6,e);this.updateCamera(this.tmpCamera,o,this.zoomLocation,t),this.begin(this.tmpCamera)}},t.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:c.outExpo}},t.prototype.updateCamera=function(e,t,i,a){this.sphere.radius=n.vec3d.length(i),n.vec3d.subtract(e.center,e.eye,this.tmpViewDir);var s=n.vec3d.length(this.tmpViewDir),c=s*t;if(t<=1&&c<4&&(c=4,t=c/s),!(Math.abs(s-c)<1e-6)){var p=n.vec3d.length(e.center);if(this.sphere.radius!==p){var h=this.sphere.radius+t*(p-this.sphere.radius);n.vec3d.scale(e.center,h/p)}if(n.vec3d.scale(this.tmpViewDir,-t),n.vec3d.add(e.center,this.tmpViewDir,e.eye),r.applyAll(this.view,e,this.constraintOptions),n.vec3d.dist2(i,e.center)>1e-12&&o.intersectSphereFromScreenPoint(this.sphere,e,a,this.targetOnSphere)){var m=o.rotationAndAxisFromPoints(i,this.targetOnSphere,this.panAxis);o.applyRotation(e,this.sphere.center,this.panAxis,m)}r.applySurfaceCollision(this.view,e)}},t}(a.PointToPointAnimationController);t.ZoomStepController=p});