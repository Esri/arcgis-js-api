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

define(["require","exports","../../../core/maybe","../../../layers/ElevationLayer","../../../layers/TileLayer","../../../layers/VectorTileLayer","../../2d/engine/vectorTiles/VectorTile","../support/StreamDataLoader","./RasterTile","./terrainUtilsPlanar","./terrainUtilsSpherical","./TileTexture"],(function(e,t,r,i,a,n,l,o,s,f,c,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.test=t.getTiledLayerInfo=t.checkIfTileInfoSupportedForView=t.useFetchTileForLayer=t.releaseTileData=t.isRasterTileRenderInfo=t.isTextureTileRenderInfo=t.isVectorTileRenderInfo=t.isImageryTileRenderInfo=t.isSurfaceLayerView=t.isElevationLayerView=t.isWMTSLayerView=t.isVectorTileLayerView=t.isTileLayerView=t.isImageryTileLayerView=t.isProjectableRasterLayer=t.isVectorTileLayer=t.getLayerWithExtentRange=t.autoUpdateSkirtsVisibility=t.weakAssert=void 0;var y={planar:f,spherical:c};t.weakAssert=function(e,t){e||console.warn("Terrain: "+t)};var T=80/180*Math.PI,d=110/180*Math.PI;function I(e){return"imagery-tile"===e.type||"wcs"===e.type}function L(e){return e&&"esri.views.3d.layers.ImageryTileLayerView3D"===e.declaredClass}function V(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function p(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function m(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}function v(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function w(e,t,r,i){return y[2===i||"planar"===i?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(e,r,t)}t.autoUpdateSkirtsVisibility=function(e,t,r,i){var a,n=y[e.manifold],l=n.isInsideExtent(e,t);if(l)a=e.getElevation(t[0],t[1],t[1],r);else{var o=e.elevationBounds;a=.5*(o.min+o.max)}var s=t[2]-a,f=Math.abs(s)<i?0:s<0?-1:1;if(!l)if(n.isInsideExtent(e,t,1.2)){var c=n.tiltToExtentEdge(e,t);c>T&&c<d&&(f=0)}else f=0;e.skirtScale=f},t.getLayerWithExtentRange=function(e){return L(e)?{fullExtent:e.fullExtent,minScale:e.layer.minScale,maxScale:e.layer.maxScale,tilemapCache:null}:e.layer},t.isVectorTileLayer=function(e){return e&&e instanceof n},t.isProjectableRasterLayer=I,t.isImageryTileLayerView=L,t.isTileLayerView=V,t.isVectorTileLayerView=p,t.isWMTSLayerView=m,t.isElevationLayerView=v,t.isSurfaceLayerView=function(e){return e&&(V(e)||L(e)||v(e)||p(e)||m(e))},t.isImageryTileRenderInfo=function(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof s.default},t.isVectorTileRenderInfo=function(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof l.VectorTile},t.isTextureTileRenderInfo=function(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof u.TileTexture},t.isRasterTileRenderInfo=function(e){var t=e&&e.sourceLayerInfo&&e.sourceLayerInfo.data;return t instanceof HTMLImageElement||t instanceof o.ImageWithType||t instanceof HTMLCanvasElement||t instanceof ImageData},t.releaseTileData=function(e){return r.isSome(e)&&!(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData)&&e.release(),null},t.useFetchTileForLayer=function(e){return e.fetchTile&&!(e.fetchTile===a.prototype.fetchTile||e.fetchTile===i.prototype.fetchTile)},t.checkIfTileInfoSupportedForView=w,t.getTiledLayerInfo=function(e,r,i){var a,n;if("wmts"===e.type){var l=e.activeLayer;if(l){var o=l.tileMatrixSet;if(o)a=o.tileInfo,n=o.fullExtent;else{var s=l.tileMatrixSets;if(s){var f=s.find((function(e){return null==w(e.tileInfo,e.fullExtent,r,i)}));if(f)return{tileInfo:f.tileInfo,fullExtent:f.fullExtent}}}}}else n=I(e)?e.getCompatibleFullExtent(r):e.fullExtent,a="vector-tile"!==e.type||t.test.force512VTL?I(e)?e.getCompatibleTileInfo(r,n):e.tileInfo:e.compatibleTileInfo256;return a&&n&&null==w(a,n,r,i)?{tileInfo:a,fullExtent:n}:{tileInfo:null,fullExtent:null}},t.test={force512VTL:!1}}));