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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../views/3d/terrain/terrainUtils","../../../views/3d/terrain/TilingScheme"],function(e,t,r,a,i,n){function l(e){return p(e).then(function(){})}function o(e){var t=e.basemap,i=e.view;return t.load().then(function(){if(0!==t.baseLayers.length){var e=t.baseLayers.getItemAt(0);return e.load().then(function(){var t=(e.get("supportedSpatialReferences")||[e.get("tileInfo.spatialReference")]).filter(Boolean);if(0!==t.length)return t.every(function(e){return!i.spatialReference.equals(e)})?a.reject(new r("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")):void 0})}})}function p(e){var t=e.basemap,i=e.view;return t.load().then(function(){if(0!==t.baseLayers.length){var e=t.baseLayers.concat(t.referenceLayers),r=c(e);return r.length?a.reject(r[0]):t.baseLayers.getItemAt(0).load().then(function(e){return s(e,i)})}}).catch(function(e){var t=e.name,i=void 0===t?"basemap-compatibility:unknown-error":t,n=e.message,l=void 0===n?"Unknown basemap compatibility error":n,o=e.details;return a.reject(new r(i,l,o))})}function c(e){var t=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return e.toArray().filter(function(e){return-1===t.indexOf(e.operationalLayerType)}).map(function(e){return new r("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})})}function s(e,t){var l=e.tileInfo;if(l){var o=t.get("viewingMode");if(o){if(!u(o,l.spatialReference))return a.reject(new r("basemapgalleryitem:spatial-reference-unsupported-"+o,"Basemap spatial reference is unsupported in "+o+" mode"));if("global"===o){var p=i.checkIfTileInfoSupportedForView(l,e.fullExtent,null,o);if(p&&e.compatibleTileInfo256&&!i.checkIfTileInfoSupportedForView(e.compatibleTileInfo256,e.fullExtent,null,o)&&(p=null),p){var c=l.spatialReference.isWebMercator?"web-mercator":"wgs84";return a.reject(new r("basemapgalleryitem:tiling-scheme-unsupported-"+c+"-global","Basemap tiling scheme is unsupported in global mode",{error:p}))}}else if(n.checkUnsupported(l))return a.reject(new r("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode"));var s=t.get("basemapTerrain.tilingScheme");return!s||s.compatibleWith(l)||e.compatibleTileInfo256&&s.compatibleWith(e.compatibleTileInfo256)?void 0:a.reject(new r("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view"))}}}function u(e,t){return null!=t&&("global"===e?t.isWebMercator||t.isWGS84:!t.isGeographic)}Object.defineProperty(t,"__esModule",{value:!0}),t.default3DCompatibility=l,t.default2DCompatibility=o});