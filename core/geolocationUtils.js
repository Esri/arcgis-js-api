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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./tsSupport/assignHelper","../config","./Error","./promiseUtils","../geometry/Point","../geometry/support/webMercatorUtils","../portal/Portal","../tasks/GeometryService","../tasks/support/ProjectParameters"],function(e,t,r,o,n,i,u,a,c,s,l){function g(){var e=!!navigator.geolocation;return e||console.log("geolocation: unsupported."),e}function d(){var e=window.hasOwnProperty("isSecureContext"),t=e&&window.isSecureContext||!e&&"https:"===window.location.protocol;return t||console.log("geolocation: requires a secure origin."),t}function p(){return g()&&d()}function v(e){var t=15e3;e||(e=P);var r=i.create(function(t,r){navigator.geolocation.getCurrentPosition(t,r,e)});return i.timeout(r,t,void 0)}function f(e,t){var r=m(e),o=y(r);return w(o,t)}function m(e){var t=e&&e.coords||{},r={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:r,timestamp:e.timestamp}:e}function y(e){var t=e&&e.coords;return t?new u({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}}):null}function w(e,t){var r=t.spatialReference;return r.isWGS84?i.resolve(e):r.isWebMercator?i.resolve(a.geographicToWebMercator(e)):h().then(function(t){if(!t)return i.reject(new n("geometry-service:missing-url","Geometry service URL is missing"));var o=new s({url:t}),u=new l({geometries:[e],outSR:r});return o.project(u).then(function(e){return e[0]})})}function h(){if(o.geometryServiceUrl)return i.resolve(o.geometryServiceUrl);var e=c.getDefault();return e.load().always(function(){return e.get("helperServices.geometry.url")})}Object.defineProperty(t,"__esModule",{value:!0});var P={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};t.supported=p,t.getCurrentPosition=v,t.positionToPoint=f});