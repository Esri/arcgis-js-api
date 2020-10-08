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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./Camera","../../webgl-engine/lib/Camera","../../../animation/pointToPoint/Animation"],(function(e,t,i,n,r,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Animation=void 0;var c=n.vec3f64.create(),m=function(){function e(e){this.currentTime=0,this.animation=new a.Animation((function(){return new r.default(e)})),this._current=new r.default(e)}return Object.defineProperty(e.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"time",{get:function(){return this.animation.time},enumerable:!1,configurable:!0}),e.prototype.update=function(e,t,n){var r=this.animation.definition.source,o=this.animation.definition.target,a=i.vec3.subtract(c,t.center,e.center),m=i.vec3.length(a);m>=1e-5?(a[0]/=m,a[1]/=m,a[2]/=m):(a[0]=0,a[1]=1,a[0]=0),i.vec3.copy(r.lookAtDirection,a),i.vec3.copy(o.lookAtDirection,a),r.copyFromRenderCamera(e),o.copyFromRenderCamera(t),this._current.copyFrom(r),this.animation.update(r,o,n),this.currentTime=0,e.almostEquals(t)&&(this.currentTime=this.animation.time)},e.prototype.cameraAt=function(e,t){return this.animation.cameraAt(e,this._current),t=t||new o.default,this._current.copyToRenderCamera(t),t},e.prototype.step=function(e,t){return this.finished||(this.currentTime+=e,this.currentTime>=this.time&&(this.currentTime=this.time)),this.cameraAt(this.currentTime/this.time,t)},e}();t.Animation=m,t.default=m}));