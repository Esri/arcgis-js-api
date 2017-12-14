// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../InteractiveController","../../../lib/glMatrix","../../../support/mathUtils","../../utils/navigationUtils"],function(t,e,i,r,n,a,c,s){Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,i){var r=t.call(this)||this;return r.view=e,r.pickingHelper=i,r.tmpP=a.vec3d.create(),r.tmpN=a.vec3d.create(),r.tmpP0=a.vec3d.create(),r.tmpPoi=a.vec3d.create(),r.tmpRayDir=a.vec3d.create(),r.dragBeginPoint=a.vec2d.create(),r.normalizedAnchorPoint=a.vec2d.create(),r.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:a.vec3d.create()},r.plane={normal:a.vec3d.create(),d:0},r}return i(e,t),e.prototype.begin=function(t){this.active&&(a.vec2d.set(t,this.dragBeginPoint),s.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint),this.pickingHelper.pickPointInScreen(t,this.tmpP)||this.pickingHelper.pickFreePointInScreen(t,this.tmpP),a.vec3d.normalize(a.vec3d.subtract(this.beginCamera.eye,this.beginCamera.center,this.tmpN)),this.tmpN[1]<0&&a.vec3d.negate(this.tmpN),s.setPlane(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)},e.prototype.update=function(t){if(this.active){s.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||a.vec3d.set(this.currentCamera.center,this.tmpPoi),s.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var e=4*(this.normalizedAnchorPoint[1]-this.tmpP0[1]);a.vec2d.set(this.tmpP0,this.normalizedAnchorPoint),a.vec3d.subtract(this.tmpPoi,this.currentCamera.eye,this.tmpRayDir);var i=a.vec3d.length(this.tmpRayDir),n=i*(1-e);a.vec3d.set(this.tmpRayDir,this.constraintOptions.interactionDirection),a.vec3d.scale(this.constraintOptions.interactionDirection,c.sign(e)/i);var o=this.view.state.constraints.minimumPoiDistance;e>=0&&o>n&&(n=o,e=-(n-i)/i),Math.abs(i-n)<1e-6||(a.vec3d.scale(this.tmpRayDir,e),a.vec3d.add(this.currentCamera.eye,this.tmpRayDir),a.vec3d.lerp(this.currentCamera.center,this.tmpPoi,e),this.tmpPoi[2]>this.beginCamera.center[2]?this.currentCamera.center[2]=Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):this.currentCamera.center[2]=Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=r.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),r.applyAll(this.view,this.currentCamera,this.constraintOptions))}},e.prototype.end=function(){this.active&&this.finishController()},e}(n.InteractiveController);e.ZoomController=o});