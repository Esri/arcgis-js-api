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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/promiseUtils","../../../views/3d/terrain/terrainUtils","../../../core/Error","../../../views/3d/terrain/TilingScheme"],function(e,r,i,t,a,n){function o(e){return l(e).then(function(){})}function l(e){var r=e.basemap,t=e.view;return r.load().then(function(){if(0!==r.baseLayers.length){var e=r.baseLayers.concat(r.referenceLayers),a=p(e);return a.length?i.reject(a[0]):r.baseLayers.getItemAt(0).load().then(function(e){return c(e,t)})}}).otherwise(function(e){var r="basemap-compatibility:unknown-error",t="Unknown basemap compatibility error",n=e.name,o=void 0===n?r:n,l=e.message,p=void 0===l?t:l,c=e.details;return i.reject(new a(o,p,c))})}function p(e){var r=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return e.toArray().filter(function(e){return-1===r.indexOf(e.operationalLayerType)}).map(function(e){return new a("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})})}function c(e,r){var o=e.tileInfo;if(o){var l=r.get("viewingMode");if(l){if(!s(l,o.spatialReference))return i.reject(new a("basemapgalleryitem:spatial-reference-unsupported-"+l,"Basemap spatial reference is unsupported in "+l+" mode"));if("global"===l){var p=t.checkIfTileInfoSupportedForView(o,e.fullExtent,null,l);if(p&&e.compatibleTileInfo256&&!t.checkIfTileInfoSupportedForView(e.compatibleTileInfo256,e.fullExtent,null,l)&&(p=null),p){var c=o.spatialReference.isWebMercator?"web-mercator":"wgs84";return i.reject(new a("basemapgalleryitem:tiling-scheme-unsupported-"+c+"-global","Basemap tiling scheme is unsupported in global mode",{error:p}))}}else if(n.checkUnsupported(o))return i.reject(new a("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode"));var u=r.get("basemapTerrain.tilingScheme");return!u||u.compatibleWith(o)||e.compatibleTileInfo256&&u.compatibleWith(e.compatibleTileInfo256)?void 0:i.reject(new a("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view"))}}}function s(e,r){return null==r?!1:"global"===e?r.isWebMercator||r.isWGS84:!r.isGeographic}Object.defineProperty(r,"__esModule",{value:!0}),r.default3DCompatibility=o});