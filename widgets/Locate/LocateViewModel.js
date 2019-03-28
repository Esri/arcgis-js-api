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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/i18n!./nls/Locate","../../PopupTemplate","../../core/Error","../../core/geolocationUtils","../../core/Handles","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../Popup/actions","../support/GeolocationPositioning"],function(e,t,a,o,r,i,n,c,l,s,p,d,u,h){var f={title:r.currentLocation,fieldInfos:[{fieldName:"timestamp",label:r.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:r.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:r.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:r.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:r.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:r.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:r.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:r.speed,format:{places:0,digitSeparator:!0}}],actions:[u.removeSelectedFeature.clone()],content:[{type:"fields"}]};return function(e){function t(t){var a=e.call(this,t)||this;return a._handles=new l,a.locate=a.locate.bind(a),a.graphic&&(a.graphic.popupTemplate=new i(f)),a._handles.add(p.on(a,"view.popup","trigger-action",function(e){return u.triggerAction({event:e,view:a.view})})),a}return a(t,e),t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this._cancelLocate()},Object.defineProperty(t.prototype,"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locating?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0}),t.prototype.locate=function(){var e=this;if("disabled"===this.state)return s.reject(new n("locate:disabled-state","Cannot locate when disabled."));if("feature-unsupported"===this.state)return s.reject(new n("locate:feature-unsupported-state","Cannot locate in unsecure domain."));this._cancelLocate(),this.notifyChange("state");var t=c.getCurrentPosition(this.geolocationOptions).then(function(t){return e._setPosition(t)}).then(function(t){return e.view.graphics.remove(e.graphic),e.graphic&&(e.graphic=e.graphic.clone(),e.view.graphics.push(e.graphic)),e.emit("locate",{position:t}),t}),a=!1,o=function(){e._locating=null,e.notifyChange("state"),a=!0};return t.catch(function(t){e.emit("locate-error",{error:t})}).then(o),a||(this._locating=t,this.notifyChange("state")),t},t.prototype.cancelLocate=function(){this._cancelLocate()},t.prototype._cancelLocate=function(){var e=this._locating;e&&e.cancel(),this._locating=null},o([d.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),o([d.property()],t.prototype,"locate",null),o([d.property()],t.prototype,"cancelLocate",null),t=o([d.subclass("esri.widgets.Locate.LocateViewModel")],t)}(d.declared(h))});