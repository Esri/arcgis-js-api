// COPYRIGHT © 201 Esri
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

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/SpatialReference","esri/geometry/jsonUtils","esri/dijit/geoenrichment/utils/CoordinateUtil","esri/dijit/geoenrichment/utils/PolygonUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/requests/EveryRequest"],(function(e,t,r,n,i,o,s,u,c){var a,l={};function f(e){return e&&e.spatialReference||e instanceof r&&e||e&&new r(e)||new r(i.WEB_MERCATOR_WKID)}function g(e){var t=e.map((function(e){var t=e.toJson();return delete t.spatialReference,t}));return{geometryType:n.getJsonType(e[0]),geometries:t}}function p(t,r,i){var o=n.getGeometryType(r),s={spatialReference:i.toJson()};return t.map((function(t){return new o(e.mixin(t,s))}))}return(l.setGeometryServiceUrl=function(e){a=e,s.registerCORS(e)},l.getGeometryServiceUrl=function(e){return a},l.getSpatialReference=f,l.projectGeometries=function(e,r){var s=f(r),a=Array.isArray(e)?e:[e];if(!a.length)return(new t).resolve(e);var h={},m=a.slice(),v=0;return(a=a.filter((function(e,t){if(e.spatialReference&&e.spatialReference.wkid!==s.wkid)return h[t]=v++,!0}))).length?(i.testSpatialReferenceWKID(s)&&i.testSpatialReferenceWKID(a[0].spatialReference)?function(e,r){var n=[];try{for(var o=0;o<e.length;o++)n.push(i.toSpatialReference(e[o],r))}catch(e){console.log(e)}return(new t).resolve(n)}(a,s):function(e,t){var r=e[0],i=n.getJsonType(r),s={outSR:t.wkid||t.toJson(),inSR:r.spatialReference.wkid||r.spatialReference.toJson()},a=[],f=0,h=[];function m(e){a.push((function(){return function(e,t,r,n){return e.geometries=g(t),u.requestPublicFirst({url:l.getGeometryServiceUrl(),urlSuffix:"project"},{content:e}).then((function(e){return p(e.geometries,r,n)}))}(s,e,i,t)}))}1==e.length?h.push(r):e.forEach((function(e){var t=o.getNumberOfPoints(e);if((f+=t)>1e4){var r=[];h.length?(r.push(e),f=t):(h.push(e),f=0),m(h),h=r}else h.push(e)}));h.length&&m(h);return c(a,{stopOnError:!0}).then((function(e){for(var t=e[0],r=1;r<e.length;r++)t=t.concat(e[r]);return t}),(function(e){return console.log(e),[]}))}(a,s)).then((function(t){return m.forEach((function(e,r){void 0!==h[r]&&(m[r]=t[h[r]])})),Array.isArray(e)?m:m[0]})):(new t).resolve(e)},l.unionGeometries=function(e){var t=f(e[0].spatialReference),r={sr:t.wkid||t.toJson(),geometries:g(e)};return u.requestPublicFirst({url:l.getGeometryServiceUrl(),urlSuffix:"union"},{content:r}).then((function(e){return p([e.geometry],e.geometryType,t)[0]}))},l)}));