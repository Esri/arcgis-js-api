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

define(["require","exports"],function(_,T){Object.defineProperty(T,"__esModule",{value:!0}),T.WEBGL_MAX_STOPS=8,T.WEBGL_MAX_INNER_STOPS=T.WEBGL_MAX_STOPS-2,T.NAN_MAGIC_NUMBER=1e-30,T.EXTRUDE_SCALE=64,T.PICTURE_FILL_COLOR=4294967295,T.TILE_SIZE=512,T.RASTER_TILE_SIZE=256,T.ANGLE_FACTOR_256=256/360,T.DEBUG_LABELS=!1,T.COLLISION_BUCKET_SIZE=128,T.DOT_DENSITY_MAX_FIELDS=8,T.COLLISION_MAX_ZOOM_DELTA=3,T.COLLISION_EARLY_REJECT_BUCKET_SIZE=16,T.COLLISION_BOX_PADDING=16,T.COLLISION_TILE_BOX_SIZE=T.TILE_SIZE/T.COLLISION_BUCKET_SIZE,T.COLLISION_PLACEMENT_PADDING=8,T.HEURISTIC_GLYPHS_PER_LINE=50,T.HEURISTIC_GLYPHS_PER_FEATURE=10,T.GLYPH_SIZE=24,T.TEXT_LINE_HEIGHT=1.2*T.GLYPH_SIZE,T.TEXT_MAX_WIDTH=10*T.GLYPH_SIZE,T.TEXT_SPACING=0,T.AVERAGE_GLYPH_MOSAIC_ITEM={metrics:{width:15,height:17,left:0,top:-7,advance:14}},T.ATTRIBUTE_STORE_TEXTURE_SIZE=1024,T.TEXTURE_BINDING_SPRITE_ATLAS=0,T.TEXTURE_BINDING_GLYPH_ATLAS=0,T.TEXTURE_BINDING_BITMAP=0,T.TEXTURE_BINDING_ATTRIBUTE_DATA_0=1,T.TEXTURE_BINDING_ATTRIBUTE_DATA_1=2,T.TEXTURE_BINDING_ATTRIBUTE_DATA_2=3,T.TEXTURE_BINDING_ATTRIBUTE_DATA_3=4,T.TEXTURE_BINDING_HIGHLIGHT_0=5,T.TEXTURE_BINDING_HIGHLIGHT_1=6,T.TEXTURE_BINDING_RENDERER_0=5,T.TEXTURE_BINDING_RENDERER_1=6,T.ATTRIBUTE_DATA_FILTER_FLAGS=0,T.ATTRIBUTE_DATA_ANIMATION=1,T.ATTRIBUTE_DATA_VV=2,T.ATTRIBUTE_DATA_DD0=3,T.ATTRIBUTE_DATA_DD1=3,T.MAX_FILTERS=2,T.HIGHLIGHT_FLAG=1,T.FILTER_FLAG_0=2,T.EFFECT_FLAG_0=4,T.THIN_LINE_THRESHOLD=2.5,T.HITTEST_SEARCH_SIZE=24,T.MAX_ANIMATION_TIME_MS=2e3});