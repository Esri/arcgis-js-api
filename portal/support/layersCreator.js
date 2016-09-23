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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../layers/Layer","../../core/promiseUtils","../../core/requireUtils","./byReferenceRenderer","dojo/has"],function(e,r,a,t,i,y,n){function L(r,a,n){var L,l;return i.when(e,"../../layers/"+a).then(function(e){var a={};return r.itemId&&(a.portalItem={id:r.itemId,portal:n.context.portal}),L=new e(a),l=L,y.read(l,r,n.context)}).then(function(){return l.read(r,n.context),t.resolve(L)})}function l(e,r){var a=e.layerType||e.type;!a&&r&&r.defaultLayerType&&(a=r.defaultLayerType);var t;switch(r.context.origin){case"web-scene":switch(r.context.layerContainerType){case"basemap":t=d;break;case"ground":t=s;break;default:t=S}break;default:switch(r.context.layerContainerType){case"basemap":t=T;break;default:t=v}}var i=t[a]||"UnknownLayer";return L(e,i,r)}function c(e,r,i){return r&&r.filter?i.then(function(e){var i=r.filter(e);return void 0===i?t.resolve(e):i instanceof a?t.resolve(i):i}):i}function o(e,r,a){if(!r)return[];for(var i=[],y=[],n=0;n<r.length;n++){var L=r[n],o=l(L,a);if(i.push(o),y.push(null),"GroupLayer"===L.layerType){var p=L;if(p.layers&&Array.isArray(p.layers)&&p.layers.length>0){var S=p.layers.map(function(e){return l(e,a)});i.push.apply(i,S);for(var s=0;s<S.length;s++)y.push(o)}}}var d={},v=i.map(function(r,i){var n=function(e,r){d[r.id]=i;var a=e.findIndex(function(e){if(!e.id)return!1;var r=d[e.id];return void 0===r?!1:r>i});0>a&&(a=void 0),e.add(r,a)},L=c(e,a,r).then(function(r){return null!==y[i]?y[i].then(function(e){return n(e.layers,r),t.resolve(r)}):(n(e,r),t.resolve(r))});return u&&(L=L.otherwise(function(e){return console.error(e.toString?e.toString():e),t.reject(e)})),L});return v}function p(e,r,a){return o(e,r,a)}var u=n("dojo-debug-messages"),S={ArcGISFeatureLayer:"FeatureLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",DefaultTileLayer:"TileLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",DefaultTileLayer:"TileLayer"},v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"UnsupportedLayer",KML:"UnsupportedLayer",WMS:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",bingLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",DefaultTileLayer:"TileLayer"};r.createLayer=l,r.processLayer=c,r.populateLayers=o,r.populateOperationalLayers=p});