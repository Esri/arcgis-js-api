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

define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0}),r.VertexAttrConstants={POSITION:"position",SUBDIVISIONFACTOR:"subdivisionFactor",UV0:"uv0",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",SUBDIVISIONS:"subdivisions",COLOR:"color",COLORFEATUREATTRIBUTE:"colorFeatureAttribute",SIZE:"size",SIZEFEATUREATTRIBUTE:"sizeFeatureAttribute",OPACITYFEATUREATTRIBUTE:"opacityFeatureAttribute"},r.vertexAttributeLocations={position:0,subdivisionFactor:1,uv0:2,auxpos1:3,auxpos2:4,size:6,sizeFeatureAttribute:6,color:5,colorFeatureAttribute:5,opacityFeatureAttribute:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};var o=function(e){return i.glslifyDefineMap({STIPPLE:e.stipple,SLICE:e.slice,JOIN_ROUND:"round"===e.join,CAP_ROUND:"round"===e.cap,VV_SIZE:e.vvSize,VV_COLOR:e.vvColor,VV_OPACITY:e.vvOpacity})};r.colorPass={name:"ribbon-line-color",shaders:function(e){return{vertexShader:o(e)+t.resolveIncludes("materials/ribbonLine/ribbonLine.vert"),fragmentShader:o(e)+t.resolveIncludes("materials/ribbonLine/colorPass.frag")}},attributes:r.vertexAttributeLocations},r.highlightPass={name:"ribbon-line-highlight",shaders:function(e){return{vertexShader:o(e)+t.resolveIncludes("materials/ribbonLine/ribbonLine.vert"),fragmentShader:o(e)+t.resolveIncludes("materials/ribbonLine/highlightPass.frag")}},attributes:r.vertexAttributeLocations}});