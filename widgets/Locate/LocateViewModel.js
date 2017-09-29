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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/promiseUtils","../../core/Error","dojo/Deferred","../support/GeolocationPositioning"],function(t,e,o,r,n,i,a,c,s){var l=15e3,u=function(t){function e(e){var o=t.call(this,e)||this;return o.locate=o.locate.bind(o),o}return o(e,t),e.prototype.destroy=function(){this._locating&&(this._locating.cancel(),this._locating=null)},Object.defineProperty(e.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locating?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),e.prototype.locate=function(){var t=this;if("disabled"===this.state)return i.reject(new a("locate:disabled-state","Cannot locate when disabled."));if("feature-unsupported"===this.state)return i.reject(new a("locate:feature-unsupported-state","Cannot locate in unsecure domain."));this._locating&&(this._locating.cancel(),this._locating=null);var e=this._getCurrentPosition(this.geolocationOptions).then(function(e){return t._setPosition(e)}).then(function(e){return t.view.graphics.remove(t.graphic),t.graphic&&(t.graphic=t.graphic.clone(),t.view.graphics.push(t.graphic)),t.emit("locate",{position:e}),e}).otherwise(function(e){throw t.emit("locate-error",{error:e}),e});return this._locating=e,this.notifyChange("state"),i.timeout(e,l,void 0).then(function(e){return t._locating=null,t.notifyChange("state"),e}).otherwise(function(e){throw t._locating.cancel(),t._locating=null,t.notifyChange("state"),e})},e.prototype._getCurrentPosition=function(t){var e=new c;return navigator.geolocation.getCurrentPosition(e.resolve,e.reject,t),e.promise},r([n.property({dependsOn:["view.ready"],readOnly:!0})],e.prototype,"state",null),r([n.property()],e.prototype,"locate",null),e=r([n.subclass("esri.widgets.Locate.LocateViewModel")],e)}(n.declared(s));return u});