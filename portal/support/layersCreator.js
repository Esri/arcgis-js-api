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

define(["require","exports","dojo/has","../../core/promiseUtils","../../core/requireUtils","../PortalItem","./portalLayers","../../layers/Layer","../../renderers/support/styleUtils","./mapNotesUtils"],function(e,r,a,t,i,y,n,l,L,o){function c(r,a,y){var n,l;return i.when(e,"../../layers/"+a).then(function(e){var a={};return r.itemId&&(a.portalItem={id:r.itemId,portal:y.context.portal}),n=new e(a),l=n,l.read(r,y.context),L.loadStyleRenderer(l,y.context).then(function(){return t.resolve(n)})})}function u(e,r){return S(e,r).then(function(a){return c(e,a,r)})}function S(e,r){var a=r.context,i=s(a),l=e.layerType||e.type;!l&&r&&r.defaultLayerType&&(l=r.defaultLayerType);var L=i[l]||"UnknownLayer";if("Feature Collection"===e.type){if(e.itemId){var c=new y({id:e.itemId,portal:a&&a.portal});return c.load().then(n.selectLayerClassPath).then(function(e){return e.className})}}else"ArcGISFeatureLayer"===l&&o.isMapNotesLayer(e)&&(L="MapNotesLayer");return e.wmtsInfo&&(L="WMTSLayer"),t.resolve(L)}function s(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=m;break;case"ground":r=f;break;default:r=I}break;default:switch(e.layerContainerType){case"basemap":r=G;break;default:r=M}}return r}function p(e,r,a){return r&&r.filter?a.then(function(e){var a=r.filter(e);return void 0===a?t.resolve(e):a instanceof l?t.resolve(a):a}):a}function d(e,r,a){if(!r)return[];for(var i=[],y=[],n=0;n<r.length;n++){var l=r[n],L=u(l,a);if(i.push(L),y.push(null),"GroupLayer"===l.layerType){var o=l;if(o.layers&&Array.isArray(o.layers)&&o.layers.length>0){var c=o.layers.map(function(e){return u(e,a)});i.push.apply(i,c);for(var S=0;S<c.length;S++)y.push(L)}}}var s={},d=i.map(function(r,i){var n=function(e,r){s[r.id]=i;var a=e.findIndex(function(e){if(!e.id)return!1;var r=s[e.id];return void 0===r?!1:r>i});0>a&&(a=void 0),e.add(r,a)},l=p(e,a,r).then(function(r){return null!==y[i]?y[i].then(function(e){return n(e.layers,r),t.resolve(r)}):(n(e,r),t.resolve(r))});return T&&(l=l.otherwise(function(e){return console.error(e.toString?e.toString():e),t.reject(e)})),l});return d}function v(e,r,a){return d(e,r,a)}Object.defineProperty(r,"__esModule",{value:!0});var T=a("dojo-debug-messages"),I={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},f={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},m={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},M={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},G={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",bingLayer:"UnsupportedLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};r.createLayer=u,r.processLayer=p,r.populateLayers=d,r.populateOperationalLayers=v});