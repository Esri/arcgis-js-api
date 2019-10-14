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

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,r,a,t,s){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){var r=!!(e.roughnessMetallnessTexture||e.emissionTexture||e.occlusionTexture||e.normalTexture||e.colorTexture);return s.glslifyDefineMap({VERTEXCOLORS:e.vertexColors,SYMBOLVERTEXCOLORS:e.symbolColors,FLIPV:e.flipV,DOUBLESIDED:e.doubleSided,WINDINGORDERDOUBLESIDED:e.windowOrderDoubleSided,INSTANCED:e.instanced,INSTANCED_DOUBLE_PRECISION:e.instancedDoublePrecision,INSTANCEDCOLOR:e.instancedColor,RECEIVE_SHADOWS:e.receiveShadows,RECEIVE_SSAO:e.receiveSSAO,VV_SIZE:e.vvSize,VV_COLOR:e.vvColor,VERTICAL_OFFSET:e.verticalOffset,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,SLICE:e.slice,SLICE_HIGHLIGHT_DISABLED:e.sliceHighlightDisabled,GROUND_NORMAL_SHADING:e.groundNormalShading,NORMALS:{value:e.normals,options:{default:"NORMALS_DEFAULT",compressed:"NORMALS_COMPRESSED",screenDerivative:"NORMALS_SCREEN_DERIVATIVE"}},COMPONENTCOLORS:e.componentColor,TEXTURE_ALPHA_MODE_MASK:"mask"===e.textureAlphaMode,TEXTURE_ALPHA_MODE_MASK_BLEND:"maskBlend"===e.textureAlphaMode,TEXTURE_ALPHA_MODE_OPAQUE:"opaque"===e.textureAlphaMode,BIAS_SHADOWMAP:e.shadowMap,VERTEX_TANGENTS:"vertex"===e.tangents,TEXTURE_COLOR:e.colorTexture,TEXTURE_NORMALS:!!e.normalTexture,TEXTURE_COORDINATES:r,TEXTURE_ATLAS:r&&e.textureAtlas,TREE_RENDERING:e.treeRendering,REQUIRES_FLOAT_OPERATIONS_FIX:e.requiresFloatOperationsFix,TEXTURE_ALPHA_PREMULTIPLIED:!!e.textureAlphaPremultiplied,PBR_TEX_METALLNESS_ROUGHNESS:!!e.roughnessMetallnessTexture,PBR_TEX_EMISSION:!!e.emissionTexture,PBR_TEX_OCCLUSION:!!e.occlusionTexture,USE_PBR:e.usePBR,VERTEX_TRANSPARENCY_DISCARD_ENABLED:!!e.vertexTransparencyDiscardEnabled,OFFSET_BACKFACES:!!e.offsetBackfaces})};r.colorPass={name:"default-color",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/defaultMaterial/colorPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/defaultMaterial/colorPass.frag")}},attributes:a.Default3D},r.depthPass={name:"default-depth",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/defaultMaterial/depthPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/defaultMaterial/depthPass.frag")}},attributes:a.Default3D},r.normalPass={name:"default-normal",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/defaultMaterial/normalPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/defaultMaterial/normalPass.frag")}},attributes:a.Default3D},r.highlightPass={name:"default-highlight",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/defaultMaterial/highlightPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/defaultMaterial/highlightPass.frag")}},attributes:a.Default3D}});