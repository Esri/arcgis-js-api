// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/SpatialReference","esri/geometry/jsonUtils","esri/dijit/geoenrichment/utils/CoordinateUtil","esri/dijit/geoenrichment/utils/PolygonUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/requests/EveryRequest"],(function(e,t,n,r,i,o,s,u){var c,a={};function f(e){return e&&e.spatialReference||e instanceof t&&e||e&&new t(e)||new t(r.WEB_MERCATOR_WKID)}function l(e){var t=e.map((function(e){var t=e.toJson();return delete t.spatialReference,t}));return{geometryType:n.getJsonType(e[0]),geometries:t}}function g(e,t,r){var i=n.getGeometryType(t),o=r.toJson();return e.map((function(e){return e.spatialReference=o,new i(e)}))}return a.setGeometryServiceUrl=function(e){o.registerCORS(e),c=function(t,n){return s.requestPublicFirst({url:e,urlSuffix:t},{content:n})}},a.setGeometryRequest=function(e){c=e},a.getSpatialReference=f,a.projectGeometries=function(t,o){var s=f(o),a=Array.isArray(t)?t:[t];if(!a.length)return(new e).resolve(t);var p={},h=a.slice(),m=0;return(a=a.filter((function(e,t){if(e.spatialReference&&e.spatialReference.wkid!==s.wkid)return p[t]=m++,!0}))).length?(r.testSpatialReferenceWKID(s)&&r.testSpatialReferenceWKID(a[0].spatialReference)?function(t,n){var i=[];try{for(var o=0;o<t.length;o++)i.push(r.toSpatialReference(t[o],n))}catch(e){console.log(e)}return(new e).resolve(i)}(a,s):function(e,t){var r=e[0],o=n.getJsonType(r),s={outSR:t.wkid||t.toJson(),inSR:r.spatialReference.wkid||r.spatialReference.toJson()},a=[],f=0,p=[];function h(e){a.push((function(){return function(e,t,n,r){return e.geometries=l(t),c("project",e).then((function(e){return g(e.geometries,n,r)}))}(s,e,o,t)}))}1==e.length?p.push(r):e.forEach((function(e){var t=i.getNumberOfPoints(e);if((f+=t)>1e4){var n=[];p.length?(n.push(e),f=t):(p.push(e),f=0),h(p),p=n}else p.push(e)}));p.length&&h(p);return u(a,{stopOnError:!0}).then((function(e){for(var t=e[0],n=1;n<e.length;n++)t=t.concat(e[n]);return t}),(function(e){return console.log(e),[]}))}(a,s)).then((function(e){return h.forEach((function(t,n){void 0!==p[n]&&(h[n]=e[p[n]])})),Array.isArray(t)?h:h[0]})):(new e).resolve(t)},a.unionGeometries=function(e){var t=f(e[0].spatialReference),n={sr:t.wkid||t.toJson(),geometries:l(e)};return c("union",n).then((function(e){return g([e.geometry],e.geometryType,t)[0]}))},a.geometriesToJson=l,a.geometriesFromJson=g,a}));