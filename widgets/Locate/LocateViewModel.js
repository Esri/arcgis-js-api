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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Error","../../core/geolocationUtils","../../core/promiseUtils","../../core/accessorSupport/decorators","../support/GeolocationPositioning"],function(t,e,o,r,n,i,a,c,s){return function(t){function e(e){var o=t.call(this,e)||this;return o.locate=o.locate.bind(o),o}return o(e,t),e.prototype.destroy=function(){this._cancelLocate()},Object.defineProperty(e.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locating?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),e.prototype.locate=function(){var t=this;if("disabled"===this.state)return a.reject(new n("locate:disabled-state","Cannot locate when disabled."));if("feature-unsupported"===this.state)return a.reject(new n("locate:feature-unsupported-state","Cannot locate in unsecure domain."));this._cancelLocate(),this.notifyChange("state");var e=i.getCurrentPosition(this.geolocationOptions).then(function(e){return t._setPosition(e)}).then(function(e){return t.view.graphics.remove(t.graphic),t.graphic&&(t.graphic=t.graphic.clone(),t.view.graphics.push(t.graphic)),t.emit("locate",{position:e}),e}),o=!1,r=function(){t._locating=null,t.notifyChange("state"),o=!0};return e.catch(function(e){t.emit("locate-error",{error:e})}).then(r),o||(this._locating=e,this.notifyChange("state")),e},e.prototype.cancelLocate=function(){this._cancelLocate()},e.prototype._cancelLocate=function(){var t=this._locating;t&&t.cancel(),this._locating=null},r([c.property({dependsOn:["view.ready"],readOnly:!0})],e.prototype,"state",null),r([c.property()],e.prototype,"locate",null),r([c.property()],e.prototype,"cancelLocate",null),e=r([c.subclass("esri.widgets.Locate.LocateViewModel")],e)}(c.declared(s))});