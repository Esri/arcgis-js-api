// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/compilerUtils","../../../core/Error","../../../core/promiseUtils","../../../views/3d/terrain/terrainUtils","../../../views/3d/terrain/TilingScheme","../../../views/support/spatialReferenceSupport"],function(e,t,r,i,a,n,o,l){function p(e,t){return void 0===t&&(t={}),c(e,t).then(function(){return a.throwIfAborted(t)})}function s(e,t){void 0===t&&(t={});var r=e.basemap,n=e.view;return r.load(t).then(function(){if(a.throwIfAborted(t),0!==r.baseLayers.length){var e=r.baseLayers.getItemAt(0);return e.load(t).then(function(){a.throwIfAborted(t);var r=(e.get("supportedSpatialReferences")||[e.get("tileInfo.spatialReference")]).filter(Boolean);if(0!==r.length)return r.every(function(e){return!n.spatialReference.equals(e)})?a.reject(new i("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")):void 0})}})}function c(e,t){var a=e.basemap,n=e.view;return a.load(t).then(function(){if(0!==a.baseLayers.length){var e=a.baseLayers.concat(a.referenceLayers),i=u(e);if(i.length)throw i[0];return r.typeCast(a.baseLayers.getItemAt(0))().load(t).then(function(e){return f(e,n)})}}).catch(function(e){var t=e.name,r=void 0===t?"basemap-compatibility:unknown-error":t,a=e.message,n=void 0===a?"Unknown basemap compatibility error":a,o=e.details;throw new i(r,n,o)})}function u(e){var t=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return e.toArray().filter(function(e){return-1===t.indexOf(e.operationalLayerType)}).map(function(e){return new i("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})})}function f(e,t){var r=e.tileInfo;if(r){var a=t.get("viewingMode");if(a){if(!l.isSpatialReferenceSupported(r.spatialReference,a))throw new i("basemapgalleryitem:spatial-reference-unsupported-"+a,"Basemap spatial reference is unsupported in "+a+" mode");if("global"===a){var p=n.checkIfTileInfoSupportedForView(r,e.fullExtent,null,a);if(p&&e.compatibleTileInfo256&&!n.checkIfTileInfoSupportedForView(e.compatibleTileInfo256,e.fullExtent,null,a)&&(p=null),p){var s=r.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new i("basemapgalleryitem:tiling-scheme-unsupported-"+s+"-global","Basemap tiling scheme is unsupported in global mode",{error:p})}}else if(o.checkUnsupported(r))throw new i("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");var c=t.get("basemapTerrain.tilingScheme");if(c&&!c.compatibleWith(r)&&(!e.compatibleTileInfo256||!c.compatibleWith(e.compatibleTileInfo256)))throw new i("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default3DCompatibility=p,t.default2DCompatibility=s});