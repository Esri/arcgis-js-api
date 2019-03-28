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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../camera/constraintUtils","../Constraints","./InteractiveController","../utils/navigationUtils","../../support/mathUtils"],function(t,i,e,r,s,o,a,n,c,p,h,l,m,v){Object.defineProperty(i,"__esModule",{value:!0});var f=function(t){function i(i,e,r){var o=t.call(this)||this;return o.view=i,o.intersectionHelper=e,o.pivot=r,o.lastPoint=a.vec2f64.create(),o.tmpWorldUp=c.vec3f64.create(),o.tmpViewDir=c.vec3f64.create(),o.tmpRotCurPoint=a.vec2f64.create(),o.tmpTransf=s.mat4f64.create(),o.tmpAxis=c.vec3f64.create(),o.pivotPos=c.vec3f64.create(),o.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},o.rotScale="center"===r?3:1.5,o}return e(i,t),i.prototype.begin=function(t){if(this.active){switch(this.pivot){case"eye":n.vec3.copy(this.pivotPos,this.beginCamera.eye),this.constraintOptions.interactionType=3,this.constraintOptions.tiltMode=1,this.constraintOptions.selection=0;break;case"center":this.intersectionHelper.intersectRayFreePointFallback(this.beginCamera.ray,this.pivotPos)||n.vec3.copy(this.pivotPos,this.beginCamera.center),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.tiltMode=0,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera,m.normalizeCoordinate(this.beginCamera,t,this.lastPoint)}},i.prototype.update=function(t){if(this.active){var i;switch(this.pivot){case"eye":i=this.currentCamera.center;break;case"center":this.currentCamera.center=this.pivotPos,i=this.currentCamera.eye}this.applyRotation(this.currentCamera,t,i,this.pivotPos),p.applyAll(this.view,this.currentCamera,this.constraintOptions)}},i.prototype.end=function(){this.active&&this.finishController()},i.prototype.applyRotation=function(t,i,e,s){this.view.renderCoordsHelper.worldUpAtPosition(s,this.tmpWorldUp),m.normalizeCoordinate(t,i,this.tmpRotCurPoint);var a=(this.lastPoint[1]-this.tmpRotCurPoint[1])*this.rotScale,c=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;n.vec3.subtract(this.tmpViewDir,e,s);var p=n.vec3.length(this.tmpViewDir),l=v.acos(n.vec3.dot(this.tmpViewDir,this.tmpWorldUp)/p);if("eye"===this.pivot){a*=-.5;var f=.5*Math.PI-l,u=.5*Math.PI*.99;a=f-Math.max(-u,Math.min(u,f+a))}a=v.clamp(a+l,h.TiltDefault.min,h.TiltDefault.max)-l,r.mat4.identity(this.tmpTransf),n.vec3.cross(this.tmpAxis,t.up,this.tmpViewDir),"center"===this.pivot&&(c=-c),r.mat4.rotate(this.tmpTransf,this.tmpTransf,c,this.tmpWorldUp),r.mat4.rotate(this.tmpTransf,this.tmpTransf,a,this.tmpAxis),n.vec3.transformMat4(this.tmpViewDir,this.tmpViewDir,this.tmpTransf),n.vec3.add(e,s,this.tmpViewDir),n.vec3.transformMat4(t.up,t.up,this.tmpTransf),o.vec2.copy(this.lastPoint,this.tmpRotCurPoint),t.markViewDirty()},i}(l.InteractiveController);i.RotateController=f});