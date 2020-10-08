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

define(["require","exports","tslib","../../../../core/mathUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec2f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../camera/constraintUtils","../Constraints","./InteractiveController","../utils/navigationUtils"],(function(t,i,e,r,o,s,n,a,c,p,l,h,m,v,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.RotateController=void 0;var f=function(t){function i(i){var e=t.call(this,i)||this;return e.view=null,e.pivot="center",e.lastPoint=c.vec2f64.create(),e.tmpWorldUp=l.vec3f64.create(),e.tmpViewDir=l.vec3f64.create(),e.tmpRotCurPoint=c.vec2f64.create(),e.tmpTransf=n.mat4f64.create(),e.tmpAxis=l.vec3f64.create(),e.pivotPos=l.vec3f64.create(),e.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0},e}return e.__extends(i,t),Object.defineProperty(i.prototype,"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!1,configurable:!0}),i.prototype.initialize=function(){this.rotScale="center"===this.pivot?3:1.5},i.prototype.begin=function(t){if(this.active){switch(this.pivot){case"eye":p.vec3.copy(this.pivotPos,this.beginCamera.eye),this.constraintOptions.interactionType=3,this.constraintOptions.tiltMode=1,this.constraintOptions.selection=0;break;case"center":this.intersectionHelper.intersectRayFreePointFallback(this.beginCamera.ray,this.pivotPos)||p.vec3.copy(this.pivotPos,this.beginCamera.center),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.tiltMode=0,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera,u.normalizeCoordinate(this.beginCamera,t,this.lastPoint)}},i.prototype.update=function(t){if(this.active){var i;switch(this.pivot){case"eye":i=this.currentCamera.center;break;case"center":this.currentCamera.center=this.pivotPos,i=this.currentCamera.eye}this.applyRotation(this.currentCamera,t,i,this.pivotPos),h.applyAll(this.view,this.currentCamera,this.constraintOptions)}},i.prototype.end=function(){this.active&&this.finishController()},i.prototype.applyRotation=function(t,i,e,o){this.view.renderCoordsHelper.worldUpAtPosition(o,this.tmpWorldUp),u.normalizeCoordinate(t,i,this.tmpRotCurPoint);var n=(this.lastPoint[1]-this.tmpRotCurPoint[1])*this.rotScale,c=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;p.vec3.subtract(this.tmpViewDir,e,o);var l=p.vec3.length(this.tmpViewDir),h=r.acosClamped(p.vec3.dot(this.tmpViewDir,this.tmpWorldUp)/l);if("eye"===this.pivot){n*=-.5;var v=.5*Math.PI-h,f=.5*Math.PI*.99;n=v-Math.max(-f,Math.min(f,v+n))}n=r.clamp(n+h,m.TiltDefault.min,m.TiltDefault.max)-h,s.mat4.identity(this.tmpTransf),p.vec3.cross(this.tmpAxis,t.up,this.tmpViewDir),"center"===this.pivot&&(c=-c),s.mat4.rotate(this.tmpTransf,this.tmpTransf,c,this.tmpWorldUp),s.mat4.rotate(this.tmpTransf,this.tmpTransf,n,this.tmpAxis),p.vec3.transformMat4(this.tmpViewDir,this.tmpViewDir,this.tmpTransf),p.vec3.add(e,o,this.tmpViewDir),p.vec3.transformMat4(t.up,t.up,this.tmpTransf),a.vec2.copy(this.lastPoint,this.tmpRotCurPoint),t.markViewDirty()},e.__decorate([o.property({constructOnly:!0})],i.prototype,"view",void 0),e.__decorate([o.property()],i.prototype,"pivot",void 0),i=e.__decorate([o.subclass("esri.views.3d.state.controllers.RotateController")],i)}(v.InteractiveController);i.RotateController=f}));