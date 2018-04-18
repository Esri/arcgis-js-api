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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../camera/constraintUtils","../../lib/glMatrix","../../state/Constraints","./InteractiveController","../../state/utils/navigationUtils","../../support/mathUtils"],function(t,i,e,r,s,a,n,o,c){Object.defineProperty(i,"__esModule",{value:!0});var p=function(t){function i(i,e,r){var a=t.call(this)||this;return a.view=i,a.pickingHelper=e,a.pivot=r,a.lastPoint=s.vec2d.create(),a.tmpWorldUp=s.vec3d.create(),a.tmpViewDir=s.vec3d.create(),a.tmpRotCurPoint=s.vec2d.create(),a.tmpTransf=s.mat4d.create(),a.tmpAxis=s.vec3d.create(),a.pivotPos=s.vec3d.create(),a.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null},a.rotScale="center"===r?3:1.5,a}return e(i,t),i.prototype.begin=function(t){if(this.active){switch(this.pivot){case"eye":s.vec3d.set(this.beginCamera.eye,this.pivotPos),this.constraintOptions.interactionType=3,this.constraintOptions.selection=0;break;case"center":this.pickingHelper.pickRaySegment(this.beginCamera.eye,this.beginCamera.center,this.pivotPos)||(this.view.state.isLocal?this.pickingHelper.pickFreePointFromSegment(this.beginCamera.eye,this.beginCamera.center,this.pivotPos):s.vec3d.set(this.beginCamera.center,this.pivotPos)),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera,o.normalizeCoordinate(this.beginCamera,t,this.lastPoint)}},i.prototype.update=function(t){if(this.active){var i;switch(this.pivot){case"eye":i=this.currentCamera.center;break;case"center":this.currentCamera.center=this.pivotPos,i=this.currentCamera.eye}this.applyRotation(this.currentCamera,t,i,this.pivotPos),r.applyAll(this.view,this.currentCamera,this.constraintOptions)}},i.prototype.end=function(){this.active&&this.finishController()},i.prototype.applyRotation=function(t,i,e,r){this.view.renderCoordsHelper.worldUpAtPosition(r,this.tmpWorldUp),o.normalizeCoordinate(t,i,this.tmpRotCurPoint);var n=(this.tmpRotCurPoint[1]-this.lastPoint[1])*this.rotScale,p=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;s.vec3d.subtract(e,r,this.tmpViewDir);var h=s.vec3d.length(this.tmpViewDir),m=c.acos(s.vec3d.dot(this.tmpViewDir,this.tmpWorldUp)/h);if("eye"===this.pivot){n*=-.5;var l=.5*Math.PI-m,v=.5*Math.PI*.99;n=l-Math.max(-v,Math.min(v,l+n))}n=c.clamp(n+m,a.TiltDefault.min,a.TiltDefault.max)-m,s.mat4d.identity(this.tmpTransf),s.vec3d.cross(t.up,this.tmpViewDir,this.tmpAxis),"center"===this.pivot&&(p=-p),s.mat4d.rotate(this.tmpTransf,p,this.tmpWorldUp),s.mat4d.rotate(this.tmpTransf,n,this.tmpAxis),s.mat4d.multiplyVec3(this.tmpTransf,this.tmpViewDir),s.vec3d.add(r,this.tmpViewDir,e),s.mat4d.multiplyVec3(this.tmpTransf,t.up),s.vec2d.set(this.tmpRotCurPoint,this.lastPoint),t.markViewDirty()},i}(n.InteractiveController);i.RotateController=p});