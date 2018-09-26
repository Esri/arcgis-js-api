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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../animation/pointToPoint/Animation","../../lib/gl-matrix","./AnimationController","../../webgl-engine/lib/Camera"],function(t,i,e,n,o,a,r){Object.defineProperty(i,"__esModule",{value:!0});var s=function(t){function i(i,e,o){var a=t.call(this,o)||this;return a.viewState=i,a.intersectionHelper=e,a.hasTarget=!1,a.animation=new n.default(a.viewState.mode),a}return e(i,t),i.prototype.begin=function(t,i){this.hasTarget=!0;var e=this.animationSettings(i);m.copyFrom(this.viewState.camera),this.intersectionHelper.pickPointFromSegment(m.eye,m.center,c)&&(m.center=c),this.animation.update(m,t,e),this.animation.finished&&this.finish()},i.prototype.finish=function(){this.animation.currentTime=this.animation.time,t.prototype.finish.call(this)},Object.defineProperty(i.prototype,"steppingFinished",{get:function(){return this.hasTarget&&this.animation.finished},enumerable:!0,configurable:!0}),i.prototype.stepController=function(i,e){t.prototype.stepController.call(this,i,e),this.hasTarget&&this.animation.step(i,e)},i.prototype.onControllerEnd=function(i){this.hasTarget&&(this.animation.cameraAt(this.animation.currentTime/this.animation.time,i),this.animation.currentTime=this.animation.time),t.prototype.onControllerEnd.call(this,i)},i.prototype.animationSettings=function(t){return void 0===t&&(t={}),{apex:{maximumDistance:this.viewState.constraints.clampAltitude(1/0)/6,ascensionFactor:void 0,descensionFactor:void 0},speedFactor:t.speedFactor,duration:t.duration,maxDuration:t.maxDuration,easing:t.easing}},i}(a.AnimationController);i.PointToPointAnimationController=s;var m=new r,c=o.vec3d.create()});