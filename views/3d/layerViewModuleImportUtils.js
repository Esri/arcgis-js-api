// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/maybe","@dojo/framework/shim/Promise"],function(e,n,r,i){function o(e){var n=e.declaredClass?e.declaredClass.slice(e.declaredClass.lastIndexOf(".")+1):"Unknown",i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return new r(i+":view-not-supported",n+" is not supported in 3D")}Object.defineProperty(n,"__esModule",{value:!0});var t=function(){return new Promise(function(n,r){e(["./layers/TileLayerView3D"],n,r)})},a=function(){return new Promise(function(n,r){e(["./layers/FeatureLayerView3D"],n,r)})},u=function(){return new Promise(function(n,r){e(["./layers/ElevationLayerView3D"],n,r)})},s={"base-dynamic":function(){return new Promise(function(n,r){e(["./layers/DynamicLayerView3D"],n,r)})},"base-elevation":u,"base-tile":t,"bing-maps":t,"building-scene":function(){return new Promise(function(n,r){e(["./layers/BuildingSceneLayerView3D"],n,r)})},csv:a,elevation:u,feature:a,geojson:a,graphics:function(){return new Promise(function(n,r){e(["./layers/GraphicsLayerView3D"],n,r)})},group:function(){return new Promise(function(n,r){e(["../layers/GroupLayerView"],n,r)})},imagery:function(){return new Promise(function(n,r){e(["./layers/ImageryLayerView3D"],n,r)})},"integrated-mesh":function(){return new Promise(function(n,r){e(["./layers/IntegratedMeshLayerView3D"],n,r)})},"map-image":function(){return new Promise(function(n,r){e(["./layers/MapImageLayerView3D"],n,r)})},"open-street-map":t,"point-cloud":function(){return new Promise(function(n,r){e(["./layers/PointCloudLayerView3D"],n,r)})},scene:function(n){return null==n.profile||"mesh-pyramids"===n.profile?new Promise(function(n,r){e(["./layers/SceneLayerView3D"],n,r)}):new Promise(function(n,r){e(["./layers/SceneLayerGraphicsView3D"],n,r)})},stream:function(){return new Promise(function(n,r){e(["./layers/StreamLayerView3D"],n,r)})},tile:t,"vector-tile":function(){return new Promise(function(n,r){e(["./layers/VectorTileLayerView3D"],n,r)})},"web-tile":t,wms:function(){return new Promise(function(n,r){e(["./layers/WMSLayerView3D"],n,r)})},wmts:function(){return new Promise(function(n,r){e(["./layers/WMTSLayerView3D"],n,r)})},"geo-rss":null,kml:null,"map-notes":null,unknown:null,unsupported:null};n.layerView3DImporter={hasLayerViewModule:function(e){return i.isSome(s[e.type])},importLayerView:function(e){var n=s[e.type];if(!i.isSome(n))throw o(e);return n(e)}}});