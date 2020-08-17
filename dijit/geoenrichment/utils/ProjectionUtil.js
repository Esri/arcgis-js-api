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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/SpatialReference","esri/geometry/jsonUtils","esri/dijit/geoenrichment/utils/CoordinateUtil","esri/dijit/geoenrichment/utils/PolygonUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/requests/EveryRequest"],(function(e,t,n,r,i,o,s,u,c){var a,l={};function f(e){return e&&e.spatialReference||e instanceof n&&e||e&&new n(e)||new n(i.WEB_MERCATOR_WKID)}function g(e){var t=e.map((function(e){var t=e.toJson();return delete t.spatialReference,t}));return{geometryType:r.getJsonType(e[0]),geometries:t}}function p(t,n,i){var o=r.getGeometryType(n),s={spatialReference:i.toJson()};return t.map((function(t){return new o(e.mixin(t,s))}))}return(l.setGeometryServiceUrl=function(e){a=e,s.registerCORS(e)},l.getSpatialReference=f,l.projectGeometries=function(e,n){var s=f(n),l=Array.isArray(e)?e:[e];if(!l.length)return(new t).resolve(e);var h={},m=l.slice(),v=0;return(l=l.filter((function(e,t){if(e.spatialReference&&e.spatialReference.wkid!==s.wkid)return h[t]=v++,!0}))).length?(i.testSpatialReferenceWKID(s)&&i.testSpatialReferenceWKID(l[0].spatialReference)?function(e,n){var r=[];try{for(var o=0;o<e.length;o++)r.push(i.toSpatialReference(e[o],n))}catch(e){console.log(e)}return(new t).resolve(r)}(l,s):function(e,t){var n=e[0],i=r.getJsonType(n),s={outSR:t.wkid||t.toJson(),inSR:n.spatialReference.wkid||n.spatialReference.toJson()},l=[],f=0,h=[];function m(e){l.push((function(){return function(e,t,n,r){return e.geometries=g(t),u.requestPublicFirst({url:a,urlSuffix:"project"},{content:e}).then((function(e){return p(e.geometries,n,r)}))}(s,e,i,t)}))}1==e.length?h.push(n):e.forEach((function(e){var t=o.getNumberOfPoints(e);if((f+=t)>1e4){var n=[];h.length?(n.push(e),f=t):(h.push(e),f=0),m(h),h=n}else h.push(e)}));h.length&&m(h);return c(l,{stopOnError:!0}).then((function(e){for(var t=e[0],n=1;n<e.length;n++)t=t.concat(e[n]);return t}),(function(e){return console.log(e),[]}))}(l,s)).then((function(t){return m.forEach((function(e,n){void 0!==h[n]&&(m[n]=t[h[n]])})),Array.isArray(e)?m:m[0]})):(new t).resolve(e)},l.unionGeometries=function(e){var t=f(e[0].spatialReference),n={sr:t.wkid||t.toJson(),geometries:g(e)};return u.requestPublicFirst({url:a,urlSuffix:"union"},{content:n}).then((function(e){return p([e.geometry],e.geometryType,t)[0]}))},l)}));
