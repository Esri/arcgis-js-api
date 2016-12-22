// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../animation/pointToPoint/Animation","./Camera","../../lib/glMatrix","../../webgl-engine/lib/Camera"],function(e,t,i,n,r,o,a){var c=o.vec3d,u=c.create(),m=function(){function e(e){this.animation=new n.Animation(function(){return new r["default"](e)}),this._current=new r["default"](e)}return Object.defineProperty(e.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"time",{get:function(){return this.animation.time},enumerable:!0,configurable:!0}),e.prototype.update=function(e,t,i){var n=this.animation.definition.source,r=this.animation.definition.target,o=c.subtract(t.center,e.center,u),a=c.length(o);a>=1e-5?(o[0]/=a,o[1]/=a,o[2]/=a):(o[0]=0,o[1]=1,o[0]=0),c.set(o,n.lookAtDirection),c.set(o,r.lookAtDirection),n.copyFromRenderCamera(e),r.copyFromRenderCamera(t),this._current.copyFrom(n),this.animation.update(n,r,i),this.currentTime=0},e.prototype.cameraAt=function(e,t){var i=this.animation.cameraAt(e,this._current);return t||(t=new a),i.copyToRenderCamera(t),t},e.prototype.step=function(e,t){return this.finished||(this.currentTime+=e,this.currentTime>=this.time&&(this.currentTime=this.time)),this.cameraAt(this.currentTime/this.time,t)},e}();t.Animation=m,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=m});