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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../ViewAnimation","./CameraController"],function(t,e,i,n,o){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){void 0===e&&(e=new n);var i=t.call(this)||this;return i.viewAnimation=e,i}return i(e,t),Object.defineProperty(e.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"asyncResult",{get:function(){return this._asyncResult},set:function(t){this._asyncResult&&this._asyncResult.reject(),this._asyncResult=t,this.state!==o.State.Finished&&this.state!==o.State.Stopped||(this._asyncResult=null,this.state===o.State.Finished?t.resolve():t.reject())},enumerable:!0,configurable:!0}),e.prototype.onControllerStart=function(e){var i=this;t.prototype.onControllerStart.call(this,e),this.viewAnimation&&this.viewAnimation.always(function(){i.updateStateFromViewAnimation()})},e.prototype.updateStateFromViewAnimation=function(){this.viewAnimation&&(this.state!==o.State.Ready&&this.state!==o.State.Running||(this.viewAnimation.state===n.State.FINISHED?this.finish():this.viewAnimation.state===n.State.STOPPED&&(this.state=o.State.Stopped)))},e.prototype.onControllerEnd=function(e){this.viewAnimation&&(this.viewAnimation.done||(this.state===o.State.Finished?this.viewAnimation.finish():this.state===o.State.Stopped&&this.viewAnimation.stop())),this._asyncResult&&(this.state===o.State.Finished?this._asyncResult.resolve():this._asyncResult.reject()),t.prototype.onControllerEnd.call(this,e)},e.prototype.finish=function(){this.finishController()},e}(o.CameraController);e.AnimationController=s});