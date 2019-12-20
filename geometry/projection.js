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

define(["require","exports","../core/promiseUtils","./pe","./SpatialReference","./support/GeographicTransformation"],function(n,e,r,o,t,i){function u(){return!!d&&o.isLoaded()}function a(){return o.isSupported()}function l(){return v||(v=r.create(function(e,r){var t=o.load();n(["./geometryEngine"],function(n){d=n,t.then(function(){d._enableProjection(o),e()},function(n){r(n)})})}))}function f(n,e,r){return void 0===r&&(r=null),n instanceof Array?0===n.length?[]:c(n,n[0].spatialReference,e,r):c([n],n.spatialReference,e,r)[0]}function c(n,e,r,o,u){if(void 0===o&&(o=null),void 0===u&&(u=!1),null===o){var a=i.cacheKey(e,r);void 0!==g[a]?o=g[a]:(o=s(e,r,null),null===o&&(o=new i),g[a]=o)}return d._project(n,e,r instanceof t||!1===u?r:new t(r),o,u)}function s(n,e,r){void 0===r&&(r=null);var o=d._getTransformation(n,e,r);return null!==o?i.fromGE(o):null}function p(n,e,r){void 0===r&&(r=null);var o=d._getTransformationBySuitability(n,e,r);if(null!==o){for(var t=[],u=0,a=o;u<a.length;u++){var l=a[u];t.push(i.fromGE(l))}return t}return[]}Object.defineProperty(e,"__esModule",{value:!0});var d=null;e.isLoaded=u,e.isSupported=a;var v=null;e.load=l,e.project=f;var g={};e.projectMany=c,e.getTransformation=s,e.getTransformations=p});