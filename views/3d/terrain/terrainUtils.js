// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./terrainUtilsPlanar","./terrainUtilsSpherical","../../../layers/TiledLayer","../../../layers/VectorTileLayer","../../../support/basemapDefinitions"],function(e,r,i,n,a,t,l){function s(e,r){e||console.warn("Terrain: "+r)}function o(e,r){L[e.manifold].autoUpdateSkirtsVisibility(e,r)}function c(e){return e&&e.isInstanceOf(a)}function u(e){return e&&e.isInstanceOf(t)}function f(e){return e&&"esri.views.3d.layers.TiledLayerView3D"===e.declaredClass}function p(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function d(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function y(e){return e&&(f(e)||d(e)||p(e))}function v(e){I||w();var r=e&&e.replace(/https?:/,"");return r in I?I[r]:1/0}function w(){I={};for(var e in l){var r=l[e];r.baseMapLayers.forEach(function(e){I[e.url]=19})}I["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function T(e,r,i,n){var a;return a="local"===n||"planar"===n?"planar":"spherical",L[a].checkIfTileInfoSupportedForViewSR(e,r,i)}function V(e){return u(e)?e.tileInfo256:e.tileInfo}var L={planar:i,spherical:n};r.weakAssert=s,r.autoUpdateSkirtsVisibility=o,r.isTiledLayer=c,r.isVectorTileLayer=u,r.isTiledMapLayerView=f,r.isVectorTileLayerView=p,r.isElevationLayerView=d,r.isTiledLayerView=y;var I=null;r.getKnownTiledServiceLevelCap=v,r.prepareKnownTiledServiceLevelCaps=w,r.checkIfTileInfoSupportedForView=T,r.getTileInfo=V});