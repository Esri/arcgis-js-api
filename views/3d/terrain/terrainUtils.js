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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./terrainUtilsPlanar","./terrainUtilsSpherical","../../../layers/TiledLayer","../../../layers/TileLayer","../../../layers/BaseTileLayer","../../../layers/BaseElevationLayer","../../../layers/ElevationLayer","../../../layers/VectorTileLayer","../../../layers/WMTSLayer","../../../support/basemapDefinitions"],function(e,r,i,n,t,l,a,s,o,f,c,u){function y(e,r){e||console.warn("Terrain: "+r)}function p(e,r){O[e.manifold].autoUpdateSkirtsVisibility(e,r)}function d(e){return e&&(e.isInstanceOf(t)||e.isInstanceOf(a)||e.isInstanceOf(s)||e.isInstanceOf(c))}function v(e){return e&&e.isInstanceOf(f)}function T(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function L(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function I(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function w(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function V(e){return e&&(T(e)||w(e)||L(e)||I(e))}function S(e){return e.fetchTile&&!(e.fetchTile===l.prototype.fetchTile||e.fetchTile===o.prototype.fetchTile)}function h(e){b||E();var r=e&&e.replace(/https?:/,"");return r in b?b[r]:1/0}function E(){b={};for(var e in u){var r=u[e];r.baseMapLayers.forEach(function(e){b[e.url]=19})}b["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function x(e,r,i,n){var t;return t="local"===n||"planar"===n?"planar":"spherical",O[t].checkIfTileInfoSupportedForViewSR(e,r,i)}function M(e,r,i){var n,t;if(e.isInstanceOf(c)){var l=e.activeLayer;if(l){var a=l.tileMatrixSet;if(a)n=a.tileInfo,t=a.fullExtent;else{var s=l.tileMatrixSets;if(s){var o=s.find(function(e){return null==x(e.tileInfo,e.fullExtent,r,i)});if(o)return{tileInfo:o.tileInfo,fullExtent:o.fullExtent}}}}}else n=e.isInstanceOf(f)?e.compatibleTileInfo256:e.tileInfo,t=e.fullExtent;return n&&t&&null==x(n,t,r,i)?{tileInfo:n,fullExtent:t}:{tileInfo:null,fullExtent:null}}Object.defineProperty(r,"__esModule",{value:!0});var O={planar:i,spherical:n};r.weakAssert=y,r.autoUpdateSkirtsVisibility=p,r.isTiledLayer=d,r.isVectorTileLayer=v,r.isTileLayerView=T,r.isVectorTileLayerView=L,r.isWMTSLayerView=I,r.isElevationLayerView=w,r.isTiledLayerView=V,r.useFetchTileForLayer=S;var b=null;r.getKnownTiledServiceLevelCap=h,r.prepareKnownTiledServiceLevelCaps=E,r.checkIfTileInfoSupportedForView=x,r.getTiledLayerInfo=M});