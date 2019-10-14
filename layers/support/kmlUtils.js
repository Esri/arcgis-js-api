// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../config","../../PopupTemplate","../../request","../../core/lang","../../renderers/support/jsonUtils","../../tasks/support/FeatureSet"],function(e,r,t,o,n,s,i,a,l,u,f){function p(e){var r=e.folders.slice(),t=new Map,o=new Map,n=new Map,s=new Map,i=new Map,a={esriGeometryPoint:o,esriGeometryPolyline:n,esriGeometryPolygon:s};return e.featureCollection.layers.forEach(function(e){var r=l.clone(e);r.featureSet.features=[];var i=e.featureSet.geometryType;t.set(i,r);var a=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?d(o,a,e.featureSet.features):"esriGeometryPolyline"===i?d(n,a,e.featureSet.features):"esriGeometryPolygon"===i&&d(s,a,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){i.set(e.id,e)}),e.folders.forEach(function(t){t.networkLinkIds.forEach(function(o){var n=v(o,t.id,e.networkLinks);n&&r.push(n)})}),r.forEach(function(e){e.featureInfos&&(e.points=l.clone(t.get("esriGeometryPoint")),e.polylines=l.clone(t.get("esriGeometryPolyline")),e.polygons=l.clone(t.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var t=a[r.type].get(r.id);t&&e[h[r.type]].featureSet.features.push(t);break;case"GroundOverlay":var o=i.get(r.id);o&&e.mapImages.push(o)}}))}),{folders:e.folders,sublayers:r}}function c(e,r,t,o){var n=s.kmlServiceUrl;return a(n,{query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function y(e,r,t,o){void 0===t&&(t=null),void 0===o&&(o=[]);var n=[],s={},i=r.sublayers,a=r.folders.map(function(e){return e.id});return i.forEach(function(r){var i=new e;if(t?i.read(r,t):i.read(r),o.length&&a.indexOf(i.id)>-1&&(i.visible=-1!==o.indexOf(i.id)),s[r.id]=i,null!=r.parentFolderId&&-1!==r.parentFolderId){var l=s[r.parentFolderId];l.sublayers||(l.sublayers=[]),l.sublayers.unshift(i)}else n.unshift(i)}),n}function d(e,r,t){t.forEach(function(t){e.set(t.attributes[r],t)})}function m(e,r){var t;return r.some(function(r){return r.id===e&&(t=r,!0)}),t}function v(e,r,t){var o=m(e,t);return o&&(o.parentFolderId=r,o.networkLink=o),o}function g(e){return o(this,void 0,void 0,function(){var r,o,n,s,a,l,p,c,y,d;return t(this,function(t){switch(t.label){case 0:r=f.fromJSON(e.featureSet),o=r.features,n=e.layerDefinition,s=u.fromJSON(n.drawingInfo.renderer),a=i.fromJSON(e.popupInfo),l=[],p=0,c=o,t.label=1;case 1:return p<c.length?(y=c[p],[4,s.getSymbolAsync(y)]):[3,4];case 2:d=t.sent(),y.symbol=d,y.popupTemplate=a,y.visible=!!y.attributes.visibility,l.push(y),t.label=3;case 3:return p++,[3,1];case 4:return[2,l]}})})}Object.defineProperty(r,"__esModule",{value:!0});var h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=p,r.fetchService=c,r.sublayersFromJSON=y,r.getGraphics=g});