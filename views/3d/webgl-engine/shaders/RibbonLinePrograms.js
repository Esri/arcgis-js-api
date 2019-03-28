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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,r,i,n,t){Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){return t.glslifyDefineMap({WALL:e.wall,SCREENSCALE:e.screenScale,STIPPLE:e.stipple,SLICE:e.slice})};r.colorPass={name:"ribbon-line-color",shaders:function(e){return{vertexShader:s(e)+n.resolveIncludes("materials/ribbonLine/ribbonLine.vert"),fragmentShader:s(e)+n.resolveIncludes("materials/ribbonLine/colorPass.frag")}},attributes:i.Default3D},r.highlightPass={name:"ribbon-line-highlight",shaders:function(e){return{vertexShader:s(e)+n.resolveIncludes("materials/ribbonLine/ribbonLine.vert"),fragmentShader:s(e)+n.resolveIncludes("materials/ribbonLine/highlightPass.frag")}},attributes:i.Default3D}});