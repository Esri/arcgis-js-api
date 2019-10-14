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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./Camera","../../webgl-engine/lib/Camera","../../../animation/pointToPoint/Animation"],function(e,t,i,n,r,o,a,c){Object.defineProperty(t,"__esModule",{value:!0});var u=r.vec3f64.create(),m=function(){function e(e){this.currentTime=0,this.animation=new c.Animation(function(){return new o.default(e)}),this._current=new o.default(e)}return Object.defineProperty(e.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"time",{get:function(){return this.animation.time},enumerable:!0,configurable:!0}),e.prototype.update=function(e,t,i){var r=this.animation.definition.source,o=this.animation.definition.target,a=n.vec3.subtract(u,t.center,e.center),c=n.vec3.length(a);c>=1e-5?(a[0]/=c,a[1]/=c,a[2]/=c):(a[0]=0,a[1]=1,a[0]=0),n.vec3.copy(r.lookAtDirection,a),n.vec3.copy(o.lookAtDirection,a),r.copyFromRenderCamera(e),o.copyFromRenderCamera(t),this._current.copyFrom(r),this.animation.update(r,o,i),this.currentTime=0,e.almostEquals(t,5e-4,!0)&&(this.currentTime=this.animation.time)},e.prototype.cameraAt=function(e,t){return this.animation.cameraAt(e,this._current),t=t||new a.default,this._current.copyToRenderCamera(t),t},e.prototype.step=function(e,t){return this.finished||(this.currentTime+=e,this.currentTime>=this.time&&(this.currentTime=this.time)),this.cameraAt(this.currentTime/this.time,t)},e}();t.Animation=m,t.default=m});