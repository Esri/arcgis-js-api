// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Logger"],function(e,t,r,n,o,s,l){var i="esri.widgets.Fullscreen.FullscreenViewModel",u=l.getLogger(i),c=function(e){function t(t){var r=e.call(this,t)||this;return r._vendorInfo=null,r._fullscreenStyle="width: 100%; height: 100%;",r.view=null,r._stateHandler=r._stateHandler.bind(r),r}return r(t,e),t.prototype.destroy=function(){this._removeFullscreenListener(),this.view=null},Object.defineProperty(t.prototype,"element",{get:function(){return this.get("view.container")},set:function(e){return void 0===e?void this._clearOverride("element"):void this._override("element",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"},enumerable:!0,configurable:!0}),t.prototype.enter=function(){this._enterFullscreen()},t.prototype.exit=function(){this._exitFullscreen()},t.prototype.toggle=function(){this._isActive()?this._exitFullscreen():this._enterFullscreen()},t.prototype._isSupported=function(){this._removeFullscreenListener();var e=this._getVendorInfo(this.element);return this._addFullscreenListener(e),this._vendorInfo=e,!!e},t.prototype._isActive=function(){return this._vendorInfo?!!document[this._vendorInfo.propertyName]:!1},t.prototype._stateHandler=function(){this.notifyChange("state")},t.prototype._getVendorInfo=function(e){return e?e.requestFullscreen?{enterName:"requestFullscreen",exitName:"exitFullscreen",eventName:"fullscreenchange",propertyName:"fullscreen"}:e.webkitRequestFullScreen?{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",eventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"}:e.mozRequestFullScreen?{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",eventName:"mozfullscreenchange",propertyName:"mozFullScreen"}:e.msRequestFullscreen?{enterName:"msRequestFullscreen",exitName:"msExitFullscreen",eventName:"MSFullscreenChange",propertyName:"msFullscreenElement"}:void 0:void 0},t.prototype._enterFullscreen=function(){if("feature-unsupported"===this.state)return void u.warn("The fullscreen API is not supported in this browser.");var e=this.element;e&&(e.setAttribute("style",this._fullscreenStyle),e[this._vendorInfo.enterName].call(e),this.notifyChange("state"))},t.prototype._exitFullscreen=function(){if("feature-unsupported"!==this.state){var e=this.element;e.removeAttribute("style"),document[this._vendorInfo.exitName].call(document),this.notifyChange("state")}},t.prototype._addFullscreenListener=function(e){e&&document.addEventListener(e.eventName,this._stateHandler)},t.prototype._removeFullscreenListener=function(){var e=this._vendorInfo;this._vendorInfo&&document.removeEventListener(e.eventName,this._stateHandler)},n([o.property({dependsOn:["view.container"]})],t.prototype,"element",null),n([o.property({dependsOn:["element"],readOnly:!0})],t.prototype,"state",null),n([o.property()],t.prototype,"view",void 0),n([o.property()],t.prototype,"enter",null),n([o.property()],t.prototype,"exit",null),n([o.property()],t.prototype,"toggle",null),t=n([o.subclass(i)],t)}(o.declared(s));return c});