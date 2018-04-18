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

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Camera","../../lib/glMatrix","../../webgl-engine/lib/Camera","../../../animation/pointToPoint/Animation"],function(t,e,i,n,r,o,a){Object.defineProperty(e,"__esModule",{value:!0});var u=r.vec3d,c=u.create(),m=function(){function t(t){this.currentTime=0,this.animation=new a.Animation(function(){return new n.default(t)}),this._current=new n.default(t)}return Object.defineProperty(t.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"time",{get:function(){return this.animation.time},enumerable:!0,configurable:!0}),t.prototype.update=function(t,e,i){var n=this.animation.definition.source,r=this.animation.definition.target,o=u.subtract(e.center,t.center,c),a=u.length(o);a>=1e-5?(o[0]/=a,o[1]/=a,o[2]/=a):(o[0]=0,o[1]=1,o[0]=0),u.set(o,n.lookAtDirection),u.set(o,r.lookAtDirection),n.copyFromRenderCamera(t),r.copyFromRenderCamera(e),this._current.copyFrom(n),this.animation.update(n,r,i),this.currentTime=0,t.almostEquals(e,5e-4,!0)&&(this.currentTime=this.animation.time)},t.prototype.cameraAt=function(t,e){var i=this.animation.cameraAt(t,this._current);return e||(e=new o),i.copyToRenderCamera(e),e},t.prototype.step=function(t,e){return this.finished||(this.currentTime+=t,this.currentTime>=this.time&&(this.currentTime=this.time)),this.cameraAt(this.currentTime/this.time,e)},t}();e.Animation=m,e.default=m});