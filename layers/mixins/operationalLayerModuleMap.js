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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/promiseUtils","@dojo/framework/shim/Promise"],(function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.typeModuleMap=void 0,n.typeModuleMap={ArcGISFeatureLayer:function(){return new Promise((function(n,r){e(["../FeatureLayer"],n,r)}))},ArcGISImageServiceLayer:function(){return new Promise((function(n,r){e(["../ImageryLayer"],n,r)}))},ArcGISImageServiceVectorLayer:function(){return r.resolve(null)},ArcGISMapServiceLayer:function(){return new Promise((function(n,r){e(["../MapImageLayer"],n,r)}))},ArcGISSceneServiceLayer:function(){return new Promise((function(n,r){e(["../SceneLayer"],n,r)}))},ArcGISStreamLayer:function(){return new Promise((function(n,r){e(["../StreamLayer"],n,r)}))},ArcGISTiledElevationServiceLayer:function(){return new Promise((function(n,r){e(["../ElevationLayer"],n,r)}))},ArcGISTiledImageServiceLayer:function(){return new Promise((function(n,r){e(["../ImageryTileLayer"],n,r)}))},ArcGISTiledMapServiceLayer:function(){return new Promise((function(n,r){e(["../TileLayer"],n,r)}))},BingMapsAerial:function(){return new Promise((function(n,r){e(["../BingMapsLayer"],n,r)}))},BingMapsRoad:function(){return new Promise((function(n,r){e(["../BingMapsLayer"],n,r)}))},BingMapsHybrid:function(){return new Promise((function(n,r){e(["../BingMapsLayer"],n,r)}))},BuildingSceneLayer:function(){return new Promise((function(n,r){e(["../BuildingSceneLayer"],n,r)}))},CSV:function(){return new Promise((function(n,r){e(["../CSVLayer"],n,r)}))},GeoRSS:function(){return new Promise((function(n,r){e(["../GeoRSSLayer"],n,r)}))},GroupLayer:function(){return new Promise((function(n,r){e(["../GroupLayer"],n,r)}))},IntegratedMeshLayer:function(){return new Promise((function(n,r){e(["../IntegratedMeshLayer"],n,r)}))},KML:function(){return new Promise((function(n,r){e(["../KMLLayer"],n,r)}))},OpenStreetMap:function(){return new Promise((function(n,r){e(["../OpenStreetMapLayer"],n,r)}))},PointCloudLayer:function(){return new Promise((function(n,r){e(["../PointCloudLayer"],n,r)}))},VectorTileLayer:function(){return new Promise((function(n,r){e(["../VectorTileLayer"],n,r)}))},WebTiledLayer:function(){return new Promise((function(n,r){e(["../WebTileLayer"],n,r)}))},WFS:function(){return r.resolve(null)},SubtypeGroupLayer:function(){return r.resolve(null)},WMS:function(){return new Promise((function(n,r){e(["../WMSLayer"],n,r)}))},RasterDataLayer:function(){return r.resolve(null)},RasterDataElevationLayer:function(){return r.resolve(null)}}}));