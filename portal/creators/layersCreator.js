// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../layers/Layer","../../core/promiseUtils","../../core/requireUtils","dojo/_base/lang","dojo/has"],function(e,r,a,t,n,i,o){function c(r,a,t){return n.when(e,"./"+a).then(function(e){return new e(i.mixin(t,{layer:r})).create()})}function u(e,r){var a=null,t=e.layerType||e.type;switch(!t&&r&&r.defaultLayerType&&(t=r.defaultLayerType),t){case"ArcGISFeatureLayer":a="FeatureLayerCreator";break;case"ArcGISImageServiceLayer":a="ImageServiceLayerCreator";break;case"ArcGISMapServiceLayer":a="MapServiceLayerCreator";break;case"ArcGISSceneServiceLayer":a="SceneServiceLayerCreator";break;case"ArcGISStreamLayer":a="StreamLayerCreator";break;case"ArcGISTiledMapServiceLayer":a="TiledMapServiceLayerCreator";break;case"ArcGISTiledImageServiceLayer":a="TiledImageServiceLayerCreator";break;case"ArcGISTiledElevationServiceLayer":a="TiledElevationServiceLayerCreator";break;case"GroupLayer":a="GroupLayerCreator";break;case"OpenStreetMap":a="OpenStreetMapCreator";break;case"WebTiledLayer":a="WebTileLayerCreator";break;case"VectorTileLayer":a="VectorTileLayerCreator";break;case"DefaultTiledLayer":a="TiledServiceLayerCreator";break;case"ArcGISImageServiceVectorLayer":case"CSV":case"KML":case"WMS":case"GeoRSS":a="UnsupportedLayerCreator";break;default:a="UnknownLayerCreator"}return c(e,a,r)}function y(e,r,n){return r&&r.filter?n.then(function(e){var n=r.filter(e);return void 0===n?t.resolve(e):n instanceof a?t.resolve(n):n}):n}function s(e,r,a,n){if(!r)return[];for(var i=[],o=[],c=0;c<r.length;c++){var s=r[c],l=a(s,n);if(i.push(l),o.push(null),"GroupLayer"===s.layerType){var v=s;if(v.layers&&Array.isArray(v.layers)&&v.layers.length>0){var S=v.layers.map(function(e){return u(e,n)});i.push.apply(i,S);for(var p=0;p<S.length;p++)o.push(l)}}}var f={},d=i.map(function(r,a){var i=function(e,r){f[r.id]=a;var t=e.findIndex(function(e){if(!e.id)return!1;var r=f[e.id];return void 0===r?!1:r>a});0>t&&(t=void 0),e.add(r,t)},c=y(e,n,r).then(function(r){return null!==o[a]?o[a].then(function(e){return i(e.layers,r),t.resolve(r)}):(i(e,r),t.resolve(r))});return L&&(c=c.otherwise(function(e){return console.error(e.toString?e.toString():e),t.reject(e)})),c});return d}function l(e,r,a){return s(e,r,u,a)}var L=o("dojo-debug-messages");r.createLayer=u,r.processLayer=y,r.populateLayers=s,r.populateOperationalLayers=l});