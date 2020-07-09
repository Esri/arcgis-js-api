// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../config","./Error","./has","./Logger","./promiseUtils","../geometry/Point","../geometry/support/webMercatorUtils","../portal/Portal","../tasks/GeometryService","../tasks/support/ProjectParameters"],(function(e,t,r,o,n,i,u,c,a,s,l,g){Object.defineProperty(t,"__esModule",{value:!0});var d=i.getLogger("esri.core.geolocationUtils"),f={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};t.supported=function(){return function(){var e=n("esri-geolocation");return e||d.warn("geolocation-unsupported","Geolocation unsupported."),e}()&&function(){var e=n("esri-secure-context");return e||d.warn("insecure-context","Geolocation requires a secure origin."),e}()},t.getCurrentPosition=function(e){return e||(e=f),u.create((function(t,r){setTimeout((function(){return r(new o("geolocation:timeout","getting the current geolocation position timed out"))}),15e3),navigator.geolocation.getCurrentPosition(t,r,e)}))},t.positionToPoint=function(e,t){var n=e.position,i=e.view;return function(e,t,n){if(!t)return u.resolve(e);var i=t.spatialReference;if(i.isWGS84)return u.resolve(e);if(i.isWebMercator)return u.resolve(a.geographicToWebMercator(e));return function(e){if(r.geometryServiceUrl)return u.resolve(r.geometryServiceUrl);var t=s.getDefault();return t.load(e).catch((function(){})).then((function(){return t.get("helperServices.geometry.url")}))}(n).then((function(t){if(!t)throw new o("geometry-service:missing-url","Geometry service URL is missing");var r=new l({url:t}),u=new g({geometries:[e],outSR:i});return r.project(u,n).then((function(e){return e[0]}))}))}(function(e){var t=e&&e.coords;if(!t)return null;return new c({longitude:t.longitude,latitude:t.latitude,z:t.altitude||null,spatialReference:{wkid:4326}})}(function(e){var t=e&&e.coords||{},r={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:r,timestamp:e.timestamp}:e}(n)),i,t)}}));