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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["./TilingScheme","../support/aaBoundingRect"],function(E,T){var _={LayerClass:{MAP:0,ELEVATION:1,LAYER_CLASS_COUNT:2},TileUpdateTypes:{NONE:0,SPLIT:1,VSPLITMERGE:2,MERGE:4,DECODE_LERC:8,UPDATE_GEOMETRY:16,UPDATE_TEXTURE:32},TILE_LOADING_DEBUGLOG:!1,MAX_ROOT_TILES:64,MAX_TILE_TESSELATION:512,ELEVATION_NODATA_VALUE:3.40282347e37,ELEVATION_DESIRED_RESOLUTION_LEVEL:4,TILEMAP_SIZE_EXP:5};return _.TILEMAP_SIZE=1<<_.TILEMAP_SIZE_EXP,_.WEBMERCATOR_WORLD_EXTENT=T.create([0,0,0,0]),E.WebMercatorAuxiliarySphere.getExtent(0,0,0,_.WEBMERCATOR_WORLD_EXTENT),_.GEOGRAPHIC_WORLD_EXTENT=T.create([-180,-90,180,90]),_});