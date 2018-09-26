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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["esri/geometry/webMercatorUtils","esri/dijit/geoenrichment/utils/CoordinateUtil"],function(e,n){var t={};return t.geometryToLatLong=function(t){switch(t.spatialReference.wkid){case n.WGS_84_WKID:return{STORE_LONG:t.x,STORE_LAT:t.y};case n.WEB_MERCATOR_WKID:var i=e.xyToLngLat(t.x,t.y);return{STORE_LONG:i[0],STORE_LAT:i[1]};default:return null}},t.pppulateCombinedAreasInfo=function(e,n){var t={},i={};return n.forEach(function(e){e.latitude&&(t[e.latitude]=1),e.longitude&&(i[e.longitude]=1)}),e.name=e.name||n.map(function(e){return e.name}).join(", "),e.shortName=e.shortName||n.map(function(e){return e.shortName||e.name}).join(", "),e.description=e.description||n.map(function(e){return e.description||e.name}).join(", "),e.address=e.address||n.map(function(e){return e.address||e.name}).join(", "),e.latitude=e.latitude||Object.keys(t).join(", "),e.longitude=e.longitude||Object.keys(i).join(", "),e},t});