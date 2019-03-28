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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/Collection","../../core/Error","../../core/promiseUtils","../../layers/support/lazyLayerLoader","../PortalItem","./mapNotesUtils"],function(e,r,t,n,a,o,u,s,c,i){function l(e){return!e.portalItem||e.portalItem instanceof c||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t({},e,{portalItem:new c(e.portalItem)})),y(e.portalItem).then(function(r){var n=t({portalItem:e.portalItem},r.properties),a=r.constructor;return u.resolve(new a(n))})}function y(e){return e.load().then(p).then(f)}function p(e){switch(e.type){case"Map Service":return d(e);case"Feature Service":return m(e);case"Feature Collection":return h(e);case"Scene Service":return L(e);case"Image Service":return N(e);case"Stream Service":return I(e);case"Vector Tile Service":return S(e);case"KML":return v(e);case"WMTS":return M(e);case"WMS":return g(e);default:return u.reject(new o("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function f(e){return(0,s.layerLookupMap[e.className])().then(function(r){return{constructor:r,properties:e.properties}})}function d(e){return w(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}function m(e){return T(e).then(function(e){if("object"==typeof e){var r={outFields:["*"]};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}function L(e){return T(e).then(function(r){if("object"==typeof r){var t={},n=void 0;if(null!=r.id?(t.layerId=r.id,n=e.url+"/layers/"+r.id):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},o=0,u=Object.keys(a);o<u.length;o++){var s=u[o];if(-1!==e.typeKeywords.indexOf(s))return{className:a[s]}}return j(n).then(function(e){var r="SceneLayer",n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&n[e.layerType]&&(r=n[e.layerType]),{className:r,properties:t}})}return{className:"GroupLayer"}})}function h(e){return e.load().then(function(){return e.fetchData()}).then(function(e){if(e&&Array.isArray(e.layers)){if(i.isMapNotesLayer(e))return{className:"MapNotesLayer"};if(1===e.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}function N(e){return w(e).then(function(r){var t=new a(e.typeKeywords);return r?t.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function I(e){return{className:"StreamLayer"}}function S(e){return{className:"VectorTileLayer"}}function v(e){return{className:"KMLLayer"}}function g(e){return{className:"WMSLayer"}}function M(e){return{className:"WMTSLayer"}}function w(e){return j(e.url).then(function(e){return e.tileInfo})}function T(e){return!e.url||e.url.match(/\/\d+$/)?u.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length&&{id:r.layers[0].id}:j(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}})})}function j(e){return n(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=l,r.selectLayerClassPath=p});