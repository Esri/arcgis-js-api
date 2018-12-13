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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../camera/constraintUtils","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils"],function(t,e,i,r,n,a,s,c){Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,i){var n=t.call(this)||this;return n.view=e,n.intersectionHelper=i,n.pickPoint=r.vec3f64.create(),n.tmpP0=r.vec2f64.create(),n.panAxisAngle=c.axisAngle.create(),n.tmpRayDir=r.vec3f64.create(),n.targetOnSphere=r.vec3f64.create(),n.dragBeginPoint=r.vec2f64.create(),n.normalizedAnchorPoint=r.vec2f64.create(),n.constraintOptions={selection:7,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},n.sphere=c.sphere.create(),n.hasPickPoint=!1,n}return i(e,t),e.prototype.begin=function(t){if(this.active){r.vec2.copy(this.dragBeginPoint,t),s.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint);var e=s.pickPointAndInitSphere(this.intersectionHelper,this.beginCamera,t,!1);this.hasPickPoint=!!e.scenePickPoint,this.pickPoint=e.scenePickPoint,this.sphere=e.sphere,this.constraintOptions.interactionStartCamera=this.beginCamera}},e.prototype.update=function(t){if(this.active){this.currentCamera.eye=this.beginCamera.eye,this.currentCamera.center=this.beginCamera.center,this.currentCamera.up=this.beginCamera.up,r.vec3.subtract(this.tmpRayDir,this.currentCamera.center,this.currentCamera.eye);var e=r.vec3.length(this.tmpRayDir);s.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var i=12*(this.tmpP0[1]-this.normalizedAnchorPoint[1]),a=e*Math.pow(2,i),o=this.view.state.constraints.minimumPoiDistance;if(i<0&&a<o&&(a=o),!(Math.abs(e-a)<1e-6)){if(this.hasPickPoint&&a<e){var h=1-(1-a/e)*(1-this.sphere.radius/r.vec3.length(this.currentCamera.center));r.vec3.scale(this.currentCamera.center,this.currentCamera.center,h)}r.vec3.scale(this.tmpRayDir,this.tmpRayDir,-a/e),r.vec3.add(this.currentCamera.eye,this.currentCamera.center,this.tmpRayDir),this.constraintOptions.interactionFactor=n.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),n.applyAll(this.view,this.currentCamera,this.constraintOptions),this.hasPickPoint&&(s.sphereOrPlanePointFromScreenPoint(this.sphere,this.currentCamera,this.dragBeginPoint,this.targetOnSphere),c.axisAngle.fromPoints(this.pickPoint,this.targetOnSphere,this.panAxisAngle),s.applyRotation(this.currentCamera,this.sphere.center,this.panAxisAngle)),n.applySurfaceCollision(this.view,this.currentCamera)}}},e.prototype.end=function(){this.active&&this.finishController()},e}(a.InteractiveController);e.ZoomController=o});