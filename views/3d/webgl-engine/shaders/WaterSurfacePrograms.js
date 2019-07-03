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

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,r,a,t,s){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){return s.glslifyDefineMap({SLICE:e.slice,RECEIVE_SHADOWS:e.receiveShadows})};r.color={name:"water-ocean",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/water/colorPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/water/colorPass.frag")}},attributes:a.Default3D},r.drapedColor={name:"water-drapedColor",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/water/drapedColorPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/water/drapedColorPass.frag")}},attributes:a.Default3D},r.drapedNormal={name:"water-drapedNormal",shaders:function(e){return{vertexShader:l(e)+t.resolveIncludes("materials/water/normalPass.vert"),fragmentShader:l(e)+t.resolveIncludes("materials/water/normalPass.frag")}},attributes:a.Default3D}});