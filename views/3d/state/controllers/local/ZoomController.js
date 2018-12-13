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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../camera/constraintUtils","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils","../../../support/mathUtils"],function(t,e,i,r,n,a,c,s,o){Object.defineProperty(e,"__esModule",{value:!0});var h=function(t){function e(e,i){var n=t.call(this)||this;return n.view=e,n.intersectionHelper=i,n.tmpP=r.vec3f64.create(),n.tmpN=r.vec3f64.create(),n.tmpP0=r.vec2f64.create(),n.tmpPoi=r.vec3f64.create(),n.tmpRayDir=r.vec3f64.create(),n.dragBeginPoint=r.vec2f64.create(),n.normalizedAnchorPoint=r.vec2f64.create(),n.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:r.vec3f64.create(),tiltMode:0},n.plane=s.plane.create(),n}return i(e,t),e.prototype.begin=function(t){this.active&&(r.vec2.copy(this.dragBeginPoint,t),c.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint),this.intersectionHelper.intersectScreenFreePointFallback(t,this.tmpP),r.vec3.subtract(this.tmpN,this.beginCamera.eye,this.beginCamera.center),r.vec3.normalize(this.tmpN,this.tmpN),this.tmpN[1]<0&&r.vec3.negate(this.tmpN,this.tmpN),s.plane.fromPositionAndNormal(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)},e.prototype.update=function(t){if(this.active){c.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||r.vec3.copy(this.tmpPoi,this.currentCamera.center),c.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var e=4*(this.normalizedAnchorPoint[1]-this.tmpP0[1]);r.vec2.copy(this.normalizedAnchorPoint,this.tmpP0),r.vec3.subtract(this.tmpRayDir,this.tmpPoi,this.currentCamera.eye);var i=r.vec3.length(this.tmpRayDir),a=i*(1-e);r.vec3.copy(this.constraintOptions.interactionDirection,this.tmpRayDir),r.vec3.scale(this.constraintOptions.interactionDirection,this.constraintOptions.interactionDirection,o.sign(e)/i);var s=this.view.state.constraints.minimumPoiDistance;e>=0&&a<s&&(a=s,e=-(a-i)/i),Math.abs(i-a)<1e-6||(r.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),r.vec3.add(this.currentCamera.eye,this.currentCamera.eye,this.tmpRayDir),r.vec3.lerp(this.currentCamera.center,this.currentCamera.center,this.tmpPoi,e),this.tmpPoi[2]>this.beginCamera.center[2]?this.currentCamera.center[2]=Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):this.currentCamera.center[2]=Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=n.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),n.applyAll(this.view,this.currentCamera,this.constraintOptions))}},e.prototype.end=function(){this.active&&this.finishController()},e}(a.InteractiveController);e.ZoomController=h});