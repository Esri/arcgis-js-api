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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["esri/geometry/webMercatorUtils","esri/dijit/geoenrichment/utils/CoordinateUtil"],function(e,n){var r={};return r.geometryToLatLong=function(r){var a=r.spatialReference.wkid;if(a===n.WGS_84_WKID)return{STORE_LONG:r.x,STORE_LAT:r.y};if(n.isWebMercator(a)){var i=e.xyToLngLat(r.x,r.y);return{STORE_LONG:i[0],STORE_LAT:i[1]}}return null},r.populateCombinedAreasInfo=function(e,n){var r={},a={};return n.forEach(function(e){e.latitude&&(r[e.latitude]=1),e.longitude&&(a[e.longitude]=1)}),e.name=e.name||n.map(function(e){return e.name}).join(", "),e.shortName=e.shortName||n.map(function(e){return e.shortName||e.name}).join(", "),e.description=e.description||n.map(function(e){return e.description||e.name}).join(", "),e.address=e.address||n.map(function(e){return e.address||e.name}).join(", "),e.latitude=e.latitude||Object.keys(r).join(", "),e.longitude=e.longitude||Object.keys(a).join(", "),e},r.groupAreas=function(e){function n(e){var n=e.locationName||e.name;return{isSingleAreaGroup:!0,label:n,hideGroupLabel:n===(e.shortName||e.name),areas:[e]}}var r=function(n){return(!e.filter||e.filter(n))&&!n.hidden},a=e.combinedAreasInfo&&e.combinedAreasInfo.groups||[],i=[],o=[],t={};e.analysisAreas.forEach(function(e){if(r(e))if(e.isGrouped){if(!t[e.groupIndex]){var u=a[e.groupIndex],s=t[e.groupIndex]={isRealGroup:!0,label:u.locationName||u.name,areas:[]};o.push(s),i.push(s)}t[e.groupIndex].areas.push(e)}else i.push(n(e))});var u;return 1===i.length&&i[0].isRealGroup&&(i=i[0].areas.map(n),o.length=0,u=!0),{groupInfos:i,isOnlyAreasInOnlyGroup:u}},r});