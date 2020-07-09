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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","../support/GeolocationPositioning"],(function(t,i,o,e,r){return function(t){function i(i){var o=t.call(this,i)||this;return o._watchId=null,o._trackStartingTimeoutId=null,o._settingPosition=null,o}return o.__extends(i,t),i.prototype.destroy=function(){this._stopTracking()},Object.defineProperty(i.prototype,"state",{get:function(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||null!==this._trackStartingTimeoutId?"waiting":this.tracking?"tracking":"ready":"feature-unsupported"},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"tracking",{get:function(){return null!==this._watchId},enumerable:!0,configurable:!0}),i.prototype.start=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._startTracking()},i.prototype.stop=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._stopTracking()},i.prototype._stopWatchingPosition=function(){null!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=null)},i.prototype._stopTracking=function(){this._clearWaitingTimer(),this._stopWatchingPosition(),this._clear()},i.prototype._startTracking=function(){var t=this;this._stopTracking();var i=navigator.geolocation.watchPosition((function(o){t._watchId=i,t._settingPosition=t._setPosition(o).then((function(i){t._clearWaitingTimer();var o=t,e=o.view,r=o.graphic;if(e&&e.graphics.remove(r),r){var n=r.clone();t.graphic=n,e&&e.graphics.push(n)}t.emit("track",{position:i})})).catch((function(i){throw t._emitError(i),t._clearWaitingTimer(),i}))}),this._handleWatchPositionError.bind(this),this.geolocationOptions);this._trackStartingTimeoutId=setTimeout((function(){t._trackStartingTimeoutId=null}),15e3)},i.prototype._handleWatchPositionError=function(t){this._emitError(t),this._stopTracking()},i.prototype._clearWaitingTimer=function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=null,this._settingPosition=null},i.prototype._emitError=function(t){this.emit("track-error",{error:t})},o.__decorate([e.property()],i.prototype,"_watchId",void 0),o.__decorate([e.property()],i.prototype,"_trackStartingTimeoutId",void 0),o.__decorate([e.property()],i.prototype,"_settingPosition",void 0),o.__decorate([e.property({dependsOn:["view.ready","tracking","_geolocationUsable","_trackStartingTimeoutId","_settingPosition"],readOnly:!0})],i.prototype,"state",null),o.__decorate([e.property({readOnly:!0,dependsOn:["_watchId"]})],i.prototype,"tracking",null),o.__decorate([e.property()],i.prototype,"start",null),o.__decorate([e.property()],i.prototype,"stop",null),i=o.__decorate([e.subclass("esri.widgets.Track.TrackViewModel")],i)}(r)}));