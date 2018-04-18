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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../../../lib/glMatrix","../PointToPointAnimationController","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(t,e,i,n,a,r,o,c){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e,i,n){var r=t.call(this,e.state,i,"interaction"===n?null:void 0)||this;return r.view=e,r.mode=n,r.zoomLocation=a.vec3d.create(),r.tmpCamera=new o,r.tmpRayDir=a.vec3d.create(),r.tmpCenter=a.vec3d.create(),r.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new o,interactionDirection:null},r}return i(e,t),Object.defineProperty(e.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,n=this.constraintOptions.interactionStartCamera;this.animation.finished?n.copyFrom(i.camera):this.animation.cameraAt(1,n),this.tmpCamera.copyFrom(i.camera),t>0?(this.pickingHelper.pickPointInScreen(e,this.zoomLocation)||this.pickingHelper.pickFreePointInScreen(e,this.zoomLocation),this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:a.vec3d.set(this.tmpCamera.center,this.zoomLocation);var r=Math.pow(.6,t);this.updateCamera(this.tmpCamera,r,this.zoomLocation,e),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:c.outExpo}},e.prototype.updateCamera=function(t,e,i,r){a.vec3d.subtract(i,t.eye,this.tmpRayDir);var o=a.vec3d.length(this.tmpRayDir),c=o*e;e<=1&&c<4&&(c=4,e=c/o),Math.abs(o-c)<1e-6||(a.vec3d.scale(this.tmpRayDir,e),a.vec3d.subtract(i,this.tmpRayDir,t.eye),a.vec3d.lerp(t.center,i,1-e),n.applyAll(this.view,this.tmpCamera,this.constraintOptions))},e}(r.PointToPointAnimationController);e.ZoomStepController=s});