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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../geometry","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/webMercatorUtils"],function(e,n,t,r,o,i,a){function c(e,n){var t=u(n);return[e[0].toFixed(t),e[1].toFixed(t)]}function u(e){return e>=500?6:e<500&&e>=50?7:e<50&&e>=5?8:9}function f(e,n,t){var r,o;return function(){r&&(clearTimeout(r),r=null),o&&o.cancel(null);var a=arguments;return o=i.create(function(o,i){r=setTimeout(function(){r=null,e.apply(n,a).then(function(e){return o(e)}).catch(function(e){return i(e)})},t)})}}function s(e){var n=e.geometryServicePromise,t=e.coordinate,i=e.spatialReference,a=e.formatName;return n.then(function(e){return e.fromGeoCoordinateString({strings:[t],sr:i,conversionType:a}).then(function(e){var n=new r.Point({x:e[0][0],y:e[0][1],spatialReference:i});if(!p(n))throw e;return n}).catch(function(e){throw new o("coordinate-conversion:from-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})})})}function d(e,n){var t=e.indexOf(",")>=0?",":" ",o=e.split(t).map(function(e){var n=e.trim();return n?Number(n):null}),i=o[0],a=o[1],c=o[2];if(!l(i)||!l(a))return null;var u=new r.Point({x:i,y:a,spatialReference:n||r.SpatialReference.WGS84});return c&&(u.z=c,u.hasZ=!0),u}function l(e){return"number"==typeof e&&isFinite(e)}function p(e){return e&&l(e.x)&&l(e.y)}function m(e,n){if(e.spatialReference.isGeographic&&n){var t=c([e.x,e.y],n);return t[0]+", "+t[1]}return e.x.toFixed(3)+", "+e.y.toFixed(3)}function v(e){var n=e.spatialReference,t=e.geometryServicePromise,r=e.location,c=e.scale;if(!n||r.spatialReference.wkid===n.wkid)return i.resolve({location:r,coordinate:m(r,c)});if((r.spatialReference.isWGS84||r.spatialReference.isWebMercator)&&(n.isWGS84||n.isWebMercator))return i.resolve({location:a.project(r,n),coordinate:m(r,c)});if(y[0]===r&&y[1]===n.wkid)return y[2];y[0]=r,y[1]=n.wkid;var u=t.then(function(e){return e.project({geometries:[r],outSpatialReference:n}).then(function(e){if(!p(e[0]))throw e[0];return{location:e[0],coordinate:m(e[0],c)}}).catch(function(e){throw new o("coordinate-conversion:projection-failed","Failed to project point",{projectionResult:e})})});return y[2]=u,u}function g(e){var n=e.formatName,r=e.location,i=e.geometryServicePromise,a=w[n]||{},c=t({coordinates:[[r.x,r.y]],sr:r.spatialReference,conversionType:n},a);return i.then(function(e){return e.toGeoCoordinateString(c).then(function(e){var n=e[0];if(!n)throw e;return n}).catch(function(e){throw new o("coordinate-conversion:to-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})})})}function h(e){return"dd"===e||"dms"===e||"ddm"===e||"mgrs"===e||"usng"===e||"utm"===e}Object.defineProperty(n,"__esModule",{value:!0});var w={utm:{conversionMode:"utmDefault",addSpaces:!0},usng:{numOfDigits:5,rounding:!1,addSpaces:!1},mgrs:{rounding:!1}},y=new Array(3);n.clipLonLat=c,n.getDegreePrecision=u,n.debounceDeferred=f,n.fromGeoCoordinateString=s,n.fromXY=d,n.isValidPoint=p,n.pointToCoordinate=m,n.project=v,n.toGeoCoordinateString=g,n.isSupportedNotation=h});