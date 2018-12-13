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

define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(e,r,t,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){return n.glslifyDefineMap({ID:e.id,PATTERN:e.pattern})};r.background={name:"background",shaders:function(e){return{vertexShader:a(e)+t.resolveIncludes("background/background.vert"),fragmentShader:a(e)+t.resolveIncludes("background/background.frag")}},attributes:{a_pos:0}};var l=function(e){return n.glslifyDefineMap({ID:e.id})};r.circle={name:"circle",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("circle/circle.vert"),fragmentShader:l(e)+t.resolveIncludes("circle/circle.frag")}},attributes:{a_pos:0,a_color:1,a_stroke_color:2,a_data:3}};var o=function(e){return n.glslifyDefineMap({ID:e.id,DD:e.dd,PATTERN:e.pattern})};r.fill={name:"fill",shaders:function(e){return{vertexShader:o(e)+t.resolveIncludes("fill/fill.vert"),fragmentShader:o(e)+t.resolveIncludes("fill/fill.frag")}},attributes:{a_pos:0,a_color:1}};var i=function(e){return n.glslifyDefineMap({ID:e.id,DD:e.dd})};r.outline={name:"outline",shaders:function(e){return{vertexShader:i(e)+t.resolveIncludes("outline/outline.vert"),fragmentShader:i(e)+t.resolveIncludes("outline/outline.frag")}},attributes:{a_pos:0,a_offset:1,a_xnormal:2,a_color:3}};var s=function(e){return n.glslifyDefineMap({ID:e.id,DD:e.dd,SDF:e.sdf})};r.icon={name:"icon",shaders:function(e){return{vertexShader:s(e)+t.resolveIncludes("icon/icon.vert"),fragmentShader:s(e)+t.resolveIncludes("icon/icon.frag")}},attributes:{a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3,a_color:4,a_size:5}};var d=function(e){return n.glslifyDefineMap({ID:e.id,DD:e.dd,PATTERN:e.pattern})};r.line={name:"line",shaders:function(e){return{vertexShader:d(e)+t.resolveIncludes("line/line.vert"),fragmentShader:d(e)+t.resolveIncludes("line/line.frag")}},attributes:{a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2,a_color:3,a_width:4}};var u=function(e){return n.glslifyDefineMap({ID:e.id,DD:e.dd})};r.text={name:"text",shaders:function(e){return{vertexShader:u(e)+t.resolveIncludes("text/text.vert"),fragmentShader:u(e)+t.resolveIncludes("text/text.frag")}},attributes:{a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3,a_color:4,a_size:5}},r.tileInfo={name:"tileInfo",shaders:{vertexShader:t.resolveIncludes("tileInfo/tileInfo.vert"),fragmentShader:t.resolveIncludes("tileInfo/tileInfo.frag")},attributes:{a_pos:0}}});