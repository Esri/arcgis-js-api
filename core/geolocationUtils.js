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

define(["require","exports","./tsSupport/assignHelper","../config","./Error","./has","./Logger","./promiseUtils","../geometry/Point","../geometry/support/webMercatorUtils","../portal/Portal","../tasks/GeometryService","../tasks/support/ProjectParameters"],function(e,r,t,o,i,n,u,a,c,s,l,g,d){function p(){var e=n("esri-geolocation");return e||U.warn("geolocation-unsupported","Geolocation unsupported."),e}function f(){var e=n("esri-secure-context");return e||U.warn("insecure-context","Geolocation requires a secure origin."),e}function m(){return p()&&f()}function v(e){e||(e=b);var r=a.create(function(r,t){navigator.geolocation.getCurrentPosition(r,t,e)});return a.timeout(r,15e3,void 0)}function y(e,r){return P(h(w(e)),r)}function w(e){var r=e&&e.coords||{},t={accuracy:r.accuracy,altitude:r.altitude,altitudeAccuracy:r.altitudeAccuracy,heading:r.heading,latitude:r.latitude,longitude:r.longitude,speed:r.speed};return e?{coords:t,timestamp:e.timestamp}:e}function h(e){var r=e&&e.coords;return r?new c({longitude:r.longitude,latitude:r.latitude,z:r.altitude||null,spatialReference:{wkid:4326}}):null}function P(e,r){var t=r.spatialReference;return t.isWGS84?a.resolve(e):t.isWebMercator?a.resolve(s.geographicToWebMercator(e)):S().then(function(r){if(!r)return a.reject(new i("geometry-service:missing-url","Geometry service URL is missing"));var o=new g({url:r}),n=new d({geometries:[e],outSR:t});return o.project(n).then(function(e){return e[0]})})}function S(){if(o.geometryServiceUrl)return a.resolve(o.geometryServiceUrl);var e=l.getDefault();return e.load().always(function(){return e.get("helperServices.geometry.url")})}Object.defineProperty(r,"__esModule",{value:!0});var U=u.getLogger("esri.core.geolocationUtils"),b={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};r.supported=m,r.getCurrentPosition=v,r.positionToPoint=y});