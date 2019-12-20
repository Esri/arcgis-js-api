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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../PointToPointAnimationController","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing"],function(t,e,i,a,n,r,o,c,s,m){Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(e,i){var a=t.call(this,e.state,e.sceneIntersectionHelper,i)||this;return a.view=e,a.zoomLocation=n.vec3f64.create(),a.tmpCamera=new c.default,a.tmpRayDir=n.vec3f64.create(),a.tmpCenter=n.vec3f64.create(),a.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new c.default,interactionDirection:null,tiltMode:0},a}return i(e,t),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,n=this.constraintOptions.interactionStartCamera;this.animation.finished?n.copyFrom(i.camera):this.animation.cameraAt(1,n),this.tmpCamera.copyFrom(i.camera);var r=new s(this.view.viewingMode);t>0?(this.intersectionHelper.intersectScreenFreePointFallback(e,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,r,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,r,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:a.vec3.copy(this.zoomLocation,this.tmpCamera.center);var o=Math.pow(.6,t);this.updateCamera(this.tmpCamera,o,this.zoomLocation),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:m.outExpo}},e.prototype.updateCamera=function(t,e,i){a.vec3.subtract(this.tmpRayDir,i,t.eye);var n=a.vec3.length(this.tmpRayDir),o=n*e;e<=1&&o<4&&(o=4,e=o/n),Math.abs(n-o)<1e-6||(a.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),a.vec3.subtract(t.eye,i,this.tmpRayDir),a.vec3.lerp(t.center,t.center,i,1-e),r.applyAll(this.view,t,this.constraintOptions))},e}(o.PointToPointAnimationController);e.ZoomStepController=p});