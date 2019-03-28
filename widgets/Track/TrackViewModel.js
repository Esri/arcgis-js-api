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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../support/GeolocationPositioning"],function(t,i,o,r,e,n){return function(t){function i(i){var o=t.call(this,i)||this;return o._watchId=null,o._trackStartingTimeoutId=null,o._settingPosition=null,o}return o(i,t),i.prototype.destroy=function(){this._stopWatchingPosition()},Object.defineProperty(i.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._settingPosition||null!==this._trackStartingTimeoutId?"waiting":this.tracking?"tracking":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"tracking",{get:function(){return null!==this._watchId},enumerable:!0,configurable:!0}),i.prototype.start=function(){"disabled"===this.state||this.tracking||this._startTracking()},i.prototype.stop=function(){"disabled"!==this.state&&this.tracking&&this._stopTracking()},i.prototype._stopWatchingPosition=function(){null!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=null),this.notifyChange("tracking")},i.prototype._stopTracking=function(){this._stopWatchingPosition(),this._clear()},i.prototype._startTracking=function(){var t=this;this._stopWatchingPosition();var i=navigator.geolocation.watchPosition(function(o){t._watchId=i,t.notifyChange("tracking"),t._settingPosition=t._setPosition(o).then(function(i){t._clearWaitingTimer(),t.view.graphics.remove(t.graphic),t.graphic&&(t.graphic=t.graphic.clone(),t.view.graphics.push(t.graphic)),t.emit("track",{position:i})}).catch(function(i){throw t._emitError(i),t._clearWaitingTimer(),i}),t.notifyChange("state")},this._handleWatchPositionError.bind(this),this.geolocationOptions);this._trackStartingTimeoutId=setTimeout(function(){t._trackStartingTimeoutId=null,t.notifyChange("state")},15e3),this.notifyChange("state")},i.prototype._handleWatchPositionError=function(t){this._emitError(t),this._clearWaitingTimer()},i.prototype._clearWaitingTimer=function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=null,this._settingPosition=null,this.notifyChange("state")},i.prototype._emitError=function(t){this.emit("track-error",{error:t})},r([e.property({dependsOn:["view.ready","tracking"],readOnly:!0})],i.prototype,"state",null),r([e.property({readOnly:!0})],i.prototype,"tracking",null),r([e.property()],i.prototype,"start",null),r([e.property()],i.prototype,"stop",null),i=r([e.subclass("esri.widgets.Track.TrackViewModel")],i)}(e.declared(n))});