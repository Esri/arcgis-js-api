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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../layers/ElevationLayer","../../../layers/TileLayer","../../../layers/VectorTileLayer","../../../support/basemapDefinitions","./terrainUtilsPlanar","./terrainUtilsSpherical"],function(e,i,t,r,n,l,a,s){function o(e,i){e||console.warn("Terrain: "+i)}function f(e,i,t){var r,n=h[e.manifold],l=n.isInsideExtent(e,i);if(l)r=e.getElevation(i);else{var a=e.elevationBounds;r=.5*(a.min+a.max)}var s=i[2],o=s-r,f=.9*Math.abs(o)<t,c=o<0,u=f?0:c?-1:1;if(!l){if(n.isInsideExtent(e,i,e.hideSkirtsDistanceFromExtentMargin)){var p=n.tiltToExtentEdge(e,i);p>e.hideSkirtsMinimumCameraTilt&&p<e.hideSkirtsMaximumCameraTilt&&(u=0)}else u=0}e.skirtScale=u}function c(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type}function u(e){return e&&e.isInstanceOf(n)}function p(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function y(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function v(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function d(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function T(e){return e&&(p(e)||d(e)||y(e)||v(e))}function w(e){return e.fetchTile&&!(e.fetchTile===r.prototype.fetchTile||e.fetchTile===t.prototype.fetchTile)}function L(e){E||m();var i=e&&e.replace(/https?:/,"");return i in E?E[i]:1/0}function m(){E={};for(var e in l.esriBasemapDefinitions){l.esriBasemapDefinitions[e].baseMapLayers.forEach(function(e){return E[e.url]=19})}E["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function I(e,i,t,r){var n;return n="local"===r||"planar"===r?"planar":"spherical",h[n].checkIfTileInfoSupportedForViewSR(e,i,t)}function V(e,t,r){var n,l;if("wmts"===e.type){var a=e.activeLayer;if(a){var s=a.tileMatrixSet;if(s)n=s.tileInfo,l=s.fullExtent;else{var o=a.tileMatrixSets;if(o){var f=o.find(function(e){return null==I(e.tileInfo,e.fullExtent,t,r)});if(f)return{tileInfo:f.tileInfo,fullExtent:f.fullExtent}}}}}else n="vector-tile"!==e.type||i.test.force512VTL?e.tileInfo:e.compatibleTileInfo256,l=e.fullExtent;return n&&l&&null==I(n,l,t,r)?{tileInfo:n,fullExtent:l}:{tileInfo:null,fullExtent:null}}Object.defineProperty(i,"__esModule",{value:!0});var h={planar:a,spherical:s};i.weakAssert=o,i.autoUpdateSkirtsVisibility=f,i.isTiledLayer=c,i.isVectorTileLayer=u,i.isTileLayerView=p,i.isVectorTileLayerView=y,i.isWMTSLayerView=v,i.isElevationLayerView=d,i.isTiledLayerView=T,i.useFetchTileForLayer=w;var E=null;i.getKnownTiledServiceLevelCap=L,i.prepareKnownTiledServiceLevelCaps=m,i.checkIfTileInfoSupportedForView=I,i.getTiledLayerInfo=V,i.test={force512VTL:!1}});