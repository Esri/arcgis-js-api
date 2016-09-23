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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/Error","../support/GeolocationPositioning"],function(t,i){var n={disabled:"disabled",ready:"ready",waiting:"waiting",tracking:"tracking",unsupported:"feature-unsupported"},a=15e3,r=i.createSubclass({properties:{state:{dependsOn:["view.ready","tracking"],readOnly:!0},tracking:{readOnly:!0}},declaredClass:"esri.widgets.Track.TrackViewModel",destroy:function(){this._viewReady&&this._viewReady.cancel(),this._stopWatchingPosition()},_watchId:null,_trackStartingTimeoutId:null,state:n.disabled,_stateGetter:function(){return this._geolocationUsable?this.get("view.ready")?this.tracking?n.tracking:null!==this._trackStartingTimeoutId?n.waiting:n.ready:n.disabled:n.unsupported},tracking:!1,_trackingGetter:function(){return null!==this._watchId},start:function(){this.state===n.disabled||this.tracking||this._startTracking()},stop:function(){this.state!==n.disabled&&this.tracking&&this._stopTracking()},_stopWatchingPosition:function(){null!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=null),this.notifyChange("tracking")},_stopTracking:function(){this._stopWatchingPosition(),this._clear()},_startTracking:function(){this._stopWatchingPosition();var t=navigator.geolocation.watchPosition(function(i){this._watchId=t,this.notifyChange("tracking"),this._setPosition(i).then(function(t){this._clearWaitingTimer(),this.view.graphics.remove(this.graphic),this.graphic&&(this.graphic=this.graphic.clone(),this.view.graphics.push(this.graphic)),this.emit("track",{position:t})}.bind(this)).otherwise(function(t){throw this._emitError(t),this._clearWaitingTimer(),t}.bind(this))}.bind(this),this._handleWatchPositionError.bind(this),this.geolocationOptions);this._trackStartingTimeoutId=setTimeout(function(){this._trackStartingTimeoutId=null,this.notifyChange("state")}.bind(this),a),this.notifyChange("state")},_handleWatchPositionError:function(t){this._emitError(t),this._clearWaitingTimer()},_clearWaitingTimer:function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=null,this.notifyChange("state")},_emitError:function(t){this.emit("track-error",{error:t})}});return r});