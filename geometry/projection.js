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

define(["require","exports","../core/promiseUtils","./pe","./support/GeographicTransformation","@dojo/framework/shim/Promise"],(function(e,n,r,o,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getTransformations=n.getTransformation=n.projectMany=n.project=n.load=n.isSupported=n.isLoaded=void 0;var i=null,a=null;n.isLoaded=function(){return!!i&&o.isLoaded()},n.isSupported=function(){return o.isSupported()};var l=null;n.load=function(){return l||(l=r.all([o.load(),new Promise((function(n,r){e(["./geometryEngineBase"],n,r)})),new Promise((function(n,r){e(["./geometryAdapters/hydrated"],n,r)}))]).then((function(e){var n=e[1],r=e[2].hydratedAdapter;a=r,(i=n)._enableProjection(o)})))},n.project=function(e,n,r){return void 0===r&&(r=null),e instanceof Array?0===e.length?[]:s(a,e,e[0].spatialReference,n,r):s(a,[e],e.spatialReference,n,r)[0]};var u={};function s(e,n,r,o,a){if(void 0===a&&(a=null),null===a){var l=t.cacheKey(r,o);void 0!==u[l]?a=u[l]:(null===(a=f(r,o,null))&&(a=new t),u[l]=a)}return i._project(e,n,r,o,a)}function f(e,n,r){void 0===r&&(r=null);var o=i._getTransformation(a,e,n,r,null==r?void 0:r.spatialReference);return null!==o?t.fromGE(o):null}n.projectMany=s,n.getTransformation=f,n.getTransformations=function(e,n,r){void 0===r&&(r=null);var o=i._getTransformationBySuitability(a,e,n,r,null==r?void 0:r.spatialReference);if(null!==o){for(var l=[],u=0,s=o;u<s.length;u++){var f=s[u];l.push(t.fromGE(f))}return l}return[]}}));