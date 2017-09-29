// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../config","../../core/lang","../../request","../support/KMLSublayer"],function(e,r,o,n,t,i){function s(e){var r=e.folders.slice(),o=new Map,t=new Map,i=new Map,s=new Map,a=new Map,l={esriGeometryPoint:t,esriGeometryPolyline:i,esriGeometryPolygon:s};return e.featureCollection.layers.forEach(function(e){var r=n.clone(e);r.featureSet.features=[];var a=e.featureSet.geometryType;o.set(a,r);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===a?u(t,l,e.featureSet.features):"esriGeometryPolyline"===a?u(i,l,e.featureSet.features):"esriGeometryPolygon"===a&&u(s,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){a.set(e.id,e)}),e.folders.forEach(function(o){o.networkLinkIds.forEach(function(n){var t=y(n,o.id,e.networkLinks);t&&r.push(t)})}),r.forEach(function(e){e.featureInfos&&(e.points=n.clone(o.get("esriGeometryPoint")),e.polylines=n.clone(o.get("esriGeometryPolyline")),e.polygons=n.clone(o.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var o=l[r.type].get(r.id);o&&e[c[r.type]].featureSet.features.push(o);break;case"GroundOverlay":var n=a.get(r.id);n&&e.mapImages.push(n)}}))}),{folders:e.folders,sublayers:r}}function a(e,r,n){var i=o.kmlServiceUrl,s=0!==n?!0:void 0;return t(i,{callbackParamName:"callback",query:{url:e,model:"simple",folders:"",refresh:s,outSR:JSON.stringify(r)},responseType:"json"})}function l(e,r,o){void 0===r&&(r=null),void 0===o&&(o=[]);var n=[],t={},s=e.sublayers,a=e.folders.map(function(e){return e.id});return s.forEach(function(e){var s=new i;if(r?s.read(e,r):s.read(e),o.length&&a.indexOf(s.id)>-1&&(s.visible=-1!==o.indexOf(s.id)),t[e.id]=s,null!=e.parentFolderId&&-1!==e.parentFolderId){var l=t[e.parentFolderId];l.sublayers||(l.sublayers=[]),l.sublayers.unshift(s)}else n.unshift(s)}),n}function u(e,r,o){o.forEach(function(o){e.set(o.attributes[r],o)})}function f(e,r){var o;return r.some(function(r){return r.id===e?(o=r,!0):!1}),o}function y(e,r,o){var n=f(e,o);return n&&(n.parentFolderId=r,n.networkLink=n),n}Object.defineProperty(r,"__esModule",{value:!0});var c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=s,r.fetchService=a,r.sublayersFromJSON=l});