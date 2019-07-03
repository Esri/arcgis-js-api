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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../geometry","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/webMercatorUtils","../../../tasks/support/ProjectParameters"],function(e,r,t,o,n,i,a,c){function u(e,r){var t=s(r);return[e[0].toFixed(t),e[1].toFixed(t)]}function s(e){return e>=500?6:e<500&&e>=50?7:e<50&&e>=5?8:9}function f(e){var r=e.geometryServicePromise,t=e.coordinate,i=e.spatialReference,a=e.formatName;return r.then(function(e){return e.fromGeoCoordinateString({strings:[t],sr:i,conversionType:a}).then(function(e){var r=new o.Point({x:e[0][0],y:e[0][1],spatialReference:i});if(!p(r))throw e;return r}).catch(function(e){throw new n("coordinate-conversion:from-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})})})}function d(e,r){var t=e.indexOf(",")>=0?",":" ",n=e.split(t).map(function(e){var r=e.trim();return r?Number(r):null}),i=n[0],a=n[1],c=n[2];if(!l(i)||!l(a))return null;var u=new o.Point({x:i,y:a,spatialReference:r||o.SpatialReference.WGS84});return c&&(u.z=c,u.hasZ=!0),u}function l(e){return"number"==typeof e&&isFinite(e)}function p(e){return e&&l(e.x)&&l(e.y)}function m(e,r){if(e.spatialReference.isGeographic&&r){var t=u([e.x,e.y],r);return t[0]+", "+t[1]}return e.x.toFixed(3)+", "+e.y.toFixed(3)}function g(e,r){var t=e.spatialReference,o=e.geometryServicePromise,u=e.location,s=e.scale;if(!t||u.spatialReference.wkid===t.wkid)return i.resolve({location:u,coordinate:m(u,s)});if((u.spatialReference.isWGS84||u.spatialReference.isWebMercator)&&(t.isWGS84||t.isWebMercator))return i.resolve({location:a.project(u,t),coordinate:m(u,s)});if(y[0]===u&&y[1]===t.wkid)return y[2];y[0]=u,y[1]=t.wkid;var f=o.then(function(e){return e.project(new c({geometries:[u],outSpatialReference:t}),{signal:r}).then(function(e){if(!p(e[0]))throw e[0];return{location:e[0],coordinate:m(e[0],s)}}).catch(function(e){throw new n("coordinate-conversion:projection-failed","Failed to project point",{projectionResult:e})})});return y[2]=f,f}function v(e){var r=e.formatName,o=e.location,i=e.geometryServicePromise,a=h[r]||{},c=t({coordinates:[[o.x,o.y]],sr:o.spatialReference,conversionType:r},a);return i.then(function(e){return e.toGeoCoordinateString(c).then(function(e){var r=e[0];if(!r)throw e;return r}).catch(function(e){throw new n("coordinate-conversion:to-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})})})}function w(e){return"dd"===e||"dms"===e||"ddm"===e||"mgrs"===e||"usng"===e||"utm"===e}Object.defineProperty(r,"__esModule",{value:!0});var h={utm:{conversionMode:"utmDefault",addSpaces:!0},usng:{numOfDigits:5,rounding:!1,addSpaces:!1},mgrs:{rounding:!1}},y=new Array(3);r.clipLonLat=u,r.getDegreePrecision=s,r.fromGeoCoordinateString=f,r.fromXY=d,r.isValidPoint=p,r.pointToCoordinate=m,r.project=g,r.toGeoCoordinateString=v,r.isSupportedNotation=w});