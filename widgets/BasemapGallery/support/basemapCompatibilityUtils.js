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

define(["require","exports","tslib","../../../core/compilerUtils","../../../core/Error","../../../core/promiseUtils","../../../layers/support/layerUtils","../../../views/3d/terrain/terrainUtils","../../../views/3d/terrain/TilingScheme","../../../views/support/spatialReferenceSupport"],(function(e,t,i,r,a,n,o,l,s,p){"use strict";function c(){throw new a("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}function u(e,t){return i.__awaiter(this,void 0,void 0,(function(){var n,o,c,u,f,m,d,b,y,w,h;return i.__generator(this,(function(i){switch(i.label){case 0:return n=e.basemap,o=e.view,[4,n.load(t)];case 1:if(i.sent(),0===n.baseLayers.length)return[2,void 0];if(c=n.baseLayers.concat(n.referenceLayers),v=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"],(u=c.toArray().filter((function(e){return-1===v.indexOf(e.operationalLayerType)})).map((function(e){return new a("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}))).length)throw u[0];f=r.typeCast(n.baseLayers.getItemAt(0))(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,f.load(t)];case 3:return i.sent(),[3,5];case 4:throw m=i.sent(),"basemap-compatibility:unknown-error","Unknown basemap compatibility error",d=m.name,b=void 0===d?"basemap-compatibility:unknown-error":d,y=m.message,w=void 0===y?"Unknown basemap compatibility error":y,h=m.details,new a(b,w,h);case 5:return function(e,t){var i=e.tileInfo;if(!i)return;var r=t.viewingMode;if(!r)return;if(!p.isSpatialReferenceSupported(i.spatialReference,r))throw new a("basemapgalleryitem:spatial-reference-unsupported-"+r,"Basemap spatial reference is unsupported in "+r+" mode");if("global"===r){var n=l.checkIfTileInfoSupportedForView(i,e.fullExtent,null,1);if(n&&e.compatibleTileInfo256&&!l.checkIfTileInfoSupportedForView(e.compatibleTileInfo256,e.fullExtent,null,1)&&(n=null),n){var o=i.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new a("basemapgalleryitem:tiling-scheme-unsupported-"+o+"-global","Basemap tiling scheme is unsupported in global mode",{error:n})}}else if(s.checkUnsupported(i))throw new a("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");var c=t.get("basemapTerrain.tilingScheme");if(c&&!c.compatibleWith(i)&&(!e.compatibleTileInfo256||!c.compatibleWith(e.compatibleTileInfo256)))throw new a("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(f,o),[2]}var v}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default2DCompatibility=t.default3DCompatibility=void 0,t.default3DCompatibility=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(i){switch(i.label){case 0:return[4,u(e,t)];case 1:return i.sent(),n.throwIfAborted(t),[2]}}))}))},t.default2DCompatibility=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){var r,a,l,s;return i.__generator(this,(function(i){switch(i.label){case 0:return r=e.basemap,a=e.view,[4,r.load(t)];case 1:if(i.sent(),n.throwIfAborted(t),0===r.baseLayers.length)return[2,void 0];if(l=r.baseLayers.getItemAt(0),!o.isTiledLayer(l))return[2,void 0];if(r.spatialReference){if(a.spatialReference.equals(r.spatialReference))return[2,void 0];c()}return[4,l.load(t)];case 2:return i.sent(),n.throwIfAborted(t),0===(s=(l.get("supportedSpatialReferences")||[l.get("tileInfo.spatialReference")]).filter(Boolean)).length?[2,void 0]:(s.every((function(e){return!a.spatialReference.equals(e)}))&&c(),[2,void 0])}}))}))}}));