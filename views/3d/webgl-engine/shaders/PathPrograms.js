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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(e,r,t,a){Object.defineProperty(r,"__esModule",{value:!0}),r.VertexAttrConstants={POSITION:"position",NORMAL:"normal",NORMALCOMPRESSED:"normalCompressed",UV0:"uv0",SYMBOLCOLOR:"symbolColor",COMPONENTINDEX:"componentIndex",FEATUREVALUE:"featureValue",PATHGEOMETRYINFO:"pathGeometryInfo"},r.vertexAttributeLocations={position:0,normal:1,normalCompressed:1,uv0:2,symbolColor:5,componentIndex:5,featureValue:6,pathGeometryInfo:8};var s=function(e){return a.glslifyDefineMap({SYMBOLVERTEXCOLORS:e.symbolColors,FLIPV:e.flipV,DOUBLESIDED:e.doubleSided,WINDINGORDERDOUBLESIDED:e.windowOrderDoubleSided,RECEIVE_SHADOWS:e.receiveShadows,RECEIVE_SSAO:e.receiveSSAO,VV_SIZE:e.vvSize,VV_COLOR:e.vvColor,VV_OPACITY:e.vvOpacity,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,SLICE:e.slice,COMPRESSED_NORMALS:e.compressedNormals,COMPONENTCOLORS:e.componentColor,TRANSPARENCY_DISCARD:e.transparencyDiscard,BIAS_SHADOWMAP:e.shadowMap,WIREFRAME:e.wireframe})};r.colorPass={name:"path-color",shaders:function(e){return{vertexShader:s(e)+t.resolveIncludes("materials/pathMaterial/colorPass.vert"),fragmentShader:s(e)+t.resolveIncludes("materials/pathMaterial/colorPass.frag")}},attributes:r.vertexAttributeLocations},r.depthPass={name:"path-depth",shaders:function(e){return{vertexShader:s(e)+t.resolveIncludes("materials/pathMaterial/depthPass.vert"),fragmentShader:s(e)+t.resolveIncludes("materials/pathMaterial/depthPass.frag")}},attributes:r.vertexAttributeLocations},r.normalPass={name:"path-normal",shaders:function(e){return{vertexShader:s(e)+t.resolveIncludes("materials/pathMaterial/normalPass.vert"),fragmentShader:s(e)+t.resolveIncludes("materials/pathMaterial/normalPass.frag")}},attributes:r.vertexAttributeLocations},r.highlightPass={name:"path-highlight",shaders:function(e){return{vertexShader:s(e)+t.resolveIncludes("materials/pathMaterial/highlightPass.vert"),fragmentShader:s(e)+t.resolveIncludes("materials/pathMaterial/highlightPass.frag")}},attributes:r.vertexAttributeLocations}});