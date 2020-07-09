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

define(["require","exports","../../../layers/ElevationLayer","../../../layers/TileLayer","../../../layers/VectorTileLayer","../../2d/engine/vectorTiles/VectorTile","../support/StreamDataLoader","./RasterTile","./terrainUtilsPlanar","./terrainUtilsSpherical","./TileTexture"],(function(e,t,r,i,n,a,l,o,s,f,c){Object.defineProperty(t,"__esModule",{value:!0});var u={planar:s,spherical:f};t.weakAssert=function(e,t){e||console.warn("Terrain: "+t)};var y=80/180*Math.PI,T=110/180*Math.PI;function d(e){return e&&"esri.views.3d.layers.ImageryTileLayerView3D"===e.declaredClass}function I(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function L(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function p(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function v(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function m(e,t,r,i){return u["local"===i||"planar"===i?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(e,r,t)}t.autoUpdateSkirtsVisibility=function(e,t,r,i){var n,a=u[e.manifold],l=a.isInsideExtent(e,t);if(l)n=e.getElevation(t[0],t[1],t[1],r);else{var o=e.elevationBounds;n=.5*(o.min+o.max)}var s=t[2]-n,f=Math.abs(s)<i?0:s<0?-1:1;if(!l)if(a.isInsideExtent(e,t,1.2)){var c=a.tiltToExtentEdge(e,t);c>y&&c<T&&(f=0)}else f=0;e.skirtScale=f},t.getLayerWithExtentRange=function(e){return d(e)?{fullExtent:e.fullExtent,minScale:e.layer.minScale,maxScale:e.layer.maxScale,tilemapCache:null}:e.layer},t.isVectorTileLayer=function(e){return e&&e instanceof n},t.isImageryTileLayerView=d,t.isTileLayerView=I,t.isVectorTileLayerView=L,t.isWMTSLayerView=p,t.isElevationLayerView=v,t.isSurfaceLayerView=function(e){return e&&(I(e)||d(e)||v(e)||L(e)||p(e))},t.isImageryTileRenderInfo=function(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof o.default},t.isVectorTileRenderInfo=function(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof a.VectorTile},t.isTextureTileRenderInfo=function(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof c.TileTexture},t.isRasterTileRenderInfo=function(e){var t=e&&e.sourceLayerInfo&&e.sourceLayerInfo.data;return t instanceof HTMLImageElement||t instanceof l.ImageWithType||t instanceof HTMLCanvasElement||t instanceof ImageData},t.useFetchTileForLayer=function(e){return e.fetchTile&&!(e.fetchTile===i.prototype.fetchTile||e.fetchTile===r.prototype.fetchTile)},t.checkIfTileInfoSupportedForView=m,t.getTiledLayerInfo=function(e,r,i){var n,a;if("wmts"===e.type){var l=e.activeLayer;if(l){var o=l.tileMatrixSet;if(o)n=o.tileInfo,a=o.fullExtent;else{var s=l.tileMatrixSets;if(s){var f=s.find((function(e){return null==m(e.tileInfo,e.fullExtent,r,i)}));if(f)return{tileInfo:f.tileInfo,fullExtent:f.fullExtent}}}}}else a="imagery-tile"===e.type?e.getCompatibleFullExtent(r):e.fullExtent,n="vector-tile"!==e.type||t.test.force512VTL?"imagery-tile"===e.type?e.getCompatibleTileInfo(r,a):e.tileInfo:e.compatibleTileInfo256;return n&&a&&null==m(n,a,r,i)?{tileInfo:n,fullExtent:a}:{tileInfo:null,fullExtent:null}},t.test={force512VTL:!1}}));