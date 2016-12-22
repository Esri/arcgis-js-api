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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/promiseUtils","../../core/requireUtils","../../layers/Layer","../../renderers/support/styleUtils"],function(e,r,a,t,i,y,n){function l(r,a,y){var l,o;return i.when(e,"../../layers/"+a).then(function(e){var a={};return r.itemId&&(a.portalItem={id:r.itemId,portal:y.context.portal}),l=new e(a),o=l,o.read(r,y.context),n.loadStyleRenderer(o,y.context).then(function(){return t.resolve(l)})})}function o(e,r){var a=e.layerType||e.type;!a&&r&&r.defaultLayerType&&(a=r.defaultLayerType);var t;switch(r.context.origin){case"web-scene":switch(r.context.layerContainerType){case"basemap":t=d;break;case"ground":t=s;break;default:t=S}break;default:switch(r.context.layerContainerType){case"basemap":t=T;break;default:t=v}}var i=t[a]||"UnknownLayer";return l(e,i,r)}function L(e,r,a){return r&&r.filter?a.then(function(e){var a=r.filter(e);return void 0===a?t.resolve(e):a instanceof y?t.resolve(a):a}):a}function c(e,r,a){if(!r)return[];for(var i=[],y=[],n=0;n<r.length;n++){var l=r[n],c=o(l,a);if(i.push(c),y.push(null),"GroupLayer"===l.layerType){var p=l;if(p.layers&&Array.isArray(p.layers)&&p.layers.length>0){var S=p.layers.map(function(e){return o(e,a)});i.push.apply(i,S);for(var s=0;s<S.length;s++)y.push(c)}}}var d={},v=i.map(function(r,i){var n=function(e,r){d[r.id]=i;var a=e.findIndex(function(e){if(!e.id)return!1;var r=d[e.id];return void 0===r?!1:r>i});0>a&&(a=void 0),e.add(r,a)},l=L(e,a,r).then(function(r){return null!==y[i]?y[i].then(function(e){return n(e.layers,r),t.resolve(r)}):(n(e,r),t.resolve(r))});return u&&(l=l.otherwise(function(e){return console.error(e.toString?e.toString():e),t.reject(e)})),l});return v}function p(e,r,a){return c(e,r,a)}var u=a("dojo-debug-messages"),S={ArcGISFeatureLayer:"FeatureLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer"};a("disable-feature:jkieboom/vector-tiles")||(S.VectorTileLayer="VectorTileLayer");var s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",DefaultTileLayer:"TileLayer"};a("disable-feature:jkieboom/vector-tiles")||(d.VectorTileLayer="VectorTileLayer");var v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"UnsupportedLayer",KML:"UnsupportedLayer",WMS:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",bingLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",DefaultTileLayer:"TileLayer"};r.createLayer=o,r.processLayer=L,r.populateLayers=c,r.populateOperationalLayers=p});