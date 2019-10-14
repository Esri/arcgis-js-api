// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../PointToPointAnimationController","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(t,e,i,n,a,r,o,c,s){Object.defineProperty(e,"__esModule",{value:!0});var m=function(t){function e(e,i){var n=t.call(this,e.state,e.sceneIntersectionHelper,"interaction"===i?null:void 0)||this;return n.view=e,n.mode=i,n.zoomLocation=a.vec3f64.create(),n.tmpCamera=new c.default,n.tmpRayDir=a.vec3f64.create(),n.tmpCenter=a.vec3f64.create(),n.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new c.default,interactionDirection:null,tiltMode:0},n}return i(e,t),Object.defineProperty(e.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,a=this.constraintOptions.interactionStartCamera;this.animation.finished?a.copyFrom(i.camera):this.animation.cameraAt(1,a),this.tmpCamera.copyFrom(i.camera),t>0?(this.intersectionHelper.intersectScreenFreePointFallback(e,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:n.vec3.copy(this.zoomLocation,this.tmpCamera.center);var r=Math.pow(.6,t);this.updateCamera(this.tmpCamera,r,this.zoomLocation,e),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:s.outExpo}},e.prototype.updateCamera=function(t,e,i,a){n.vec3.subtract(this.tmpRayDir,i,t.eye);var o=n.vec3.length(this.tmpRayDir),c=o*e;e<=1&&c<4&&(c=4,e=c/o),Math.abs(o-c)<1e-6||(n.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),n.vec3.subtract(t.eye,i,this.tmpRayDir),n.vec3.lerp(t.center,t.center,i,1-e),r.applyAll(this.view,t,this.constraintOptions))},e}(o.PointToPointAnimationController);e.ZoomStepController=m});