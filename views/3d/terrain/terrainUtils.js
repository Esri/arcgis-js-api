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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","./terrainUtilsPlanar","./terrainUtilsSpherical","../../../layers/TiledLayer","../../../support/basemapDefinitions"],function(e,r,i,a,n,s){function t(e,r){e||console.warn("Terrain: "+r)}function l(e,r){y[e.manifold].autoUpdateSkirtsVisibility(e,r)}function o(e){return e.isInstanceOf(n)}function c(e){return"esri.views.3d.layers.TiledLayerView3D"===e.declaredClass}function p(e){return"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function u(e){return c(e)||p(e)}function f(e){w||d();var r=e&&e.replace(/https?:/,"");return r in w?w[r]:1/0}function d(){w={};for(var e in s){var r=s[e];r.baseMapLayers.forEach(function(e){w[e.url]=19})}w["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}function v(e,r,i,a){var n;return n="local"===a||"planar"===a?"planar":"spherical",y[n].checkIfTileInfoSupportedForViewSR(e,r,i)}var y={planar:i,spherical:a};r.weakAssert=t,r.autoUpdateSkirtsVisibility=l,r.isTiledLayer=o,r.isTiledMapLayerView=c,r.isElevationLayerView=p,r.isTiledLayerView=u;var w=null;r.getKnownTiledServiceLevelCap=f,r.prepareKnownTiledServiceLevelCaps=d,r.checkIfTileInfoSupportedForView=v});