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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../PointToPointAnimationController","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing"],(function(t,e,i,a,r,n,o,s,c,m,p){Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.zoomLocation=n.vec3f64.create(),e.tmpCamera=new c.default,e.tmpRayDir=n.vec3f64.create(),e.tmpCenter=n.vec3f64.create(),e.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new c.default,interactionDirection:null,tiltMode:0},e}return i.__extends(e,t),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,a=this.constraintOptions.interactionStartCamera;this.animation.finished?a.copyFrom(i.camera):this.animation.cameraAt(1,a),this.tmpCamera.copyFrom(i.camera);var n=new m.Intersector(this.view.viewingMode);t>0?(this.intersectionHelper.intersectScreenFreePointFallback(e,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,n,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,n,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:r.vec3.copy(this.zoomLocation,this.tmpCamera.center);var o=Math.pow(.6,t);this.updateCamera(this.tmpCamera,o,this.zoomLocation),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:p.outExpo}},e.prototype.updateCamera=function(t,e,i){r.vec3.subtract(this.tmpRayDir,i,t.eye);var a=r.vec3.length(this.tmpRayDir),n=a*e;e<=1&&n<4&&(e=(n=4)/a),Math.abs(a-n)<1e-6||(r.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),r.vec3.subtract(t.eye,i,this.tmpRayDir),r.vec3.lerp(t.center,t.center,i,1-e),o.applyAll(this.view,t,this.constraintOptions))},e=i.__decorate([a.subclass("esri.views.3d.state.controllers.local.ZoomStepController")],e)}(s.PointToPointAnimationController);e.ZoomStepController=l}));