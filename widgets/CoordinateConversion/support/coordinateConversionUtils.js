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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../geometry","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/webMercatorUtils","../../../tasks/support/ProjectParameters"],(function(e,o,t,r,n,i,a,c){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.isSupportedNotation=o.toGeoCoordinateString=o.project=o.pointToCoordinate=o.isValidPoint=o.fromXY=o.fromGeoCoordinateString=o.getDegreePrecision=o.clipLonLat=void 0;var s={utm:{conversionMode:"utmDefault",addSpaces:!0},usng:{numOfDigits:5,rounding:!1,addSpaces:!1},mgrs:{rounding:!1}},u=new Array(3);function f(e,o){var t=d(o);return[e[0].toFixed(t),e[1].toFixed(t)]}function d(e){return e>=500?6:e<500&&e>=50?7:e<50&&e>=5?8:9}function l(e){return"number"==typeof e&&isFinite(e)}function p(e){return e&&l(e.x)&&l(e.y)}function m(e,o){if(e.spatialReference.isGeographic&&o){var t=f([e.x,e.y],o);return t[0]+", "+t[1]}return e.x.toFixed(3)+", "+e.y.toFixed(3)}o.clipLonLat=f,o.getDegreePrecision=d,o.fromGeoCoordinateString=function(e){var o=e.geometryServicePromise,t=e.coordinate,i=e.spatialReference,a=e.formatName;return o.then((function(e){return e.fromGeoCoordinateString({strings:[t],sr:i,conversionType:a}).then((function(e){var o=new r.Point({x:e[0][0],y:e[0][1],spatialReference:i});if(!p(o))throw e;return o})).catch((function(e){throw new n("coordinate-conversion:from-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})}))}))},o.fromXY=function(e,o){var t=e.indexOf(",")>=0?",":" ",n=e.split(t).map((function(e){var o=e.trim();return o?Number(o):null})),i=n[0],a=n[1],c=n[2];if(!l(i)||!l(a))return null;var s=new r.Point({x:i,y:a,spatialReference:o||r.SpatialReference.WGS84});return c&&(s.z=c,s.hasZ=!0),s},o.isValidPoint=p,o.pointToCoordinate=m,o.project=function(e,o){var t=e.spatialReference,r=e.geometryServicePromise,s=e.location,f=e.scale;if(!t||s.spatialReference.wkid===t.wkid)return i.resolve({location:s,coordinate:m(s,f)});if((s.spatialReference.isWGS84||s.spatialReference.isWebMercator)&&(t.isWGS84||t.isWebMercator))return i.resolve({location:a.project(s,t),coordinate:m(s,f)});if(u[0]===s&&u[1]===t.wkid)return u[2];u[0]=s,u[1]=t.wkid;var d=r.then((function(e){return e.project(new c({geometries:[s],outSpatialReference:t}),{signal:o}).then((function(e){if(!p(e[0]))throw e[0];return{location:e[0],coordinate:m(e[0],f)}})).catch((function(e){throw new n("coordinate-conversion:projection-failed","Failed to project point",{projectionResult:e})}))}));return u[2]=d,d},o.toGeoCoordinateString=function(e){var o=e.formatName,r=e.location,i=e.geometryServicePromise,a=s[o]||{},c=t.__assign({coordinates:[[r.x,r.y]],sr:r.spatialReference,conversionType:o},a);return i.then((function(e){return e.toGeoCoordinateString(c).then((function(e){var o=e[0];if(!o)throw e;return o})).catch((function(e){throw new n("coordinate-conversion:to-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})}))}))},o.isSupportedNotation=function(e){return"dd"===e||"dms"===e||"ddm"===e||"mgrs"===e||"usng"===e||"utm"===e}}));