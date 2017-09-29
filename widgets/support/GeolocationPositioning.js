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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../geometry/support/webMercatorUtils","../../config","../../Graphic","../../core/Accessor","../../core/Error","../../core/Evented","../../core/promiseUtils","../../geometry/Point","../../portal/Portal","../../symbols/PictureMarkerSymbol","../../tasks/support/ProjectParameters","../../tasks/GeometryService","dojo/_base/lang"],function(e,t,o,r,i,n,c,a,s,p,l,u,g,d,h,v,y,m){var f=function(t){function s(){var o=null!==t&&t.apply(this,arguments)||this;return o._geolocationUsable=!0,o._iconPath=e.toUrl("../../images/support/sdk_gps_location.png"),o.geolocationOptions={maximumAge:0,timeout:15e3,enableHighAccuracy:!0},o.goToLocationEnabled=!0,o.graphic=new a({symbol:new h({url:o._iconPath,width:21,height:21})}),o.scale=null,o.view=null,o}return o(s,t),s.prototype.initialize=function(){var e=navigator.geolocation,t=window.hasOwnProperty("isSecureContext"),o=t&&window.isSecureContext||!t&&"https:"===window.location.protocol;o&&e||(this._geolocationUsable=!1),e||console.log(this.declaredClass,"navigator.geolocation unsupported."),o||console.log(this.declaredClass,"navigator.geolocation requires a secure origin.")},s.prototype.destroy=function(){this._clear(),this.view=null},s.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)},s.prototype._clonePosition=function(e){return e?{coords:m.mixin({},e.coords),timestamp:e.timestamp}:e},s.prototype._getGeometryServiceUrl=function(){if(c.geometryServiceUrl)return u.resolve(c.geometryServiceUrl);var e=d.getDefault();return e.load().always(function(){return e.get("helperServices.geometry.url")})},s.prototype._projectPoint=function(e){var t=this.get("view.spatialReference");return t.isWGS84?u.resolve(e):t.isWebMercator?u.resolve(n.geographicToWebMercator(e)):this._getGeometryServiceUrl().then(function(o){if(!o)return u.reject(new p("geometry-service:missing-url","Geometry service URL is missing"));var r=new y({url:o}),i=new v({geometries:[e],outSR:t});return r.project(i).then(function(e){return e[0]})})},s.prototype._getScale=function(e){var t=5e4,o=e&&e.coords&&e.coords.accuracy;return this.scale||o||t},s.prototype._createPoint=function(e){var t=e&&e.coords;return t?new g({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}}):null},s.prototype._animatePoint=function(e,t,o){if(!this.goToLocationEnabled)return u.resolve(t);var r=this.view;return r.goTo({target:e,scale:o}).then(function(){return t})},s.prototype._setPosition=function(e){var t=this;e=this._clonePosition(e);var o=this._createPoint(e),r=this._getScale(e);return o?this._projectPoint(o).then(function(o){t.graphic&&(t.graphic.geometry=o),t._animatePoint(o,e,r)}).then(function(){return e}):u.reject(new p("positioning:invalid-point","Cannot position invalid point"))},r([i.property()],s.prototype,"geolocationOptions",void 0),r([i.property()],s.prototype,"goToLocationEnabled",void 0),r([i.property()],s.prototype,"graphic",void 0),r([i.property()],s.prototype,"scale",void 0),r([i.property()],s.prototype,"view",void 0),s=r([i.subclass("esri.widgets.support.GeolocationPositioning")],s)}(i.declared(s,l));return f});