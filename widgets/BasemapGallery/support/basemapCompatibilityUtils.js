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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/compilerUtils","../../../core/Error","../../../core/promiseUtils","../../../views/3d/terrain/terrainUtils","../../../views/3d/terrain/TilingScheme"],function(e,t,r,i,a,n,l){function o(e){return c(e).then(function(){})}function p(e){var t=e.basemap,r=e.view;return t.load().then(function(){if(0!==t.baseLayers.length){var e=t.baseLayers.getItemAt(0);return e.load().then(function(){var t=(e.get("supportedSpatialReferences")||[e.get("tileInfo.spatialReference")]).filter(Boolean);if(0!==t.length)return t.every(function(e){return!r.spatialReference.equals(e)})?a.reject(new i("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")):void 0})}})}function c(e){var t=e.basemap,n=e.view;return t.load().then(function(){if(0!==t.baseLayers.length){var e=t.baseLayers.concat(t.referenceLayers),i=s(e);if(i.length)return a.reject(i[0]);return r.typeCast(t.baseLayers.getItemAt(0))().load().then(function(e){return u(e,n)})}}).catch(function(e){var t=e.name,r=void 0===t?"basemap-compatibility:unknown-error":t,n=e.message,l=void 0===n?"Unknown basemap compatibility error":n,o=e.details;return a.reject(new i(r,l,o))})}function s(e){var t=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return e.toArray().filter(function(e){return-1===t.indexOf(e.operationalLayerType)}).map(function(e){return new i("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})})}function u(e,t){var r=e.tileInfo;if(r){var o=t.get("viewingMode");if(o){if(!m(o,r.spatialReference))return a.reject(new i("basemapgalleryitem:spatial-reference-unsupported-"+o,"Basemap spatial reference is unsupported in "+o+" mode"));if("global"===o){var p=n.checkIfTileInfoSupportedForView(r,e.fullExtent,null,o);if(p&&e.compatibleTileInfo256&&!n.checkIfTileInfoSupportedForView(e.compatibleTileInfo256,e.fullExtent,null,o)&&(p=null),p){var c=r.spatialReference.isWebMercator?"web-mercator":"wgs84";return a.reject(new i("basemapgalleryitem:tiling-scheme-unsupported-"+c+"-global","Basemap tiling scheme is unsupported in global mode",{error:p}))}}else if(l.checkUnsupported(r))return a.reject(new i("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode"));var s=t.get("basemapTerrain.tilingScheme");return!s||s.compatibleWith(r)||e.compatibleTileInfo256&&s.compatibleWith(e.compatibleTileInfo256)?void 0:a.reject(new i("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view"))}}}function m(e,t){return null!=t&&("global"===e?t.isWebMercator||t.isWGS84:!t.isGeographic)}Object.defineProperty(t,"__esModule",{value:!0}),t.default3DCompatibility=o,t.default2DCompatibility=p});