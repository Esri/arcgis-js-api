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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../../../lib/gl-matrix","../InteractiveController","../../utils/navigationUtils"],function(t,e,i,r,n,a,s){Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(e,i){var r=t.call(this)||this;return r.view=e,r.intersectionHelper=i,r.pickPoint=n.vec3d.create(),r.tmpP0=n.vec3d.create(),r.panAxis=n.vec3d.create(),r.tmpRayDir=n.vec3d.create(),r.targetOnSphere=n.vec3d.create(),r.dragBeginPoint=n.vec2d.create(),r.normalizedAnchorPoint=n.vec2d.create(),r.constraintOptions={selection:7,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},r.sphere={center:n.vec3d.create(),radius:0},r.hasPickPoint=!1,r}return i(e,t),e.prototype.begin=function(t){if(this.active){n.vec2d.set(t,this.dragBeginPoint),s.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint);var e=s.pickPointAndInitSphere(this.intersectionHelper,this.beginCamera,t,!1);this.hasPickPoint=!!e.scenePickPoint,this.pickPoint=e.scenePickPoint,this.sphere=e.sphere,this.constraintOptions.interactionStartCamera=this.beginCamera}},e.prototype.update=function(t){if(this.active){this.currentCamera.eye=this.beginCamera.eye,this.currentCamera.center=this.beginCamera.center,this.currentCamera.up=this.beginCamera.up,n.vec3d.subtract(this.currentCamera.center,this.currentCamera.eye,this.tmpRayDir);var e=n.vec3d.length(this.tmpRayDir);s.normalizeCoordinate(this.currentCamera,t,this.tmpP0);var i=12*(this.tmpP0[1]-this.normalizedAnchorPoint[1]),a=e*Math.pow(2,i),c=this.view.state.constraints.minimumPoiDistance;if(i<0&&a<c&&(a=c),!(Math.abs(e-a)<1e-6)){if(this.hasPickPoint&&a<e){var o=1-(1-a/e)*(1-this.sphere.radius/n.vec3d.length(this.currentCamera.center));n.vec3d.scale(this.currentCamera.center,o)}if(n.vec3d.scale(this.tmpRayDir,-a/e),n.vec3d.add(this.currentCamera.center,this.tmpRayDir,this.currentCamera.eye),this.constraintOptions.interactionFactor=r.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),r.applyAll(this.view,this.currentCamera,this.constraintOptions),this.hasPickPoint){s.sphereOrSilhouettePointFromScreenPoint(this.sphere,this.currentCamera,this.dragBeginPoint,this.targetOnSphere,!0);var h=s.rotationAndAxisFromPoints(this.pickPoint,this.targetOnSphere,this.panAxis);s.applyRotation(this.currentCamera,this.sphere.center,this.panAxis,h)}r.applySurfaceCollision(this.view,this.currentCamera)}}},e.prototype.end=function(){this.active&&this.finishController()},e}(a.InteractiveController);e.ZoomController=c});