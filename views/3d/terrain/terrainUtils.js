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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./terrainUtilsPlanar","./terrainUtilsSpherical","../../../layers/TiledLayer","../../../layers/TileLayer","../../../layers/BaseTileLayer","../../../layers/BaseElevationLayer","../../../layers/ElevationLayer","../../../layers/VectorTileLayer","../../../support/basemapDefinitions"],function(e,r,i,a,n,t,l,s,o,c,f){function u(e,r){e||console.warn("Terrain: "+r)}function y(e,r){k[e.manifold].autoUpdateSkirtsVisibility(e,r)}function p(e){return e&&(e.isInstanceOf(n)||e.isInstanceOf(l)||e.isInstanceOf(s))}function d(e){return e&&e.isInstanceOf(c)}function T(e){return e&&"esri.views.3d.layers.TiledLayerView3D"===e.declaredClass}function v(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function L(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function w(e){return e&&(T(e)||L(e)||v(e))}function V(e){return e.fetchTile&&!(e.fetchTile===t.prototype.fetchTile||e.fetchTile===o.prototype.fetchTile)}function h(e){C||I();var r=e&&e.replace(/https?:/,"");return r in C?C[r]:1/0}function I(){C={};for(var e in f){var r=f[e];r.baseMapLayers.forEach(function(e){C[e.url]=19})}C["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function S(e,r,i,a){var n;return n="local"===a||"planar"===a?"planar":"spherical",k[n].checkIfTileInfoSupportedForViewSR(e,r,i)}function b(e){return d(e)?e.tileInfo256:e.tileInfo}Object.defineProperty(r,"__esModule",{value:!0});var k={planar:i,spherical:a};r.weakAssert=u,r.autoUpdateSkirtsVisibility=y,r.isTiledLayer=p,r.isVectorTileLayer=d,r.isTiledMapLayerView=T,r.isVectorTileLayerView=v,r.isElevationLayerView=L,r.isTiledLayerView=w,r.useFetchTileForLayer=V;var C=null;r.getKnownTiledServiceLevelCap=h,r.prepareKnownTiledServiceLevelCaps=I,r.checkIfTileInfoSupportedForView=S,r.getTileInfo=b});