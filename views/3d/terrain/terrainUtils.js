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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./terrainUtilsPlanar","./terrainUtilsSpherical","../../../layers/TiledLayer","../../../support/basemapDefinitions"],function(e,r,i,a,n,s){function t(e,r){e||console.warn("Terrain: "+r)}function l(e,r){v[e.manifold].autoUpdateSkirtsVisibility(e,r)}function o(e){return e.isInstanceOf(n)}function c(e){return"esri.views.3d.layers.TiledLayerView3D"===e.declaredClass}function u(e){return"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function d(e){return c(e)||u(e)}function p(e){y||f();var r=e&&e.replace(/https?:/,"");return r in y?y[r]:1/0}function f(){y={};for(var e in s){var r=s[e];r.baseMapLayers.forEach(function(e){y[e.url]=19})}y["//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"]=20}var v={planar:i,spherical:a};r.weakAssert=t,r.autoUpdateSkirtsVisibility=l,r.isTiledLayer=o,r.isTiledMapLayerView=c,r.isElevationLayerView=u,r.isTiledLayerView=d;var y=null;r.getKnownTiledServiceLevelCap=p,r.prepareKnownTiledServiceLevelCaps=f});