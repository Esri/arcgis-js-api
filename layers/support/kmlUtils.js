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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../config","../../core/lang","../../request","../support/KMLSublayer","../../tasks/support/FeatureSet","../../PopupTemplate","../../renderers/support/jsonUtils"],function(e,r,o,t,n,i,a,s,l){function u(e){var r=e.folders.slice(),o=new Map,n=new Map,i=new Map,a=new Map,s=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:a};return e.featureCollection.layers.forEach(function(e){var r=t.clone(e);r.featureSet.features=[];var s=e.featureSet.geometryType;o.set(s,r);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===s?p(n,l,e.featureSet.features):"esriGeometryPolyline"===s?p(i,l,e.featureSet.features):"esriGeometryPolygon"===s&&p(a,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){s.set(e.id,e)}),e.folders.forEach(function(o){o.networkLinkIds.forEach(function(t){var n=d(t,o.id,e.networkLinks);n&&r.push(n)})}),r.forEach(function(e){e.featureInfos&&(e.points=t.clone(o.get("esriGeometryPoint")),e.polylines=t.clone(o.get("esriGeometryPolyline")),e.polygons=t.clone(o.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var o=l[r.type].get(r.id);o&&e[v[r.type]].featureSet.features.push(o);break;case"GroundOverlay":var t=s.get(r.id);t&&e.mapImages.push(t)}}))}),{folders:e.folders,sublayers:r}}function f(e,r,t){var i=o.kmlServiceUrl,a=0!==t?!0:void 0;return n(i,{callbackParamName:"callback",query:{url:e,model:"simple",folders:"",refresh:a,outSR:JSON.stringify(r)},responseType:"json"})}function y(e,r,o){void 0===r&&(r=null),void 0===o&&(o=[]);var t=[],n={},a=e.sublayers,s=e.folders.map(function(e){return e.id});return a.forEach(function(e){var a=new i;if(r?a.read(e,r):a.read(e),o.length&&s.indexOf(a.id)>-1&&(a.visible=-1!==o.indexOf(a.id)),n[e.id]=a,null!=e.parentFolderId&&-1!==e.parentFolderId){var l=n[e.parentFolderId];l.sublayers||(l.sublayers=[]),l.sublayers.unshift(a)}else t.unshift(a)}),t}function p(e,r,o){o.forEach(function(o){e.set(o.attributes[r],o)})}function c(e,r){var o;return r.some(function(r){return r.id===e?(o=r,!0):!1}),o}function d(e,r,o){var t=c(e,o);return t&&(t.parentFolderId=r,t.networkLink=t),t}function m(e){var r=a.fromJSON(e.featureSet),o=r.features,t=e.layerDefinition,n=l.fromJSON(t.drawingInfo.renderer),i=s.fromJSON(e.popupInfo);return o.map(function(e){var r=n.getSymbol(e);return e.symbol=r,e.popupTemplate=i,e})}Object.defineProperty(r,"__esModule",{value:!0});var v={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=u,r.fetchService=f,r.sublayersFromJSON=y,r.getGraphics=m});