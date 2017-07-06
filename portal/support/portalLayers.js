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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../PortalItem","../../core/promiseUtils","../../core/requireUtils","../../request","../../core/Collection","../../core/Error","./mapNotesUtils"],function(e,r,t,n,a,u,o,s,l,i){function c(e){return!e.portalItem||e.portalItem instanceof n||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t.mixin({},e,{portalItem:new n(e.portalItem)})),y(e.portalItem).then(function(r){var n=t.mixin({portalItem:e.portalItem},r.properties),u=r.constructor;return"esri.layers.FeatureLayer"===u.declaredClass&&(n.returnZ=!0,n.outFields=["*"]),a.resolve(new u(n))})}function y(e){return e.load().then(f).then(m)}function f(e){switch(e.type){case"Map Service":return p(e);case"Feature Service":return d(e);case"Feature Collection":return L(e);case"Scene Service":return h(e);case"Image Service":return N(e);case"Stream Service":return I(e);case"Vector Tile Service":return v(e);case"WMTS":return g(e);case"WMS":return S(e);default:return a.reject(new l("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function m(r){return u.when(e,"../../layers/"+r.className).then(function(e){return{constructor:e,properties:r.properties}})}function p(e){return w(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}function d(e){return M(e).then(function(e){if(e){var r={returnZ:!0,outFields:["*"]};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}function h(e){return M(e).then(function(r){if(r){var t={},n=void 0;if(null!=r.id?(t.layerId=r.id,n=e.url+"/layers/"+r.id):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer"},u=0,o=Object.keys(a);u<o.length;u++){var s=o[u];if(-1!==e.typeKeywords.indexOf(s))return{className:a[s]}}return C(n).then(function(e){var r="SceneLayer";return null!=e&&"IntegratedMesh"===e.layerType?r="IntegratedMeshLayer":null!=e&&"PointCloud"===e.layerType&&(r="PointCloudLayer"),{className:r,properties:t}})}return{className:"GroupLayer"}})}function L(e){return e.load().then(function(){return e.fetchData()}).then(function(e){if(e&&Array.isArray(e.layers)){if(i.isMapNotesLayer(e))return{className:"MapNotesLayer"};if(1===e.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}function N(e){return w(e).then(function(r){var t=new s(e.typeKeywords);return r?t.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function I(e){return{className:"StreamLayer"}}function v(e){return{className:"VectorTileLayer"}}function S(e){return{className:"WMSLayer"}}function g(e){return{className:"WebTileLayer"}}function w(e){return C(e.url).then(function(e){return e.tileInfo})}function M(e){return!e.url||e.url.match(/\/\d+$/)?a.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length?{id:r.layers[0].id}:!1:C(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length?{id:e.layers[0].id}:!1:{}})})}function C(e){return o(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=c,r.selectLayerClassPath=f});