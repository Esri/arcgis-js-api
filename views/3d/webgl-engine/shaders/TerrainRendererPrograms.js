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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,r,a,t,s){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return s.glslifyDefineMap({SPHERICAL:e.spherical,OVERLAY:e.overlay,ATMOSPHERE:e.atmosphere,WIREFRAME_TEXTURE:e.wireframeTexture,TILE_BORDERS:e.tileBorders,RECEIVE_SHADOWS:e.receiveShadows,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,ALPHA_ZERO:e.alphaZero,BIAS_SHADOWMAP:e.shadowMap})};r.colorPass={name:"terrain-color",shaders:function(e){return{vertexShader:n(e)+t.resolveIncludes("terrainRenderer/colorPass.vert"),fragmentShader:n(e)+t.resolveIncludes("terrainRenderer/colorPass.frag")}},attributes:a.Default3D},r.normalPass={name:"terrain-normal",shaders:function(e){return{vertexShader:n(e)+t.resolveIncludes("terrainRenderer/normalPass.vert"),fragmentShader:n(e)+t.resolveIncludes("terrainRenderer/normalPass.frag")}},attributes:a.Default3D},r.depthPass={name:"terrain-depth",shaders:function(e){return{vertexShader:n(e)+t.resolveIncludes("terrainRenderer/depthPass.vert"),fragmentShader:n(e)+t.resolveIncludes("terrainRenderer/depthPass.frag")}},attributes:a.Default3D},r.highlightPass={name:"terrain-highlight",shaders:function(e){return{vertexShader:n(e)+t.resolveIncludes("terrainRenderer/highlightPass.vert"),fragmentShader:n(e)+t.resolveIncludes("terrainRenderer/highlightPass.frag")}},attributes:a.Default3D}});