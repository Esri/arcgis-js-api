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

define(["require","exports","tslib","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils"],(function(t,e,i,r,n,a,c,o,s,h,m,l,p,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ZoomController=void 0;var u=function(t){function e(e){var i=t.call(this,e)||this;return i.view=null,i.tmpP=h.vec3f64.create(),i.tmpN=h.vec3f64.create(),i.tmpP0=o.vec2f64.create(),i.tmpPoi=h.vec3f64.create(),i.tmpRayDir=h.vec3f64.create(),i.dragBeginPoint=n.createScreenPointArray(),i.normalizedAnchorPoint=o.vec2f64.create(),i.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:h.vec3f64.create(),tiltMode:0},i.plane=v.plane.create(),i}return i.__extends(e,t),Object.defineProperty(e.prototype,"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!1,configurable:!0}),e.prototype.begin=function(t){this.active&&(c.vec2.copy(this.dragBeginPoint,t),p.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint),this.intersectionHelper.intersectScreenFreePointFallback(t,this.tmpP),s.vec3.subtract(this.tmpN,this.beginCamera.eye,this.beginCamera.center),s.vec3.normalize(this.tmpN,this.tmpN),this.tmpN[1]<0&&s.vec3.negate(this.tmpN,this.tmpN),v.plane.fromPositionAndNormal(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)},e.prototype.update=function(t){if(this.active){p.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||s.vec3.copy(this.tmpPoi,this.currentCamera.center),p.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var e=4*(this.tmpP0[1]-this.normalizedAnchorPoint[1]);c.vec2.copy(this.normalizedAnchorPoint,this.tmpP0),s.vec3.subtract(this.tmpRayDir,this.tmpPoi,this.currentCamera.eye);var i=s.vec3.length(this.tmpRayDir),n=i*(1-e);s.vec3.copy(this.constraintOptions.interactionDirection,this.tmpRayDir),s.vec3.scale(this.constraintOptions.interactionDirection,this.constraintOptions.interactionDirection,r.sign(e)/i);var a=this.view.state.constraints.minimumPoiDistance;e>=0&&n<a&&(e=-((n=a)-i)/i),Math.abs(i-n)<1e-6||(s.vec3.scale(this.tmpRayDir,this.tmpRayDir,e),s.vec3.add(this.currentCamera.eye,this.currentCamera.eye,this.tmpRayDir),s.vec3.lerp(this.currentCamera.center,this.currentCamera.center,this.tmpPoi,e),this.tmpPoi[2]>this.beginCamera.center[2]?this.currentCamera.center[2]=Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):this.currentCamera.center[2]=Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=m.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),m.applyAll(this.view,this.currentCamera,this.constraintOptions))}},e.prototype.end=function(){this.active&&this.finishController()},i.__decorate([a.property({constructOnly:!0})],e.prototype,"view",void 0),e=i.__decorate([a.subclass("esri.views.3d.state.controllers.local.ZoomController")],e)}(l.InteractiveController);e.ZoomController=u}));