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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","./TilingScheme"],function(e,i,t,n){function r(e,i,t){return void 0===t&&(t=0),!0}function l(e,i){return 0}function c(e,i,r){var l=e.lods.length-1;if(e.spatialReference.isWebMercator){if(!n.makeWebMercatorAuxiliarySphere(l).compatibleWith(e))return new t("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!e.spatialReference.isWGS84)return new t("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!n.makeWGS84WithTileSize(e.size[1],l).compatibleWith(e))return new t("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme")}if(r&&!e.spatialReference.equals(r))return new t("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}Object.defineProperty(i,"__esModule",{value:!0}),i.isInsideExtent=r,i.tiltToExtentEdge=l,i.checkIfTileInfoSupportedForViewSR=c});