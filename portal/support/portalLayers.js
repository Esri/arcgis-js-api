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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../PortalItem","../../core/promiseUtils","../../core/requireUtils","../../request","../../core/Collection","../../core/Error"],function(e,r,t,n,a,u,o,l,c){function i(e){return!e.portalItem||e.portalItem instanceof n||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t.mixin({},e,{portalItem:new n(e.portalItem)})),s(e.portalItem).then(function(r){var n=t.mixin({portalItem:e.portalItem},r.properties),u=r.constructor;return"esri.layers.FeatureLayer"===u.declaredClass&&(n.returnZ=!0,n.outFields=["*"]),a.resolve(new u(n))})}function s(e){return e.load().then(y).then(f)}function y(e){switch(e.type){case"Map Service":return m(e);case"Feature Service":return p(e);case"Feature Collection":return h(e);case"Scene Service":return d(e);case"Image Service":return L(e);case"Stream Service":return I(e);case"Vector Tile Service":return v(e);case"WMTS":return N(e);default:return a.reject(new c("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function f(r){return u.when(e,"../../layers/"+r.className).then(function(e){return{constructor:e,properties:r.properties}})}function m(e){return g(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}function p(e){return w(e).then(function(e){if(e){var r={returnZ:!0,outFields:["*"]};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}function d(e){return w(e).then(function(r){if(r){var t={},n=void 0;if(null!=r.id?(t.layerId=r.id,n=e.url+"/layers/"+r.id):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer"},u=0,o=Object.keys(a);u<o.length;u++){var l=o[u];if(-1!==e.typeKeywords.indexOf(l))return{className:a[l]}}return S(n).then(function(e){var r="SceneLayer";return null!=e&&"IntegratedMesh"===e.layerType?r="IntegratedMeshLayer":null!=e&&"PointCloud"===e.layerType&&(r="PointCloudLayer"),{className:r,properties:t}})}return{className:"GroupLayer"}})}function h(e){return e.load().then(function(){return e.fetchData()}).then(function(e){return e&&Array.isArray(e.layers)&&1===e.layers.length?{className:"FeatureLayer"}:{className:"GroupLayer"}})}function L(e){return g(e).then(function(r){var t=new l(e.typeKeywords);return r?t.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function I(e){return{className:"StreamLayer"}}function v(e){return{className:"VectorTileLayer"}}function N(e){return{className:"WebTileLayer"}}function g(e){return S(e.url).then(function(e){return e.tileInfo})}function w(e){return!e.url||e.url.match(/\/\d+$/)?a.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length?{id:r.layers[0].id}:!1:S(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length?{id:e.layers[0].id}:!1:{}})})}function S(e){return o(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}r.fromItem=i});