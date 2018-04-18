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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","./pe","./SpatialReference","./support/GeographicTransformation"],function(n,e,r,o,t,i){function u(){return!!p&&o.isLoaded()}function l(){return o.isSupported()}function a(){return null!==v?v.promise:(v=new r,o.load().then(function(){n(["./geometryEngine"],function(n){p=n,p._enableProjection(o),v.resolve()})},function(n){v.reject(n)}),v.promise)}function f(n,e,r){return void 0===r&&(r=null),n instanceof Array?0===n.length?[]:c(n,n[0].spatialReference,e,r):c([n],n.spatialReference,e,r)[0]}function c(n,e,r,o,u){if(void 0===o&&(o=null),void 0===u&&(u=!1),null===o){var l=i.cacheKey(e,r);void 0!==m[l]?o=m[l]:(o=s(e,r,null),null===o&&(o=new i),m[l]=o)}return p._project(n,e,r instanceof t||!1===u?r:new t(r),o,u)}function s(n,e,r){void 0===r&&(r=null);var o=p._getTransformation(n,e,r);return null!==o?i.fromGE(o):null}function d(n,e,r){void 0===r&&(r=null);var o=p._getTransformationBySuitability(n,e,r);if(null!==o){for(var t=[],u=0,l=o;u<l.length;u++){var a=l[u];t.push(i.fromGE(a))}return t}return[]}Object.defineProperty(e,"__esModule",{value:!0});var p=null;e.isLoaded=u,e.isSupported=l;var v=null;e.load=a,e.project=f;var m={};e.projectMany=c,e.getTransformation=s,e.getTransformations=d});