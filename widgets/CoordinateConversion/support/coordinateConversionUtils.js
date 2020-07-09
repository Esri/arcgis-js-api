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

define(["require","exports","tslib","../../../geometry","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/webMercatorUtils","../../../tasks/support/ProjectParameters"],(function(e,t,r,n,o,i,a,c){Object.defineProperty(t,"__esModule",{value:!0});var u={utm:{conversionMode:"utmDefault",addSpaces:!0},usng:{numOfDigits:5,rounding:!1,addSpaces:!1},mgrs:{rounding:!1}},s=new Array(3);function f(e,t){var r=d(t);return[e[0].toFixed(r),e[1].toFixed(r)]}function d(e){return e>=500?6:e<500&&e>=50?7:e<50&&e>=5?8:9}function l(e){return"number"==typeof e&&isFinite(e)}function p(e){return e&&l(e.x)&&l(e.y)}function m(e,t){if(e.spatialReference.isGeographic&&t){var r=f([e.x,e.y],t);return r[0]+", "+r[1]}return e.x.toFixed(3)+", "+e.y.toFixed(3)}t.clipLonLat=f,t.getDegreePrecision=d,t.fromGeoCoordinateString=function(e){var t=e.geometryServicePromise,r=e.coordinate,i=e.spatialReference,a=e.formatName;return t.then((function(e){return e.fromGeoCoordinateString({strings:[r],sr:i,conversionType:a}).then((function(e){var t=new n.Point({x:e[0][0],y:e[0][1],spatialReference:i});if(!p(t))throw e;return t})).catch((function(e){throw new o("coordinate-conversion:from-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})}))}))},t.fromXY=function(e,t){var r=e.indexOf(",")>=0?",":" ",o=e.split(r).map((function(e){var t=e.trim();return t?Number(t):null})),i=o[0],a=o[1],c=o[2];if(!l(i)||!l(a))return null;var u=new n.Point({x:i,y:a,spatialReference:t||n.SpatialReference.WGS84});return c&&(u.z=c,u.hasZ=!0),u},t.isValidPoint=p,t.pointToCoordinate=m,t.project=function(e,t){var r=e.spatialReference,n=e.geometryServicePromise,u=e.location,f=e.scale;if(!r||u.spatialReference.wkid===r.wkid)return i.resolve({location:u,coordinate:m(u,f)});if((u.spatialReference.isWGS84||u.spatialReference.isWebMercator)&&(r.isWGS84||r.isWebMercator))return i.resolve({location:a.project(u,r),coordinate:m(u,f)});if(s[0]===u&&s[1]===r.wkid)return s[2];s[0]=u,s[1]=r.wkid;var d=n.then((function(e){return e.project(new c({geometries:[u],outSpatialReference:r}),{signal:t}).then((function(e){if(!p(e[0]))throw e[0];return{location:e[0],coordinate:m(e[0],f)}})).catch((function(e){throw new o("coordinate-conversion:projection-failed","Failed to project point",{projectionResult:e})}))}));return s[2]=d,d},t.toGeoCoordinateString=function(e){var t=e.formatName,n=e.location,i=e.geometryServicePromise,a=u[t]||{},c=r.__assign({coordinates:[[n.x,n.y]],sr:n.spatialReference,conversionType:t},a);return i.then((function(e){return e.toGeoCoordinateString(c).then((function(e){var t=e[0];if(!t)throw e;return t})).catch((function(e){throw new o("coordinate-conversion:to-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})}))}))},t.isSupportedNotation=function(e){return"dd"===e||"dms"===e||"ddm"===e||"mgrs"===e||"usng"===e||"utm"===e}}));