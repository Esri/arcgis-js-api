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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../layers/ElevationLayer","../../../layers/TileLayer","../../../layers/VectorTileLayer","./terrainUtilsPlanar","./terrainUtilsSpherical"],(function(e,i,t,r,l,n,a){Object.defineProperty(i,"__esModule",{value:!0});var s={planar:n,spherical:a};function o(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function f(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function c(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function u(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function y(e,i,t,r){return s["local"===r||"planar"===r?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(e,t,i)}i.weakAssert=function(e,i){e||console.warn("Terrain: "+i)},i.autoUpdateSkirtsVisibility=function(e,i,t,r){var l,n=s[e.manifold],a=n.isInsideExtent(e,i);if(a)l=e.getElevation(i[0],i[1],i[1],t);else{var o=e.elevationBounds;l=.5*(o.min+o.max)}var f=i[2]-l,c=Math.abs(f)<r?0:f<0?-1:1;if(!a)if(n.isInsideExtent(e,i,e.hideSkirtsDistanceFromExtentMargin)){var u=n.tiltToExtentEdge(e,i);u>e.hideSkirtsMinimumCameraTilt&&u<e.hideSkirtsMaximumCameraTilt&&(c=0)}else c=0;e.skirtScale=c},i.isVectorTileLayer=function(e){return e&&e instanceof l},i.isTileLayerView=o,i.isVectorTileLayerView=f,i.isWMTSLayerView=c,i.isElevationLayerView=u,i.isSurfaceLayerView=function(e){return e&&(o(e)||u(e)||f(e)||c(e))},i.useFetchTileForLayer=function(e){return e.fetchTile&&!(e.fetchTile===r.prototype.fetchTile||e.fetchTile===t.prototype.fetchTile)},i.checkIfTileInfoSupportedForView=y,i.getTiledLayerInfo=function(e,t,r){var l,n;if("wmts"===e.type){var a=e.activeLayer;if(a){var s=a.tileMatrixSet;if(s)l=s.tileInfo,n=s.fullExtent;else{var o=a.tileMatrixSets;if(o){var f=o.find((function(e){return null==y(e.tileInfo,e.fullExtent,t,r)}));if(f)return{tileInfo:f.tileInfo,fullExtent:f.fullExtent}}}}}else l="vector-tile"!==e.type||i.test.force512VTL?e.tileInfo:e.compatibleTileInfo256,n=e.fullExtent;return l&&n&&null==y(l,n,t,r)?{tileInfo:l,fullExtent:n}:{tileInfo:null,fullExtent:null}},i.test={force512VTL:!1}}));