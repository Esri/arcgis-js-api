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

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,a,r,t,s){Object.defineProperty(a,"__esModule",{value:!0});var l=function(e){return s.glslifyDefineMap({VIEWING_MODE_GLOBAL:"global"===e.viewingMode,VIEWING_MODE_LOCAL:"local"===e.viewingMode,TEXTURING:"none"!==e.textureMode,TEXTURE_ATLAS:"AtlasTextured"===e.textureMode,VERTEXCOLORS:e.vertexColors,SYMBOLVERTEXCOLORS:e.symbolColors,FLIPV:e.flipV,DOUBLESIDED:e.doubleSided,WINDINGORDERDOUBLESIDED:e.windowOrderDoubleSided,RECEIVE_SHADOWS:e.receiveShadows,RECEIVE_SSAO:e.receiveSSAO,VV_SIZE:e.vvSize,VV_COLOR:e.vvColor,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,SLICE:e.slice,GROUND_NORMAL_SHADING:e.groundNormalShading,COMPRESSED_NORMALS:e.compressedNormals,COMPONENTCOLORS:e.componentColor,TRANSPARENCY_DISCARD:e.transparencyDiscard,ALPHA_COVERAGE_CORRECTION:e.alphaCoverageCorrection,BIAS_SHADOWMAP:e.shadowMap,WIREFRAME:e.wireframe})};a.colorPass={name:"path-color",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/pathMaterial/colorPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/pathMaterial/colorPass.frag")}},attributes:r.Default3D},a.depthPass={name:"path-depth",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/pathMaterial/depthPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/pathMaterial/depthPass.frag")}},attributes:r.Default3D},a.normalPass={name:"path-normal",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/pathMaterial/normalPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/pathMaterial/normalPass.frag")}},attributes:r.Default3D},a.highlightPass={name:"path-highlight",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/pathMaterial/highlightPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/pathMaterial/highlightPass.frag")}},attributes:r.Default3D}});