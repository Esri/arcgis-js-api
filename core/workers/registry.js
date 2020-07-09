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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/Promise"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.registry={geometryEngineWorker:function(){return new Promise((function(r,o){e(["../../geometry/geometryEngineWorker"],r,o)}))},CSVSourceWorker:function(){return new Promise((function(r,o){e(["../../layers/graphics/sources/support/CSVSourceWorker"],r,o)}))},EdgeProcessingWorker:function(){return new Promise((function(r,o){e(["../../views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker"],r,o)}))},ElevationSamplerWorker:function(){return new Promise((function(r,o){e(["../../geometry/support/meshUtils/ElevationSamplerWorker"],r,o)}))},GeoJSONSourceWorker:function(){return new Promise((function(r,o){e(["../../layers/graphics/sources/geojson/GeoJSONSourceWorker"],r,o)}))},LercWorker:function(){return new Promise((function(r,o){e(["../../layers/support/LercWorker"],r,o)}))},MemorySourceWorker:function(){return new Promise((function(r,o){e(["../../layers/graphics/sources/support/MemorySourceWorker"],r,o)}))},PBFDecoderWorker:function(){return new Promise((function(r,o){e(["../../views/3d/support/PBFDecoderWorker"],r,o)}))},Pipeline:function(){return new Promise((function(r,o){e(["../../views/2d/layers/features/Pipeline"],r,o)}))},PointCloudWorker:function(){return new Promise((function(r,o){e(["../../views/3d/layers/PointCloudWorker"],r,o)}))},RasterWorker:function(){return new Promise((function(r,o){e(["../../layers/support/RasterWorker"],r,o)}))},SceneLayerWorker:function(){return new Promise((function(r,o){e(["../../views/3d/layers/SceneLayerWorker"],r,o)}))},WorkerTileHandler:function(){return new Promise((function(r,o){e(["../../views/2d/engine/vectorTiles/WorkerTileHandler"],r,o)}))}}}));