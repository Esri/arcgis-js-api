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

define(["require","exports","dojo/_base/lang","../PortalItem","../../core/promiseUtils","../../core/requireUtils","../../request","../../core/Collection","../../core/Error","./mapNotesUtils"],function(e,r,t,n,a,o,u,s,c,l){function i(e){return!e.portalItem||e.portalItem instanceof n||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t.mixin({},e,{portalItem:new n(e.portalItem)})),y(e.portalItem).then(function(r){var n=t.mixin({portalItem:e.portalItem},r.properties),o=r.constructor;return"esri.layers.FeatureLayer"===o.declaredClass&&(n.returnZ=!0,n.outFields=["*"]),a.resolve(new o(n))})}function y(e){return e.load().then(f).then(p)}function f(e){switch(e.type){case"Map Service":return m(e);case"Feature Service":return d(e);case"Feature Collection":return L(e);case"Scene Service":return h(e);case"Image Service":return N(e);case"Stream Service":return I(e);case"Vector Tile Service":return v(e);case"KML":return S(e);case"WMTS":return g(e);case"WMS":return M(e);default:return a.reject(new c("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function p(r){return o.when(e,"../../layers/"+r.className).then(function(e){return{constructor:e,properties:r.properties}})}function m(e){return w(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}function d(e){return j(e).then(function(e){if("object"==typeof e){var r={returnZ:!0,outFields:["*"]};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}function h(e){return j(e).then(function(r){if("object"==typeof r){var t={},n=void 0;if(null!=r.id?(t.layerId=r.id,n=e.url+"/layers/"+r.id):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer"},o=0,u=Object.keys(a);o<u.length;o++){var s=u[o];if(-1!==e.typeKeywords.indexOf(s))return{className:a[s]}}return C(n).then(function(e){var r="SceneLayer";return null!=e&&"IntegratedMesh"===e.layerType?r="IntegratedMeshLayer":null!=e&&"PointCloud"===e.layerType&&(r="PointCloudLayer"),{className:r,properties:t}})}return{className:"GroupLayer"}})}function L(e){return e.load().then(function(){return e.fetchData()}).then(function(e){if(e&&Array.isArray(e.layers)){if(l.isMapNotesLayer(e))return{className:"MapNotesLayer"};if(1===e.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}function N(e){return w(e).then(function(r){var t=new s(e.typeKeywords);return r?t.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function I(e){return{className:"StreamLayer"}}function v(e){return{className:"VectorTileLayer"}}function S(e){return{className:"KMLLayer"}}function M(e){return{className:"WMSLayer"}}function g(e){return{className:"WMTSLayer"}}function w(e){return C(e.url).then(function(e){return e.tileInfo})}function j(e){return!e.url||e.url.match(/\/\d+$/)?a.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length?{id:r.layers[0].id}:!1:C(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length?{id:e.layers[0].id}:!1:{}})})}function C(e){return u(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=i,r.selectLayerClassPath=f});