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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../camera/constraintUtils","./InteractiveController","../../lib/glMatrix","../../support/mathUtils","../../state/utils/navigationUtils","../../state/Constraints"],function(t,i,e,r,s,a,n,o,c){Object.defineProperty(i,"__esModule",{value:!0});var p=function(t){function i(i,e,r){var s=t.call(this)||this;return s.view=i,s.pickingHelper=e,s.pivot=r,s.lastPoint=a.vec2d.create(),s.tmpWorldUp=a.vec3d.create(),s.tmpViewDir=a.vec3d.create(),s.tmpRotCurPoint=a.vec2d.create(),s.tmpTransf=a.mat4d.create(),s.tmpAxis=a.vec3d.create(),s.pivotPos=a.vec3d.create(),s.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null},s.rotScale="center"===r?3:1.5,s}return e(i,t),i.prototype.begin=function(t){if(this.active){switch(this.pivot){case"eye":a.vec3d.set(this.beginCamera.eye,this.pivotPos),this.constraintOptions.interactionType=3,this.constraintOptions.selection=0;break;case"center":this.pickingHelper.pickRaySegment(this.beginCamera.eye,this.beginCamera.center,this.pivotPos)||(this.view.state.isLocal?this.pickingHelper.pickFreePointFromSegment(this.beginCamera.eye,this.beginCamera.center,this.pivotPos):a.vec3d.set(this.beginCamera.center,this.pivotPos)),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera,o.normalizeCoordinate(this.beginCamera,t,this.lastPoint)}},i.prototype.update=function(t){if(this.active){var i;switch(this.pivot){case"eye":i=this.currentCamera.center;break;case"center":this.currentCamera.center=this.pivotPos,i=this.currentCamera.eye}this.applyRotation(this.currentCamera,t,i,this.pivotPos),r.applyAll(this.view,this.currentCamera,this.constraintOptions)}},i.prototype.end=function(){this.active&&this.finishController()},i.prototype.applyRotation=function(t,i,e,r){this.view.renderCoordsHelper.worldUpAtPosition(r,this.tmpWorldUp),o.normalizeCoordinate(t,i,this.tmpRotCurPoint);var s=(this.tmpRotCurPoint[1]-this.lastPoint[1])*this.rotScale,p=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;a.vec3d.subtract(e,r,this.tmpViewDir);var h=a.vec3d.length(this.tmpViewDir),m=n.acos(a.vec3d.dot(this.tmpViewDir,this.tmpWorldUp)/h);if("eye"===this.pivot){s*=-.5;var l=.5*Math.PI-m,v=.5*Math.PI*.99;s=l-Math.max(-v,Math.min(v,l+s))}s=Math.max(c.TiltDefault.min,s+m)-m,a.mat4d.identity(this.tmpTransf),a.vec3d.cross(t.up,this.tmpViewDir,this.tmpAxis),"center"===this.pivot&&(p=-p),a.mat4d.rotate(this.tmpTransf,p,this.tmpWorldUp),a.mat4d.rotate(this.tmpTransf,s,this.tmpAxis),a.mat4d.multiplyVec3(this.tmpTransf,this.tmpViewDir),a.vec3d.add(r,this.tmpViewDir,e),a.mat4d.multiplyVec3(this.tmpTransf,t.up),a.vec2d.set(this.tmpRotCurPoint,this.lastPoint),t.markViewDirty()},i}(s.InteractiveController);i.RotateController=p});