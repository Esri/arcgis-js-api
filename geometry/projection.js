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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","./pe","../SpatialReference","./GeographicTransformation"],(function(n,e,r,o,t,i){Object.defineProperty(e,"__esModule",{value:!0});var u=null;e.isLoaded=function(){return!!u&&o.isLoaded()},e.isSupported=function(){return o.isSupported()};var a=null;e.load=function(){if(a)return a.promise;a=new r;var e=o.load();return n(["./geometryEngine"],(function(n){u=n,e.then((function(){u._enableProjection(o),a.resolve()}),(function(n){a.reject(n)}))})),a.promise},e.project=function(n,e,r){return void 0===r&&(r=null),n instanceof Array?0===n.length?[]:f(n,n[0].spatialReference,e,r):f([n],n.spatialReference,e,r)[0]};var l={};function f(n,e,r,o,a){if(void 0===o&&(o=null),void 0===a&&(a=!1),null===o){var f=i.cacheKey(e,r);void 0!==l[f]?o=l[f]:(null===(o=c(e,r,null))&&(o=new i),l[f]=o)}return u._project(n,e,r instanceof t||!1===a?r:new t(r),o,a)}function c(n,e,r){void 0===r&&(r=null);var o=u._getTransformation(n,e,r);return null!==o?i.fromGE(o):null}e.projectMany=f,e.getTransformation=c,e.getTransformations=function(n,e,r){void 0===r&&(r=null);var o=u._getTransformationBySuitability(n,e,r);if(null!==o){for(var t=[],a=0,l=o;a<l.length;a++){var f=l[a];t.push(i.fromGE(f))}return t}return[]}}));