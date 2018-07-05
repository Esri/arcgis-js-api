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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Error","../../core/geolocationUtils","../../core/promiseUtils","../../core/accessorSupport/decorators","../support/GeolocationPositioning"],function(e,t,o,r,n,i,a,c,s){return function(e){function t(t){var o=e.call(this,t)||this;return o.locate=o.locate.bind(o),o}return o(t,e),t.prototype.destroy=function(){var e=this._locating;e&&e.cancel(),this._locating=null},Object.defineProperty(t.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locating?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),t.prototype.locate=function(){var e=this;if("disabled"===this.state)return a.reject(new n("locate:disabled-state","Cannot locate when disabled."));if("feature-unsupported"===this.state)return a.reject(new n("locate:feature-unsupported-state","Cannot locate in unsecure domain."));var t=this._locating;t&&t.cancel(),this._locating=null;var o=i.getCurrentPosition(this.geolocationOptions).then(function(t){return e._setPosition(t)}).then(function(t){return e.view.graphics.remove(e.graphic),e.graphic&&(e.graphic=e.graphic.clone(),e.view.graphics.push(e.graphic)),e.emit("locate",{position:t}),t}),r=!1,c=function(){e._locating=null,e.notifyChange("state"),r=!0};return o.catch(function(t){e.emit("locate-error",{error:t})}).then(c),r||(this._locating=o,this.notifyChange("state")),o},r([c.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),r([c.property()],t.prototype,"locate",null),t=r([c.subclass("esri.widgets.Locate.LocateViewModel")],t)}(c.declared(s))});