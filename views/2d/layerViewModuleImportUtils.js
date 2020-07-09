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

define(["require","exports","../../core/Error","../../core/maybe","@dojo/framework/shim/Promise"],(function(e,n,r,t){function i(){return Promise.all([new Promise((function(n,r){e(["../webgl"],n,r)})),new Promise((function(n,r){e(["./engine"],n,r)}))])}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/TileLayerView2D"],n,r)}))}))},u=function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/FeatureLayerView2D"],n,r)}))}))},a={"base-dynamic":function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/BaseDynamicLayerView2D"],n,r)}))}))},"base-tile":o,"bing-maps":o,csv:u,"geo-rss":function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/GeoRSSLayerView2D"],n,r)}))}))},feature:u,geojson:u,graphics:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/GraphicsLayerView2D"],n,r)}))}))},group:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/GroupLayerView2D"],n,r)}))}))},imagery:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/ImageryLayerView2D"],n,r)}))}))},"imagery-tile":function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/ImageryTileLayerView2D"],n,r)}))}))},kml:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/KMLLayerView2D"],n,r)}))}))},"map-image":function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/MapImageLayerView2D"],n,r)}))}))},"map-notes":function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/MapNotesLayerView2D"],n,r)}))}))},"ogc-feature":u,"open-street-map":o,route:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/RouteLayerView2D"],n,r)}))}))},stream:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/StreamLayerView2D"],n,r)}))}))},tile:o,"vector-tile":function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/VectorTileLayerView2D"],n,r)}))}))},"web-tile":o,wms:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/WMSLayerView2D"],n,r)}))}))},wmts:function(){return i().then((function(){return new Promise((function(n,r){e(["./layers/WMTSLayerView2D"],n,r)}))}))},"base-elevation":null,"building-scene":null,elevation:null,"integrated-mesh":null,"point-cloud":null,scene:null,unknown:null,unsupported:null};n.layerView2DImporter={hasLayerViewModule:function(e){return t.isSome(a[e.type])},importLayerView:function(e){var n=a[e.type];if(!t.isSome(n))throw function(e){var n=e.declaredClass?e.declaredClass.slice(e.declaredClass.lastIndexOf(".")+1):"Unknown",t=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return new r(t+":view-not-supported",n+" is not supported in 2D")}(e);return n(e)}}}));