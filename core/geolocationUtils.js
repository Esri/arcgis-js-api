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

define(["require","exports","./tsSupport/assignHelper","../config","./Error","./has","./Logger","./promiseUtils","../geometry/Point","../geometry/support/webMercatorUtils","../portal/Portal","../tasks/GeometryService","../tasks/support/ProjectParameters"],function(e,t,r,o,i,n,u,c,a,s,l,g,d){function p(){var e=n("esri-geolocation");return e||U.warn("geolocation-unsupported","Geolocation unsupported."),e}function f(){var e=n("esri-secure-context");return e||U.warn("insecure-context","Geolocation requires a secure origin."),e}function v(){return p()&&f()}function m(e){e||(e=b);var t=c.create(function(t,r){navigator.geolocation.getCurrentPosition(t,r,e)});return c.timeout(t,15e3,void 0)}function y(e){var t=e.position,r=e.view;return P(w(h(t)),r)}function h(e){var t=e&&e.coords||{},r={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:r,timestamp:e.timestamp}:e}function w(e){var t=e&&e.coords;return t?new a({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}}):null}function P(e,t){if(!t)return c.resolve(e);var r=t.spatialReference;return r.isWGS84?c.resolve(e):r.isWebMercator?c.resolve(s.geographicToWebMercator(e)):S().then(function(t){if(!t)return c.reject(new i("geometry-service:missing-url","Geometry service URL is missing"));var o=new g({url:t}),n=new d({geometries:[e],outSR:r});return o.project(n).then(function(e){return e[0]})})}function S(){if(o.geometryServiceUrl)return c.resolve(o.geometryServiceUrl);var e=l.getDefault();return e.load().catch(function(e){}).then(function(){return e.get("helperServices.geometry.url")})}Object.defineProperty(t,"__esModule",{value:!0});var U=u.getLogger("esri.core.geolocationUtils"),b={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};t.supported=v,t.getCurrentPosition=m,t.positionToPoint=y});