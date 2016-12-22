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

define(["require","exports","./TilingScheme","../support/aaBoundingRect"],function(E,T,L,_){!function(E){E[E.MAP=0]="MAP",E[E.ELEVATION=1]="ELEVATION",E[E.LAYER_CLASS_COUNT=2]="LAYER_CLASS_COUNT"}(T.LayerClass||(T.LayerClass={}));T.LayerClass;!function(E){E[E.NONE=0]="NONE",E[E.SPLIT=1]="SPLIT",E[E.VSPLITMERGE=2]="VSPLITMERGE",E[E.MERGE=4]="MERGE",E[E.DECODE_LERC=8]="DECODE_LERC",E[E.UPDATE_GEOMETRY=16]="UPDATE_GEOMETRY",E[E.UPDATE_TEXTURE=32]="UPDATE_TEXTURE"}(T.TileUpdateTypes||(T.TileUpdateTypes={}));T.TileUpdateTypes;T.TILE_LOADING_DEBUGLOG=!1,T.MAX_ROOT_TILES=64,T.MAX_TILE_TESSELATION=512,T.ELEVATION_NODATA_VALUE=3.40282347e37,T.ELEVATION_DESIRED_RESOLUTION_LEVEL=4,T.TILEMAP_SIZE_EXP=5,T.TILEMAP_SIZE=1<<T.TILEMAP_SIZE_EXP,T.WEBMERCATOR_WORLD_EXTENT=_.create([0,0,0,0]),L.WebMercatorAuxiliarySphere.getExtent(0,0,0,T.WEBMERCATOR_WORLD_EXTENT),T.GEOGRAPHIC_WORLD_EXTENT=_.create([-180,-90,180,90])});