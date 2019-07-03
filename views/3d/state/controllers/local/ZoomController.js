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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils","../../../support/mathUtils"],function(t,e,i,r,n,a,c,s,o,h,m,p,l){Object.defineProperty(e,"__esModule",{value:!0});var v=function(t){function e(e,i){var n=t.call(this)||this;return n.view=e,n.intersectionHelper=i,n.tmpP=s.vec3f64.create(),n.tmpN=s.vec3f64.create(),n.tmpP0=a.vec2f64.create(),n.tmpPoi=s.vec3f64.create(),n.tmpRayDir=s.vec3f64.create(),n.dragBeginPoint=r.createScreenPointArray(),n.normalizedAnchorPoint=a.vec2f64.create(),n.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:s.vec3f64.create(),tiltMode:0},n.plane=p.plane.create(),n}return i(e,t),e.prototype.begin=function(t){this.active&&(n.vec2.copy(this.dragBeginPoint,t),m.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint),this.intersectionHelper.intersectScreenFreePointFallback(t,this.tmpP),c.vec3.subtract(this.tmpN,this.beginCamera.eye,this.beginCamera.center),c.vec3.normalize(this.tmpN,this.tmpN),this.tmpN[1]<0&&c.vec3.negate(this.tmpN,this.tmpN),p.plane.fromPositionAndNormal(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)},e.prototype.update=function(t){if(this.active){m.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||c.vec3.copy(this.tmpPoi,this.currentCamera.center),m.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var e=4*(this.tmpP0[1]-this.normalizedAnchorPoint[1]);n.vec2.copy(this.normalizedAnchorPoint,this.tmpP0),c.vec3.subtract(this.tmpRayDir,this.tmpPoi,this.currentCamera.eye);var i=c.vec3.length(this.tmpRayDir),r=i*(1-e);c.vec3.copy(this.constraintOptions.interactionDirection,this.tmpRayDir),c.vec3.scale(this.constraintOptions.interactionDirection,this.constraintOptions.interactionDirection,l.sign(e)/i);var a=this.view.state.constraints.minimumPoiDistance;e>=0&&r<a&&(r=a,e=-(r-i)/i),Math.abs(i-r)<1e-6||(c.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),c.vec3.add(this.currentCamera.eye,this.currentCamera.eye,this.tmpRayDir),c.vec3.lerp(this.currentCamera.center,this.currentCamera.center,this.tmpPoi,e),this.tmpPoi[2]>this.beginCamera.center[2]?this.currentCamera.center[2]=Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):this.currentCamera.center[2]=Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=o.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),o.applyAll(this.view,this.currentCamera,this.constraintOptions))}},e.prototype.end=function(){this.active&&this.finishController()},e}(h.InteractiveController);e.ZoomController=v});