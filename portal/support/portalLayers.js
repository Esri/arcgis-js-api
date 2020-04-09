// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/Collection","../../core/Error","../../core/promiseUtils","../../layers/support/lazyLayerLoader","../PortalItem","./portalItemUtils"],(function(e,r,t,a,n,o,s,u,c,l,i,y){function p(e){switch(e.type){case"Map Service":return function(e){return f(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}))}(e);case"Feature Service":return function(e){return m(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return n(this,void 0,void 0,(function(){var r;return a(this,(function(t){switch(t.label){case 0:return[4,e.load()];case 1:return t.sent(),y.hasTypeKeyword(e,"Map Notes")?[2,{className:"MapNotesLayer"}]:y.hasTypeKeyword(e,"Route Layer")?[2,{className:"RouteLayer"}]:[4,e.fetchData()];case 2:return(r=t.sent())&&Array.isArray(r.layers)&&1===r.layers.length?[2,{className:"FeatureLayer"}]:[2,{className:"GroupLayer"}]}}))}))}(e);case"Scene Service":return function(e){return m(e).then((function(r){if("object"==typeof r){var t={},a=void 0;if(null!=r.id?(t.layerId=r.id,a=e.url+"/layers/"+r.id):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},o=0,s=Object.keys(n);o<s.length;o++){var u=s[o];if(-1!==e.typeKeywords.indexOf(u))return{className:n[u]}}return L(a).then((function(e){var r="SceneLayer",a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return f(e).then((function(r){var t=new s(e.typeKeywords);return r?t.find((function(e){return"elevation 3d layer"===e.toLowerCase()}))?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}}))}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return c.reject(new u("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,l.layerLookupMap[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function f(e){return L(e.url).then((function(e){return e.tileInfo}))}function m(e){return!e.url||e.url.match(/\/\d+$/)?c.resolve({}):e.load().then((function(){return e.fetchData()})).then((function(r){return r&&Array.isArray(r.layers)?1===r.layers.length&&{id:r.layers[0].id}:L(e.url).then((function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}}))}))}function L(e){return o(e,{responseType:"json",query:{f:"json"}}).then((function(e){return e.data}))}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=function(e){return!e.portalItem||e.portalItem instanceof i||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t({},e,{portalItem:new i(e.portalItem)})),(r=e.portalItem,r.load().then(p).then(d)).then((function(r){var a=t({portalItem:e.portalItem},r.properties),n=r.constructor;return c.resolve(new n(a))}));var r},r.selectLayerClassPath=p}));