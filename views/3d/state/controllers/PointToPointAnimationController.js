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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/libs/gl-matrix-2/vec3f64","../../../ViewAnimation","../../animation/pointToPoint/Animation","./AnimationController","../../webgl-engine/lib/Camera","../../webgl-engine/lib/Intersector"],function(t,i,e,n,o,a,r,s,c){Object.defineProperty(i,"__esModule",{value:!0});var m=function(t){function i(i,e,n){var r=t.call(this,"interaction"===n?null:new o)||this;return r.viewState=i,r.intersectionHelper=e,r.mode=n,r.hasTarget=!1,r.animation=new a.default(r.viewState.mode),r}return e(i,t),Object.defineProperty(i.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),i.prototype.begin=function(t,i){this.hasTarget=!0;var e=this.animationSettings(i);l.copyFrom(this.viewState.camera);var n=new c(this.viewState.mode);this.intersectionHelper.intersectRay(l.ray,n,p)&&(l.center=p),this.animation.update(l,t,e),this.animation.finished&&this.finish()},i.prototype.finish=function(){this.animation.currentTime=this.animation.time,t.prototype.finish.call(this)},Object.defineProperty(i.prototype,"steppingFinished",{get:function(){return this.hasTarget&&this.animation.finished},enumerable:!0,configurable:!0}),i.prototype.stepController=function(t,i){this.hasTarget&&this.animation.step(t,i)},i.prototype.onControllerEnd=function(i){this.hasTarget&&(this.animation.cameraAt(this.animation.currentTime/this.animation.time,i),this.animation.currentTime=this.animation.time),t.prototype.onControllerEnd.call(this,i)},i.prototype.animationSettings=function(t){return void 0===t&&(t={}),{apex:{maximumDistance:this.viewState.constraints.clampAltitude(1/0)/6,ascensionFactor:void 0,descensionFactor:void 0},speedFactor:t.speedFactor,duration:t.duration,maxDuration:t.maxDuration,easing:t.easing}},i}(r.AnimationController);i.PointToPointAnimationController=m;var l=new s.default,p=n.vec3f64.create()});