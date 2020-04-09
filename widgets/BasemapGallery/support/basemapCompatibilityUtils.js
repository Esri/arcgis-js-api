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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/compilerUtils","../../../core/Error","../../../core/promiseUtils","../../../layers/support/layerUtils","../../../views/3d/terrain/terrainUtils","../../../views/3d/terrain/TilingScheme","../../../views/support/spatialReferenceSupport"],(function(e,t,r,i,a,n,o,l,s,p,c){function u(){throw new n("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}function f(e,t){return i(this,void 0,void 0,(function(){var i,o,l,u,f,m,d,b,y,h,w;return r(this,(function(r){switch(r.label){case 0:return i=e.basemap,o=e.view,[4,i.load(t)];case 1:if(r.sent(),0===i.baseLayers.length)return[2,void 0];if(l=i.baseLayers.concat(i.referenceLayers),v=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"],(u=l.toArray().filter((function(e){return-1===v.indexOf(e.operationalLayerType)})).map((function(e){return new n("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}))).length)throw u[0];f=a.typeCast(i.baseLayers.getItemAt(0))(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,f.load(t)];case 3:return r.sent(),[3,5];case 4:throw m=r.sent(),"basemap-compatibility:unknown-error","Unknown basemap compatibility error",d=m.name,b=void 0===d?"basemap-compatibility:unknown-error":d,y=m.message,h=void 0===y?"Unknown basemap compatibility error":y,w=m.details,new n(b,h,w);case 5:return function(e,t){var r=e.tileInfo;if(!r)return;var i=t.get("viewingMode");if(!i)return;if(!c.isSpatialReferenceSupported(r.spatialReference,i))throw new n("basemapgalleryitem:spatial-reference-unsupported-"+i,"Basemap spatial reference is unsupported in "+i+" mode");if("global"===i){var a=s.checkIfTileInfoSupportedForView(r,e.fullExtent,null,i);if(a&&e.compatibleTileInfo256&&!s.checkIfTileInfoSupportedForView(e.compatibleTileInfo256,e.fullExtent,null,i)&&(a=null),a){var o=r.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new n("basemapgalleryitem:tiling-scheme-unsupported-"+o+"-global","Basemap tiling scheme is unsupported in global mode",{error:a})}}else if(p.checkUnsupported(r))throw new n("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");var l=t.get("basemapTerrain.tilingScheme");if(l&&!l.compatibleWith(r)&&(!e.compatibleTileInfo256||!l.compatibleWith(e.compatibleTileInfo256)))throw new n("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(f,o),[2]}var v}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default3DCompatibility=function(e,t){return void 0===t&&(t={}),i(this,void 0,void 0,(function(){return r(this,(function(r){switch(r.label){case 0:return[4,f(e,t)];case 1:return r.sent(),o.throwIfAborted(t),[2]}}))}))},t.default2DCompatibility=function(e,t){return void 0===t&&(t={}),i(this,void 0,void 0,(function(){var i,a,n,s;return r(this,(function(r){switch(r.label){case 0:return i=e.basemap,a=e.view,[4,i.load(t)];case 1:if(r.sent(),o.throwIfAborted(t),0===i.baseLayers.length)return[2,void 0];if(n=i.baseLayers.getItemAt(0),!l.isTiledLayer(n))return[2,void 0];if(i.spatialReference){if(a.spatialReference.equals(i.spatialReference))return[2,void 0];u()}return[4,n.load(t)];case 2:return r.sent(),o.throwIfAborted(t),0===(s=(n.get("supportedSpatialReferences")||[n.get("tileInfo.spatialReference")]).filter(Boolean)).length?[2,void 0]:(s.every((function(e){return!a.spatialReference.equals(e)}))&&u(),[2,void 0])}}))}))}}));