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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../camera/constraintUtils","../../lib/gl-matrix","../Constraints","./InteractiveController","../utils/navigationUtils","../../support/mathUtils"],function(t,i,e,r,s,n,o,a,c){Object.defineProperty(i,"__esModule",{value:!0});var p=function(t){function i(i,e,r){var n=t.call(this)||this;return n.view=i,n.intersectionHelper=e,n.pivot=r,n.lastPoint=s.vec2d.create(),n.tmpWorldUp=s.vec3d.create(),n.tmpViewDir=s.vec3d.create(),n.tmpRotCurPoint=s.vec2d.create(),n.tmpTransf=s.mat4d.create(),n.tmpAxis=s.vec3d.create(),n.pivotPos=s.vec3d.create(),n.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},n.rotScale="center"===r?3:1.5,n}return e(i,t),i.prototype.begin=function(t){if(this.active){switch(this.pivot){case"eye":s.vec3d.set(this.beginCamera.eye,this.pivotPos),this.constraintOptions.interactionType=3,this.constraintOptions.tiltMode=1,this.constraintOptions.selection=0;break;case"center":this.intersectionHelper.pickPointFromSegment(this.beginCamera.eye,this.beginCamera.center,this.pivotPos)||(this.view.state.isLocal?this.intersectionHelper.pickFreePointFromSegment(this.beginCamera.eye,this.beginCamera.center,this.pivotPos):s.vec3d.set(this.beginCamera.center,this.pivotPos)),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.tiltMode=0,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera,a.normalizeCoordinate(this.beginCamera,t,this.lastPoint)}},i.prototype.update=function(t){if(this.active){var i;switch(this.pivot){case"eye":i=this.currentCamera.center;break;case"center":this.currentCamera.center=this.pivotPos,i=this.currentCamera.eye}this.applyRotation(this.currentCamera,t,i,this.pivotPos),r.applyAll(this.view,this.currentCamera,this.constraintOptions)}},i.prototype.end=function(){this.active&&this.finishController()},i.prototype.applyRotation=function(t,i,e,r){this.view.renderCoordsHelper.worldUpAtPosition(r,this.tmpWorldUp),a.normalizeCoordinate(t,i,this.tmpRotCurPoint);var o=(this.tmpRotCurPoint[1]-this.lastPoint[1])*this.rotScale,p=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;s.vec3d.subtract(e,r,this.tmpViewDir);var h=s.vec3d.length(this.tmpViewDir),l=c.acos(s.vec3d.dot(this.tmpViewDir,this.tmpWorldUp)/h);if("eye"===this.pivot){o*=-.5;var m=.5*Math.PI-l,v=.5*Math.PI*.99;o=m-Math.max(-v,Math.min(v,m+o))}o=c.clamp(o+l,n.TiltDefault.min,n.TiltDefault.max)-l,s.mat4d.identity(this.tmpTransf),s.vec3d.cross(t.up,this.tmpViewDir,this.tmpAxis),"center"===this.pivot&&(p=-p),s.mat4d.rotate(this.tmpTransf,p,this.tmpWorldUp),s.mat4d.rotate(this.tmpTransf,o,this.tmpAxis),s.mat4d.multiplyVec3(this.tmpTransf,this.tmpViewDir),s.vec3d.add(r,this.tmpViewDir,e),s.mat4d.multiplyVec3(this.tmpTransf,t.up),s.vec2d.set(this.tmpRotCurPoint,this.lastPoint),t.markViewDirty()},i}(o.InteractiveController);i.RotateController=p});