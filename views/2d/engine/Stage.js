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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/promiseUtils","../../../core/Scheduler","../FrameBudget","./DOMContainer","./StageGL","./Container"],function(e,t,r,n,s,i,a,o,d){function u(e){if(e instanceof o)return e;if(e instanceof d)for(var t=e.children,r=0,n=t;r<n.length;r++){var s=n[r],i=u(s);if(i)return i}return null}var h=function(e){function t(t){var r=this;e.call(this),this.element=t,this._budget=new i,this._renderParameters={budget:this._budget,state:this.state,devicePixelRatio:window.devicePixelRatio,stationary:!1},this._renderRequested=!1,this._taskHandle=s.addFrameTask({render:function(){return r.renderFrame()}}),this._stationary=!0,this.attached=!0,this._taskHandle.pause()}return r(t,e),t.prototype.destroy=function(){this._taskHandle.remove(),this._taskHandle=null},Object.defineProperty(t.prototype,"state",{get:function(){return this._state},set:function(e){this._state=e,this.requestRender()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stationary",{get:function(){return this._stationary},set:function(e){this._stationary!==e&&(this._stationary=e,this.requestRender())},enumerable:!0,configurable:!0}),t.prototype.start=function(){this._taskHandle.resume()},t.prototype.stop=function(){this._taskHandle.isPaused()||this._taskHandle.pause()},t.prototype.requestRender=function(){this._renderRequested=!0,this._taskHandle.isPaused()&&this._taskHandle.resume()},t.prototype.takeScreenshot=function(e){var t=u(this);return t||n.reject("Could not find an object capable of capturing screenshot!"),t.takeScreenshot(e)},t.prototype.renderFrame=function(){this._renderRequested&&(this._renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.devicePixelRatio=window.devicePixelRatio,this.render(this._renderParameters)),this._renderRequested||this._taskHandle.pause()},t}(a);return h});