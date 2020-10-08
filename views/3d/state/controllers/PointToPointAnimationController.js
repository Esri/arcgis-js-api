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

define(["require","exports","tslib","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3f64","../../../ViewAnimation","../../animation/pointToPoint/Animation","./AnimationController","../../webgl-engine/lib/Camera","../../webgl-engine/lib/Intersector"],(function(t,e,i,n,o,r,a,s,c,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PointToPointAnimationController=void 0;var p=function(t){function e(e){var i=t.call(this,e)||this;return i.view=null,i.mode="interaction",i.hasTarget=!1,i}return i.__extends(e,t),Object.defineProperty(e.prototype,"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!1,configurable:!0}),e.prototype.initialize=function(){this.animation=new a.default(this.view.state.mode),this.viewAnimation="interaction"===this.mode?null:new r},Object.defineProperty(e.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!1,configurable:!0}),e.prototype.begin=function(t,e){this.hasTarget=!0;var i=this.animationSettings(e);m.copyFrom(this.view.state.camera);var n=new l.Intersector(this.view.state.mode);this.intersectionHelper.intersectRay(m.ray,n,u)&&(m.center=u),this.animation.update(m,t,i),this.animation.finished&&this.finish()},e.prototype.finish=function(){this.animation.currentTime=this.animation.time,t.prototype.finish.call(this)},Object.defineProperty(e.prototype,"steppingFinished",{get:function(){return this.hasTarget&&this.animation.finished},enumerable:!1,configurable:!0}),e.prototype.stepController=function(t,e){this.hasTarget&&this.animation.step(t,e)},e.prototype.onControllerEnd=function(e){this.hasTarget&&(this.animation.cameraAt(this.animation.currentTime/this.animation.time,e),this.animation.currentTime=this.animation.time),t.prototype.onControllerEnd.call(this,e)},e.prototype.animationSettings=function(t){return void 0===t&&(t={}),{apex:{maximumDistance:this.view.state.constraints.clampAltitude(1/0)/6,ascensionFactor:void 0,descensionFactor:void 0},speedFactor:t.speedFactor,duration:t.duration,maxDuration:t.maxDuration,easing:t.easing}},i.__decorate([n.property({constructOnly:!0})],e.prototype,"view",void 0),i.__decorate([n.property({constructOnly:!0})],e.prototype,"mode",void 0),e=i.__decorate([n.subclass("esri.views.3d.state.controllers.PointToPointAnimationController")],e)}(s.AnimationController);e.PointToPointAnimationController=p;var m=new c.default,u=o.vec3f64.create()}));