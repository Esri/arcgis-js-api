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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../camera/constraintUtils","../PointToPointAnimationController","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(t,e,i,n,r,a,o,c){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e,i){var r=t.call(this,e.state,e.sceneIntersectionHelper,"interaction"===i?null:void 0)||this;return r.view=e,r.mode=i,r.zoomLocation=n.vec3f64.create(),r.tmpCamera=new o,r.tmpRayDir=n.vec3f64.create(),r.tmpCenter=n.vec3f64.create(),r.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new o,interactionDirection:null,tiltMode:0},r}return i(e,t),Object.defineProperty(e.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,r=this.constraintOptions.interactionStartCamera;this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r),this.tmpCamera.copyFrom(i.camera),t>0?(this.intersectionHelper.intersectScreenFreePointFallback(e,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:n.vec3.copy(this.zoomLocation,this.tmpCamera.center);var a=Math.pow(.6,t);this.updateCamera(this.tmpCamera,a,this.zoomLocation,e),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:c.outExpo}},e.prototype.updateCamera=function(t,e,i,a){n.vec3.subtract(this.tmpRayDir,i,t.eye);var o=n.vec3.length(this.tmpRayDir),c=o*e;e<=1&&c<4&&(c=4,e=c/o),Math.abs(o-c)<1e-6||(n.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),n.vec3.subtract(t.eye,i,this.tmpRayDir),n.vec3.lerp(t.center,t.center,i,1-e),r.applyAll(this.view,t,this.constraintOptions))},e}(a.PointToPointAnimationController);e.ZoomStepController=s});