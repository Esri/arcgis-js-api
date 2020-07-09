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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/geometry/webMercatorUtils","esri/dijit/geoenrichment/utils/CoordinateUtil"],(function(e,n,t){var a={geometryToLatLong:function(e){var a=e.spatialReference.wkid;if(a===t.WGS_84_WKID)return{STORE_LONG:e.x,STORE_LAT:e.y};if(t.isWebMercator(a)){var r=n.xyToLngLat(e.x,e.y);return{STORE_LONG:r[0],STORE_LAT:r[1]}}return null},populateCombinedAreasInfo:function(e,n){var t={},a={};return n.forEach((function(e){e.latitude&&(t[e.latitude]=1),e.longitude&&(a[e.longitude]=1)})),e.name=e.name||n.map((function(e){return e.name})).join(", "),e.shortName=e.shortName||n.map((function(e){return e.shortName||e.name})).join(", "),e.description=e.description||n.map((function(e){return e.description||e.name})).join(", "),e.address=e.address||n.map((function(e){return e.address||e.name})).join(", "),e.latitude=e.latitude||Object.keys(t).join(", "),e.longitude=e.longitude||Object.keys(a).join(", "),e}};return a.groupAreas=function(e){var n,t=e.combinedAreasInfo&&e.combinedAreasInfo.groups||[],a=[],r=[],i={};function s(e){var n=e.locationName||e.name;return{isSingleAreaGroup:!0,label:n,hideGroupLabel:n===(e.shortName||e.name),areas:[e]}}return e.analysisAreas.forEach((function(n){if(function(n){return(!e.filter||e.filter(n))&&!n.hidden}(n))if(n.isGrouped){if(!i[n.groupIndex]){var o=t[n.groupIndex],u=i[n.groupIndex]={isRealGroup:!0,label:o.locationName||o.name,areas:[]};r.push(u),a.push(u)}i[n.groupIndex].areas.push(n)}else a.push(s(n))})),1===a.length&&a[0].isRealGroup&&(a=a[0].areas.map(s),r.length=0,n=!0),{groupInfos:a,isOnlyAreasInOnlyGroup:n}},a.parseSites=function(n){if(n.sites){if(n.analysisAreas=[],n.sites.forEach((function(e){e.areas.forEach((function(e){n.analysisAreas.push(e)}))})),n.combinedAreasInfo={groups:n.sites.map((function(t){var a=e.mixin({},t);return delete a.areas,delete a.attributes,delete a.notes,delete a.images,a.indexes=t.areas.map((function(e){return n.analysisAreas.indexOf(e)})),a}))},a.populateCombinedAreasInfo(n.combinedAreasInfo,n.sites),!n.attachmentsProvider||!n.attachmentsProvider.getAttributesForAreaAt){n.attachmentsProvider={},n.attachmentsProvider.supportsMultipleAreas=n.sites.length>1;var t=n.attachmentsProvider.areaAttachments=[];n.sites.forEach((function(e){e.areas.forEach((function(n){t.push({attributes:e.attributes,notes:e.notes,images:e.images})}))}))}delete n.sites}},a}));