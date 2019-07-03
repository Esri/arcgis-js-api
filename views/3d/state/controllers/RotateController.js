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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../camera/constraintUtils","../Constraints","./InteractiveController","../utils/navigationUtils","../../support/mathUtils"],function(t,i,e,r,s,o,a,n,c,p,h,l,m,v,f){Object.defineProperty(i,"__esModule",{value:!0});var u=function(t){function i(i,e,r){var s=t.call(this)||this;return s.view=i,s.intersectionHelper=e,s.pivot=r,s.lastPoint=n.vec2f64.create(),s.tmpWorldUp=p.vec3f64.create(),s.tmpViewDir=p.vec3f64.create(),s.tmpRotCurPoint=n.vec2f64.create(),s.tmpTransf=o.mat4f64.create(),s.tmpAxis=p.vec3f64.create(),s.pivotPos=p.vec3f64.create(),s.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},s.rotScale="center"===r?3:1.5,s}return e(i,t),i.prototype.begin=function(t){if(this.active){switch(this.pivot){case"eye":c.vec3.copy(this.pivotPos,this.beginCamera.eye),this.constraintOptions.interactionType=3,this.constraintOptions.tiltMode=1,this.constraintOptions.selection=0;break;case"center":this.intersectionHelper.intersectRayFreePointFallback(this.beginCamera.ray,this.pivotPos)||c.vec3.copy(this.pivotPos,this.beginCamera.center),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.tiltMode=0,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera,v.normalizeCoordinate(this.beginCamera,t,this.lastPoint)}},i.prototype.update=function(t){if(this.active){var i;switch(this.pivot){case"eye":i=this.currentCamera.center;break;case"center":this.currentCamera.center=this.pivotPos,i=this.currentCamera.eye}this.applyRotation(this.currentCamera,t,i,this.pivotPos),h.applyAll(this.view,this.currentCamera,this.constraintOptions)}},i.prototype.end=function(){this.active&&this.finishController()},i.prototype.applyRotation=function(t,i,e,o){this.view.renderCoordsHelper.worldUpAtPosition(o,this.tmpWorldUp),v.normalizeCoordinate(t,i,this.tmpRotCurPoint);var n=(this.lastPoint[1]-this.tmpRotCurPoint[1])*this.rotScale,p=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;c.vec3.subtract(this.tmpViewDir,e,o);var h=c.vec3.length(this.tmpViewDir),m=f.acos(c.vec3.dot(this.tmpViewDir,this.tmpWorldUp)/h);if("eye"===this.pivot){n*=-.5;var u=.5*Math.PI-m,C=.5*Math.PI*.99;n=u-Math.max(-C,Math.min(C,u+n))}n=r.clamp(n+m,l.TiltDefault.min,l.TiltDefault.max)-m,s.mat4.identity(this.tmpTransf),c.vec3.cross(this.tmpAxis,t.up,this.tmpViewDir),"center"===this.pivot&&(p=-p),s.mat4.rotate(this.tmpTransf,this.tmpTransf,p,this.tmpWorldUp),s.mat4.rotate(this.tmpTransf,this.tmpTransf,n,this.tmpAxis),c.vec3.transformMat4(this.tmpViewDir,this.tmpViewDir,this.tmpTransf),c.vec3.add(e,o,this.tmpViewDir),c.vec3.transformMat4(t.up,t.up,this.tmpTransf),a.vec2.copy(this.lastPoint,this.tmpRotCurPoint),t.markViewDirty()},i}(m.InteractiveController);i.RotateController=u});