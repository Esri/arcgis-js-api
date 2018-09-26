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

define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(e,r,a,n){Object.defineProperty(r,"__esModule",{value:!0});var t=function(e){return n.glslifyDefineMap({MODE:{value:e.mode,options:{solid:"MODE_SOLID",sketch:"MODE_SKETCH",uber:"MODE_UBER"}},SILHOUETTE:e.silhouette,ANTIALIASING:e.antialiasing,SLICE:e.slice})};r.program={name:"edges",shaders:function(e){return{vertexShader:t(e)+a.resolveIncludes("edgeRenderer/edgeRenderer.vert"),fragmentShader:t(e)+a.resolveIncludes("edgeRenderer/edgeRenderer.frag")}},attributes:{aPosition0:0,aPosition1:1,aComponentIndex:2,aPackedAttributes:3,aVariantOffset:4,aVariantStroke:5,aVariantExtension:6,aNormal:7,aNormalA:7,aNormalB:8,aSideness:9}}});