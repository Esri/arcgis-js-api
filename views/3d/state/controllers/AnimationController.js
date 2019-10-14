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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/promiseUtils","../../../ViewAnimation","./CameraController"],function(t,e,i,n,o,s){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e){void 0===e&&(e=new o);var i=t.call(this)||this;return i.viewAnimation=e,i}return i(e,t),Object.defineProperty(e.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"asyncResult",{get:function(){return this._asyncResult},set:function(t){this._asyncResult&&this._asyncResult.reject(n.createAbortError()),this._asyncResult=t,this.state!==s.State.Finished&&this.state!==s.State.Stopped||(this._asyncResult=null,this.state===s.State.Finished?t.resolve():t.reject(n.createAbortError()))},enumerable:!0,configurable:!0}),e.prototype.onControllerStart=function(e){var i=this;t.prototype.onControllerStart.call(this,e),this.viewAnimation&&this.viewAnimation.when().catch(function(){}).then(function(){i.updateStateFromViewAnimation()})},e.prototype.updateStateFromViewAnimation=function(){this.viewAnimation&&(this.state!==s.State.Ready&&this.state!==s.State.Running||(this.viewAnimation.state===o.State.FINISHED?this.finish():this.viewAnimation.state===o.State.STOPPED&&(this.state=s.State.Stopped)))},e.prototype.onControllerEnd=function(e){this.viewAnimation&&(this.viewAnimation.done||(this.state===s.State.Finished?this.viewAnimation.finish():this.state===s.State.Stopped&&this.viewAnimation.stop())),this._asyncResult&&(this.state===s.State.Finished?this._asyncResult.resolve():this._asyncResult.reject(n.createAbortError())),t.prototype.onControllerEnd.call(this,e)},e.prototype.finish=function(){this.finishController()},e}(s.CameraController);e.AnimationController=r});