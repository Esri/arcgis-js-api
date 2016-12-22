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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./TilingScheme","../../../core/Error"],function(e,i,t,n){function l(e,i){}function r(e,i,l){var r=e.lods.length-1;if(e.spatialReference.isWebMercator){if(!t.makeWebMercatorAuxiliarySphere(r).compatibleWith(e))return new n("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!e.spatialReference.isWGS84)return new n("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!t.makeWGS84WithTileSize(e.size[1],r).compatibleWith(e))return new n("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme")}return l&&!e.spatialReference.equals(l)?new n("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene"):void 0}i.autoUpdateSkirtsVisibility=l,i.checkIfTileInfoSupportedForViewSR=r});