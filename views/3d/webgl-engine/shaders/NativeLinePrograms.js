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

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,r,t,a,i){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return i.glslifyDefineMap({SLICE:e.slice})};r.colorPass={name:"native-line-color",shaders:function(e){return{vertexShader:a.resolveIncludes("materials/nativeLine/nativeLine.vert"),fragmentShader:n(e)+a.resolveIncludes("materials/nativeLine/colorPass.frag")}},attributes:t.Default3D},r.highlightPass={name:"native-line-highlight",shaders:function(e){return{vertexShader:a.resolveIncludes("materials/nativeLine/nativeLine.vert"),fragmentShader:n(e)+a.resolveIncludes("materials/nativeLine/highlightPass.frag")}},attributes:t.Default3D}});