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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["esri/geometry/webMercatorUtils","esri/geometry/jsonUtils"],(function(e,t){var r={},n=[4326,102100,102113,3857];return r.WGS_84_WKID=4326,r.WEB_MERCATOR_WKID=102100,r.getSupportedWKIDs=function(){return n.slice()},r.testSpatialReferenceWKID=function(e){var t=Number(e&&"object"==typeof e?e.wkid:e),r=n.indexOf(t);return r>=0?n[0===r?0:1]:0},r.isWebMercator=function(e){return 102100===r.testSpatialReferenceWKID(e)},r.isWGS84=function(e){return 4326===r.testSpatialReferenceWKID(e)},r.getGeometryConverter=function(t,n){var o=r.testSpatialReferenceWKID(t),i=r.testSpatialReferenceWKID(n);return o&&i&&o!==i?4326===o?e.geographicToWebMercator:e.webMercatorToGeographic:null},r.toWGS84=function(e){return r.toSpatialReference(e,4326)},r.toWebMercator=function(e){return r.toSpatialReference(e,102100)},r.toSpatialReference=function(e,n){e&&!e.toJson&&(e=t.fromJson(e));var o=r.getGeometryConverter(e&&e.spatialReference,n);return null!=o?o(e):e},r}));