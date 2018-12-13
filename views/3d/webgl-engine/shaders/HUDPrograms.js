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

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,r,s,t,a){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){return a.glslifyDefineMap({OCCL_TEST:e.occlTest,SIGNED_DISTANCE_FIELD:e.sdf,VV_SIZE:e.vvSize,VV_COLOR:e.vvColor,VERTICAL_OFFSET:e.verticalOffset,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,CENTER_OFFSET_UNITS_SCREEN:e.centerOffsetUnitsScreen,DEBUG_DRAW_BORDER:e.debugDrawBorder,BINARY_HIGHLIGHT_OCCLUSION:e.binaryHighlightOcclusion,SLICE:e.slice})},l=function(e){return a.glslifyDefineMap({VERTICAL_OFFSET:e.verticalOffset,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,CENTER_OFFSET_UNITS_SCREEN:e.centerOffsetUnitsScreen,SLICE:e.slice})};r.colorPass={name:"hud-color",shaders:function(e){return{vertexShader:i(e)+t.resolveIncludes("materials/hud/hud.vert"),fragmentShader:i(e)+t.resolveIncludes("materials/hud/colorPass.frag")}},attributes:s.Default3D},r.highlightPass={name:"hud-highlight",shaders:function(e){return{vertexShader:i(e)+t.resolveIncludes("materials/hud/hud.vert"),fragmentShader:i(e)+t.resolveIncludes("materials/hud/highlightPass.frag")}},attributes:s.Default3D},r.occlusionPass={name:"hud-occlusion",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/hud/occlusionTest.vert"),fragmentShader:t.resolveIncludes("materials/hud/occlusionTest.frag")}},attributes:s.Default3D}});