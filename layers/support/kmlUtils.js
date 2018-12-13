// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../config","../../PopupTemplate","../../request","../../core/lang","../../renderers/support/jsonUtils","../../tasks/support/FeatureSet"],function(e,r,o,t,n,i,s,a){function u(e){var r=e.folders.slice(),o=new Map,t=new Map,n=new Map,s=new Map,a=new Map,u={esriGeometryPoint:t,esriGeometryPolyline:n,esriGeometryPolygon:s};return e.featureCollection.layers.forEach(function(e){var r=i.clone(e);r.featureSet.features=[];var a=e.featureSet.geometryType;o.set(a,r);var u=e.layerDefinition.objectIdField;"esriGeometryPoint"===a?y(t,u,e.featureSet.features):"esriGeometryPolyline"===a?y(n,u,e.featureSet.features):"esriGeometryPolygon"===a&&y(s,u,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){a.set(e.id,e)}),e.folders.forEach(function(o){o.networkLinkIds.forEach(function(t){var n=c(t,o.id,e.networkLinks);n&&r.push(n)})}),r.forEach(function(e){e.featureInfos&&(e.points=i.clone(o.get("esriGeometryPoint")),e.polylines=i.clone(o.get("esriGeometryPolyline")),e.polygons=i.clone(o.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var o=u[r.type].get(r.id);o&&e[m[r.type]].featureSet.features.push(o);break;case"GroundOverlay":var t=a.get(r.id);t&&e.mapImages.push(t)}}))}),{folders:e.folders,sublayers:r}}function l(e,r,t){var i=o.kmlServiceUrl;return n(i,{query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json"})}function f(e,r,o,t){void 0===o&&(o=null),void 0===t&&(t=[]);var n=[],i={},s=r.sublayers,a=r.folders.map(function(e){return e.id});return s.forEach(function(r){var s=new e;if(o?s.read(r,o):s.read(r),t.length&&a.indexOf(s.id)>-1&&(s.visible=-1!==t.indexOf(s.id)),i[r.id]=s,null!=r.parentFolderId&&-1!==r.parentFolderId){var u=i[r.parentFolderId];u.sublayers||(u.sublayers=[]),u.sublayers.unshift(s)}else n.unshift(s)}),n}function y(e,r,o){o.forEach(function(o){e.set(o.attributes[r],o)})}function p(e,r){var o;return r.some(function(r){return r.id===e&&(o=r,!0)}),o}function c(e,r,o){var t=p(e,o);return t&&(t.parentFolderId=r,t.networkLink=t),t}function d(e){var r=a.fromJSON(e.featureSet),o=r.features,n=e.layerDefinition,i=s.fromJSON(n.drawingInfo.renderer),u=t.fromJSON(e.popupInfo);return o.map(function(e){var r=i.getSymbol(e);return e.symbol=r,e.popupTemplate=u,e})}Object.defineProperty(r,"__esModule",{value:!0});var m={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=u,r.fetchService=l,r.sublayersFromJSON=f,r.getGraphics=d});