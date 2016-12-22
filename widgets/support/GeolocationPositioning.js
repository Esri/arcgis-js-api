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

define(["../../config","../../core/Accessor","../../core/Error","../../core/Evented","../../core/promiseUtils","../../geometry/Point","../../geometry/support/webMercatorUtils","../../Graphic","../../portal/Portal","../../symbols/PictureMarkerSymbol","../../tasks/GeometryService","../../tasks/support/ProjectParameters","dojo/_base/lang","require"],function(e,t,o,i,r,n,s,a,c,l,u,g,h,p){var d=t.createSubclass([i],{properties:{geolocationOptions:{},goToLocationEnabled:{},graphic:{type:a},view:{}},declaredClass:"esri.widgets.support.GeolocationPositioning",getDefaults:function(){return h.mixin(this.inherited(arguments),{geolocationOptions:{maximumAge:0,timeout:15e3,enableHighAccuracy:!0},graphic:{}})},initialize:function(){var e=navigator.geolocation,t=window.hasOwnProperty("isSecureContext"),o=t&&window.isSecureContext||!t&&"https:"===window.location.protocol;o&&e||(this._geolocationUsable=!1),e||console.log(this.declaredClass,"navigator.geolocation unsupported."),o||console.log(this.declaredClass,"navigator.geolocation requires a secure origin.")},destroy:function(){this._clear()},_geolocationUsable:!0,_iconPath:"../../images/support/sdk_gps_location.png",geolocationOptions:null,goToLocationEnabled:!0,graphic:null,_graphicSetter:function(e){e&&!e.symbol&&(e.symbol=new l({url:p.toUrl(this._iconPath),width:21,height:21})),this._set("graphic",e)},view:null,_clear:function(){this.view&&this.view.graphics.remove(this.graphic)},_positionToObject:function(e){return e?{coords:h.mixin({},e.coords),timestamp:e.timestamp}:{}},_getGeometryServiceUrl:function(){if(e.geometryServiceUrl)return r.resolve(e.geometryServiceUrl);var t=c.getDefault();return t.load().always(function(){return t.get("helperServices.geometry.url")})},_projectPoint:function(e){var t=this.get("view.spatialReference");return t.isWGS84?r.resolve(e):t.isWebMercator?r.resolve(s.geographicToWebMercator(e)):this._getGeometryServiceUrl().then(function(i){if(!i)return r.reject(new o("geometry-service:missing-url","Geometry service URL is missing"));var n=new u({url:i}),s=new g({geometries:[e],outSR:t});return n.project(s).then(function(e){return e[0]})})},_getScale:function(e){var t=5e4,o=e&&e.coords&&e.coords.accuracy,i=this.scale;return i||o||t},_createPoint:function(e){var t=e&&e.coords;return t?new n({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}}):null},_animatePoint:function(e,t,o){return this.goToLocationEnabled?this.view.goTo({target:e,scale:o}).then(function(){return t}):r.resolve(t)},_setPosition:function(e){e=this._positionToObject(e);var t=this.graphic,i=this._createPoint(e);i&&(t.geometry=i);var n=this._getScale(e);return i?this._projectPoint(i).then(function(o){return this._animatePoint(o,e,n,t)}.bind(this)).then(function(){return e}):r.reject(new o("positioning:invalid-point","Cannot position invalid point"))}});return d});