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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../support/projectionUtils","./TilingScheme"],function(e,i,t,n,l){function r(){return!0}function c(){return 0}function a(e,i){var r=e.lods.length-1;if(e.spatialReference.isWebMercator){if(!l.makeWebMercatorAuxiliarySphere(r).compatibleWith(e))return new t("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!n.canProjectToWGS84ComparableLonLat(e.spatialReference))return new t("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!l.makeGCSWithTileSize(e.spatialReference,e.size[0],r).compatibleWith(e))return e.spatialReference.isWGS84?new t("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new t("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}if(i&&!e.spatialReference.equals(i))return new t("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}Object.defineProperty(i,"__esModule",{value:!0}),i.isInsideExtent=r,i.tiltToExtentEdge=c,i.checkIfTileInfoSupportedForViewSR=a});