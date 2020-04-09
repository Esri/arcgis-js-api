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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/maybe","../../../../core/promiseUtils","../../../ViewAnimation","./CameraController"],(function(t,e,i,n,o,s,r){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e){var i=t.call(this)||this;return i.viewAnimation=e,i}return i(e,t),Object.defineProperty(e.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"asyncResult",{get:function(){return this._asyncResult},set:function(t){this._asyncResult&&(this._asyncResult.reject(o.createAbortError()),this._asyncResult=null),this.state===r.State.Finished||this.state===r.State.Stopped?this.state===r.State.Finished?t.resolve():t.reject(o.createAbortError()):this._asyncResult=t},enumerable:!0,configurable:!0}),e.prototype.onControllerStart=function(){var t=this;this.state=r.State.Running,n.isSome(this.viewAnimation)&&this.viewAnimation.when((function(){return t.updateStateFromViewAnimation()}),(function(){return t.updateStateFromViewAnimation()}))},e.prototype.updateStateFromViewAnimation=function(){!n.isSome(this.viewAnimation)||this.state!==r.State.Ready&&this.state!==r.State.Running||(this.viewAnimation.state===s.State.FINISHED?this.finish():this.viewAnimation.state===s.State.STOPPED&&(this.state=r.State.Stopped))},e.prototype.onControllerEnd=function(){n.isSome(this.viewAnimation)&&!this.viewAnimation.done&&(this.state===r.State.Finished?this.viewAnimation.finish():this.state===r.State.Stopped&&this.viewAnimation.stop()),this._asyncResult&&(this.state===r.State.Finished?this._asyncResult.resolve():this._asyncResult.reject(o.createAbortError()))},e.prototype.finish=function(){this.finishController()},e}(r.CameraController);e.AnimationController=a}));