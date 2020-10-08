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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../PointToPointAnimationController","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing"],(function(t,e,i,r,a,o,n,s,c,m,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ZoomStepController=void 0;var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.zoomLocation=o.vec3f64.create(),e.tmpCamera=new c.default,e.tmpRayDir=o.vec3f64.create(),e.tmpCenter=o.vec3f64.create(),e.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new c.default,interactionDirection:null,tiltMode:0},e}return i.__extends(e,t),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,r=this.constraintOptions.interactionStartCamera;this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r),this.tmpCamera.copyFrom(i.camera);var o=new m.Intersector(this.view.state.mode);t>0?(this.intersectionHelper.intersectScreenFreePointFallback(e,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,o,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,o,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:a.vec3.copy(this.zoomLocation,this.tmpCamera.center);var n=Math.pow(.6,t);this.updateCamera(this.tmpCamera,n,this.zoomLocation),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:p.outExpo}},e.prototype.updateCamera=function(t,e,i){a.vec3.subtract(this.tmpRayDir,i,t.eye);var r=a.vec3.length(this.tmpRayDir),o=r*e;e<=1&&o<4&&(e=(o=4)/r),Math.abs(r-o)<1e-6||(a.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),a.vec3.subtract(t.eye,i,this.tmpRayDir),a.vec3.lerp(t.center,t.center,i,1-e),n.applyAll(this.view,t,this.constraintOptions))},e=i.__decorate([r.subclass("esri.views.3d.state.controllers.local.ZoomStepController")],e)}(s.PointToPointAnimationController);e.ZoomStepController=l}));