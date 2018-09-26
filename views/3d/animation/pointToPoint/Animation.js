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

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Camera","../../lib/gl-matrix","../../webgl-engine/lib/Camera","../../../animation/pointToPoint/Animation"],function(e,t,i,n,r,o,a){Object.defineProperty(t,"__esModule",{value:!0});var c=r.vec3d.create(),u=function(){function e(e){this.currentTime=0,this.animation=new a.Animation(function(){return new n.default(e)}),this._current=new n.default(e)}return Object.defineProperty(e.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"time",{get:function(){return this.animation.time},enumerable:!0,configurable:!0}),e.prototype.update=function(e,t,i){var n=this.animation.definition.source,o=this.animation.definition.target,a=r.vec3d.subtract(t.center,e.center,c),u=r.vec3d.length(a);u>=1e-5?(a[0]/=u,a[1]/=u,a[2]/=u):(a[0]=0,a[1]=1,a[0]=0),r.vec3d.set(a,n.lookAtDirection),r.vec3d.set(a,o.lookAtDirection),n.copyFromRenderCamera(e),o.copyFromRenderCamera(t),this._current.copyFrom(n),this.animation.update(n,o,i),this.currentTime=0,e.almostEquals(t,5e-4,!0)&&(this.currentTime=this.animation.time)},e.prototype.cameraAt=function(e,t){return this.animation.cameraAt(e,this._current),t=t||new o,this._current.copyToRenderCamera(t),t},e.prototype.step=function(e,t){return this.finished||(this.currentTime+=e,this.currentTime>=this.time&&(this.currentTime=this.time)),this.cameraAt(this.currentTime/this.time,t)},e}();t.Animation=u,t.default=u});