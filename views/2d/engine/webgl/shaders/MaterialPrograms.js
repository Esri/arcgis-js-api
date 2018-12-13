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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./sources/resolver","../../../../webgl/programUtils"],function(e,a,t,r){Object.defineProperty(a,"__esModule",{value:!0});var l=function(e){return r.glslifyDefineMap({ID:e.id,HIGHLIGHT:e.highlight,SDF:e.isSDF,VV_SIZE_MIN_MAX_VALUE:e.vvSizeMinMaxValue,VV_SIZE_SCALE_STOPS:e.vvSizeScaleStops,VV_SIZE_FIELD_STOPS:e.vvSizeFieldStops,VV_SIZE_UNIT_VALUE:e.vvSizeUnitValue,VV_COLOR:e.vvColor,VV_ROTATION:e.vvRotation,VV_OPACITY:e.vvOpacity,VERTEX_VISIBILITY:e.visibility,PATTERN:e.pattern})};a.fill={name:"fill",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/fill/fill.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/fill/fill.frag")}},attributes:{a_pos:0,a_id:1,a_color:2,a_tlbr:3,a_aux1:4,a_aux2:5,a_vv:6,a_visible:7}},a.icon={name:"icon",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/icon/icon.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/icon/icon.frag")}},attributes:{a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5,a_vv:6,a_visible:8}},a.label={name:"label",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/label/label.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/label/label.frag")}},attributes:{a_pos:0,a_color:1,a_vertexOffset:2,a_texAndSize:3,a_refSymbolAndPlacementOffset:4,a_vvSize:5,a_visible:6,a_visibilityRange:7}},a.line={name:"line",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/line/line.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/line/line.frag")}},attributes:{a_pos:0,a_id:1,a_color:2,a_offsetAndNormal:3,a_accumulatedDistanceAndHalfWidth:4,a_tlbr:5,a_segmentDirection:6,a_vv:7,a_visible:8}},a.text={name:"text",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/text/text.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/text/text.frag")}},attributes:{a_pos:0,a_id:1,a_color:2,a_vertexOffset:3,a_texFontSize:4,a_visible:5,a_vv:6}}});