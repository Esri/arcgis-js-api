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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils"],function(e,t,i,r,n,a,s,c,o,h,p,l){Object.defineProperty(t,"__esModule",{value:!0});var m=function(e){function t(t,i){var n=e.call(this)||this;return n.view=t,n.intersectionHelper=i,n.pickPoint=c.vec3f64.create(),n.tmpP0=a.vec2f64.create(),n.panAxisAngle=l.axisAngle.create(),n.tmpRayDir=c.vec3f64.create(),n.targetOnSphere=c.vec3f64.create(),n.dragBeginPoint=r.createScreenPointArray(),n.normalizedAnchorPoint=a.vec2f64.create(),n.constraintOptions={selection:7,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},n.sphere=l.sphere.create(),n.hasPickPoint=!1,n}return i(t,e),t.prototype.begin=function(e){if(this.active){n.vec2.copy(this.dragBeginPoint,e),p.normalizeCoordinate(this.beginCamera,e,this.normalizedAnchorPoint);var t=p.pickPointAndInitSphere(this.intersectionHelper,this.beginCamera,e,!1);this.hasPickPoint=!!t.scenePickPoint,this.pickPoint=t.scenePickPoint,this.sphere=t.sphere,this.constraintOptions.interactionStartCamera=this.beginCamera}},t.prototype.update=function(e){if(this.active){this.currentCamera.eye=this.beginCamera.eye,this.currentCamera.center=this.beginCamera.center,this.currentCamera.up=this.beginCamera.up,s.vec3.subtract(this.tmpRayDir,this.currentCamera.center,this.currentCamera.eye);var t=s.vec3.length(this.tmpRayDir);p.normalizeCoordinate(this.currentCamera,e,this.tmpP0);var i=12*(this.normalizedAnchorPoint[1]-this.tmpP0[1]),r=t*Math.pow(2,i),n=this.view.state.constraints.minimumPoiDistance;if(i<0&&r<n&&(r=n),!(Math.abs(t-r)<1e-6)){if(this.hasPickPoint&&r<t){var a=1-(1-r/t)*(1-this.sphere.radius/s.vec3.length(this.currentCamera.center));s.vec3.scale(this.currentCamera.center,this.currentCamera.center,a)}s.vec3.scale(this.tmpRayDir,this.tmpRayDir,-r/t),s.vec3.add(this.currentCamera.eye,this.currentCamera.center,this.tmpRayDir),this.constraintOptions.interactionFactor=o.pixelDistanceToInteractionFactor(this.dragBeginPoint,e),o.applyAll(this.view,this.currentCamera,this.constraintOptions),this.hasPickPoint&&(p.sphereOrPlanePointFromScreenPoint(this.sphere,this.currentCamera,this.dragBeginPoint,this.targetOnSphere),l.axisAngle.fromPoints(this.pickPoint,this.targetOnSphere,this.panAxisAngle),p.applyRotation(this.currentCamera,this.sphere.center,this.panAxisAngle)),o.applySurfaceCollision(this.view,this.currentCamera)}}},t.prototype.end=function(){this.active&&this.finishController()},t}(h.InteractiveController);t.ZoomController=m});