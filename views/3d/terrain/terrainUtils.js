// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../layers/ElevationLayer","../../../layers/TileLayer","../../../layers/VectorTileLayer","../../../support/basemapDefinitions","./terrainUtilsPlanar","./terrainUtilsSpherical"],function(e,i,t,r,n,l,a,s){function o(e,i){e||console.warn("Terrain: "+i)}function f(e,i,t){var r,n=S[e.manifold],l=n.isInsideExtent(e,i);if(l)r=e.getElevation(i);else{var a=e.getElevationBounds();r=.5*(a[0]+a[1])}var s=i[2],o=s-r,f=.9*Math.abs(o)<t,c=o<0,u=f?0:c?-1:1;if(!l){if(n.isInsideExtent(e,i,e.hideSkirtsDistanceFromExtentMargin)){var p=n.tiltToExtentEdge(e,i);p>e.hideSkirtsMinimumCameraTilt&&p<e.hideSkirtsMaximumCameraTilt&&(u=0)}else u=0}e.skirtScale=u}function c(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type}function u(e){return e&&e.isInstanceOf(n)}function p(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function y(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function v(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function d(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function T(e){return e&&(p(e)||d(e)||y(e)||v(e))}function w(e){return e.fetchTile&&!(e.fetchTile===r.prototype.fetchTile||e.fetchTile===t.prototype.fetchTile)}function L(e){V||E();var i=e&&e.replace(/https?:/,"");return i in V?V[i]:1/0}function E(){V={};for(var e in l){l[e].baseMapLayers.forEach(function(e){V[e.url]=19})}V["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function I(e,i,t,r){var n;return n="local"===r||"planar"===r?"planar":"spherical",S[n].checkIfTileInfoSupportedForViewSR(e,i,t)}function h(e,i,t){var r,n;if("wmts"===e.type){var l=e.activeLayer;if(l){var a=l.tileMatrixSet;if(a)r=a.tileInfo,n=a.fullExtent;else{var s=l.tileMatrixSets;if(s){var o=s.find(function(e){return null==I(e.tileInfo,e.fullExtent,i,t)});if(o)return{tileInfo:o.tileInfo,fullExtent:o.fullExtent}}}}}else r="vector-tile"===e.type?e.compatibleTileInfo256:e.tileInfo,n=e.fullExtent;return r&&n&&null==I(r,n,i,t)?{tileInfo:r,fullExtent:n}:{tileInfo:null,fullExtent:null}}Object.defineProperty(i,"__esModule",{value:!0});var S={planar:a,spherical:s};i.weakAssert=o,i.autoUpdateSkirtsVisibility=f,i.isTiledLayer=c,i.isVectorTileLayer=u,i.isTileLayerView=p,i.isVectorTileLayerView=y,i.isWMTSLayerView=v,i.isElevationLayerView=d,i.isTiledLayerView=T,i.useFetchTileForLayer=w;var V=null;i.getKnownTiledServiceLevelCap=L,i.prepareKnownTiledServiceLevelCaps=E,i.checkIfTileInfoSupportedForView=I,i.getTiledLayerInfo=h});