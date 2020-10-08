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

define(["require","exports","tslib","../../core/Accessor","../../core/Logger","../../core/accessorSupport/decorators"],(function(e,t,r,n,o,s){"use strict";var l="esri.widgets.Fullscreen.FullscreenViewModel",i=o.getLogger(l);return function(e){function t(t){var r=e.call(this,t)||this;return r._vendorInfo=null,r._fullscreenStyle="width: 100%; height: 100%;",r.view=null,r._errorHandler=r._errorHandler.bind(r),r._stateHandler=r._stateHandler.bind(r),r}return r.__extends(t,e),t.prototype.destroy=function(){this._removeFullscreenListeners(),this.view=null},Object.defineProperty(t.prototype,"element",{get:function(){return this.get("view.container")},set:function(e){void 0!==e?this._override("element",e):this._clearOverride("element")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"},enumerable:!1,configurable:!0}),t.prototype.enter=function(){this._enterFullscreen()},t.prototype.exit=function(){this._exitFullscreen()},t.prototype.toggle=function(){this._isActive()?this._exitFullscreen():this._enterFullscreen()},t.prototype._isSupported=function(){this._removeFullscreenListeners();var e=this._getVendorInfo(this.element);return this._addFullscreenListeners(e),this._vendorInfo=e,!!e},t.prototype._isActive=function(){return!!this._vendorInfo&&!!document[this._vendorInfo.propertyName]},t.prototype._stateHandler=function(){this.notifyChange("state"),"active"===this.state?this._addStyle():this._removeStyle()},t.prototype._errorHandler=function(e){i.error("fullscreen request failed",e)},t.prototype._getVendorInfo=function(e){if(e)return e.requestFullscreen?{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"}:e.webkitRequestFullScreen?{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"}:e.mozRequestFullScreen?{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"}:e.msRequestFullscreen?{enterName:"msRequestFullscreen",exitName:"msExitFullscreen",errorEventName:"MSFullscreenError",changeEventName:"MSFullscreenChange",propertyName:"msFullscreenElement"}:void 0},t.prototype._enterFullscreen=function(){if("feature-unsupported"!==this.state){var e=this.element;e&&(e[this._vendorInfo.enterName].call(e),this.notifyChange("state"))}else i.warn("The fullscreen API is not supported in this browser.")},t.prototype._addStyle=function(){var e=this.element;e&&e.setAttribute("style",this._fullscreenStyle)},t.prototype._removeStyle=function(){var e=this.element;e&&e.removeAttribute("style")},t.prototype._exitFullscreen=function(){"feature-unsupported"!==this.state&&(this.element&&(document[this._vendorInfo.exitName].call(document),this.notifyChange("state")))},t.prototype._addFullscreenListeners=function(e){e&&(document.addEventListener(e.changeEventName,this._stateHandler),document.addEventListener(e.errorEventName,this._errorHandler))},t.prototype._removeFullscreenListeners=function(){var e=this._vendorInfo;this._vendorInfo&&(document.removeEventListener(e.changeEventName,this._stateHandler),document.removeEventListener(e.errorEventName,this._errorHandler))},r.__decorate([s.property({dependsOn:["view.container"]})],t.prototype,"element",null),r.__decorate([s.property({dependsOn:["element"],readOnly:!0})],t.prototype,"state",null),r.__decorate([s.property()],t.prototype,"view",void 0),r.__decorate([s.property()],t.prototype,"enter",null),r.__decorate([s.property()],t.prototype,"exit",null),r.__decorate([s.property()],t.prototype,"toggle",null),t=r.__decorate([s.subclass(l)],t)}(n)}));