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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils"],(function(t,e,i,r,n,a,c,o,s,h,m,p,l){Object.defineProperty(e,"__esModule",{value:!0});var v=function(t){function e(e,i){var r=t.call(this)||this;return r.view=e,r.intersectionHelper=i,r.tmpP=s.vec3f64.create(),r.tmpN=s.vec3f64.create(),r.tmpP0=c.vec2f64.create(),r.tmpPoi=s.vec3f64.create(),r.tmpRayDir=s.vec3f64.create(),r.dragBeginPoint=n.createScreenPointArray(),r.normalizedAnchorPoint=c.vec2f64.create(),r.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:s.vec3f64.create(),tiltMode:0},r.plane=l.plane.create(),r}return i(e,t),e.prototype.begin=function(t){this.active&&(a.vec2.copy(this.dragBeginPoint,t),p.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint),this.intersectionHelper.intersectScreenFreePointFallback(t,this.tmpP),o.vec3.subtract(this.tmpN,this.beginCamera.eye,this.beginCamera.center),o.vec3.normalize(this.tmpN,this.tmpN),this.tmpN[1]<0&&o.vec3.negate(this.tmpN,this.tmpN),l.plane.fromPositionAndNormal(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)},e.prototype.update=function(t){if(this.active){p.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||o.vec3.copy(this.tmpPoi,this.currentCamera.center),p.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var e=4*(this.tmpP0[1]-this.normalizedAnchorPoint[1]);a.vec2.copy(this.normalizedAnchorPoint,this.tmpP0),o.vec3.subtract(this.tmpRayDir,this.tmpPoi,this.currentCamera.eye);var i=o.vec3.length(this.tmpRayDir),n=i*(1-e);o.vec3.copy(this.constraintOptions.interactionDirection,this.tmpRayDir),o.vec3.scale(this.constraintOptions.interactionDirection,this.constraintOptions.interactionDirection,r.sign(e)/i);var c=this.view.state.constraints.minimumPoiDistance;e>=0&&n<c&&(e=-((n=c)-i)/i),Math.abs(i-n)<1e-6||(o.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),o.vec3.add(this.currentCamera.eye,this.currentCamera.eye,this.tmpRayDir),o.vec3.lerp(this.currentCamera.center,this.currentCamera.center,this.tmpPoi,e),this.tmpPoi[2]>this.beginCamera.center[2]?this.currentCamera.center[2]=Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):this.currentCamera.center[2]=Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=h.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),h.applyAll(this.view,this.currentCamera,this.constraintOptions))}},e.prototype.end=function(){this.active&&this.finishController()},e}(m.InteractiveController);e.ZoomController=v}));