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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../config","../../PopupTemplate","../../request","../../core/lang","../../renderers/support/jsonUtils","../../tasks/support/FeatureSet"],function(e,r,o,t,n,i,a,s){function l(e){var r=e.folders.slice(),o=new Map,t=new Map,n=new Map,a=new Map,s=new Map,l={esriGeometryPoint:t,esriGeometryPolyline:n,esriGeometryPolygon:a};return e.featureCollection.layers.forEach(function(e){var r=i.clone(e);r.featureSet.features=[];var s=e.featureSet.geometryType;o.set(s,r);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===s?y(t,l,e.featureSet.features):"esriGeometryPolyline"===s?y(n,l,e.featureSet.features):"esriGeometryPolygon"===s&&y(a,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){s.set(e.id,e)}),e.folders.forEach(function(o){o.networkLinkIds.forEach(function(t){var n=p(t,o.id,e.networkLinks);n&&r.push(n)})}),r.forEach(function(e){e.featureInfos&&(e.points=i.clone(o.get("esriGeometryPoint")),e.polylines=i.clone(o.get("esriGeometryPolyline")),e.polygons=i.clone(o.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var o=l[r.type].get(r.id);o&&e[m[r.type]].featureSet.features.push(o);break;case"GroundOverlay":var t=s.get(r.id);t&&e.mapImages.push(t)}}))}),{folders:e.folders,sublayers:r}}function u(e,r,t){var i=o.kmlServiceUrl;return n(i,{callbackParamName:"callback",query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json"})}function f(e,r,o,t){void 0===o&&(o=null),void 0===t&&(t=[]);var n=[],i={},a=r.sublayers,s=r.folders.map(function(e){return e.id});return a.forEach(function(r){var a=new e;if(o?a.read(r,o):a.read(r),t.length&&s.indexOf(a.id)>-1&&(a.visible=-1!==t.indexOf(a.id)),i[r.id]=a,null!=r.parentFolderId&&-1!==r.parentFolderId){var l=i[r.parentFolderId];l.sublayers||(l.sublayers=[]),l.sublayers.unshift(a)}else n.unshift(a)}),n}function y(e,r,o){o.forEach(function(o){e.set(o.attributes[r],o)})}function c(e,r){var o;return r.some(function(r){return r.id===e&&(o=r,!0)}),o}function p(e,r,o){var t=c(e,o);return t&&(t.parentFolderId=r,t.networkLink=t),t}function d(e){var r=s.fromJSON(e.featureSet),o=r.features,n=e.layerDefinition,i=a.fromJSON(n.drawingInfo.renderer),l=t.fromJSON(e.popupInfo);return o.map(function(e){var r=i.getSymbol(e);return e.symbol=r,e.popupTemplate=l,e})}Object.defineProperty(r,"__esModule",{value:!0});var m={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=l,r.fetchService=u,r.sublayersFromJSON=f,r.getGraphics=d});