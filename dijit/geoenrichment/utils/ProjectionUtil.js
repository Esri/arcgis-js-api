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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/SpatialReference","esri/geometry/jsonUtils","esri/dijit/geoenrichment/utils/CoordinateUtil","esri/dijit/geoenrichment/utils/PolygonUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/utils/requests/EveryRequest"],function(e,t,n,r,i,o,s,u,c){function a(e){return e&&e.spatialReference||e instanceof n&&e||e&&new n(e)||new n(i.WEB_MERCATOR_WKID)}function l(e,n){var r=a(n),o=Array.isArray(e)?e:[e];if(!o.length)return(new t).resolve(e);var s={},u=o.slice(),c=0;return o=o.filter(function(e,t){if(e.spatialReference&&e.spatialReference.wkid!==r.wkid)return s[t]=c++,!0}),o.length?(i.testSpatialReferenceWKID(r)&&i.testSpatialReferenceWKID(o[0].spatialReference)?g(o,r):p(o,r)).then(function(t){return u.forEach(function(e,n){void 0!==s[n]&&(u[n]=t[s[n]])}),t=u,Array.isArray(e)?t:t[0]}):(new t).resolve(e)}function f(e){var t=a(e[0].spatialReference),n={sr:t.wkid||t.toJson(),geometries:m(e)};return u.requestPublicFirst({url:R,urlSuffix:"union"},{content:n}).then(function(e){return v([e.geometry],e.geometryType,t)[0]})}function g(e,n){var r=[];try{for(var o=0;o<e.length;o++)r.push(i.toSpatialReference(e[o],n))}catch(e){console.log(e)}return(new t).resolve(r)}function p(e,t){function n(e){a.push(function(){return h(u,e,s,t)})}var i=e[0],s=r.getJsonType(i),u={outSR:t.wkid||t.toJson(),inSR:i.spatialReference.wkid||i.spatialReference.toJson()},a=[],l=0,f=[];return 1==e.length?f.push(i):e.forEach(function(e){var t=o.getNumberOfPoints(e);if((l+=t)>y){var r=[];f.length?(r.push(e),l=t):(f.push(e),l=0),n(f),f=r}else f.push(e)}),f.length&&n(f),c(a,!0).then(function(e){for(var t=e[0],n=1;n<e.length;n++)t=t.concat(e[n]);return t},function(e){return console.log(e),[]})}function h(e,t,n,r){return e.geometries=m(t),u.requestPublicFirst({url:R,urlSuffix:"project"},{content:e}).then(function(e){return v(e.geometries,n,r)})}function m(e){var t=e.map(function(e){var t=e.toJson();return delete t.spatialReference,t});return{geometryType:r.getJsonType(e[0]),geometries:t}}function v(t,n,i){var o=r.getGeometryType(n),s={spatialReference:i.toJson()};return t.map(function(t){return new o(e.mixin(t,s))})}var R,y=1e4,d={};return d.setGeometryServiceUrl=function(e){R=e,s.registerCORS(e)},d.getSpatialReference=a,d.projectGeometries=l,d.unionGeometries=f,d});