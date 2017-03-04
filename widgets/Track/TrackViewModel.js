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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../support/GeolocationPositioning"],function(t,i,r,e,o,n){var a=15e3,c=function(t){function i(i){var r=t.call(this,i)||this;return r._watchId=null,r._trackStartingTimeoutId=null,r}return r(i,t),i.prototype.destroy=function(){this._stopWatchingPosition()},Object.defineProperty(i.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this.tracking?"tracking":null!==this._trackStartingTimeoutId?"waiting":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"tracking",{get:function(){return null!==this._watchId},enumerable:!0,configurable:!0}),i.prototype.start=function(){"disabled"===this.state||this.tracking||this._startTracking()},i.prototype.stop=function(){"disabled"!==this.state&&this.tracking&&this._stopTracking()},i.prototype._stopWatchingPosition=function(){null!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=null),this.notifyChange("tracking")},i.prototype._stopTracking=function(){this._stopWatchingPosition(),this._clear()},i.prototype._startTracking=function(){var t=this;this._stopWatchingPosition();var i=navigator.geolocation.watchPosition(function(r){t._watchId=i,t.notifyChange("tracking"),t._setPosition(r).then(function(i){t._clearWaitingTimer(),t.view.graphics.remove(t.graphic),t.graphic&&(t.graphic=t.graphic.clone(),t.view.graphics.push(t.graphic)),t.emit("track",{position:i})}).otherwise(function(i){throw t._emitError(i),t._clearWaitingTimer(),i})},this._handleWatchPositionError.bind(this),this.geolocationOptions);this._trackStartingTimeoutId=setTimeout(function(){t._trackStartingTimeoutId=null,t.notifyChange("state")},a),this.notifyChange("state")},i.prototype._handleWatchPositionError=function(t){this._emitError(t),this._clearWaitingTimer()},i.prototype._clearWaitingTimer=function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=null,this.notifyChange("state")},i.prototype._emitError=function(t){this.emit("track-error",{error:t})},i}(o.declared(n));return e([o.property({dependsOn:["view.ready","tracking"],readOnly:!0})],c.prototype,"state",null),e([o.property({readOnly:!0})],c.prototype,"tracking",null),c=e([o.subclass("esri.widgets.Track.TrackViewModel")],c)});