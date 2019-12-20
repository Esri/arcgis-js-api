// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./tsSupport/assignHelper","../config","./Error","./has","./Logger","./promiseUtils","../geometry/Point","../geometry/support/webMercatorUtils","../portal/Portal","../tasks/GeometryService","../tasks/support/ProjectParameters"],function(e,t,r,o,n,i,u,c,a,s,l,g,d){function p(){var e=i("esri-geolocation");return e||U.warn("geolocation-unsupported","Geolocation unsupported."),e}function f(){var e=i("esri-secure-context");return e||U.warn("insecure-context","Geolocation requires a secure origin."),e}function m(){return p()&&f()}function v(e){return e||(e=b),c.create(function(t,r){setTimeout(function(){return r(new n("geolocation:timeout","getting the current geolocation position timed out"))},15e3),navigator.geolocation.getCurrentPosition(t,r,e)})}function y(e,t){var r=e.position,o=e.view;return P(w(h(r)),o,t)}function h(e){var t=e&&e.coords||{},r={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:r,timestamp:e.timestamp}:e}function w(e){var t=e&&e.coords;return t?new a({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}}):null}function P(e,t,r){if(!t)return c.resolve(e);var o=t.spatialReference;return o.isWGS84?c.resolve(e):o.isWebMercator?c.resolve(s.geographicToWebMercator(e)):S(r).then(function(t){if(!t)throw new n("geometry-service:missing-url","Geometry service URL is missing");var i=new g({url:t}),u=new d({geometries:[e],outSR:o});return i.project(u,r).then(function(e){return e[0]})})}function S(e){if(o.geometryServiceUrl)return c.resolve(o.geometryServiceUrl);var t=l.getDefault();return t.load(e).catch(function(){}).then(function(){return t.get("helperServices.geometry.url")})}Object.defineProperty(t,"__esModule",{value:!0});var U=u.getLogger("esri.core.geolocationUtils"),b={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};t.supported=m,t.getCurrentPosition=v,t.positionToPoint=y});