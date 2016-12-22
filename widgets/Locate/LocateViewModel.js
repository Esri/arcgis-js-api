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

define(["../../core/Error","../../core/promiseUtils","../support/GeolocationPositioning","dojo/Deferred"],function(t,e,i,n){var o={disabled:"disabled",ready:"ready",locating:"locating",unsupported:"feature-unsupported"},s=15e3,r=i.createSubclass({properties:{state:{dependsOn:["view.ready"],readOnly:!0}},declaredClass:"esri.widgets.Locate.LocateViewModel",constructor:function(){this.locate=this.locate.bind(this)},state:o.disabled,_stateGetter:function(){return this._geolocationUsable?this.get("view.ready")?this._locating?o.locating:o.ready:o.disabled:o.unsupported},locate:function(){if(this.state===o.disabled)return e.reject(new t("locate:disabled-state","Cannot locate when disabled."));if(this.state===o.unsupported)return e.reject(new t("locate:feature-unsupported-state","Cannot locate in unsecure domain."));this._locating&&(this._locating.cancel(),this._locating=null);var i=this._getCurrentPosition(this.geolocationOptions).then(this._setPosition.bind(this)).then(function(t){return this.view.graphics.remove(this.graphic),this.graphic&&(this.graphic=this.graphic.clone(),this.view.graphics.push(this.graphic)),this.emit("locate",{position:t}),t}.bind(this)).otherwise(function(t){throw this.emit("locate-error",{error:t}),t}.bind(this));return this._locating=i,this.notifyChange("state"),e.timeout(i,s).then(function(t){return this._locating=null,this.notifyChange("state"),t}.bind(this)).otherwise(function(t){throw this._locating.cancel(),this._locating=null,this.notifyChange("state"),t}.bind(this))},_getCurrentPosition:function(t){var e=new n;return navigator.geolocation.getCurrentPosition(e.resolve,e.reject,t),e.promise}});return r});